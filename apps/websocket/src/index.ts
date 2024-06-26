import  { WebSocketServer,WebSocket} from 'ws'
import url from 'url'
import { decodeToken } from './auth';
import { GameManagement } from './Game/GameManagement';
import { User } from './Game/User';
import { APPError } from './Errorhandler';
const wss = new WebSocketServer({
    port: 8080,
  });
const gameManager= new GameManagement()
wss.on("connection",async(ws,req)=>{
    const token= url.parse(req.url!, true).query.token
    if(token !="undefined"){
      const userId= decodeToken(token ? Array.isArray(token) ? token[0] : token :"")
      //here we need to add the user and socketConnection inside Game Management Class
      if(userId instanceof APPError){
        // here we need to manage the error via socket 
        userId.handleError(ws)
      }
      else{
        let user=new User(ws,userId!)
        gameManager.addUser(user)
      }
    }
    ws.on('close', () => {
        // gameManager.removeUser(ws);
      });
})

  
//here we will do the authentication part and with token we will create a user that play for game 
