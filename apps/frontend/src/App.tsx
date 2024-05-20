import {flipChessBoardAtom} from "@repo/store/chessboard"
import {useRecoilState} from 'recoil'
import LoginScreen from './pages/login';
import { useEffect } from "react";
//import {useUser} from '@repo/store/useUser'

function App() {
  const [flip,setFlip]=useRecoilState(flipChessBoardAtom)
  
  
  const BACKEND_URL="http://localhost:5000"
  async function getToken(){
    try {
      const response = await fetch(`${BACKEND_URL}/auth/refresh`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Datas",data);
        
        return data;
      }
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(()=>{
     getToken()
  },[getToken])
  
  return (
    <LoginScreen />
  )
}

export default App
