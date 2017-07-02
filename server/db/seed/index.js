const User = require('../../db/models/user-model');
const MessageModel = require('../../db/models/email-model');
const mongoose = require("mongoose");
const fakeEmails = require('./fake');
mongoose.connect(require('../../config').db.connectionString);

let newUser = new User({
    username: 'admin',
    password:  User.generateHash('test123456789'),
    status: 'admin'
});

newUser.save()
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        console.log(err.message);
    });

MessageModel.collection.insert(fakeEmails, function(err, docs){
    if(err) {
        console.log(err);
    }else{
        console.log("Inserted::: ", docs);
    }
});