
// import { useNavigate } from 'react-router-dom';

import { useSocket } from '../customHooks/useSocket';
import { useNavigate } from 'react-router-dom';
import {useSocketError} from '../customHooks/useSockeTError'
import { useEffect } from 'react';
import { isToaster } from '../utilities/Toaster/rxjs';

// Import the chess board image, assuming it's located in the src/assets folder
// import chessBoardImage from './assets/chess-board.jpg';

const LandingPage = () => {
    const navigate=useNavigate()
    const socket = useSocket()
    const {error,handleError}=useSocketError(socket)
    
    useEffect(()=>{
       if(error){
        isToaster.next({
            open:true,
            message:typeof error=="string" ? error :""
        })
        handleError(error)
       }
    },[error,handleError])

    
    


    if(!socket){
        
        return <p className='text-white'>CONNECTING...</p>
    }
    return (
        <div className="flex flex-col md:flex-row justify-center items-center min-h-screen gap-6">
            <div className="md:w-72 h-80 bg-cover bg-center" style={{ backgroundImage: `url("/chessboard.jpeg")` }}>
            </div>
            <div className="md:w-1/2 flex flex-col justify-center items-center bg-transparent p-4 md:p-12 text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Play Chess Online</h1>
                <p className="mb-4 text-white">Join players around the world in the ultimate battle of minds. Whether you're a beginner or a seasoned pro, our platform offers games and tournaments that fit your skill level.</p>
                <button onClick={() => {
                    navigate('/game/random')
                    
                }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 md:px-8 rounded">
                    Play Online
                </button>
            </div>
        </div>


    );
};

export default LandingPage;
