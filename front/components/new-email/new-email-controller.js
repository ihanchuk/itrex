const NewEmailController = function (SMS, $scope) {
    this.to =null;
    this.email =null;
    this.subj = null;
    this.emailBody = null;
    
    let vm = this;

    this.onSendNewEmail = function(){
        let data = {
           to: vm.to,
            email: vm.email,
            subj: vm.subj,
            emailBody: vm.emailBody
        };
        console.log('sending new email', data);
    }
};

NewEmailController.$inject = ['SMS', '$scope'];

export default NewEmailController;





