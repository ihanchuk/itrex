const User = require('../../db/models/user-model');
const mongoose = require("mongoose");
mongoose.connect(require('../../config').db.connectionString);

let newUser = new User({
    username: 'admin',
    password:  User.generateHash('test123456789'),
    status: 'admin'
});

newUser.save().then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        console.log(err.message);
    })