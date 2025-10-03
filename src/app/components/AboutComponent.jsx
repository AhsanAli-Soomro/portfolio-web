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
import Link from "next/link";

const About = () => {
  return (
    <main className="relative bg-gradient-to-br from-orange-800 via-orange-600 to-orange-500 overflow-hidden">
      {/* Hero / Intro */}
      <section
        aria-labelledby="about-heading"
        className="container mx-auto px-6 sm:px-12 lg:px-16 py-16 sm:py-20 lg:py-28 flex flex-col justify-center items-center relative z-10 min-h-screen text-center"
      >
        {/* SEO-friendly static H1 */}
        <h1
          id="about-heading"
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-3 sm:mb-4 leading-tight"
        >
          About Ahsan Ali Soomro
        </h1>

        {/* Visual typewriter only (no duplicate content for crawlers) */}
        <div
          aria-hidden="true"
          className="text-2xl sm:text-3xl lg:text-4xl text-white/90 mb-6"
        >
          <TypewriterText />
        </div>

        <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-4 sm:mb-6 leading-relaxed max-w-2xl">
          I’m <span className="font-semibold">Ahsan Ali Soomro</span> — a{" "}
          <strong>Front-End Developer</strong> and <strong>UI Engineer</strong>{" "}
          focused on building fast, accessible, and beautiful{" "}
          <strong>Next.js</strong> & <strong>React</strong> web experiences with{" "}
          <strong>Tailwind CSS</strong>.
        </p>
        <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl mb-8 sm:mb-10">
          I design responsive interfaces, craft clean component systems, and
          care about performance (Core Web Vitals) and usability. Explore my{" "}
          <Link
            href="/Resume"
            className="underline decoration-white/60 underline-offset-4 hover:decoration-white"
          >
            resume
          </Link>{" "}
          or{" "}
          <Link
            href="/Hire"
            className="underline decoration-white/60 underline-offset-4 hover:decoration-white"
          >
            hire me
          </Link>{" "}
          for your next project.
        </p>

        {/* Social Media Links */}
        <nav aria-label="Social links" className="flex justify-center mt-4 sm:mt-6 lg:mt-8 space-x-4 sm:space-x-6">
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
              rel="me noopener noreferrer"
              className="text-white hover:text-orange-800 transition duration-300"
              aria-label={social.label}
              title={social.label}
            >
              <FontAwesomeIcon icon={social.icon} size="2x" />
            </a>
          ))}
        </nav>
      </section>

      {/* Expertise / Skills cards */}
      <section aria-labelledby="expertise-heading" className="relative z-10">
        <h2 id="expertise-heading" className="sr-only">
          Expertise
        </h2>
        <Cards />
      </section>

      {/* Glow Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-orange-700 rounded-full blur-[150px] opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-yellow-500 rounded-full blur-[150px] opacity-30"></div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-900 opacity-50 pointer-events-none"></div>
    </main>
  );
};

export default About;
