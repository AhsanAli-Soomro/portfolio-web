"use client";

import Image from "next/image";
import { IconBrandGithub, IconBrandLinkedin, IconDownload, IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";
import Reveal from "./Reveal";

const experience = [
  { role: "React.js Developer", company: "Verge Systems · WebHR", date: "Apr 2024 — Present", points: ["Building scalable product interfaces and reusable component systems.", "Improved load time through state and rendering optimizations.", "Partnering with cross-functional teams to ship reliable features."] },
  { role: "Frontend Developer", company: "WebSolve", date: "Nov 2023 — Jan 2024", points: ["Created responsive, visually polished web applications.", "Ensured consistent cross-browser and device performance."] },
  { role: "Network Engineer", company: "GENTEC Soft", date: "Jun 2023 — Sep 2023", points: ["Reduced network outages through proactive monitoring.", "Designed secure infrastructure for business operations."] },
];
const skills = ["React.js", "Next.js", "JavaScript", "Tailwind CSS", "HTML & CSS", "REST APIs", "Git", "UI/UX", "Accessibility", "Performance"];

export default function Resume() {
  return (
    <main className="inner-page resume-page">
      <header className="resume-header page-container">
        <div className="resume-avatar hero-animate"><Image src="/ahsan.png" alt="Ahsan Ali Soomro" fill priority className="about-image" /></div>
        <div className="resume-intro hero-animate"><span className="section-index">Résumé / Experience</span><h1>Ahsan Ali Soomro</h1><p>Frontend Developer & UI Engineer</p><div className="resume-contact"><a href="mailto:ahsanalisoomro147@gmail.com"><IconMail /> Email</a><a href="tel:+923173215380"><IconPhone /> Call</a><span><IconMapPin /> Pakistan · Remote</span></div></div>
        <a href="/Ahsan_Soomro_Resume.pdf" download className="button-primary hero-animate">Download PDF <IconDownload size={18} /></a>
      </header>

      <div className="page-container resume-layout">
        <aside className="resume-sidebar">
          <Reveal className="resume-block"><span className="section-index">Profile</span><p>Frontend developer focused on building maintainable, accessible and high-performance product experiences with modern JavaScript tools.</p></Reveal>
          <Reveal className="resume-block" delay={80}><span className="section-index">Core skills</span><div className="resume-skills">{skills.map(skill => <span key={skill}>{skill}</span>)}</div></Reveal>
          <Reveal className="resume-block" delay={120}><span className="section-index">Connect</span><div className="resume-links"><a href="https://linkedin.com/in/ahsanali-soomro"><IconBrandLinkedin /> LinkedIn</a><a href="https://github.com/AhsanAli-Soomro"><IconBrandGithub /> GitHub</a></div></Reveal>
        </aside>
        <div className="resume-main">
          <Reveal><span className="section-index">01 / Experience</span><h2 className="resume-section-title">Where I&apos;ve worked.</h2></Reveal>
          <div className="timeline">{experience.map((job, i) => <Reveal as="article" className="timeline-item" delay={i * 100} key={job.role}><span className="timeline-dot" /><div className="timeline-top"><div><h3>{job.role}</h3><p>{job.company}</p></div><time>{job.date}</time></div><ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul></Reveal>)}</div>
          <Reveal className="education-block"><span className="section-index">02 / Education</span><h2 className="resume-section-title">Learning foundation.</h2><div className="education-card"><div><h3>BS Software Engineering</h3><p>Isra University, Hyderabad</p></div><span>2018 — 2022</span></div><div className="education-card"><div><h3>Graphic Design Certification</h3><p>Isra University · NAVTTC</p></div><span>2017 — 2018</span></div></Reveal>
        </div>
      </div>
    </main>
  );
}
