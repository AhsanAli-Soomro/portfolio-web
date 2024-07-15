"use client"
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="backdrop-blur-sm z-20 text-slate-400 fixed top-0 w-full">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center text-2xl font-bold">

            <a href='/' className="flex items-center">
              <img src="/logo.png" alt="Logo" className="w-14 h-10 mr-2" />
              <span className='text-white'>AHSAN ALI</span>
            </a>

        </div>
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
            </svg>
          </button>
        </div>
        <div className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="lg:flex lg:justify-between lg:items-center text-lg pt-4 lg:pt-0">
            <li className="lg:px-4 py-2 lg:py-0">
              <a href="/">Home</a>
            </li>
            <li className="lg:px-4 py-2 lg:py-0">
              <a href="/Resume">Resume</a>
            </li>
            <li className="lg:px-4 py-2 lg:py-0">
              <a href="/Hire">Hire Me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
