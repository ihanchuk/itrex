import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import Root from './components/root-component';
import Login from './components/login/login-component';
import Emails from './components/emails/emails-component';
import Routes from './routing/index';

const app = angular.module('app', [uiRouter, ngAnimate]);
app.component('layout', new Root);
app.component('login', new Login);
app.component('emails', new Emails);

app.constant('AUTH_EVENTS', {
    loginSuccess: 'auth-login-success',
    loginFailed: 'auth-login-failed',
    logoutSuccess: 'auth-logout-success',
    sessionTimeout: 'auth-session-timeout',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
});
app.constant('USER_ROLES', {
    all: '*',
    admin: 'admin',
    editor: 'editor',
    guest: 'guest'
});

app.factory('Session', function(){
    let session = {};
    session.create = function (sessionId, userId, userRole) {
        this.id = sessionId;
        this.userId = userId;
        this.userRole = userRole;
    };
    session.destroy = function () {
        this.id = null;
        this.userId = null;
        this.userRole = null;
    };

    return session;
});

app.factory('AuthService', function ($http, Session) {
    var authService = {};

    authService.login = function (credentials) {
        return $http
            .post('/login', credentials)
            .then(function (res) {
                Session.create(res.data.id, res.data.user.id,
                    res.data.user.role);
                return res.data.user;
            });
    };

    authService.isAuthenticated = function () {
        return !!Session.userId;
    };

    authService.isAuthorized = function (authorizedRoles) {
        if (!angular.isArray(authorizedRoles)) {
            authorizedRoles = [authorizedRoles];
        }
        return (authService.isAuthenticated() &&
        authorizedRoles.indexOf(Session.userRole) !== -1);
    };

    return authService;
});

app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider' ,
    ($stateProvider, $urlRouterProvider, $httpProvider)=>{
        $httpProvider.defaults.withCredentials = true;
        Routes.forEach( (route) =>$stateProvider.state(route));
        $urlRouterProvider.otherwise('/');
}]);

app.run(['$http', ($http)=>{}]);
export { app };