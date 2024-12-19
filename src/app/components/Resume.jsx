"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

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
    <div className="flex bg-gray-100 flex-col">
      <Stepper />
      <MainContent handleDownload={handleDownload} />
    </div>
  );
};

const Stepper = () => (
  <div className="w-full fixed top-0 pt-14 mb-10 z-10">
    <ul className="flex flex-wrap bg-purple-700 justify-around items-center font-normal text-gray-600 px-2 sm:px-6">
      {[
        "header",
        "summary",
        "experience",
        "education",
        "skills",
        "projects",
        "contact",
      ].map((section) => (
        <li
          key={section}
          className="relative text-xs sm:text-sm font-normal flex flex-col items-center mb-4 sm:mb-0"
        >
          <a href={`#${section}`} className="flex items-center space-x-2">
            {/* <span className="block w-3 h-3 sm:w-4 sm:h-4 bg-purple-700 rounded-full"></span> */}
            <span className="text-xs text-white font-bold sm:text-lg capitalize">{section}</span>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const MainContent = ({ handleDownload }) => (
  <div className="w-full pt-40 pb-10 bg-gray-100 text-gray-900 px-4 md:px-10">
    <div className="flex justify-center mb-4">
      <button
        onClick={handleDownload}
        className="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-900 transition duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        Download Resume
      </button>
    </div>
    <Section id="header" Component={Header} />
    <Section id="summary" Component={Summary} />
    <Section id="experience" Component={Experience} />
    <Section id="education" Component={Education} />
    <Section id="skills" Component={Skills} />
    <Section id="projects" Component={Projects} />
    <Section id="contact" Component={Contact} />
    <SocialLinks />
  </div>
);

const Section = ({ id, Component }) => (
  <div
    id={id}
    className="max-w-5xl mx-auto p-4 md:p-10 bg-gray-100 border-b border-gray-300 scroll-mt-36"
  >
    <Component />
  </div>
);

const Header = () => (
  <div className="text-center">
    <h1 className="text-4xl font-bold text-purple-700">Ahsan Ali Soomro</h1>
    <h2 className="text-2xl text-gray-600 mt-2">Frontend Web Developer</h2>
    <p className="text-gray-600 mt-2">(+92) 317-3215380 · ahsanalisoomro147@gmail.com</p>
    <p className="text-gray-600 mt-2">
      <a
        href="https://ahsanalisoomro.vercel.app"
        className="hover:text-purple-700 transition duration-300"
      >
        Portfolio
      </a>{" "}
      ·{" "}
      <a
        href="https://linkedin.com/in/ahsanali-soomro"
        className="hover:text-purple-700 transition duration-300"
      >
        LinkedIn
      </a>{" "}
      ·{" "}
      <a
        href="https://github.com/AhsanAli-Soomro"
        className="hover:text-purple-700 transition duration-300"
      >
        GitHub
      </a>
    </p>
  </div>
);

const Summary = () => (
  <div className="mb-8">
    <h3 className="text-3xl text-purple-700 font-bold mb-4 underline">Summary</h3>
    <p className="text-gray-700 leading-relaxed">
      Enthusiastic and results-oriented Frontend Developer with over two years
      of experience creating interactive, user-friendly web applications. Adept
      at developing scalable, maintainable, and efficient solutions using
      React, Next.js, and modern tools. Skilled in UI/UX principles, optimizing
      functionality and aesthetics to elevate user experiences.
    </p>
  </div>
);

const Experience = () => (
  <div className="mb-8">
    <h3 className="text-3xl font-bold text-purple-700 mb-4 underline">
      Professional Experience
    </h3>
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
  </div>
);

const Job = ({ job }) => (
  <div className="mb-6">
    <h4 className="text-2xl font-semibold text-purple-700">{job.title}</h4>
    <p className="text-gray-600">{job.date}</p>
    <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-6">
      {job.details.map((detail, index) => (
        <li key={index}>{detail}</li>
      ))}
    </ul>
  </div>
);

const Education = () => (
  <div className="mb-8">
    <h3 className="text-3xl font-bold text-purple-700 underline">Education</h3>
    <div className="mb-6">
      <h4 className="text-2xl font-semibold text-gray-700">
        Bachelor of Science in Software Engineering
      </h4>
      <p className="text-gray-600">Isra University, Hyderabad (2018 – 2022)</p>
    </div>
    <div className="mb-6">
      <h4 className="text-2xl font-semibold text-gray-700">
        Certificate in Graphic Designing
      </h4>
      <p className="text-gray-600">
        Isra University in Collaboration with NAVTTC (Oct 2017 – Mar 2018)
      </p>
    </div>
  </div>
);

const Skills = () => (
  <div>
    <h3 className="text-3xl font-bold text-purple-700 underline">Skills</h3>
    <ul className="list-disc ml-6 text-gray-700">
      <li>Frontend Development: React.js, Next.js, JavaScript, HTML, CSS</li>
      <li>UI/UX Design: Adobe Photoshop, Illustrator, XD</li>
      <li>Performance Optimization, Collaboration, and Problem-Solving</li>
    </ul>
  </div>
);

const Projects = () => (
  <div>
    <h3 className="text-3xl font-bold text-purple-700 underline">
      Technical Projects
    </h3>
    <ul className="list-disc ml-6 text-gray-700">
      <li>
        <strong>E-Commerce Web Platform:</strong> Built a scalable e-commerce
        application using React.js, Node.js, and Tailwind CSS with an admin
        dashboard.
      </li>
      <li>
        <strong>Portfolio Website:</strong> Designed a personal portfolio
        showcasing live projects and development skills using Next.js.
      </li>
      <li>
        <strong>Blog Management Platform:</strong> Developed a blog site with
        React.js, Clerk, and Tailwind CSS, including a secure admin dashboard
        for content management.
      </li>
    </ul>
  </div>
);

const Contact = () => (
  <div>
    <h3 className="text-3xl font-bold text-purple-700 underline">Contact</h3>
    <p>Email: ahsanalisoomro147@gmail.com</p>
    <p>Phone: (+92) 317-3215380</p>
  </div>
);

const SocialLinks = () => (
  <div className="flex justify-center space-x-6 mt-6">
    <a
      href="https://www.linkedin.com/in/ahsanali-soomro"
      className="text-purple-700 hover:text-purple-900 transition duration-300"
    >
      <FontAwesomeIcon icon={faLinkedin} size="2x" />
    </a>
    <a
      href="mailto:ahsanalisoomro147@gmail.com"
      className="text-purple-700 hover:text-purple-900 transition duration-300"
    >
      <FontAwesomeIcon icon={faEnvelope} size="2x" />
    </a>
    <a
      href="https://www.facebook.com/ahsanali.king.92"
      className="text-purple-700 hover:text-purple-900 transition duration-300"
    >
      <FontAwesomeIcon icon={faFacebook} size="2x" />
    </a>
    <a
      href="https://www.instagram.com/soomroahsan_ali/"
      className="text-purple-700 hover:text-purple-900 transition duration-300"
    >
      <FontAwesomeIcon icon={faInstagram} size="2x" />
    </a>
    <a
      href="http://www.twitter.com/AhsanAli3860"
      className="text-purple-700 hover:text-purple-900 transition duration-300"
    >
      <FontAwesomeIcon icon={faTwitter} size="2x" />
    </a>
    <a
      href="https://www.github.com/AhsanAli-Soomro"
      className="text-purple-700 hover:text-purple-900 transition duration-300"
    >
      <FontAwesomeIcon icon={faGithub} size="2x" />
    </a>
  </div>
);

export default Resume;
