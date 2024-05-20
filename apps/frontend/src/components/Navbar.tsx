import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <img src="/path/to/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
          <h1 className="text-xl font-bold">chess.100x</h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link to="/login" className="text-white text-lg">Play Online</Link>
          <Link to="/login" className="text-white text-lg">Login</Link>
        </nav>
        <div className="md:hidden">
          <Accordion.Root type="single" collapsible>
            <Accordion.Item value="item-1">
              <Accordion.Header>
                <Accordion.Trigger className="text-white text-lg focus:outline-none">
                  ☰
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content>
                <nav className="flex flex-col space-y-2 mt-2">
                  <a href="#play-online" className="text-white text-lg">Play Online</a>
                  <a href="#login" className="text-white text-lg">Login</a>
                </nav>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
