const SingleEmailController = function(SMS, $scope){
    this.onDelete = ()=>{
        SMS.emit('client::deleteEmailRequest', this.email);
    };
};

SingleEmailController.$inject=['SMS','$scope'];

export default SingleEmailController;
