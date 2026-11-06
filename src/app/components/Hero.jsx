"use client";

import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight, IconBrandGithub, IconBrandLinkedin, IconDownload } from "@tabler/icons-react";
import { siteConfig } from "@/config/site";

function DevToIcon({ size = 19, className = "" }) {
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

export default function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-layout">
        <div className="hero-copy">
          <div className="availability hero-animate"><span /> Available for select projects</div>
          <p className="hero-kicker hero-animate">Full Stack Developer · UI Engineer</p>
          <h1 id="hero-heading" className="hero-title hero-animate">
            Ahsan Ali Soomro
          </h1>
          <p className="hero-description hero-animate">
            Ahsan Ali Soomro (Ahsan Soomro) is a Full Stack Developer from Hyderabad, Pakistan, specializing in Next.js, React, Node.js, and TypeScript. Crafting fast, scalable, and intuitive web products from conception to production.
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
            <Image
              src="/ahsana.png"
              alt="Ahsan Ali Soomro (Ahsan Soomro) - Full Stack Developer"
              fill
              priority
              sizes="(max-width: 768px) 85vw, 42vw"
              className="portrait-image"
            />
            <div className="portrait-shade" />
            <div className="code-chip chip-one"><i /> Next.js / TypeScript</div>
            <div className="code-chip chip-two">Full Stack · React</div>
          </div>
          <div className="social-rail" aria-label="Social profiles">
            <a
              href={siteConfig.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub - Ahsan Ali Soomro"
            >
              <IconBrandGithub size={19} />
            </a>
            <a
              href={siteConfig.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn - Ahsan Ali Soomro"
            >
              <IconBrandLinkedin size={19} />
            </a>
            <a
              href={siteConfig.socialLinks.devto}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DEV.to - Ahsan Ali Soomro"
            >
              <DevToIcon size={18} />
            </a>
            <span />
          </div>
        </div>
      </div>
      <a href="#services" className="scroll-label"><span /> Scroll to discover</a>
    </section>
  );
}
