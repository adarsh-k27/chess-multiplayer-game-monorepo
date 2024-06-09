import React, { useEffect, useState } from 'react'
import { Chess } from 'chess.js'
import ChessBoard from '../components/GameBoard'
import { useLocation, useParams } from 'react-router-dom'
import { useSocket } from '../customHooks/useSocket'
import { Messages,TYPES_VALUE,TYPES_VALUET } from '../utilities/Toaster/constants'
import { convertToActualMessage } from '../customHooks/useSockeTError'
import {  MessageEvent } from 'ws'
import WaitingOpponent from '../components/Game-board/waiting_opponent'


type Props = {}

const TYPE_OF_GAME = {
   RANDOM: "random"
}

type PayloadT={
   type: TYPES_VALUET,
   message:string,
   payload:Object
}

enum GameStatusT {
   NOT_CREATED = "NOT_CREATED",
   CREATED = "CREATED",
   STARTED = "STARTED",
   JOINED = "JOINED",
   ENDED = "ENDED",
   PAUSED = "PAUSED",
   ERROR = "ERROR"
 }


 const checkGameStartedOrNot=(status:GameStatusT)=>{
     if(status === GameStatusT.CREATED || status === GameStatusT.NOT_CREATED ) return true
 }
 


const SEND_INIT_EVENT=(socket:string | boolean | WebSocket | null)=>(e:React.MouseEvent<HTMLButtonElement,MouseEvent>)=>{
   e.preventDefault()
   const payload={
      type:Messages.INIT_GAME,
   }
   if( socket !== null && typeof socket !== "boolean" && typeof socket !== "string" ){
      socket.send(JSON.stringify(payload))
   }
}

export default function Game({ }: Props) {

   const [chess, setChess] = useState(new Chess())
   const [board, setBoard] = useState(chess.board())
   const [game_satatus,setGameStatus]=useState<GameStatusT>(GameStatusT.NOT_CREATED)
   const socket =useSocket()
   const { pathname } = useLocation()
   const gameId = pathname.split('/')[2]


   useEffect(()=>{
    if(!socket){
       return 
    }
    if( socket !== null && typeof socket !== "boolean" && typeof socket !== "string" ){
      socket.onmessage=function(message){
         let msg= message as unknown
         let msg1= msg as MessageEvent
         debugger;
         const parsedMessage= convertToActualMessage<PayloadT>(msg1)
         switch (parsedMessage.type){
           case Messages.GAME_ADDED:{
             // here we need to change the game status and manage the loader for waiting a new player 
             setGameStatus(GameStatusT.CREATED)
           }
         }
      }
   }
   },[socket])

   

   return (
      <div className="grid grid-cols-1 md:grid-cols-7/3 h-screen">
         <div className="w-full md:w-7/10 bg-gray-200 p-4 flex justify-center items-center">
            {/* Chessboard placeholder */}
            <div className='w-full h-auto justify-center items-center flex  overflow-x-scroll'>
               <ChessBoard chess={chess} board={board} />
            </div>
         </div>
         <div className="w-full md:w-3/10 bg-gray-100 p-4 flex justify-center items-center">
            {
              checkGameStartedOrNot(game_satatus) &&  game_satatus == GameStatusT.CREATED ? <WaitingOpponent /> : gameId && gameId == TYPE_OF_GAME.RANDOM ? <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                onClick={SEND_INIT_EVENT(socket)}
               >
                  PLAY
               </button> : null 
            }
         </div>
      </div>

   )
}



