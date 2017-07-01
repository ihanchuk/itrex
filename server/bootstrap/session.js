const session = require('express-session');
const mongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');

module.exports = (app, config)=>{

    mongoose.connect(config.db.connectionString);

    app.use(session({
        secret: config.session.secret,
        resave: config.session.resave,
        saveUninitialized: config.session.saveUninitialized,
        httpOnly: config.session.httpOnly,
        store: new mongoStore({
            mongooseConnection: mongoose.connection,
            autoRemove: config.session.storeConfig.autoRemove,
            autoRemoveInterval: config.session.storeConfig.autoRemoveInterval,
            ttl: config.session.storeConfig.ttl
        })
    }));
}