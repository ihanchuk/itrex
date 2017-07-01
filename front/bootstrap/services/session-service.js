const session = ()=>{
    let session = {};
    session.create = function (sessionId, userId, userRole) {
        this.userId = userId;
        this.userRole = userRole;
    };
    session.destroy = function () {
        this.userId = null;
        this.userRole = null;
    };

    return session;
};

export default session;
