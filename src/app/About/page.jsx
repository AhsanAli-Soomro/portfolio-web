"use client"
import React from 'react';
import Cards from '../components/Cards';
import TypewriterText from '../components/TypewriterText';

const About = () => {
    return (
        <div className="relative flex flex-col bg-black bg-cover bg-center min-h-screen">
            <div className="absolute inset-0 opacity-50"></div>
            <div className="container mx-auto px-6 py-24 relative z-10">
                <h1 className="text-5xl text-orange-400 mb-6">
                    <TypewriterText />
                </h1>
                <p className="text-xl text-white mb-6">
                    I am Ahsan, a passionate web designer dedicated to creating visually stunning and user-friendly websites. With a keen eye for design and a commitment to innovation, I transform ideas into digital experiences that captivate and engage.
                </p>
                <div className="flex flex-col lg:flex-row justify-between items-start">
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-4xl text-orange-400 mb-4">My Expertise</h2>
                        <p className="text-lg text-white mb-6">
                            From responsive design to UI/UX prototyping, I cover a wide range of web design aspects to ensure your website stands out. My process includes thorough research, detailed wireframing, and iterative testing to deliver the best results.
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-full'>

                <Cards />
            </div>
        </div>
    );
};

export default About;
