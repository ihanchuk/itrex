const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    author:  String,
    email: String,
    message: String,
    date: {
        type: Date,
        default: Date.now
    }
});

const MessageModel = mongoose.model('MessageModel', messageSchema);

module.exports = MessageModel;