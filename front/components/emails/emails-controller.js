const EmailsController = function (SMS, $scope) {
    SMS.on('server::deletedEmail', ()=>{
        alert("email deleted");
    });

    SMS.on('server:deliveredNewEmails', (data)=>{
        if (data.status == 200) {
            $scope.emails = data.newEmails;
        }
    });

    this.$onInit = ()=>{
        SMS.emit('client::getEmailsRequest', {});
    }
};

EmailsController.$inject = ['SMS', '$scope'];

export default EmailsController;





