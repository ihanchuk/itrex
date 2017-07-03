const express = require('express');
const mongoose = require('mongoose');
const templateEngine  = require('nunjucks');
const app = express();
const appConfig = require('./config');

mongoose.connect(appConfig.db.connectionString);

require('./bootstrap')(app, appConfig, mongoose);

const passport = require('./auth/passport')(app);

const socketServer = require('http').createServer(app);
const io = require('socket.io')(socketServer);

io.on('connection', (server)=>{
    require('./socket')(server);
});

io.listen(3777);

templateEngine.configure('server/templates', {
    autoescape: true,
    express: app
});

app.get("/",  require('./controllers/index-page'));
app.get('/emails', require('./controllers/emails'));
app.post('/login', passport.authenticate('local-login'), require('./controllers/login'));
app.post('/logout', require('./controllers/logout'));

app.listen(3000,  ()=> {
    console.log('Example app listening on port 3000!')
});
