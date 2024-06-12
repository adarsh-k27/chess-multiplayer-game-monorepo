import Navbar from '../components/Navbar';
import {  Outlet } from 'react-router-dom';

export const PublicLayout = () => {

    return (
        <>

            <Navbar />
            <div className="flex h-screen border-collapse overflow-hidden">
                {/* <Sidebar /> */}
                <main className="flex-1 overflow-y-scroll overflow-x-hidden pt-16 bg-black pb-1 chess-board ">
                    <Outlet />
                </main>
            </div>
            {/* <Footer /> */}
        </>
    )
};