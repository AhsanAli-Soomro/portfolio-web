"use client";
import React from 'react';
import TypewriterText from './TypewriterText';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative flex flex-col md:flex-row bg-gradient-to-br from-orange-800 via-orange-600 to-orange-500 bg-cover bg-center overflow-hidden">
      <div className="container mx-auto px-6 sm:px-12 lg:px-16 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-12">
          {/* Left Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              <TypewriterText />
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              Crafting visually compelling and user-centered websites that inspire and engage. With innovation and precision, I transform ideas into immersive digital experiences.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="/Hire"
                aria-label="Hire me"
                className="px-6 py-3 bg-white text-orange-700 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300"
              >
                Hire me
              </a>
              <a
                href="#portfolio"
                aria-label="View Portfolio"
                className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg shadow-lg hover:bg-orange-800 transition-all duration-300"
              >
                View Portfolio
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white transform hover:scale-95 transition-transform duration-500">
              <Image
                src="/ahsana.png"
                layout="fill"
                objectFit="cover"
                alt="Profile of Ahsan"
                className="z-10"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-orange-400 blur-lg opacity-50"></div>
            <div className="absolute bottom-4 left-4 w-32 h-32 rounded-full bg-yellow-400 blur-lg opacity-50"></div>
          </div>
        </div>
      </div>

      {/* Background Glow Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-orange-700 rounded-full blur-[200px] opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-yellow-500 rounded-full blur-[200px] opacity-30"></div>
      </div>

      {/* Gradient Overlay for Additional Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-900 opacity-50 z-0"></div>
    </div>
  );
};

export default Hero;
