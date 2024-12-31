"use client";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setActiveLink(window.location.pathname);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed py-4 top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center text-white font-bold text-2xl">
          <span className="text-4xl">ahsan.</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 text-white font-medium">
          {[
            { name: "Home", href: "/" },
            { name: "About", href: "/About" },
            { name: "Projects", href: "/Projects" },
            { name: "Blogs", href: "/Blogs" },
            { name: "Resume", href: "/Resume" },
          ].map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className={`relative group transition duration-500 ${
                activeLink === link.href ? "text-white" : ""
              }`}
            >
              {link.name}
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-500 ${
                  activeLink === link.href ? "w-full" : "w-0"
                } group-hover:w-full`}
              ></span>
            </a>
          ))}
        </div>

        {/* Call to Action Button */}
        <a
          href="/Hire"
          className="hidden md:inline-block bg-gradient-to-r from-orange-700 via-orange-600 to-orange-500 text-white px-4 py-2 rounded-md font-medium hover:bg-white hover:text-orange-600 transition duration-300 shadow-md"
        >
          Let’s Talk
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
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

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } backdrop-blur-sm text-white shadow-md`}
      >
        {[
          { name: "Home", href: "/" },
          { name: "About", href: "/About" },
          { name: "Projects", href: "/Projects" },
          { name: "Blogs", href: "/Blogs" },
          { name: "Resume", href: "/Resume" },
          { name: "Let’s Talk", href: "/Hire" },
        ].map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            className={`block px-4 py-2 hover:bg-orange-600 transition duration-300 ${
              activeLink === link.href ? "text-white" : ""
            }`}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
