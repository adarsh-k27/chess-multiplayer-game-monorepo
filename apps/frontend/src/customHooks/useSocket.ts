import { useEffect, useState } from "react";
let url= "ws://localhost:8080"
export function useSocket(){
    const [socket,setSocket]=useState<null | boolean>(true)
   useEffect(()=>{
      
    //   const ws= new WebSocket(url)

    //   ws.onopen=function(socket){
    //       setSocket(ws)
    //   }

    //   ws.onclose=function(socket){
    //       setSocket(null)
    //   }

    //   return()=>{
    //     ws.close()
    //   }
   },[])

   return socket;
}