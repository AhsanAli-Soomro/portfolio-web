"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IconArrowUpRight, IconMaximize } from "@tabler/icons-react";
import { projectsData } from "./data/projects";
import Reveal from "./Reveal";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const activeProject = selectedIndex !== null ? projectsData[selectedIndex] : null;

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % projectsData.length));
  };

  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev - 1 + projectsData.length) % projectsData.length
    );
  };

  return (
    <main className="inner-page">
      <header className="page-header page-container">
        <span className="section-index hero-animate">Portfolio / Selected work</span>
        <h1 className="page-title hero-animate">Projects by<br /><em>Ahsan Ali Soomro</em></h1>
        <p className="page-lead hero-animate">
          A showcase of production web applications, full-stack systems, and 3D interactive games engineered by Ahsan Ali Soomro (Ahsan Soomro).
        </p>
      </header>
      <section className="page-container all-projects-grid" aria-label="Projects list">
        {projectsData.map((project, index) => (
          <Reveal as="article" className="portfolio-card" delay={(index % 3) * 100} key={project.slug}>
            <Link href={`/Projects/${project.slug}`}>
              <div className="portfolio-image">
                <Image
                  src={project.image}
                  alt={`${project.title} — Project engineered by Ahsan Ali Soomro`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="project-image"
                />
                <span className="project-open"><IconArrowUpRight /></span>
              </div>
            </Link>
            <div className="portfolio-info">
              <span>{index < 9 ? `0${index + 1}` : index + 1}</span>
              <div>
                <Link href={`/Projects/${project.slug}`}>
                  {project.role && (
                    <div className="project-role-line">{project.role}</div>
                  )}
                  <h2>{project.title}</h2>
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
      </section>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setSelectedIndex(null)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </main>
  );
}
