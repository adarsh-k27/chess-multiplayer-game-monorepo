import { useUser } from "@repo/store/useUser";
import { useEffect, useState } from "react";
import { WebSocket as WebSocketType, MessageEvent } from 'ws'
import { useNavigate } from "react-router-dom";
const url= "ws://localhost:8080"


type WT= typeof window.WebSocket.prototype

export function useSocket(){
    const [socket,setSocket]=useState<null | string | boolean | WT>(true)
    const user=useUser()
   useEffect(()=>{
      setSocket(url)
      const ws:WT = new WebSocket(`${url}?token=${"kjhjghvhgcgfch"}`)

      ws.onopen=function(socket:any ){
          setSocket(ws)
      }

      ws.onclose=function(socket:any){
          setSocket(null)
      }

      return()=>{
        ws.close()
      }
   },[])

   return socket;
}





enum type {
    error
}
type SocketMessage = {
    type: type,
    message: string,
    httpStatusCode: string
}





