import React, { useState } from 'react'
import {Chess} from 'chess.js'
import ChessBoard from '../components/GameBoard'
type Props = {}

export default function Game({}: Props) {

    const [chess,setChess]=useState(new Chess())
    const [board,setBoard]=useState(chess.board())

  return (
     <div className='w-screen h-auto justify-center items-center flex '>
        <ChessBoard chess={chess} board={board} />
     </div>
  )
}