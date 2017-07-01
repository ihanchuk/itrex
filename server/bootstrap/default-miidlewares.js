const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('express-cors');

module.exports = (app)=>{
    app.use( bodyParser.json() );
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(cookieParser());
    app.use(cors({allowedOrigins: [
            'http://localhost:7000',
            'http://localhost'
         ]}
    ));
};