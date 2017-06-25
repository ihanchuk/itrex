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
    }
}