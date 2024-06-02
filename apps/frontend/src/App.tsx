
import LoginScreen from './pages/login';
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { Layout } from "./components/Layout";
import { Loader } from "./components/Loader";
//import {useUser} from '@repo/store/useUser'

function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Layout><LoginScreen /></Layout>}></Route>
        <Route path="/game/random" element={<div>Game</div>} />
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
