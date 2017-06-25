const express = require('express');

const app = express();
const appConfig = require('./config');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session')
const mongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const cors = require('express-cors');

mongoose.connect(appConfig.db.connectionString);

app.use(cors({
    allowedOrigins: ['http://localhost:7000', 'http://localhost'
    ]}
));

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cookieParser());
app.use(session({
    secret: appConfig.session.secret,
    resave: appConfig.session.resave,
    saveUninitialized: appConfig.session.saveUninitialized,
    httpOnly: appConfig.session.httpOnly,
    store: new mongoStore({
        mongooseConnection: mongoose.connection,
        autoRemove: appConfig.session.storeConfig.autoRemove,
        autoRemoveInterval: appConfig.session.storeConfig.autoRemoveInterval,
        ttl: appConfig.session.storeConfig.ttl
    })
}));

const passport = require('passport');
const User = require('./db/models/user-model');
const LocalStrategy = require('passport-local').Strategy;

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

passport.use('local-login', new LocalStrategy({passReqToCallback: true},
    (req, username, password, done) => {
        User.findOne({'username': username})
            .then((user) => {
                if (!user) {
                    return done(null, false);
                }
                if (!user.validPassword(password)) {
                    console.log("Wrong password");
                    return done(null, false);
                }
                return done(null, user);
            })
            .catch((err) => {
                return done(err);
            });
    }));

app.use(passport.initialize());
app.use(passport.session());

var socketServer = require('http').createServer(app);
var io = require('socket.io')(socketServer);
io.on('connection', function(){
    console.log("socket connected");
});
socketServer.listen(3333);

app.get("/", function(req, resp){
  if(req.user){
      resp.json(req.user);
  }else{
      resp.json({
          message: "I dont know this user"
      });
  }
});

app.get('/emails', (req, resp)=>{
    resp.json({
        emails: [
            {sender:'Goga', text:'dummy text'},
            {sender:'Lelik', text:'dummy text2'}
        ]
    });
});

app.post('/login',
    passport.authenticate('local-login'),
    function(req, res) {
        res.send(req.user);
    });

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});