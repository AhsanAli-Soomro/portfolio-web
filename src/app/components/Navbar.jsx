"use client";
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="z-20 md:pr-4 md:pl-4 text-white fixed top-0 w-full">
      <div className="backdrop-blur-sm max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <a href="/" className="flex items-center space-x-1">
          <img src="/logo.png" alt="Logo" className="h-8" />
          {/* <span className="self-center text-2xl font-semibold pt-3 text-white">HSAN ALI</span> */}
        </a>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-orange-400 rounded-lg md:hidden focus:outline-none"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto ${isOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <ul className="font-normal text-sm flex flex-col p-4 md:p-0 text-center md:flex-row md:space-x-10 md:mt-0 md:border-0">
            <li>
              <a href="/" className="block py-2 px-3 text-white rounded  md:border-0 hover:text-orange-400 md:p-0 " aria-current="page">Home</a>
            </li>
            <li>
              <a href="/Projects" className="block py-2 px-3 text-white rounded  md:border-0 hover:text-orange-400 md:p-0 " aria-current="page">Projects</a>
            </li>
            <li>
              <a href="/Blogs" className="block py-2 px-3 text-white rounded  md:border-0 hover:text-orange-400 md:p-0 " aria-current="page">Blogs</a>
            </li>
            <li>
              <a href="/Resume" className="block py-2 px-3 text-white rounded   md:border-0 hover:text-orange-400 md:p-0 ">Resume</a>
            </li>
            <li>
              <a href="/About" className="block py-2 px-3 text-white rounded   md:border-0 hover:text-orange-400 md:p-0 ">About</a>
            </li>
            <li>
              <a href="/Hire" className="block py-2 px-3 text-white rounded   md:border-0 hover:text-orange-400 md:p-0 ">Hire Me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
