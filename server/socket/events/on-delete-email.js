module.exports = (server)=>{
    return (data)=>{
        console.log("Deleting email", data);
        server.emit('server::deletedEmail', {});
    }
};