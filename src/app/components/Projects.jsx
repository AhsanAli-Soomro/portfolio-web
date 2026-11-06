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
        <h1 className="page-title hero-animate">Projects by<br /><em>Ahsan Ali Soomro</em></h1>
        <p className="page-lead hero-animate">
          A showcase of production web applications, full-stack systems, and digital platforms engineered by Ahsan Ali Soomro (Ahsan Soomro).
        </p>
      </header>
      <section className="page-container all-projects-grid" aria-label="Projects list">
        {projectsData.map((project, index) => (
          <Reveal as="article" className="portfolio-card" delay={(index % 3) * 100} key={project.slug}>
            <Link href={`/Projects/${project.slug}`}>
              <div className="portfolio-image">
                <Image
                  src={project.image}
                  alt={`${project.title} — Web application by Ahsan Ali Soomro`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="project-image"
                />
                <span className="project-open"><IconArrowUpRight /></span>
              </div>
              <div className="portfolio-info">
                <span>0{index + 1}</span>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>
    </main>
  );
}
