'use strict';

const gulp = require('gulp')

let config = require('./config');

// All tasks are located in other files within the gulp folder
require('./gulp/deploy')(gulp,config);

