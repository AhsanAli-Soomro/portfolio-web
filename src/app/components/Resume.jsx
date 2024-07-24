"use client";

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faInstagram, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

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
        <div className='flex bg-black flex-col'>
            <Stepper />
            <MainContent handleDownload={handleDownload} />
        </div>
    );
};

const Stepper = () => (
    <div className="w-full fixed bg-black pt-14 mb-10 z-10">
        <ul className="flex flex-wrap justify-around items-center font-normal text-gray-300 px-2 sm:px-6">
            {['header', 'summary', 'experience', 'education', 'skills', 'contact'].map((section) => (
                <li key={section} className="relative text-xs sm:text-sm font-normal flex flex-col items-center mb-4 sm:mb-0">
                    <a href={`#${section}`} className="flex items-center space-x-2">
                        <span className="block w-3 h-3 sm:w-4 sm:h-4 bg-orange-400 rounded-full"></span>
                        <span className="text-xs sm:text-lg capitalize">{section}</span>
                    </a>
                    {section !== 'contact' && (
                        <span className="absolute w-px h-6 sm:h-8 left-1/2 transform -translate-x-1/2 top-6"></span>
                    )}
                </li>
            ))}
        </ul>
    </div>
);


const MainContent = ({ handleDownload }) => (
    <div className='w-full pt-40 pb-10 bg-black text-white px-4 md:px-10'>
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
        <Section id="contact" Component={Contact} />
        <div className="flex justify-center space-x-6 mt-6">
            <a href="https://www.linkedin.com/in/ahsanali-soomro" className="text-orange-400 hover:text-white transition duration-300">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="mailto:ahsanalisoomro147@gmail.com" className="text-orange-400 hover:text-white transition duration-300">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
            <a href="https://www.facebook.com/ahsanali.king.92" className="text-orange-400 hover:text-white transition duration-300">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.instagram.com/soomroahsan_ali/" className="text-orange-400 hover:text-white transition duration-300">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="http://www.twitter.com/AhsanAli3860" className="text-orange-400 hover:text-white transition duration-300">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.github.com/AhsanAli-Soomro" className="text-orange-400 hover:text-white transition duration-300">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
        </div>
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
        <p className="text-gray-400 mt-2">ahsanalisoomro147@gmail.com | (+92) 317-3215380</p>
        <p className="text-gray-400 mt-2">
            <a href='https://www.linkedin.com/in/ahsanali-soomro' className='hover:text-blue-500 transition duration-300'>LinkedIn</a>
            {' | '}
            <a href='https://github.com/AhsanAli-Soomro' className='hover:text-blue-500 transition duration-300'>GitHub</a>
        </p>
    </div>
);

const Summary = () => (
    <div className="mb-8">
        <h3 className="text-3xl text-orange-400 font-bold mb-4 underline">Summary</h3>
        <p className="text-gray-300 leading-relaxed">
            Experienced Front-end developer with a strong background in building scalable web applications and working across the Front-end. Proficient in HTML, CSS, JavaScript, React, and Next.js. Excellent problem-solving skills and a team player.
        </p>
    </div>
);

const Experience = () => (
    <div className="mb-8">
        <h3 className="text-3xl font-bold text-orange-400 mb-4 underline">Experience</h3>
        {[
            {
                title: 'React.js Developer at Verge System | WebHR',
                date: 'April 2024 - Present',
                details: [
                    'Developed and maintained web applications using React and Node.js.',
                    'Implemented RESTful APIs and integrated third-party services.',
                    'Improved application performance and user experience.',
                    'Collaborated with cross-functional teams to deliver projects on time.',
                ],
            },
            {
                title: 'Front end Developer at WebSolve',
                date: 'Nov 2023 - Jan 2024',
                details: [
                    'Developed and maintained web applications using HTML and CSS only.',
                ],
            },
            {
                title: 'Network Engineer at GENTEC Soft.',
                date: 'Jun 2023 - Sep 2023',
                details: [
                    'Conducted regular network performance monitoring and troubleshooting to ensure optimal uptime.',
                    'Designed and implemented secure network infrastructures to support enterprise operations.',
                ],
            },
        ].map((job, index) => (
            <Job key={index} job={job} />
        ))}
    </div>
);

const Job = ({ job }) => (
    <div className="mb-6">
        <h4 className="text-2xl font-semibold text-orange-400 hover:underline hover:text-orange-300 transition duration-300">{job.title}</h4>
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
        <h3 className="text-3xl font-bold mb-4 text-orange-400 underline">Education</h3>
        <div className="mb-6">
            <h4 className="text-2xl font-semibold text-gray-300">Bachelor of Science in Software Engineering</h4>
            <p className="text-gray-400">Isra University Hyd, 2018 - 2022</p>
        </div>
    </div>
);

const Skills = () => (
    <div className="mb-8 mt-2">
        <h3 className="text-3xl font-bold mb-4 text-orange-400 underline">Skills</h3>
        <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2 ml-6">
            <li>JavaScript, React, Next.js, Node.js</li>
            <li>Python</li>
            <li>HTML, CSS, Tailwind CSS, Bootstrap</li>
            <li>Git, Docker, CI/CD</li>
            <li>Adobe: Photoshop, Illustrator, XD</li>
        </ul>
    </div>
);

const Contact = () => (
    <div className="mb-4">
        <h3 className="text-3xl font-bold mb-4 text-orange-400 underline">Contact</h3>
        <p className="text-gray-400">ahsanalisoomro147@gmail.com</p>
        <p className="text-gray-400">(+92) 317-3215380</p>
    </div>
);

export default Resume;
