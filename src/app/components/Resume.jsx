"use client";

import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Resume = () => {
  return (
    <main
      className=" min-h-screen text-white"
      aria-labelledby="resume-heading"
    >
      <div className="container mx-auto px-6 lg:px-12 py-20">
        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
          <aside className="lg:col-span-1">
            <Sidebar />
          </aside>

          <section className="lg:col-span-2 space-y-12">
            <Section title="Summary" id="resume-heading">
              <p className="leading-relaxed">
                Enthusiastic and results-oriented Frontend Developer with over
                two years of experience creating interactive, user-friendly web
                applications. Adept at developing scalable, maintainable, and
                efficient solutions using React, Next.js, and modern tools.
                Skilled in UI/UX principles, optimizing functionality and
                aesthetics to elevate user experiences.
              </p>
            </Section>

            <Section title="Professional Experience">
              {[
                {
                  title: "React.js Developer at Verge System | WebHR",
                  date: "April 2024 – Present",
                  details: [
                    "Optimized load time by 30% through state management improvements.",
                    "Designed reusable components to accelerate project delivery.",
                    "Developed and integrated RESTful APIs.",
                    "Collaborated with cross-functional teams to deliver high-quality projects.",
                  ],
                },
                {
                  title: "Frontend Developer at WebSolve",
                  date: "Nov 2023 – Jan 2024",
                  details: [
                    "Created responsive and visually appealing web applications.",
                    "Ensured seamless cross-browser performance and device compatibility.",
                  ],
                },
                {
                  title: "Network Engineer at GENTEC Soft.",
                  date: "Jun 2023 – Sep 2023",
                  details: [
                    "Reduced network outages by 25% through proactive monitoring.",
                    "Designed scalable, secure network infrastructures for enterprise operations.",
                  ],
                },
              ].map((job, index) => (
                <Job key={index} job={job} />
              ))}
            </Section>

            <Section title="Education">
              {[
                {
                  degree: "Bachelor of Science in Software Engineering",
                  institution: "Isra University, Hyderabad",
                  duration: "2018 – 2022",
                },
                {
                  degree: "Certificate in Graphic Designing",
                  institution: "Isra University (Collaboration with NAVTTC)",
                  duration: "Oct 2017 – Mar 2018",
                },
              ].map((edu, index) => (
                <EducationItem key={index} edu={edu} />
              ))}
            </Section>

            <Section title="Skills">
              <ul className="list-disc list-inside leading-relaxed">
                <li>
                  Frontend Development: React.js, Next.js, JavaScript, HTML, CSS
                </li>
                <li>UI/UX Design: Adobe Photoshop, Illustrator, XD</li>
                <li>Performance Optimization, Collaboration, Problem-Solving</li>
              </ul>
            </Section>

            <Section title="Technical Projects">
              <ul className="list-disc list-inside leading-relaxed">
                <li>
                  <strong>E-Commerce Web Platform:</strong> Built a scalable
                  e-commerce application using React.js, Node.js, and Tailwind
                  CSS with an admin dashboard.
                </li>
                <li>
                  <strong>Portfolio Website:</strong> Designed a personal
                  portfolio showcasing live projects and development skills using
                  Next.js.
                </li>
                <li>
                  <strong>Blog Management Platform:</strong> Developed a blog
                  site with React.js, Clerk, and Tailwind CSS, including a
                  secure admin dashboard for content management.
                </li>
              </ul>
            </Section>
          </section>
        </div>
      </div>
    </main>
  );
};

