import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';

import roles from './bootstrap/constants/roles';
import authEvents from './bootstrap/events/auth-events';
import endpoints from './bootstrap/constants/endpoints';

import session from './bootstrap/services/session-service';
import auth from './bootstrap/services/auth-service';
import socket from './bootstrap/services/scocket-service';

import configLoader from './bootstrap/loaders/config-loader';
import runLoader from './bootstrap/loaders/run-loader';

import Root from './components/root-component';
import Login from './components/login/login-component';
import Emails from './components/emails/emails-component';
import NewEmail from  './components/new-email/new-email-component';

import singleEmail from './components/emails/single-email/single-email-directive';

const app = angular.module('app', [uiRouter, ngAnimate]);

app.component('layout', new Root);
app.component('login', new Login);
app.component('emails', new Emails);
app.component('newEmail', new NewEmail);

app.constant('AUTH_EVENTS', authEvents);
app.constant('USER_ROLES', roles);
app.constant('ENDPOINTS', endpoints);

app.factory('Session', session);
app.factory('AuthService', auth);
app.service('SMS', socket);

app.directive('singleEmail', singleEmail);

app.config(configLoader);
app.run(runLoader);

export { app };


