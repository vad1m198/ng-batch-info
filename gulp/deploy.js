module.exports = function(gulp, config) {
	'use strict';

	const archiver = require('gulp-archiver'),
		  del = require('del'),
          rename = require('gulp-rename'),
          pxml = require('pxml').PackageXML,
          merge = require('merge-stream'),
          forceDeploy = require('gulp-jsforce-deploy'),
          file = require('gulp-file')


	let resourceMetaXml = `<?xml version="1.0" encoding="UTF-8"?>
        <StaticResource xmlns="http://soap.sforce.com/2006/04/metadata">
            <cacheControl>Public</cacheControl>
            <contentType>application/octet-stream</contentType>
        </StaticResource>`;

    gulp.task('clean-tmp', () => {
		return del(['.tmp']);
	});

    gulp.task('clean-resources', () => {
		return del(['.tmp/static_resources']);
	});

    gulp.task('tempgen:app', () => {
		return gulp.src(['dist/*.js', 'dist/*.css'])
			.pipe(gulp.dest(`.tmp/static_resources/${config.resources.app_resource_name}`));
	});

    gulp.task('package:app', () => {
		return gulp.src(`.tmp/static_resources/${config.resources.app_resource_name}/**/*`, {
			base: `.tmp/static_resources/${config.resources.app_resource_name}`
		})
			.pipe(archiver(`${config.resources.app_resource_name}.zip`))
			.pipe(rename({
				extname: '.resource'
			}))
			.pipe(gulp.dest('.tmp/staticresources'));
	});

    gulp.task('tempgen:pxml', () => {
		return file('package.xml', pxml.from_dir('.tmp').generate().to_string(), { src: true })
			.pipe(gulp.dest('.tmp'));
	});

    gulp.task('tempgen:meta-xml', () => {
		let node_modules = file(`${config.resources.app_resource_name}.resource-meta.xml`,
				resourceMetaXml, { src: true })
			.pipe(gulp.dest('.tmp/staticresources'));

		let app = file(`${config.resources.app_resource_name}.resource-meta.xml`,
				resourceMetaXml, { src: true })
			.pipe(gulp.dest('.tmp/staticresources'));

		return merge(node_modules, app);
	});

	gulp.task('tempgen', gulp.series(
		'clean-tmp',
		'tempgen:app',
        'package:app',
		'clean-resources',
		'tempgen:pxml',
		'tempgen:meta-xml'
	));

    gulp.task('deploy:jsforce', () => {
		return gulp.src('.tmp/**/*', { base: '.' })
		.pipe(archiver('pkg.zip'))
		.pipe(forceDeploy({
			username: config.deploy.username,
			password: config.deploy.password,
			loginUrl: config.deploy.login_url,
			version: config.deploy.api_version,
			checkOnly: process.env.CHECK_ONLY,
			pollTimeout: config.deploy.timeout,
			pollInterval: config.deploy.poll_interval
        }));
	});

	gulp.task('deploy', gulp.series('tempgen', 'deploy:jsforce'));

}