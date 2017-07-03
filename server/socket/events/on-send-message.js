const nodemailer = require('nodemailer');
const transporter = require('../../mail/transporter');
const mailConfig = require('../../config').mailOptions;
const templater = require('nunjucks');
const emailModel = require('../../db/models/email-model');
const validator = require('validatorjs');

const mailOptions = Object.assign({}, mailConfig);

module.exports = (server)=>{
    return (data)=>{
        let validation = new validator(data, {
            to: 'required|string',
            email: 'required|email',
            emailBody: 'required|string',
            subj:'required|string'
        });

        if(validation.passes()) {
            mailOptions['to']= data.email;
            mailOptions['subject'] = data.subj;
            mailOptions['text'] = `Dear ${data.to}, 
                                        \n here is email body for you: \n
                                        ${data.emailBody} \n Regards.`;
            mailOptions['html'] = templater.render("email.html", data);

            let messageToSave = new emailModel({
                to: data.to,
                email:data.email,
                message:data.emailBody,
                subject: data.subj
            });

            messageToSave.save()
                .then((res)=>{
                    console.log("email saved with", res);
                    transporter.sendMail(mailOptions, (error, info) => {
                        if (error) return error;
                    });
                    server.emit('server::emailSendResponse',{status:200, res});
                })
                .catch((err) =>{
                    console.log("email saved with", err);
                    server.emit('server::emailSendResponse',{status:500, err});
                })
        }
    }
};
