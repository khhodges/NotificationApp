(function (global) {
    'use strict';
    var app = global.app = global.app || {};
    app.config = {
        everlive: {
            appId: '3t5oa8il0d0y02eq', // Put your Backend Services App ID here
            scheme: 'https'
        },
        views: {
            init: '#initView',
            noAppId: 'views/noAppIdView.html',
            signUp: 'views/signupView.html',
            users: 'views/usersView.html',
            main: 'views/mainView.html'
        }
    };
    app.androidProjectNumber = "508581667442";
    app.constants = {
        NO_APP_ID_MESSAGE: '<h3>Telerik Platform <strong>App ID</strong> is not set.</h3><p><span>App ID</span> ' +
        'links the sample mobile app to a Telerik Platform app.</p><p>To set the <span>App ID</span> ' +
        'open the <span>/scripts/config.js</span> file and replace <strong>$TELERIK_APP_ID$</strong> with the ' +
        '<span>App ID</span> of your Telerik app.</p>',
        EMULATOR_MODE: false
    };
}(window));
