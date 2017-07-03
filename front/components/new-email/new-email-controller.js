const NewEmailController = function (SMS) {
    this.to =null;
    this.email =null;
    this.subj = null;
    this.emailBody = null;
    
    let vm = this;

    SMS.on('server::emailSendResponse', function(data){
        console.log(data);
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





