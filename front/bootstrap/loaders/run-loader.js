import io from 'socket.io-client';

const runLoader = ['$http', ($http)=>{
    console.info('Run function!!!');
    let connection = io('http://localhost:3777');
    connection.emit('client::newClient', {data:'hi'});
}];

export default runLoader;