class EmailsController {
    constructor(SMS) {
        this.sms = SMS;
        let subscription = SMS.on('server::deletedEmail', function(){
            alert("email deleted");
        });
    }
    $onInit() {
        this.sms.emit('client::getEmailsRequest',{});
   }
    $onDestroy() {
    }
}
EmailsController.$inject = ['SMS'];

export default EmailsController;



