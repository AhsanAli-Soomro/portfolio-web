"use client";
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypewriterText = () => {
  return (
    <div className="w-full overflow-hidden">
      <h1 className="text-white font-extrabold leading-tight truncate md:whitespace-nowrap">
        <Typewriter
          words={[
            'Hello, I am Ahsan',
            'Web Designer',
            'Creative Developer',
            'Let’s Build Together'
          ]}
          loop={true}
          cursor
          cursorStyle="."
          typeSpeed={70}
          deleteSpeed={30}
          delaySpeed={1000}
        />
      </h1>
    </div>
  );
};

export default TypewriterText;
