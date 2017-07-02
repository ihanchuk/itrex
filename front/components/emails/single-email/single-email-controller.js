const controller =($scope)=>{
    $scope.id = 234;
    $scope.onDelete = (email)=>{
        console.log("deleting", email);
    }
};

controller.$inject=['$scope'];

export default controller;


