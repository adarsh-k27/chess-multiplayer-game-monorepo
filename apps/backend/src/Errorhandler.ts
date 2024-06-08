//what properties we need for throwing an error
//message , hhtpStatusCode , isPriority , name 
 class APPError extends Error{
    public readonly name:string;
    public readonly httpCode:any;
    public readonly isOpertional:boolean
    constructor(name:string,httpCode:any,isOperational:boolean,discription:string){
        super()
        debugger;
        Object.setPrototypeOf(this, new.target.prototype)
        this.httpCode=httpCode;
        this.name=name;
        this.isOpertional=isOperational;
        debugger;
    }
}

module.exports={APPError}