class RootController {
    constructor( $scope, $http, USER_ROLES, AuthService, $timeout) {
        this.ajax = $http;
        this.timeout = $timeout;
        $scope.currentUser = null;
        $scope.userRoles = USER_ROLES;
        $scope.isAuthorized = AuthService.isAuthorized;

        $scope.setCurrentUser = function (user) {
            $scope.currentUser = user;
        };
    }

    sendCredentials(credentials){
        this.ajax({
            url:'http://localhost:3000/login',
            method:"POST",
            data: credentials
        }).then(function(data){
            console.log("Sended credntials");
        });
    }

    $onInit() {
        this.sendCredentials({
            username:'admin',
            password:'test123456789'
        });

    }
    $onDestroy() {
    }
}

RootController.$inject = ['$scope','$http', 'USER_ROLES', 'AuthService' ,'$timeout'];

export default RootController;