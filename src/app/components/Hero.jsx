"use client"
import Image from 'next/image';
import React from 'react';
import TypewriterText from './TypewriterText';
import Cards from './Cards';

const Hero = () => {
  return (
    <div className="relative flex flex-col md:flex-row p-10 md:p-10 bg-black bg-cover bg-center h-screen">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-52 relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-orange-400 mb-4 md:mb-6">
          <TypewriterText/>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white mb-4 md:mb-6">
          Creating visually stunning and user-friendly websites is my passion. With a keen eye for design and a commitment to innovation, I transform ideas into digital experiences that captivate and engage.
        </p>
        <a href='/Hire' className="bg-orange-400 text-white px-3 py-2 md:px-4 md:py-2 rounded-md hover:bg-orange-600 duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Hire me
        </a>
      </div>
    </div>
  );
};

export default Hero;
