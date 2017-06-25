class RootController {
    constructor($http) {
        $http({
            method:'POST',
            data:{
                username:'admin',
                password:'test123456789'
            },
            url:'http://localhost:3000/login'
        }).then(function(data){
                console.log(data);
            });
    }

    $onInit() {
        console.log("initializing  Root...");
    }

    $onDestroy() {
        console.log("destroying Root...");
    }
}

RootController.$inject = ['$http'];
export default RootController;