"use client";
import React from "react";
import TypewriterText from "./TypewriterText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Cards from "./Cards";

const About = () => {
  return (
    <div className="relative bg-gradient-to-br from-orange-800 via-orange-600 to-orange-500 overflow-hidden">
      {/* Hero Section */}
      <div className="container mx-auto px-6 sm:px-12 lg:px-16 py-20 flex flex-col justify-center items-center relative z-10 min-h-screen text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight">
          <TypewriterText />
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-6 leading-relaxed">
          Hi, I’m <span className="font-semibold">Ahsan Ali</span>, a web
          designer with a passion for creating beautiful and functional digital
          experiences. I bring innovation, precision, and a unique perspective
          to every project I work on.
        </p>
        <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
          Let’s build something amazing together. From responsive designs to
          seamless user experiences, I ensure every detail is crafted to
          perfection.
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center mt-8 space-x-6">
          {[
            {
              icon: faLinkedin,
              href: "https://www.linkedin.com/in/ahsanali-soomro",
              label: "LinkedIn",
            },
            {
              icon: faEnvelope,
              href: "mailto:ahsanalisoomro147@gmail.com",
              label: "Email",
            },
            {
              icon: faFacebook,
              href: "https://www.facebook.com/ahsanali.king.92",
              label: "Facebook",
            },
            {
              icon: faInstagram,
              href: "https://www.instagram.com/soomroahsan_ali/",
              label: "Instagram",
            },
            {
              icon: faTwitter,
              href: "http://www.twitter.com/AhsanAli3860",
              label: "Twitter",
            },
            {
              icon: faGithub,
              href: "https://www.github.com/AhsanAli-Soomro",
              label: "GitHub",
            },
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300 transition duration-300"
              aria-label={social.label}
            >
              <FontAwesomeIcon icon={social.icon} size="2x" />
            </a>
          ))}
        </div>
      </div>

      {/* Expertise Section */}
      <div className="relative z-10">
        <Cards />
      </div>

      {/* Glow Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-orange-700 rounded-full blur-[200px] opacity-30"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-yellow-500 rounded-full blur-[200px] opacity-30"></div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-900 opacity-50 pointer-events-none"></div>
    </div>
  );
};

export default About;
