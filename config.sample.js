module.exports = {
    deploy: {
        username:       'user.name@yourcompany.com',
        password:       'YourPasswordAndPossiblySecurityToken',
        login_url:      'https://login.salesforce.com',
        api_version:    36.0,
        timeout:        120000,
        poll_interval:  5000,
    },

    resources: {
        app_resource_name: 'AngularApp'
    },

    options: {
        
    }
}