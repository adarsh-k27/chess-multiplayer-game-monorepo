
import LoginScreen from './pages/login';
import { Suspense } from "react";
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { Layout } from "./components/Layout";
import { Loader } from "./components/Loader";
import { useUser } from '@repo/store/useUser';
//import {useUser} from '@repo/store/useUser'

function RouterApp() {
  const user=useUser()
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={Boolean(user) ?  <Navigate to={"/"} /> : <Layout children={<LoginScreen />} />} />
        <Route path="/game/random" element={!Boolean(user) ?  <Navigate to={"/login"} />  : <div>Game</div>} />
        <Route path="/" element={<Layout><LandingPage /></Layout>} />
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
