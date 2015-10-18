var Hapi = require('hapi');
var server = new Hapi.Server();
var HapiRouter  = require('hapi-router');
var routePath = 'app/routes/*.js';

server.connection({
    host: '0.0.0.0',
    port: 3004,
    routes: {
        cors: true
    }
});

server.register({
    register: HapiRouter,
    options: {
        routes: routePath
    }
}, function (err) {
    if (err) {
        throw err;
    }
});

server.start(function() {
    console.log('Motivational is running');
});

