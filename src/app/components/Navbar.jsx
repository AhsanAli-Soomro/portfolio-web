"use client";
import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed py-2 bg-gray-100 top-0 w-full z-50">
      <div className="container mx-auto px-6 py-0 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center text-purple-700 font-bold text-2xl">
          <span className='text-4xl'>ahsan.</span>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-gray-600">
          <a
            href="/"
            className="hover:text-purple-700 transition duration-300"
          >
            Home
          </a>
          <a
            href="/About"
            className="hover:text-purple-700 transition duration-300"
          >
            About
          </a>
          <a
            href="/Projects"
            className="hover:text-purple-700 transition duration-300"
          >
            Projects
          </a>
          <a
            href="/Blogs"
            className="hover:text-purple-700 transition duration-300"
          >
            Blogs
          </a>
          <a
            href="/Resume"
            className="hover:text-purple-700 transition duration-300"
          >
            Resume
          </a>
        </div>

        {/* Call to Action Button */}
        <a
          href="/Hire"
          className="hidden md:inline-block bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-900 transition duration-300"
        >
          Let’s Talk
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-purple-700 focus:outline-none"
          onClick={() => alert('Open mobile menu!')}
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
