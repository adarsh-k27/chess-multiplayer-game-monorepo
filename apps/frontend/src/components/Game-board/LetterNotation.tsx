

type Props = {
    label:string | number;
    mainColor:number;
    style:string
}

export default function LetterNotation({mainColor,label,style}: Props) {
  return (
    <div className={`absolute ${style} z-50 font-serif font-extrabold text-xl ${mainColor ? "text-whiteboard" : "text-greenboard"} `}>{label}</div>
  )
}