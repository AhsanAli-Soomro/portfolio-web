"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IconArrowUpRight, IconMaximize } from "@tabler/icons-react";
import { projectsData } from "./data/projects";
import Reveal from "./Reveal";
import ProjectModal from "./ProjectModal";

export default function FeaturedProjects({ limit = 6 }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const featured = projectsData.slice(0, limit);
  const activeProject = selectedIndex !== null ? featured[selectedIndex] : null;

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % featured.length));
  };

  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev - 1 + featured.length) % featured.length
    );
  };

  return (
    <section id="featured-projects" className="content-section projects-section" aria-labelledby="featured-heading">
      <Reveal className="section-heading project-heading">
        <div>
          <span className="section-index">02 / Selected work</span>
          <h2 id="featured-heading">Work that speaks<br />for itself.</h2>
        </div>
        <Link href="/Projects" className="text-link">View all projects <IconArrowUpRight size={18} /></Link>
      </Reveal>
      <div className="projects-grid">
        {featured.map((project, index) => (
          <Reveal as="article" className="project-card" delay={(index % 3) * 120} key={project.slug}>
            <Link href={`/Projects/${project.slug}`} aria-label={`Open ${project.title}`}>
              <div className="project-image-wrap">
                <Image
                  src={project.image}
                  alt={`${project.title} — Software project engineered by Ahsan Ali Soomro`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="project-image"
                />
                <span className="project-open"><IconArrowUpRight /></span>
              </div>
            </Link>
            <div className="project-info">
              <span>{index < 9 ? `0${index + 1}` : index + 1}</span>
              <div>
                <Link href={`/Projects/${project.slug}`}>
                  {project.role && (
                    <div className="project-role-line">{project.role}</div>
                  )}
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </Link>

                {project.techStack?.length > 0 && (
                  <div className="project-badges" aria-label="Tech stack">
                    {project.techStack.map((tech) => (
                      <span className="project-badge" key={tech}>{tech}</span>
                    ))}
                  </div>
                )}

                <div className="project-card-actions">
                  <Link href={`/Projects/${project.slug}`} className="read-link" style={{ marginTop: 0 }}>
                    {project.cta?.breakdownLabel || "View details"} <IconArrowUpRight size={15} />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    className="quick-view-btn"
                    aria-label={`Quick preview of ${project.title}`}
                  >
                    <IconMaximize size={14} /> Quick Preview
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setSelectedIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </section>
  );
}
