"use client";

import React from "react";
import TypewriterText from "./TypewriterText";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="flex justify-center items-center min-h-screen"
      aria-labelledby="hero-heading"
    >
      {/* Background Glow Effects (decorative) */}
      {/* <div className="absolute inset-0 z-0" aria-hidden="true" role="presentation">
        <div className="absolute top-1/3 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-orange-700/40 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-yellow-400/40 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-950/60" />
      </div> */}

      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="grid items-center gap-12 md:grid-cols-2 py-14 sm:py-20">
            {/* Left */}
            <div className="text-center md:text-left">
              <h1
                id="hero-heading"
                className="font-extrabold tracking-tight text-white leading-tight
                           text-[clamp(2rem,4vw,3.5rem)]"
              >
                Ahsan Ali Soomro — Front-End Developer & UI Engineer
              </h1>

              {/* Hidden duplicate for AT */}
              <p className="sr-only">
                I craft visually compelling, user-centered websites and web apps.
              </p>

              {/* Typewriter line (hidden from AT) */}
              <div aria-hidden="true" className="mt-3 text-white/90 text-[clamp(1.25rem,2.8vw,2rem)]">
                <TypewriterText />
              </div>

              <p className="mt-5 text-[clamp(1rem,1.4vw,1.125rem)] text-white/85 leading-relaxed mx-auto md:mx-0 max-w-2xl">
                I design and build fast, accessible, and responsive websites using
                Next.js, React, Tailwind CSS, and modern UI practices. Explore my work,
                resume, and ways to hire me for your next project.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center md:justify-start">
                <Link
                  href="/Hire"
                  aria-label="Start a project with Ahsan Ali Soomro"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-orange-800 font-semibold shadow-lg
                             hover:bg-gray-100 hover:scale-[1.03] active:scale-[0.99] transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-orange-300"
                >
                  Start a project
                </Link>
                <Link
                  href="/Resume"
                  aria-label="View Ahsan Ali Soomro resume"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-white/80 text-white font-semibold shadow-lg
                             hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-orange-400"
                >
                  View resume
                </Link>
              </div>

              {/* Social proof / tech badges */}
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 justify-center md:justify-start text-white/70">
                <span className="text-sm">Trusted by 12+ clients</span>
                <span className="h-1 w-1 rounded-full bg-white/40" aria-hidden="true" />
                <span className="text-sm">Next.js • React • Tailwind • Framer Motion</span>
              </div>
            </div>

            {/* Right: Portrait */}
            <div className="relative flex justify-center md:justify-end">
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-88 md:h-88 rounded-full overflow-hidden ring-2 ring-white/30 shadow-2xl
                              transition-transform duration-300 hover:scale-[1.03]">
                <Image
                  src="/ahsana.png"
                  alt="Portrait of Ahsan Ali Soomro, Front-End Developer"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                  sizes="(max-width: 768px) 15rem, (max-width: 1024px) 20rem, 24rem"
                />
              </div>

              {/* Decorative glows */}
              <div className="absolute -top-4 -right-4 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-orange-400/60 blur-2xl" aria-hidden="true" />
              <div className="absolute bottom-4 left-4 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-yellow-400/60 blur-2xl" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
