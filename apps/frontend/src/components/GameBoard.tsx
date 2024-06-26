
import { Chess, Color, Move, PieceSymbol, Square } from 'chess.js'
import SquareBoard from './Game-board/square';
import { useWindowSize } from '../hooks/useWindowSize';
import { useState } from 'react';
import LetterNotation from './Game-board/LetterNotation';
import Indicator from './Game-board/Indicator';

type GameBoardPropsT = {
    chess: Chess,
    board: ({
        square: Square;
        type: PieceSymbol;
        color: Color;
    } | null)[][],
    setChess: React.Dispatch<React.SetStateAction<Chess>>,
    setBoard: React.Dispatch<React.SetStateAction<({
        square: Square;
        type: PieceSymbol;
        color: Color;
    } | null)[][]>>

}



function findSquare(col: number, row: number, totalRows = 8) {
    return String.fromCharCode(97 + row) + (totalRows - col)
}



export default function GameBoard({ chess, board, setChess, setBoard }: GameBoardPropsT) {
    const { width, height } = useWindowSize()
    const boxSize = width > height ? Math.floor((height - 100) / 8) : Math.floor((width - 100) / 8)
    const [legalMOves, setLegalMoves] = useState<Map<string, boolean>>(new Map())
    const totalRows = 8
    const [move, setMove] = useState<{ from: Square | string, to: Square | string }>({ from: "", to: "" })

    return (
        <div className='w-auto h-auto flex flex-col'>
            {
                board.map((row, index) => {
                    const rowIndex = index
                    return (
                        <div key={index} className='flex flex-row '>
                            {
                                row.map((square, i) => {
                                    return (
                                        <div onClick={(e) => {
                                            e.preventDefault()
                                            if (chess.turn() !== "b") return false;
                                            if (move.from) {
                                                const to = findSquare(rowIndex, i)
                                                // we need to implement Moves and SOcket Call 
                                                setMove((prev) => ({ ...prev, to: square?square.square:"" }))
                                                chess.move({ from: move.from, to: to })
                                                setChess(chess)
                                                setBoard(chess.board())
                                                setLegalMoves(new Map())
                                                setMove({ from: "", to: "" })
                                            } else {
                                                if (square?.square == null || square.square == undefined) return
                                                //turn check 
                                                setLegalMoves(chess.moves({ verbose: true, square: square?.square }).reduce((acc: Map<string, boolean>, curr: Move) => {
                                                    acc.set(curr.to, true)
                                                    return acc;
                                                }, new Map()))
                                                setMove({ from: square?.square, to: "" })

                                            }




                                        }} style={{ width: boxSize, height: boxSize }} className='relative'>
                                            {
                                                rowIndex <= 7 && i == 0 && <LetterNotation style='top-1' label={totalRows - rowIndex} mainColor={(rowIndex + i) % 2} />
                                            }

                                            {
                                                rowIndex == 7 && <LetterNotation style='bottom-1 right-3' label={String.fromCharCode(97 + i)} mainColor={(rowIndex + i) % 2} />
                                            }
                                            <SquareBoard square={square} isWhiteSquare={Boolean((rowIndex + i) % 2)} />
                                            {legalMOves.get(square?.square || findSquare(rowIndex, i)) && <Indicator isIcon={Boolean(square?square.square :"")} />}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}