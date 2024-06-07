
import LoginScreen from './pages/login';
import { Suspense } from "react";
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { Layout } from "./components/Layout";
import { Loader } from "./components/Loader";
import { useUser } from '@repo/store/useUser';
import Game from './pages/Game';
//import {useUser} from '@repo/store/useUser'

function RouterApp() {
  const user=useUser()
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={Boolean(user) ?  <Navigate to={"/"} /> : <Layout children={<LoginScreen />} />} />
        {/* <Route path="/game/random" element={!Boolean(user) ?  <Navigate to={"/login"} />  : <Layout children={<Game />} />} /> */}
        <Route path="/game/random" element={ <Layout children={<Game />} />} />
        <Route path="/" element={<Layout children={<LandingPage />} />} />
      </Routes>
    </BrowserRouter>
  )
}

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <RouterApp />
    </Suspense>
  )
}

export default App
