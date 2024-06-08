import { WebSocket } from "ws";

export class APPError extends Error{
    public readonly name:string;
    public readonly httpCode:any;
    public readonly isOpertional:boolean
    constructor(name:string,httpCode:any,isOperational:boolean,discription:string){
        super(discription)
        Object.setPrototypeOf(this, new.target.prototype)
        this.httpCode=httpCode;
        this.name=name;
        this.isOpertional=isOperational;
        Error.captureStackTrace(this)
    }
    handleError(socket:WebSocket){
        let  payload={
            type:"Error",
            message:"",
            httpStatusCode:""
        }
        
        if(this.isOpertional){
            switch (this.httpCode){
               case 403:
                 if(this.name=="JsonWebTokenError"){
                     payload.httpStatusCode=this.httpCode;
                     payload.message=this.message
                 }
                 break;
            }

        }else{

        }
        
        const ReadableMessage=JSON.stringify(payload)
        setTimeout(()=>{
            socket.send(ReadableMessage)
        },1000)
        return 0
    }
}

