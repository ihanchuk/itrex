const EmailsController = function (SMS, $scope) {
    SMS.on('server::deleteEmailResponse', function(data){
        if(data.status == 200){
            $scope.emails.map( (el, id)=>{
                if(el._id == data.data._id) $scope.emails.splice(id,1);
            });
            $scope.$digest();
            alert('Email deleted');
        }else{
            alert('Hm.. looks like we have a bug...');
        }
    });

    SMS.on('server:deliveredNewEmails', (data)=>{
        if (data.status == 200) {
            $scope.emails = data.newEmails;
            $scope.$digest();
        }
    });

    this.$onInit = ()=>{
        SMS.emit('client::getEmailsRequest', {});
    }
};

EmailsController.$inject = ['SMS', '$scope'];

export default EmailsController;


