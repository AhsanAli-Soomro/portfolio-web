"use client";
import React from "react";
import TypewriterText from "./TypewriterText";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative flex flex-col md:flex-row h-screen bg-gradient-to-br from-orange-800 via-orange-600 to-orange-500 bg-cover bg-center overflow-hidden">
      <div className="container mx-auto px-6 sm:px-12 lg:px-16 py-20 relative z-10 flex flex-col justify-center">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-12">
          {/* Left Section */}
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 leading-tight">
              <TypewriterText />
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed">
              Crafting visually compelling and user-centered websites that
              inspire and engage. With innovation and precision, I transform
              ideas into immersive digital experiences.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="/Hire"
                aria-label="Hire me"
                className="px-4 sm:px-6 py-2 sm:py-3 bg-white text-orange-700 font-semibold rounded-lg shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 focus:ring-4 focus:ring-orange-300"
              >
                Hire me
              </a>
              <a
                href="/Resume"
                aria-label="View Portfolio"
                className="px-4 sm:px-6 py-2 sm:py-3 border-2 border-white text-white font-semibold rounded-lg shadow-lg hover:bg-orange-800 hover:border-orange-600 transition-all duration-300 focus:ring-4 focus:ring-orange-400"
              >
                View Resume
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative md:w-1/3 flex justify-center md:justify-end">
            <div className="relative w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden transform hover:scale-105 transition-transform duration-500">
              <Image
                src="/ahsana.png"
                layout="fill"
                objectFit="cover"
                alt="Profile of Ahsan"
                className="z-10"
              />
              {/* Subtle Glow */}
              <div className="absolute inset-0 rounded-full bg-orange-500 blur-lg opacity-20"></div>
            </div>
            {/* Glow Effects */}
            <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-orange-400 blur-lg opacity-50"></div>
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-yellow-400 blur-lg opacity-50"></div>
          </div>
        </div>
      </div>

      {/* Background Glow Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/3 w-60 h-60 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-orange-700 rounded-full blur-[150px] opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/3 w-60 h-60 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-yellow-500 rounded-full blur-[150px] opacity-30"></div>
      </div>

      {/* Gradient Overlay for Additional Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-900 opacity-50 z-0"></div>
    </div>
  );
};

export default Hero;
