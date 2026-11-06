"use client";

import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight, IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react";
import Cards from "./Cards";
import Reveal from "./Reveal";
import { siteConfig } from "@/config/site";

function DevToIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M7.42 10.05c-.18-.12-.46-.23-.84-.23H5.13v4.37h1.43c.39 0 .68-.1.86-.24.23-.17.35-.47.35-.93v-2.04c0-.46-.12-.76-.35-.93zm-1.3 2.99v-1.85h.41c.28 0 .42.14.42.43v.99c0 .29-.14.43-.42.43h-.41zM20.89 3H3.11A2.11 2.11 0 0 0 1 5.11v13.78A2.11 2.11 0 0 0 3.11 21h17.78A2.11 2.11 0 0 0 23 18.89V5.11A2.11 2.11 0 0 0 20.89 3zM8.34 13.91c-.34.49-.9.76-1.63.76H4.13V9.33h2.62c.71 0 1.25.26 1.59.74.27.38.41.9.41 1.55v.74c0 .65-.14 1.17-.41 1.55zm4.84-2.82h-1.92v.87h1.79v.99h-1.79v.91h1.92v1.01h-2.92V9.33h2.92v1.76zm6.69 0l-1.39 3.58h-1.07l-1.39-3.58V14.8h-1.01V9.33h1.49l1.45 3.73 1.45-3.73h1.47v5.47h-1.01v-3.71z" />
    </svg>
  );
}

const stack = [
  "Next.js",
  "React",
  "Node.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "REST APIs",
  "PostgreSQL / MySQL",
  "UI Systems",
  "Accessibility",
  "Performance",
  "AWS",
];

export default function About() {
  return (
    <main className="inner-page">
      <section className="about-hero page-container" aria-labelledby="about-heading">
        <div className="about-copy">
          <span className="section-index hero-animate">About / 01</span>
          <h1 id="about-heading" className="page-title hero-animate">
            Ahsan Ali Soomro
          </h1>
          <p className="page-lead hero-animate">
            Ahsan Ali Soomro (Ahsan Soomro) is a Full Stack Developer and UI Engineer based in Hyderabad, Pakistan, specializing in modern web ecosystems including Next.js, React, Node.js, and TypeScript. He bridges modern design systems with robust software architecture to craft intuitive, accessible, and high-performance digital products.
          </p>
          <div className="about-actions hero-animate">
            <Link href="/Hire" className="button-primary">Work with me <IconArrowUpRight size={18} /></Link>
            <a href={`mailto:${siteConfig.email}`} className="button-ghost">Say hello <IconMail size={17} /></a>
          </div>
          <div className="about-socials hero-animate" aria-label="Professional Profiles">
            <a
              href={siteConfig.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile of Ahsan Ali Soomro"
            >
              <IconBrandLinkedin /> LinkedIn
            </a>
            <a
              href={siteConfig.socialLinks.devto}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DEV.to profile of Ahsan Ali Soomro"
            >
              <DevToIcon /> DEV.to
            </a>
            <a
              href={siteConfig.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile of Ahsan Ali Soomro"
            >
              <IconBrandGithub /> GitHub
            </a>
          </div>
        </div>
        <div className="about-portrait hero-animate">
          <div className="about-image-wrap">
            <Image
              src="/ahsan.png"
              alt="Ahsan Ali Soomro (Ahsan Soomro) - Full Stack Developer based in Hyderabad, Pakistan"
              fill
              priority
              className="about-image"
            />
          </div>
          <div className="experience-badge"><strong>4+</strong><span>Years of<br />experience</span></div>
        </div>
      </section>

      <section className="page-container about-story" aria-labelledby="story-heading">
        <Reveal className="story-heading">
          <span className="section-index">The story / 02</span>
          <h2 id="story-heading">Crafting software that balances elegance, reliability, and scale.</h2>
        </Reveal>
        <Reveal className="story-copy" delay={100}>
          <p>
            With more than four years of hands-on software development experience, my passion lies in transforming sophisticated concepts into smooth, high-impact web applications. Based in Hyderabad, Pakistan, I work with clients and engineering teams globally, taking ideas from wireframe to reliable, production-ready software.
          </p>
          <p>
            My primary technology stack revolves around Next.js, React, Node.js, TypeScript, and Tailwind CSS, backed by solid database design and cloud deployments. I place high value on Core Web Vitals, accessible UI components (WCAG standards), and maintainable architecture that scales gracefully as products grow.
          </p>
          <p>
            Throughout my journey, I have delivered over 25 projects ranging from doctor-patient clinic platforms and AI tools to e-commerce portals and real-time dashboards. Every project is crafted with care, emphasizing user experience, code cleanliness, and measurable business outcomes.
          </p>
        </Reveal>
      </section>

      <section className="page-container stack-section" aria-labelledby="toolkit-heading">
        <Reveal>
          <span className="section-index">Toolkit / 03</span>
          <h2 id="toolkit-heading" className="subpage-title">Technologies I work with.</h2>
        </Reveal>
        <div className="stack-grid">
          {stack.map((item, i) => (
            <Reveal className="stack-pill" delay={(i % 4) * 80} key={item}>
              <span>{i < 9 ? `0${i + 1}` : i + 1}</span>
              {item}
            </Reveal>
          ))}
        </div>
      </section>
      <Cards />
    </main>
  );
}
