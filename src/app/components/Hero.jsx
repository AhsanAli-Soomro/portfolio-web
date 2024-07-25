"use client";
import React from 'react';
import TypewriterText from './TypewriterText';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative flex flex-col md:flex-row bg-black bg-cover bg-center ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2">
            <h1 className="text-3xl h-14 sm:h-10 text-orange-400 mb-4 md:mb-6">
              <TypewriterText />
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white mb-4 md:mb-6">
              Creating visually stunning and user-friendly websites is my passion. With a keen eye for design and a commitment to innovation, I transform ideas into digital experiences that captivate and engage.
            </p>
            <a href="/Hire" className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300 inline-block">
              Hire me
            </a>
          </div>
          <div className="relative md:w-1/2 flex justify-end">
            <div className="relative w-68 h-68 flex items-center justify-center">
              <Image className="relative z-10 shadow-inner " src="/aahsan.png" width={500} height={500} alt="Ahsan" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
