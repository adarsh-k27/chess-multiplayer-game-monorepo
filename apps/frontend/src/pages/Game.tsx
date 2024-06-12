import React, { useEffect, useState } from 'react'
import { Chess } from 'chess.js'
import ChessBoard from '../components/GameBoard'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSocket } from '../customHooks/useSocket'
import { Messages } from '../utilities/Toaster/constants'
import { convertToActualMessage } from '../customHooks/useSockeTError'
import { MessageEvent } from 'ws'
import WaitingOpponent from '../components/Game-board/waiting_opponent'
import {  GameStatusT, PLAYER_INDICATOR_T_PROPS, PayloadT } from '../types/GameTypes'
import { useUser } from '@repo/store/useUser'
import K from '../assets/n.svg'
import k from '../assets/n.copy.svg'
type Props = {}

const TYPE_OF_GAME = {
   RANDOM: "random"
}

const checkGameStartedOrNot = (status: GameStatusT) => {
   if (status === GameStatusT.CREATED || status === GameStatusT.NOT_CREATED) return true
}



const SEND_INIT_EVENT = (socket: string | boolean | WebSocket | null) => (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
   e.preventDefault()
   const payload = {
      type: Messages.INIT_GAME,
   }
   if (socket !== null && typeof socket !== "boolean" && typeof socket !== "string") {
      socket.send(JSON.stringify(payload))
   }
}

export default function Game({ }: Props) {
   const [chess, _setChess] = useState(new Chess());
   const [board, setBoard] = useState(chess.board());
   const [game_satatus, setGameStatus] = useState<GameStatusT>(GameStatusT.NOT_CREATED)
   const [game_meta, setGameMetaData] = useState<any>(null)
   const socket = useSocket()
   const { pathname } = useLocation()
   const navigate = useNavigate()
   const gameId = pathname.split('/')[2]
   
   

   // we  need a PLAYER TURN INDICATOR 


   useEffect(() => {
      if (!socket) {
         return
      }
      if (socket !== null && typeof socket !== "boolean" && typeof socket !== "string") {
         socket.onmessage = function (message) {
            let msg = message as unknown
            let msg1 = msg as MessageEvent
            const parsedMessage = convertToActualMessage<PayloadT>(msg1)
            switch (parsedMessage.type) {
               case Messages.GAME_ADDED: {
                  // here we need to change the game status and manage the loader for waiting a new player 
                  setGameStatus(GameStatusT.CREATED)
                  break;
               }
               case Messages.INIT_GAME: {
                  const gameId = parsedMessage.payload.gameId
                  // here we will get the payload for our games and start the game
                  setGameStatus(GameStatusT.STARTED)
                  //set Metadata
                  setGameMetaData({
                     blackPlayer: parsedMessage.payload.blackPlayer,
                     whitePlayer: parsedMessage.payload.whitePlayer
                  })

                  //setChess Board 
                  setBoard(chess.board())
                  //replace random Id with gameId
                  navigate(`/game/${gameId}`)
                  break;
               }

            }
         }
      }
       // here clean up event listener 
      return () => {
         if (socket !== null && typeof socket !== "boolean" && typeof socket !== "string") {
         socket.onmessage = null;
         socket.close();
         }
       };
   }, [socket])



   return (
      <div className="grid grid-cols-1 md:grid-cols-7/3 h-screen">
         <div className="w-full md:w-7/10 bg-gray-200 p-4 flex justify-center items-center">
            {/* Chessboard placeholder */}
            <div className='w-full h-auto justify-center items-center flex  overflow-x-scroll'>
               <ChessBoard chess={chess} board={board} />
            </div>
         </div>
         <div className="w-full md:w-3/10 bg-gray-100 p-4 flex justify-center items-center">
            <div>
               {
                  GameStatusT.STARTED === game_satatus && <PlayerIndicator chess={chess} Metadata={game_meta}  />
               }
            </div>
            {
               checkGameStartedOrNot(game_satatus) && game_satatus == GameStatusT.CREATED ? <WaitingOpponent /> : gameId && gameId == TYPE_OF_GAME.RANDOM ? <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-full hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                  onClick={SEND_INIT_EVENT(socket)}
               >
                  PLAY
               </button> : null
            }
         </div>
      </div>

   )
}




function PlayerIndicator({chess,Metadata}:PLAYER_INDICATOR_T_PROPS){
   const user=useUser()
   // here we nned to check if we are black player or white player with userId 

   // and curr turn is black or whhite with chess game 

   // implement Logic here 

   const isIamBlack=user?.id === Metadata.blackPlayer.id ? true : false
   const Turn= ["Opposite Turn","Your Turn"]
   const chessTurn=chess.turn()
   const currentTurn =(isIamBlack  ? "b" :"w" )=== chessTurn ? 1 : 0

   return(
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
        <img
          src={ chessTurn =="b" ? k : K}
          alt={`${chessTurn} Player`}
          className="w-12 h-12 rounded-full"
        />
        <h1 className="text-xl font-bold text-gray-800">
          {Turn[currentTurn]}
        </h1>
      </div>

    </div>

   )
}