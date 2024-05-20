import {flipChessBoardAtom} from "@repo/store/chessboard"
import {useRecoilState} from 'recoil'
import LoginScreen from './pages/login';
function App() {
  const [flip,setFlip]=useRecoilState(flipChessBoardAtom)
  
  console.log('====================================');
  console.log(flip,setFlip);
  console.log('====================================');
  
  return (
    <LoginScreen />
  )
}

export default App
