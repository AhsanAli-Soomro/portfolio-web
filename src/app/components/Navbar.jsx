"use client";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed py-4 bg-white top-0 w-full z-50 shadow-lg">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center text-orange-800 font-bold text-2xl">
          <span className="text-4xl">ahsan.</span>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-orange-800 font-medium">
          <a
            href="/"
            className="hover:text-yellow-300 transition duration-300"
          >
            Home
          </a>
          <a
            href="/About"
            className="hover:text-yellow-300 transition duration-300"
          >
            About
          </a>
          <a
            href="/Projects"
            className="hover:text-yellow-300 transition duration-300"
          >
            Projects
          </a>
          <a
            href="/Blogs"
            className="hover:text-yellow-300 transition duration-300"
          >
            Blogs
          </a>
          <a
            href="/Resume"
            className="hover:text-yellow-300 transition duration-300"
          >
            Resume
          </a>
        </div>

        {/* Call to Action Button */}
        <a
          href="/Hire"
          className="hidden md:inline-block bg-gradient-to-r from-orange-800 via-orange-600 to-orange-500 text-white px-4 py-2 rounded-md font-medium hover:bg-yellow-300 hover:text-orange-800 transition duration-300 shadow-md"
        >
          Let’s Talk
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-orange-800 focus:outline-none"
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
