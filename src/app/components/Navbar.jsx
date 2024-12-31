"use client";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed py-4 top-0 w-full z-50">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center text-white font-bold text-2xl">
          <span className="text-4xl">ahsan.</span>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-white font-medium">
          <a
            href="/"
            className="relative group transition duration-500"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></span>
          </a>
          <a
            href="/About"
            className="relative group transition duration-500"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></span>
          </a>
          <a
            href="/Projects"
            className="relative group transition duration-500"
          >
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></span>
          </a>
          <a
            href="/Blogs"
            className="relative group transition duration-500"
          >
            Blogs
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></span>
          </a>
          <a
            href="/Resume"
            className="relative group transition duration-500"
          >
            Resume
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></span>
          </a>
        </div>

        {/* Call to Action Button */}
        <a
          href="/Hire"
          className="hidden md:inline-block bg-gradient-to-r from-orange-700 via-orange-600 to-orange-500 text-white px-4 py-2 rounded-md font-medium hover:bg-white hover:text-white transition duration-300 shadow-md"
        >
          Let’s Talk
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-white focus:outline-none"
          onClick={() => alert("Open mobile menu!")}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
