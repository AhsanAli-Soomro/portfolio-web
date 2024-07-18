import React from 'react';

const Hero = () => {
  return (
    <div className="relative flex pt-10 flex-row bg-white bg-cover bg-center h-screen">
      <div className="absolute inset-0 opacity-50"></div>
      <div className="container mx-auto px-6 py-52 relative z-10 text-center">
        <h1 className="text-5xl font-bold text-black mb-6">
          Welcome to Our Website
        </h1>
        <p className="text-xl text-black mb-6">
          We are here to provide the best services to our customers.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
      <div className='z-10 rounded-full'>
        <img className='' src="/myimg.jpg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
