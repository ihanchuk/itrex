const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    author:  String,
    email: String,
    message: String,
    subject: String
});

const MessageModel = mongoose.model('MessageModel', messageSchema);

module.exports = MessageModel;