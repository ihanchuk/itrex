const messages = require('../../db/models/email-model');

module.exports = (server)=>{
    return (params)=>{
        messages.find(params)
            .then( (emails)=>{
                server.emit('server:deliveredNewEmails', {status:200,newEmails:emails});
            })
            .catch( (err)=>{
                server.emit('server:deliveredNewEmails', {status:500,errStack:err});
            });
    }
};