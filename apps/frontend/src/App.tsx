import { flipChessBoardAtom } from "@repo/store/chessboard"
import { useRecoilState } from 'recoil'
import LoginScreen from './pages/login';
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
//import {useUser} from '@repo/store/useUser'



function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen />}></Route>
        <Route path="/game/random" element={<div>Game</div>} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

function App() {
  const [flip, setFlip] = useRecoilState(flipChessBoardAtom)


  // const BACKEND_URL="http://localhost:5000"
  // async function getToken(){
  //   try {
  //     const response = await fetch(`${BACKEND_URL}/auth/refresh`, {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       credentials: 'include',
  //     });
  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log("Datas",data);

  //       return data;
  //     }
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }

  // useEffect(()=>{
  //    getToken()
  // },[getToken])

  return (
    <RouterApp />
  )
}

export default App
