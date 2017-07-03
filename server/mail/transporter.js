const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'turumburum007@gmail.com',
        pass: 'xlfjjh47fhdn'
    }
});

module.exports = transporter;