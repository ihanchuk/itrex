const events =require('./events');

module.exports = (server)=>{
    server.on('client::getEmails', events.onGetEmails);
    server.on('test', function(data){
        console.log('connected to new client');
    });
};