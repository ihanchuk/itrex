const LocalStrategy = require('passport-local').Strategy;
const User = require('../../../../db/models/user-model');

module.exports = ()=>{
    return new LocalStrategy({passReqToCallback: true},
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
        });
}