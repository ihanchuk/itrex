const passport = require('passport');

module.exports = (app)=>{
    passport.serializeUser(require('./serialize/serialize').serialize);
    passport.deserializeUser(require('./serialize/serialize').deSerialize);

    passport.use('local-login', require('./startegy/local')());

    app.use(passport.initialize());
    app.use(passport.session());

    return passport;
}