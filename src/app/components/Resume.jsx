"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Ahsan_Soomro_Resume.pdf";
    link.download = "Ahsan_Soomro_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-gradient-to-br from-orange-800 via-orange-600 to-orange-500 min-h-screen text-white">
      <div className="container mx-auto px-6 lg:px-12 py-20">
        {/* Header Section */}
        <Header onDownload={handleDownload} />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Summary */}
            <Section title="Summary">
              <p className="leading-relaxed">
                Enthusiastic and results-oriented Frontend Developer with over
                two years of experience creating interactive, user-friendly web
                applications. Adept at developing scalable, maintainable, and
                efficient solutions using React, Next.js, and modern tools.
                Skilled in UI/UX principles, optimizing functionality and
                aesthetics to elevate user experiences.
              </p>
            </Section>

            {/* Professional Experience */}
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

            {/* Education */}
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

            {/* Skills */}
            <Section title="Skills">
              <ul className="list-disc list-inside leading-relaxed">
                <li>Frontend Development: React.js, Next.js, JavaScript, HTML, CSS</li>
                <li>UI/UX Design: Adobe Photoshop, Illustrator, XD</li>
                <li>Performance Optimization, Collaboration, Problem-Solving</li>
              </ul>
            </Section>

            {/* Projects */}
            <Section title="Technical Projects">
              <ul className="list-disc list-inside leading-relaxed">
                <li>
                  <strong>E-Commerce Web Platform:</strong> Built a scalable
                  e-commerce application using React.js, Node.js, and Tailwind
                  CSS with an admin dashboard.
                </li>
                <li>
                  <strong>Portfolio Website:</strong> Designed a personal
                  portfolio showcasing live projects and development skills
                  using Next.js.
                </li>
                <li>
                  <strong>Blog Management Platform:</strong> Developed a blog
                  site with React.js, Clerk, and Tailwind CSS, including a
                  secure admin dashboard for content management.
                </li>
              </ul>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = ({ onDownload }) => (
  <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-10 text-center lg:text-left">
    <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden bg-gradient-to-br from-orange-800 via-orange-600 to-orange-800 shadow-lg">
      <Image
        src="/ahsan.png"
        alt="Ahsan Ali Soomro"
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div>
      <h1 className="text-4xl lg:text-5xl font-extrabold">Ahsan Ali Soomro</h1>
      <h2 className="text-xl lg:text-2xl mt-2">Frontend Web Developer</h2>
      <p className="text-md mt-2">
        <FontAwesomeIcon icon={faPhone} className="mr-2" /> (+92) 317-3215380 ·{" "}
        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />{" "}
        ahsanalisoomro147@gmail.com
      </p>
      <div className="mt-4">
        <button
          onClick={onDownload}
          className="bg-white text-orange-700 font-medium px-6 py-2 rounded hover:bg-orange-700 hover:text-white transition"
        >
          Download Resume
        </button>
      </div>
    </div>
  </div>
);

const Sidebar = () => (
  <div className="space-y-8 sticky top-20">
    <div>
      <h3 className="text-lg font-semibold">Contact</h3>
      <p>Email: ahsanalisoomro147@gmail.com</p>
      <p>Phone: (+92) 317-3215380</p>
    </div>
    <div>
      <h3 className="text-lg font-semibold">Social Links</h3>
      <div className="flex space-x-4 mt-2">
        <SocialIcon href="https://linkedin.com/in/ahsanali-soomro" icon={faLinkedin} />
        <SocialIcon href="mailto:ahsanalisoomro147@gmail.com" icon={faEnvelope} />
        <SocialIcon href="https://github.com/AhsanAli-Soomro" icon={faGithub} />
        <SocialIcon href="https://www.instagram.com/soomroahsan_ali/" icon={faInstagram} />
        <SocialIcon href="https://www.facebook.com/ahsanali.king.92" icon={faFacebook} />
        <SocialIcon href="https://twitter.com/AhsanAli3860" icon={faTwitter} />
      </div>
    </div>
  </div>
);

const Section = ({ title, children }) => (
  <div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    {children}
  </div>
);

const Job = ({ job }) => (
  <div className="mb-6">
    <h4 className="text-lg font-semibold">{job.title}</h4>
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
    <h4 className="text-lg font-semibold">{edu.degree}</h4>
    <p className="text-sm text-gray-200">{edu.institution}</p>
    <p className="text-sm text-gray-200">{edu.duration}</p>
  </div>
);

const SocialIcon = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-orange-300 transition"
  >
    <FontAwesomeIcon icon={icon} size="2x" />
  </a>
);

export default Resume;
