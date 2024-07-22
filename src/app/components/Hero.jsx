"use client";
import React from 'react';
import TypewriterText from './TypewriterText';

const Hero = () => {
  return (
    <div className="relative flex flex-col md:flex-row bg-black bg-cover bg-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <h1 className="text-3xl h-14 sm:text-4xl md:text-5xl text-orange-400 mb-4 md:mb-6">
          <TypewriterText />
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white mb-4 md:mb-6">
          Creating visually stunning and user-friendly websites is my passion. With a keen eye for design and a commitment to innovation, I transform ideas into digital experiences that captivate and engage.
        </p>
        <a href='/Hire' className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-600 duration-300">
          Hire me
        </a>
      </div>
    </div>
  );
};

export default Hero;