const Header = () => (
  <header className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-10 text-center lg:text-left">
    <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden bg-gradient-to-br from-orange-800 via-orange-600 to-orange-800 shadow-lg">
      <Image
        src="/ahsan.png"
        alt="Portrait of Ahsan Ali Soomro"
        fill
        sizes="(max-width: 640px) 10rem, (max-width: 1024px) 12rem, 12rem"
        className="object-cover"
        priority
      />
    </div>

    <div>
      <h1 className="text-4xl lg:text-5xl font-extrabold">Ahsan Ali Soomro</h1>
      <p className="text-xl lg:text-2xl mt-2">Frontend Web Developer</p>

      <address className="not-italic text-md mt-2">
        <a
          href="tel:+923173215380"
          className="hover:underline"
          aria-label="Call Ahsan Ali Soomro"
        >
          <FontAwesomeIcon icon={faPhone} className="mr-2" />
          (+92) 317-3215380
        </a>{" "}
        ·{" "}
        <a
          href="mailto:ahsanalisoomro147@gmail.com"
          className="hover:underline"
          aria-label="Email Ahsan Ali Soomro"
        >
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          ahsanalisoomro147@gmail.com
        </a>
      </address>

      <div className="mt-4">
        <a
          href="/Ahsan_Soomro_Resume.pdf"
          download
          className="bg-white text-orange-700 font-medium px-6 py-2 rounded hover:bg-orange-700 hover:text-white transition"
          aria-label="Download Ahsan Ali Soomro Resume PDF"
          title="Download Resume"
        >
          Download Resume
        </a>
      </div>
    </div>
  </header>
);

const Sidebar = () => (
  <div className="space-y-8 sticky top-20">
    <section aria-labelledby="contact-heading">
      <h3 id="contact-heading" className="text-lg font-semibold">
        Contact
      </h3>
      <p>
        Email:{" "}
        <a
          className="underline decoration-white/60 underline-offset-4 hover:decoration-white"
          href="mailto:ahsanalisoomro147@gmail.com"
        >
          ahsanalisoomro147@gmail.com
        </a>
      </p>
      <p>
        Phone:{" "}
        <a
          className="underline decoration-white/60 underline-offset-4 hover:decoration-white"
          href="tel:+923173215380"
        >
          (+92) 317-3215380
        </a>
      </p>
    </section>

    <section aria-labelledby="social-heading">
      <h3 id="social-heading" className="text-lg font-semibold">
        Social Links
      </h3>
      <div className="flex space-x-4 mt-2">
        <SocialIcon
          href="https://linkedin.com/in/ahsanali-soomro"
          icon={faLinkedin}
          label="LinkedIn"
        />
        <SocialIcon
          href="mailto:ahsanalisoomro147@gmail.com"
          icon={faEnvelope}
          label="Email"
        />
        <SocialIcon
          href="https://github.com/AhsanAli-Soomro"
          icon={faGithub}
          label="GitHub"
        />
        <SocialIcon
          href="https://www.instagram.com/soomroahsan_ali/"
          icon={faInstagram}
          label="Instagram"
        />
        <SocialIcon
          href="https://www.facebook.com/ahsanali.king.92"
          icon={faFacebook}
          label="Facebook"
        />
        <SocialIcon
          href="https://twitter.com/AhsanAli3860"
          icon={faTwitter}
          label="Twitter"
        />
      </div>
    </section>
  </div>
);

const Section = ({ title, id, children }) => (
  <section aria-labelledby={id ? id : undefined}>
    <h2 id={id} className="text-2xl font-bold mb-4">
      {title}
    </h2>
    {children}
  </section>
);

const Job = ({ job }) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold">{job.title}</h3>
    <p className="text-sm text-gray-200">{job.date}</p>
    <ul className="list-disc list-inside mt-2 space-y-1 text-gray-100">
      {job.details.map((detail, index) => (
        <li key={index}>{detail}</li>
      ))}
    </ul>
  </div>
);

const EducationItem = ({ edu }) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold">{edu.degree}</h3>
    <p className="text-sm text-gray-200">{edu.institution}</p>
    <p className="text-sm text-gray-200">{edu.duration}</p>
  </div>
);

const SocialIcon = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="me noopener noreferrer"
    className="text-white hover:text-orange-800 transition"
    aria-label={label}
    title={label}
  >
    <FontAwesomeIcon icon={icon} size="2x" />
  </a>
);

export default Resume;
