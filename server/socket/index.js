const messages = require('../db/models/email-model');
module.exports = (server)=>{
    server.on('client::getEmailsRequest', require('./events/on-get-emails')(server));
    server.on('client::deleteEmailRequest', require('./events/on-delete-email')(server));
};