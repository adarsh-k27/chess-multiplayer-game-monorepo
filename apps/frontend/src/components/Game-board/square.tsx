import { Color, PieceSymbol, Square } from 'chess.js'
import q from '../../assets/q.svg'
import k from '../../assets/k.svg'
import b from '../../assets/b.svg'
import p from '../../assets/p.svg'
import n from '../../assets/n.svg'
import r from '../../assets/r.svg'
import Q from '../../assets/q.copy.svg'
import K from '../../assets/k.copy.svg'
import B from '../../assets/b.copy.svg'
import P from '../../assets/p.copy.svg'
import N from '../../assets/n.copy.svg'
import R from '../../assets/r.copy.svg'

type SquareProps = {
  square: {
    square: Square;
    type: PieceSymbol;
    color: Color;
  } | null;
  isWhiteSquare: Boolean

}

const chessAssets: any = {
  q, k, b, p, r, n, B, Q, K, R, P, N
}

function selectAsset(type: any, color: any) {
  return color == "w" ? type.toUpperCase() : type
}

//so aspect ratio of image bw  height and width was  for 103 px have 50 :70

export default function SquareBoard({ square, isWhiteSquare }: SquareProps) {

  return (
    <div className={`${isWhiteSquare ? "bg-greenboard" : "bg-whiteboard"}  h-full justify-center items-center flex  `} >
      {square?.type ? <img style={{objectFit:"contain",}} className='w-14 h-[60%] ' src={chessAssets[selectAsset(square?.type, square.color)]} alt="Description of SVG" /> : null}
    </div>
  )
}