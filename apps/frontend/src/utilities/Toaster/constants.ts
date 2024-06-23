export const messages={
    INIT_GAME:"INIT_GAME",
    GAME_ADDED:"GAME_ADDED",
    SELF_ALERT:'SELF_ALERT',
    JOIN_GAME:"JOIN_GAME"
}
const arrayOfMessages=Object.values(messages)
export const  typeValue=arrayOfMessages.reduce((acc,curr,index)=>{
    if(index!== arrayOfMessages.length -1 ){
        acc += curr +"| "
    }else{
        acc += curr
    }
    return acc;

},"" )

export type TYPES_VALUET= typeof typeValue