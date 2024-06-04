
import { Chess, Color, PieceSymbol, Square } from 'chess.js'
import q from '../assets/q.svg'
import k from '../assets/k.svg'
import b from '../assets/b.svg'
import p from '../assets/p.svg'
import n from '../assets/n.svg'
import r from '../assets/r.svg'
import Q from '../assets/q.copy.svg'
import K from '../assets/k.copy.svg'
import B from '../assets/b.copy.svg'
import P from '../assets/p.copy.svg'
import N from '../assets/n.copy.svg'
import R from '../assets/r.copy.svg'
type GameBoardPropsT = {
    chess:Chess,
    board:({
        square: Square;
        type: PieceSymbol;
        color: Color;
    } | null)[][]
}



const chessAssets:any={
    q,k,b,p,r,n,B,Q,K,R,P,N
}

function selectAsset(type:any,color:any){
    return color=="w" ? type.toUpperCase() : type
  }

export default function GameBoard({chess,board }: GameBoardPropsT) {
    return (
        <div>
            <div className=''>GAME BOARD</div>
            {
                board.map((row,index)=>{
                    const rowIndex=index
                   return(
                    <div key={index} className='flex flex-row'>
                        {
                            row.map((square,i)=>{
                                const colIndex=i
                                return(
                                    <div className={`${Boolean((rowIndex + colIndex) % 2) ? "bg-green-500" :"bg-whiteboard"} relative px-10 py-10 w-4`} key={index}>

                                        {square?.type ? <img className='absolute top-6 left-6' src={chessAssets[selectAsset(square?.type,square.color)]} alt="Description of SVG"/> : null} 
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