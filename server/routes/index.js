const userMiddleware = require('../middleware/isUser');
const util = require('util');

module.exports = (app, passport) => {
    app.get("/", (req, resp)=>{
        if (req.session.user || req.user){
            console.log(req.session.user);
            console.log(req.user);
            resp.send("Public page with user");
        }else{
            resp.send("Public page without user");
        }

   });
    app.get("/emails",userMiddleware, (req, resp)=>{
        resp.send("Private page email");
    });

    app.post('/login', passport.authenticate('local-login')(function (req, resp) {
             resp.json({message:'hi'});
        }));
};