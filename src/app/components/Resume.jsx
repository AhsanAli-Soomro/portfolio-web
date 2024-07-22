"use client";

import React from 'react';

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
        <div className='flex flex-col md:flex-row'>
            <Sidebar handleDownload={handleDownload} />
            <MainContent handleDownload={handleDownload} />
        </div>
    );
};

const Sidebar = ({ handleDownload }) => (
    <div className='hidden md:block w-1/4 min-h-screen bg-black p-5'>
        <ul className="space-y-10 top-20 fixed left-0 text-gray-300">
            {['header', 'summary', 'experience', 'education', 'skills', 'contact'].map((section) => (
                <li key={section}>
                    <a href={`#${section}`} className="flex items-center space-x-2">
                        <span className="block w-4 h-4 bg-orange-400 rounded-full"></span>
                        <span className="text-lg capitalize">{section}</span>
                    </a>
                </li>
            ))}
            <li className='text-center'>
                <button
                    onClick={handleDownload}
                    className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                >
                    Download Resume
                </button>
            </li>
        </ul>
    </div>
);

const MainContent = ({ handleDownload }) => (
    <div className='w-full md:w-3/4 pt-24 pb-10 bg-black text-white px-4 md:px-10'>
        <div className="flex justify-center mb-4 md:hidden">
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
    </div>
);

const Section = ({ id, Component }) => (
    <div id={id} className="max-w-5xl mx-auto p-4 md:p-10 bg-black border-b border-gray-700">
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
        <h3 className="text-3xl text-orange-400 font-bold mb-4 underline decoration-wavy decoration-orange-400">Summary</h3>
        <p className="text-gray-300 leading-relaxed">
            Experienced Front-end developer with a strong background in building scalable web applications and working across the Front-end. Proficient in HTML, CSS, JavaScript, React, and Next.js. Excellent problem-solving skills and a team player.
        </p>
    </div>
);

const Experience = () => (
    <div className="mb-8">
        <h3 className="text-3xl font-bold text-orange-400 mb-4 underline decoration-wavy decoration-orange-400">Experience</h3>
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
        <h3 className="text-3xl font-bold mb-4 text-orange-400 underline decoration-wavy decoration-orange-400">Education</h3>
        <div className="mb-6">
            <h4 className="text-2xl font-semibold text-gray-300">Bachelor of Science in Software Engineering</h4>
            <p className="text-gray-400">Isra University Hyd, 2018 - 2022</p>
        </div>
    </div>
);

const Skills = () => (
    <div className="mb-8 mt-2">
        <h3 className="text-3xl font-bold mb-4 text-orange-400 underline decoration-wavy decoration-orange-400">Skills</h3>
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
        <h3 className="text-3xl font-bold mb-4 text-orange-400 underline decoration-wavy decoration-orange-400">Contact</h3>
        <p className="text-gray-400">ahsanalisoomro147@gmail.com</p>
        <p className="text-gray-400">(+92) 317-3215380</p>
    </div>
);

export default Resume;
