"use client";

import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight, IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react";
import Cards from "./Cards";
import Reveal from "./Reveal";

const stack = ["React", "Next.js", "JavaScript", "Tailwind CSS", "UI Systems", "Accessibility", "Performance", "REST APIs"];

export default function About() {
  return (
    <main className="inner-page">
      <section className="about-hero page-container">
        <div className="about-copy">
          <span className="section-index hero-animate">About / 01</span>
          <h1 className="page-title hero-animate">Developer by craft.<br /><em>Problem solver</em> by nature.</h1>
          <p className="page-lead hero-animate">I&apos;m Ahsan Ali Soomro, a frontend developer and UI engineer who enjoys turning complex product ideas into simple, polished digital experiences.</p>
          <div className="about-actions hero-animate">
            <Link href="/Hire" className="button-primary">Work with me <IconArrowUpRight size={18} /></Link>
            <a href="mailto:ahsanalisoomro147@gmail.com" className="button-ghost">Say hello <IconMail size={17} /></a>
          </div>
          <div className="about-socials hero-animate">
            <a href="https://github.com/AhsanAli-Soomro"><IconBrandGithub /> GitHub</a>
            <a href="https://www.linkedin.com/in/ahsanali-soomro"><IconBrandLinkedin /> LinkedIn</a>
          </div>
        </div>
        <div className="about-portrait hero-animate">
          <div className="about-image-wrap"><Image src="/ahsan.png" alt="Ahsan Ali Soomro" fill priority className="about-image" /></div>
          <div className="experience-badge"><strong>4+</strong><span>Years of<br />experience</span></div>
        </div>
      </section>

      <section className="page-container about-story">
        <Reveal className="story-heading"><span className="section-index">The story / 02</span><h2>I care about the details that make software feel effortless.</h2></Reveal>
        <Reveal className="story-copy" delay={100}>
          <p>My work sits at the intersection of design and engineering. I translate visual direction into reusable components, thoughtful interactions and fast experiences that work for everyone.</p>
          <p>I currently build products with React and Next.js, collaborating across design, product and backend teams. Beyond shipping features, I care deeply about maintainability, accessibility and performance.</p>
        </Reveal>
      </section>

      <section className="page-container stack-section">
        <Reveal><span className="section-index">Toolkit / 03</span><h2 className="subpage-title">Technologies I work with.</h2></Reveal>
        <div className="stack-grid">{stack.map((item, i) => <Reveal className="stack-pill" delay={(i % 4) * 80} key={item}><span>0{i + 1}</span>{item}</Reveal>)}</div>
      </section>
      <Cards />
    </main>
  );
}
