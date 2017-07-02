import io from 'socket.io-client';

const runLoader = ['$http', ($http)=>{
    let connection = io('http://localhost:3777');
    connection.emit('client::getEmails', {data:'hi from client'});
}];

export default runLoader;



