const events =require('./events');

module.exports = (server)=>{
    server.on('client::getEmails', events.onGetEmails);
};