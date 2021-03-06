module.exports = (server)=>{
    server.on('client::getEmailsRequest', require('./events/on-get-emails')(server));
    server.on('client::deleteEmailRequest', require('./events/on-delete-email')(server));
    server.on('client::sendMessage', require('./events/on-send-message')(server));
};
