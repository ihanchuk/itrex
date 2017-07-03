const messages = require('../../db/models/email-model');

module.exports = (server)=>{
    return (data)=>{
        messages.remove({_id:data._id})
            .then( (res)=>{
                server.emit('server::deleteEmailResponse', {status:200, data});
            })
            .catch( (err)=>{
                server.emit('server::deleteEmailResponse', {status:500, err});
            })
    }
};