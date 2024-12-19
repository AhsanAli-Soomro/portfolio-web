"use client";

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Resume = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'Resume.pdf';
        link.download = 'Ahsan_Ali_Soomro_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="flex bg-black flex-col">
            <Stepper />
            <MainContent handleDownload={handleDownload} />
        </div>
    );
};

const Stepper = () => (
    <div className="w-full fixed bg-black pt-14 mb-10 z-10">
        <ul className="flex flex-wrap justify-around items-center font-normal text-gray-300 px-2 sm:px-6">
            {['header', 'summary', 'experience', 'education', 'skills', 'projects', 'contact'].map((section) => (
                <li key={section} className="relative text-xs sm:text-sm font-normal flex flex-col items-center mb-4 sm:mb-0">
                    <a href={`#${section}`} className="flex items-center space-x-2">
                        <span className="block w-3 h-3 sm:w-4 sm:h-4 bg-orange-400 rounded-full"></span>
                        <span className="text-xs sm:text-lg capitalize">{section}</span>
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

const MainContent = ({ handleDownload }) => (
    <div className="w-full pt-40 pb-10 bg-black text-white px-4 md:px-10">
        <div className="flex justify-center mb-4">
            <button
                onClick={handleDownload}
                className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
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
    </div>
);

const Section = ({ id, Component }) => (
    <div id={id} className="max-w-5xl mx-auto p-4 md:p-10 bg-black border-b border-gray-700 scroll-mt-36">
        <Component />
    </div>
);

const Header = () => (
    <div className="text-center">
        <h1 className="text-4xl font-bold text-orange-400">Ahsan Ali Soomro</h1>
        <h2 className="text-2xl text-gray-400 mt-2">Frontend Web Developer</h2>
        <p className="text-gray-400 mt-2">(+92) 317-3215380 · ahsanalisoomro147@gmail.com</p>
        <p className="text-gray-400 mt-2">
            <a href="https://ahsanalisoomro.vercel.app" className="hover:text-blue-500 transition duration-300">Portfolio</a> ·
            <a href="https://linkedin.com/in/ahsanali-soomro" className="hover:text-blue-500 transition duration-300">LinkedIn</a> ·
            <a href="https://github.com/AhsanAli-Soomro" className="hover:text-blue-500 transition duration-300">GitHub</a>
        </p>
    </div>
);

const Summary = () => (
    <div className="mb-8">
        <h3 className="text-3xl text-orange-400 font-bold mb-4 underline">Summary</h3>
        <p className="text-gray-300 leading-relaxed">
            Enthusiastic and results-oriented Frontend Developer with over two years of experience creating interactive, user-friendly web applications. Adept at developing scalable, maintainable, and efficient solutions using React, Next.js, and modern tools. Skilled in UI/UX principles, optimizing functionality and aesthetics to elevate user experiences.
        </p>
    </div>
);

const Experience = () => (
    <div className="mb-8">
        <h3 className="text-3xl font-bold text-orange-400 mb-4 underline">Experience</h3>
        {[
            {
                title: 'React.js Developer at Verge System | WebHR',
                date: 'April 2024 – Present',
                details: [
                    'Optimized load time by 30% through state management improvements.',
                    'Designed reusable components to accelerate project delivery.',
                    'Developed and integrated RESTful APIs.',
                    'Collaborated with cross-functional teams to deliver high-quality projects.',
                ],
            },
            {
                title: 'Frontend Developer at WebSolve',
                date: 'Nov 2023 – Jan 2024',
                details: [
                    'Created responsive and visually appealing web applications.',
                    'Ensured seamless cross-browser performance and device compatibility.',
                ],
            },
        ].map((job, index) => (
            <Job key={index} job={job} />
        ))}
    </div>
);

const Job = ({ job }) => (
    <div className="mb-6">
        <h4 className="text-2xl font-semibold text-orange-400">{job.title}</h4>
        <p className="text-gray-400">{job.date}</p>
        <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 ml-6">
            {job.details.map((detail, index) => (
                <li key={index}>{detail}</li>
            ))}
        </ul>
    </div>
);

const Education = () => (
    <div className="mb-8">
        <h3 className="text-3xl font-bold text-orange-400 underline">Education</h3>
        <div>
            <h4 className="text-2xl text-gray-300">Bachelor of Science in Software Engineering</h4>
            <p className="text-gray-400">Isra University, Hyderabad</p>
        </div>
    </div>
);

const Skills = () => (
    <div>
        <h3 className="text-3xl font-bold text-orange-400 underline">Skills</h3>
        <ul className="list-disc ml-6 text-gray-300">
            <li>Frontend Development: React.js, Next.js, JavaScript, HTML, CSS</li>
            <li>UI/UX Design: Adobe Photoshop, Illustrator, XD</li>
        </ul>
    </div>
);

const Projects = () => (
    <div>
        <h3 className="text-3xl font-bold text-orange-400 underline">Technical Projects</h3>
        <ul className="list-disc ml-6 text-gray-300">
            <li>
                <strong>Blog Management Platform:</strong> Built a blog site with React.js, Node.js, Clerk, and Tailwind CSS with a secure admin dashboard.
            </li>
        </ul>
    </div>
);

const Contact = () => (
    <div>
        <h3 className="text-3xl font-bold text-orange-400 underline">Contact</h3>
        <p>Email: ahsanalisoomro147@gmail.com</p>
        <p>Phone: (+92) 317-3215380</p>
    </div>
);

export default Resume;
