import { useUser } from "@repo/store/useUser";
import { useEffect, useState } from "react";
const url= "ws://localhost:8080"
export function useSocket(){
    const [socket,setSocket]=useState<null | string | boolean>(true)
    const user=useUser()
    console.log("User",user);
    
   useEffect(()=>{
      setSocket(url)
      const ws:any= new WebSocket(`${url}?token=${user?.token}`)

      ws.onopen=function(socket:any){
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