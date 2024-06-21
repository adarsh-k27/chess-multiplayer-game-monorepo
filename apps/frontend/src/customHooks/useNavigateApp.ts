import  { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

function useNavigateApp() {

  const navigate =useNavigate()

  const navigateFn=useCallback((...args:string[])=>{
     navigate(args[0])
  },[navigate])

 return navigateFn
}

export default useNavigateApp
