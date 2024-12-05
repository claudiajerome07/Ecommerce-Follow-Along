class ErrorHandler extends Error{
    constructor(message,statuscode){
        super(message);
        Error.captureStackTrace();
        this.statuscode=statuscode;
    }
}
module.exports= ErrorHandler;