module.exports=(req, resp)=>{
    if(req.user){
        resp.json(req.user);
    }else{
        resp.json({
            message: "I dont know this user"
        });
    }
}