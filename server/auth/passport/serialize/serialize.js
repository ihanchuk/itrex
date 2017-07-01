const User = require('../../../db/models/user-model');
module.exports.serialize =(user, done) => {
    done(null, user.id);
};

module.exports.deSerialize = (id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
};