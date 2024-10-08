"use client"
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypewriterText = () => {
  return (
    <div>
      <h1>
        <Typewriter
          words={['Hello, I am Ahsan Ali . . .', 'I am a Web Designer . . .', 'Welcome to my Portfolio']}
          loop={true}
          cursor
          cursorStyle='|'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
    </div>
  );
};

export default TypewriterText;
