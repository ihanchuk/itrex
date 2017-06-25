const isUser = (req, res, next) =>{
    if (req.isAuthenticated()) {
        return next();
    }
    res.json({
        error: 'not a user'
    });
}

module.exports = isUser;