"use client";

import Link from "next/link";
import Image from "next/image";
import { IconArrowUpRight } from "@tabler/icons-react";
import { projectsData } from "./data/projects";
import Reveal from "./Reveal";

export default function FeaturedProjects({ limit = 6 }) {
  return (
    <section id="featured-projects" className="content-section projects-section" aria-labelledby="featured-heading">
      <Reveal className="section-heading project-heading">
        <div><span className="section-index">02 / Selected work</span><h2 id="featured-heading">Work that speaks<br />for itself.</h2></div>
        <Link href="/Projects" className="text-link">View all projects <IconArrowUpRight size={18} /></Link>
      </Reveal>
      <div className="projects-grid">
        {projectsData.slice(0, limit).map((project, index) => (
          <Reveal as="article" className="project-card" delay={(index % 3) * 120} key={project.slug}>
            <Link href={`/Projects/${project.slug}`} aria-label={`Open ${project.title}`}>
              <div className="project-image-wrap">
                <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="project-image" />
                <span className="project-open"><IconArrowUpRight /></span>
              </div>
              <div className="project-info"><span>0{index + 1}</span><div><h3>{project.title}</h3><p>{project.description}</p></div></div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
