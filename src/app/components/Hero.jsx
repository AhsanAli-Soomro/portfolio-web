"use client";

import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight, IconBrandGithub, IconBrandLinkedin, IconDownload } from "@tabler/icons-react";

export default function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-layout">
        <div className="hero-copy">
          <div className="availability hero-animate"><span /> Available for select projects</div>
          <p className="hero-kicker hero-animate">Frontend developer · UI engineer</p>
          <h1 id="hero-heading" className="hero-title hero-animate">
            I build digital<br />experiences that<br /><em>feel exceptional.</em>
          </h1>
          <p className="hero-description hero-animate">
            I&apos;m Ahsan — a frontend developer turning complex ideas into fast, accessible and beautifully crafted web products.
          </p>
          <div className="hero-actions hero-animate">
            <Link href="/Projects" className="button-primary">Explore my work <IconArrowUpRight size={18} /></Link>
            <Link href="/Resume" className="button-ghost">View résumé <IconDownload size={17} /></Link>
          </div>
          <div className="hero-meta hero-animate">
            <div><strong>4+</strong><span>Years building</span></div>
            <div><strong>25+</strong><span>Projects shipped</span></div>
            <div><strong>12+</strong><span>Happy clients</span></div>
          </div>
        </div>

        <div className="hero-visual hero-animate">
          <div className="portrait-frame">
            <span className="frame-corner top-left" /><span className="frame-corner bottom-right" />
            <Image src="/ahsana.png" alt="Ahsan Ali Soomro, frontend developer" fill priority
              sizes="(max-width: 768px) 85vw, 42vw" className="portrait-image" />
            <div className="portrait-shade" />
            <div className="code-chip chip-one"><i /> React / Next.js</div>
            <div className="code-chip chip-two">Design → Code</div>
          </div>
          <div className="social-rail">
            <a href="https://github.com/AhsanAli-Soomro" aria-label="GitHub"><IconBrandGithub size={19} /></a>
            <a href="https://www.linkedin.com/in/ahsanali-soomro" aria-label="LinkedIn"><IconBrandLinkedin size={19} /></a>
            <span />
          </div>
        </div>
      </div>
      <a href="#services" className="scroll-label"><span /> Scroll to discover</a>
    </section>
  );
}
