import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';

import Root from './components/root-component';
import Login from './components/login/login-component';
import Emails from './components/emails/emails-component';

import roles from './bootstrap/constants/roles';
import authEvents from './bootstrap/events/auth-events';

import session from './bootstrap/services/session-service';
import auth from './bootstrap/services/auth-service';

import configLoader from './bootstrap/loaders/config-loader';
import runLoader from './bootstrap/loaders/run-loader';

const app = angular.module('app', [uiRouter, ngAnimate]);

app.component('layout', new Root);
app.component('login', new Login);
app.component('emails', new Emails);

app.constant('AUTH_EVENTS', authEvents);
app.constant('USER_ROLES', roles);

app.factory('Session', session);
app.factory('AuthService', auth);

app.config(configLoader);
app.run(runLoader);

export { app };