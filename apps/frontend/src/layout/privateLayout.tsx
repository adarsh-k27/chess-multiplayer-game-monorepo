
import React from 'react';
import Navbar from '../components/Navbar';
import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '@repo/store/useUser';

export const Layout = ({ children }: { children: React.ReactNode }) => {
    const user = useUser()
  return user ? (
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
  ) : <Navigate to={'/login'}  />
};