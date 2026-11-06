"use client";

import Image from "next/image";
import { IconBrandGithub, IconBrandLinkedin, IconDownload, IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";
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

const experience = [
  {
    role: "Full Stack / React.js Developer",
    company: "Verge Systems · WebHR",
    date: "Apr 2024 — Present",
    points: [
      "Building scalable product interfaces and reusable component systems with React and Next.js.",
      "Optimized load times and Core Web Vitals through state pruning, lazy loading, and caching.",
      "Partnering with cross-functional product and backend teams to ship reliable full-stack features.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "WebSolve",
    date: "Nov 2023 — Jan 2024",
    points: [
      "Created responsive, visually polished web applications tailored to client requirements.",
      "Ensured consistent cross-browser performance and robust responsive layouts.",
    ],
  },
  {
    role: "Network Engineer",
    company: "GENTEC Soft",
    date: "Jun 2023 — Sep 2023",
    points: [
      "Reduced system downtime through proactive infrastructure monitoring.",
      "Configured and maintained secure networking topology for operations.",
    ],
  },
];

const skills = [
  "Next.js",
  "React.js",
  "Node.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "HTML5 & CSS3",
  "REST APIs",
  "Git & GitHub",
  "PostgreSQL / MySQL",
  "UI/UX Systems",
  "Accessibility (a11y)",
  "Performance Optimization",
];

export default function Resume() {
  return (
    <main className="inner-page resume-page">
      <header className="resume-header page-container">
        <div className="resume-avatar hero-animate">
          <Image
            src="/ahsan.png"
            alt="Ahsan Ali Soomro (Ahsan Soomro) — Full Stack Developer and UI Engineer"
            fill
            priority
            className="about-image"
          />
        </div>
        <div className="resume-intro hero-animate">
          <span className="section-index">Résumé / Experience</span>
          <h1>Ahsan Ali Soomro</h1>
          <p>Full Stack Developer & UI Engineer</p>
          <div className="resume-contact">
            <a href={`mailto:${siteConfig.email}`}><IconMail /> Email</a>
            <a href={`tel:${siteConfig.phone}`}><IconPhone /> Call</a>
            <span><IconMapPin /> Hyderabad, Pakistan · Remote</span>
          </div>
        </div>
        <a href="/Ahsan_Soomro_Resume.pdf" download className="button-primary hero-animate">
          Download PDF <IconDownload size={18} />
        </a>
      </header>

      <div className="page-container resume-layout">
        <aside className="resume-sidebar">
          <Reveal className="resume-block">
            <span className="section-index">Profile</span>
            <p>
              Full Stack Developer specializing in building maintainable, accessible, and high-performance product experiences with modern JavaScript/TypeScript tools.
            </p>
          </Reveal>
          <Reveal className="resume-block" delay={80}>
            <span className="section-index">Core skills</span>
            <div className="resume-skills">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </Reveal>
          <Reveal className="resume-block" delay={120}>
            <span className="section-index">Connect</span>
            <div className="resume-links">
              <a
                href={siteConfig.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandLinkedin /> LinkedIn
              </a>
              <a
                href={siteConfig.socialLinks.devto}
                target="_blank"
                rel="noopener noreferrer"
              >
                <DevToIcon /> DEV.to
              </a>
              <a
                href={siteConfig.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandGithub /> GitHub
              </a>
            </div>
          </Reveal>
        </aside>

        <div className="resume-main">
          <Reveal>
            <span className="section-index">01 / Experience</span>
            <h2 className="resume-section-title">Where I&apos;ve worked.</h2>
          </Reveal>
          <div className="timeline">
            {experience.map((job, i) => (
              <Reveal as="article" className="timeline-item" delay={i * 100} key={job.role}>
                <span className="timeline-dot" />
                <div className="timeline-top">
                  <div>
                    <h3>{job.role}</h3>
                    <p>{job.company}</p>
                  </div>
                  <time>{job.date}</time>
                </div>
                <ul>
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <Reveal className="education-block">
            <span className="section-index">02 / Education</span>
            <h2 className="resume-section-title">Learning foundation.</h2>
            <div className="education-card">
              <div>
                <h3>BS Software Engineering</h3>
                <p>Isra University, Hyderabad</p>
              </div>
              <span>2018 — 2022</span>
            </div>
            <div className="education-card">
              <div>
                <h3>Graphic Design Certification</h3>
                <p>Isra University · NAVTTC</p>
              </div>
              <span>2017 — 2018</span>
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
