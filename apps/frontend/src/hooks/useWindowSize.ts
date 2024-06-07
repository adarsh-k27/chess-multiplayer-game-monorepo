import { useLayoutEffect, useState } from "react";

export function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    const handleSize=()=>{
        setWindowSize({width:window.innerWidth,height:window.innerHeight})
    }

    useLayoutEffect(()=>{
       handleSize()
       window.addEventListener("resize",handleSize)

       return()=> window.removeEventListener("resize",handleSize)
    },[])
    return windowSize;
}