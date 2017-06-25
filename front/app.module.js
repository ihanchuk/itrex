import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Layout from './components/layout-component';
import Login from './components/login/login-component';
import Emails from './components/emails/emails-component';
import Routes from './routing/index';

const app = angular.module('app', [uiRouter]);
app.component('layout', new Layout);
app.component('login', new Login);
app.component('emails', new Emails);

app.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider)=>{
    Routes.forEach( (route) =>$stateProvider.state(route));
    $urlRouterProvider.otherwise('/');
}]);

app.run(['$http', ($http)=>{}]);

export { app };

