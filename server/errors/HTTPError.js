class HTTPError extends Error{
    constructor(message, status, extra){
        super(message);
        Error.captureStackTrace(this, this.constructor);
        this.status = status || 500;
        this.extra = extra;
    }

    static get ErrorName(){
        return "HTTPError";
    }
}

module.exports=HTTPError;