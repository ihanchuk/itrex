const express = require('express');
const app = express();
const appConfig = require('./config');

require('./bootstrap')(app, appConfig);

const passport = require('./auth/passport')(app);

const socketServer = require('http').createServer(app);
const io = require('socket.io')(socketServer);

io.on('connection', (server)=>{
    server.on('client::newClient', (data)=>{
        console.log("New data", data);
    });
});

io.listen(3777);

app.get("/",  require('./controllers/index-page'));
app.get('/emails', require('./controllers/emails'));
app.post('/login', passport.authenticate('local-login'), require('./controllers/login'));

app.listen(3000,  ()=> {
    console.log('Example app listening on port 3000!')
});
