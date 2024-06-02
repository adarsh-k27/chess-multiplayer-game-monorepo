import {randomUUID} from 'crypto'
import { WebSocket } from 'ws';

export class User{
    public id:string;
    public socket:WebSocket;
    public userId:string

    constructor(socket:WebSocket,userId:string){
        this.socket=socket
        this.userId=userId
        this.id=randomUUID()
    }
    
}