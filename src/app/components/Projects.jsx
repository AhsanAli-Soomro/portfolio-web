"use client";

import Link from "next/link";
import Image from "next/image";
import { IconArrowUpRight } from "@tabler/icons-react";
import { projectsData } from "./data/projects";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <main className="inner-page">
      <header className="page-header page-container">
        <span className="section-index hero-animate">Portfolio / Selected work</span>
        <h1 className="page-title hero-animate">Digital products,<br /><em>built to perform.</em></h1>
        <p className="page-lead hero-animate">A selection of web platforms, applications and interface systems I&apos;ve designed and developed.</p>
      </header>
      <section className="page-container all-projects-grid">
        {projectsData.map((project, index) => (
          <Reveal as="article" className="portfolio-card" delay={(index % 3) * 100} key={project.slug}>
            <Link href={`/Projects/${project.slug}`}>
              <div className="portfolio-image"><Image src={project.image} alt={project.title} fill className="project-image" /><span className="project-open"><IconArrowUpRight /></span></div>
              <div className="portfolio-info"><span>0{index + 1}</span><h2>{project.title}</h2><p>{project.description}</p></div>
            </Link>
          </Reveal>
        ))}
      </section>
    </main>
  );
}
