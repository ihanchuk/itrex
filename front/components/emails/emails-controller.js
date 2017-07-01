class EmailsController {
    constructor( $scope, $http) {
        this.ajax = $http;
    }
    sendCredentials(){

        this.ajax({
            url:'http://localhost:3000/emails',
            method:"GET"
        })
            .then(function(data){
                console.log(data);
            })
            .catch(function(err){
                console.log(err);
            });
    }
    $onInit() {
        this.sendCredentials();
   }
    $onDestroy() {
    }
}
EmailsController.$inject = ['$scope','$http', 'USER_ROLES', 'AuthService' ,'$timeout'];

export default EmailsController;



