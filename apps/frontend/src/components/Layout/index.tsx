
import React from 'react';
import Navbar from '../Navbar';


export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex h-screen border-collapse overflow-hidden">
        {/* <Sidebar /> */}
        <main className="flex-1 overflow-y-scroll overflow-x-hidden pt-16 bg-black pb-1 chess-board ">
          {children}
        </main>
      </div>
      {/* <Footer /> */}
    </>
  );
};