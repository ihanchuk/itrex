import Routes from '../../routing';

const configLoader = ['$stateProvider', '$urlRouterProvider', '$httpProvider' , '$qProvider',
    ($stateProvider, $urlRouterProvider, $httpProvider, $qProvider)=>{
        $httpProvider.defaults.withCredentials = true;
        $qProvider.errorOnUnhandledRejections(false);

        Routes.forEach( (route) =>$stateProvider.state(route));
        $urlRouterProvider.otherwise('/');

    }];

export default configLoader;