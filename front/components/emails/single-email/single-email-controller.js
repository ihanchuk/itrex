const SingleEmailController = function(SMS){
    this.onDelete = (el)=>{
        SMS.emit('client::deleteEmailRequest', this.email);
    };
};

SingleEmailController.$inject=['SMS'];

export default SingleEmailController;
