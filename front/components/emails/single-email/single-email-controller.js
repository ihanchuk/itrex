const SingleEmailController = function(SMS){
    SMS.emit('test', {data:12});
    this.onDelete = (el)=>{
        console.log("deleting element", this.email);
    };
};

SingleEmailController.$inject=['SMS'];

export default SingleEmailController;
