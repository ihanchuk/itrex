const NewEmailController = function (SMS, $scope) {
    this.to =null;
    this.email =null;
    this.subj = null;
    this.emailBody = null;
    
    let vm = this;

    SMS.on('server::emailSendResponse', function(data){
        if(data.status == 200){
            vm.to =null;
            vm.email =null;
            vm.subj = null;
            vm.emailBody = null;
            $scope.newEmailForm.$setPristine();
            $scope.$digest();
            alert("Mail delivered");
        }else{
            alert("Mail not delivered");
        }
    });

    this.onSendNewEmail = function(){
        let data = {
            to: vm.to,
            email: vm.email,
            subj: vm.subj,
            emailBody: vm.emailBody
        };
        SMS.emit('client::sendMessage', data);
    }
};

NewEmailController.$inject = ['SMS', '$scope'];

export default NewEmailController;








