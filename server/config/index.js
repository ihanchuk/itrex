module.exports = {
    db:{
        connectionString:'mongodb://localhost/itrex-db'
    },
    session:{
        secret:"secret string",
        resave: true,
        saveUninitialized: false,
        httpOnly: true,
        storeConfig:{
            autoRemove: 'interval',
            autoRemoveInterval: 480,
            ttl: (14 * 3 * 60 * 60)
        }
    },
    mailOptions: {
        from: '"Turum Burum 👻" <turumburum007@gmail.com>',
        to: null,
        subject: null,
        text: null,
        html: null,
        mailAuth: {
            user: 'turumburum007@gmail.com',
            pass: 'xlfjjh47fhdn'
        }
    }
}