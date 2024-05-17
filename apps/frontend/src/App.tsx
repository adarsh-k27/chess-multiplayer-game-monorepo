
import LandingPage from './pages/LandingPage'
import {flipChessBoardAtom} from "@repo/store/chessboard"
import {useRecoilState} from 'recoil'
function App() {
  const [flip,setFlip]=useRecoilState(flipChessBoardAtom)
  
  console.log('====================================');
  console.log(flip,setFlip);
  console.log('====================================');
  
  return (
    <LandingPage />
  )
}

export default App
