class EmailsController {
    constructor(SMS, $scope) {
        this.sms = SMS;
        this.scope = $scope;
        let that = this;
        SMS.on('server::deletedEmail', function(){
          //  alert("email deleted");
        });

        SMS.on('server:deliveredNewEmails', function(data){
            if(data.status == 200) {
                console.log(data.newEmails[1]);
                that.scope.emails = data.newEmails;
                that.scope.$digest();
            }
        });
    }
    $onInit() {
        this.sms.emit('client::getEmailsRequest',{});
   }
    $onDestroy() {
    }
}
EmailsController.$inject = ['SMS', '$scope'];

export default EmailsController;





