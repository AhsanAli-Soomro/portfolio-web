import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypewriterTextAbout = ({ text }) => {
    return (

        <Typewriter
            options={{
                strings: ['About Me'],
                autoStart: true,
                loop: true,
            }}
        />
        
    );
};

export default TypewriterTextAbout;
