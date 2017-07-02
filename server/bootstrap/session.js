const session = require('express-session');
const mongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');

module.exports = (app, config, db)=>{

    app.use(session({
        secret: config.session.secret,
        resave: config.session.resave,
        saveUninitialized: config.session.saveUninitialized,
        httpOnly: config.session.httpOnly,
        store: new mongoStore({
            mongooseConnection: db.connection,
            autoRemove: config.session.storeConfig.autoRemove,
            autoRemoveInterval: config.session.storeConfig.autoRemoveInterval,
            ttl: config.session.storeConfig.ttl
        })
    }));
}