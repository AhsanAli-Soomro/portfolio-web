"use client";
import React from 'react';
import TypewriterText from './TypewriterText';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative pt-10 flex flex-col md:flex-row bg-purple-700 bg-cover bg-center ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20  relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
          <div className="md:w-2/2">
            <h1 className="text-5xl h-14 font-bold sm:h-10 text-white mb-4 md:mb-6">
              <TypewriterText />
            </h1>
            <p className="text-md sm:text-xl md:text-xl text-gray-100 mb-4 md:mb-6">
              Creating visually stunning and user-friendly websites is my passion. With a keen eye for design and a commitment to innovation, I transform ideas into digital experiences that captivate and engage.
            </p>
            <a href="/Hire" className="bg-purple-9 bg-white text-purple-700 px-4 py-2 rounded-md hover:bg-gray-100 transition duration-300 inline-block">
              Hire me
            </a>
          </div>
          <div className="relative md:w-1/2 flex justify-end">
            <div className="relative w-68 h-68 flex items-center justify-center">
              {/* <Image className="relative z-10" src="/aahsan.png" width={500} height={500} alt="Ahsan" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
