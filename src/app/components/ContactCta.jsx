"use client";

import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import Reveal from "./Reveal";

export default function ContactCta() {
  return (
    <section id="contact" className="contact-section">
      <Reveal className="contact-panel">
        <div className="contact-orb" aria-hidden="true" />
        <span className="section-index">03 / Let&apos;s collaborate</span>
        <h2>Have an idea?<br /><em>Let&apos;s make it real.</em></h2>
        <p>I&apos;m always interested in ambitious products, thoughtful teams and work that makes a difference.</p>
        <Link href="/Hire" className="button-light">Start a conversation <IconArrowUpRight size={18} /></Link>
      </Reveal>
    </section>
  );
}
