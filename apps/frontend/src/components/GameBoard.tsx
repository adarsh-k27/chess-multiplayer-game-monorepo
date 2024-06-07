
import { Chess, Color, PieceSymbol, Square } from 'chess.js'
import SquareBoard from './Game-board/square';
import { useWindowSize } from '../hooks/useWindowSize';

type GameBoardPropsT = {
    chess: Chess,
    board: ({
        square: Square;
        type: PieceSymbol;
        color: Color;
    } | null)[][]
}





export default function GameBoard({ chess, board }: GameBoardPropsT) {
    const { width, height } = useWindowSize()

    const boxSize = width > height ? Math.floor((height - 100) / 8) : Math.floor((width - 100) / 8)

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
                                        <div style={{ width: boxSize, height: boxSize }}>
                                            <SquareBoard square={square} isWhiteSquare={Boolean((rowIndex + i) % 2)} />
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