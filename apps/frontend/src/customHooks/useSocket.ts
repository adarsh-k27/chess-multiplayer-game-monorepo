import { useUser } from "@repo/store/useUser";
import { useEffect, useState } from "react";
const url= "ws://localhost:8080"


type WT= typeof window.WebSocket.prototype

export function useSocket(){
    const [socket,setSocket]=useState<null | string | boolean | WT>(true)
    const user=useUser()
   useEffect(()=>{
      setSocket(url)
      const ws:WT = new WebSocket(`${url}?token=${user?.token}`)

      ws.onopen=function(){
          setSocket(ws)
      }

      ws.onclose=function(){
          setSocket(null)
      }

      return()=>{
        ws.close()
      }
   },[user])

   return socket;
}





// enum type {
//     error
// }
// type SocketMessage = {
//     type: type,
//     message: string,
//     httpStatusCode: string
// }





