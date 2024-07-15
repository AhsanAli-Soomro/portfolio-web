import React from 'react';

const Resume = () => {
    return (
        <div className='pt-10'>
        <div className='text-4xl p-4 font-bold text-orange-400 text-center'>
            Resume 
        </div>
        <div className="max-w-4xl mx-auto my-10 p-8 bg-white shadow-lg rounded-lg">
            <Header />
            <Summary />
            <Experience />
            <Education />
            <Skills />
            <Contact />
        </div>
        </div>
    );
};

const Header = () => (
    <div className="border-b-2 border-gray-300 pb-4 mb-4">
        <h1 className="text-3xl font-bold">Ahsan Ali Soomro</h1>
        <h2 className="text-xl text-gray-600">Frontend web Developer</h2>
        <p className="text-gray-600">ahsanalisoomro147@gmail.com | (+92) 317-3215380</p>
        <p className="text-gray-600">
            <a href='https://www.linkedin.com/in/ahsanali-soomro' className='hover:text-blue-500'>https://www.linkedin.com/in/ahsanali-soomro</a>
            |
            <a href='https://github.com/AhsanAli-Soomro' className='hover:text-blue-500'>https://github.com/AhsanAli-Soomro</a>
        </p>
    </div>
);

const Summary = () => (
    <div className="mb-4">
        <h3 className="text-2xl font-bold mb-2">Summary</h3>
        <p>
            Experienced Front-end developer with a strong background in building scalable web applications and working across the Front-end. Proficient in HTML, CSS, JavaScript, React, and Next.js. Excellent problem-solving skills and a team player.
        </p>
    </div>
);

const Experience = () => (
    <div className="mb-4">
        <h3 className="text-2xl font-bold mb-2">Experience</h3>
        <div className="mb-2">
            <h4 className="text-xl font-semibold">React.js Developer at Verge System | WebHR</h4>
            <p className="text-gray-600">April 2024 - Present</p>
            <ul className="list-disc list-inside">
                <li>Developed and maintained web applications using React and Node.js.</li>
                <li>Implemented RESTful APIs and integrated third-party services.</li>
                <li>Improved application performance and user experience.</li>
                <li>Collaborated with cross-functional teams to deliver projects on time.</li>
            </ul>
        </div>
        <div className="mb-2">
            <h4 className="text-xl font-semibold">Front end Developer at WebSolve</h4>
            <p className="text-gray-600">Nov 2023 - Jan 2024</p>
            <ul className="list-disc list-inside">
                <li>Developed and maintained web applications using HTML and CSS only. </li>
            </ul>
        </div>
        <div className="mb-2">
            <h4 className="text-xl font-semibold">Network Engineer at GENTEC Soft.</h4>
            <p className="text-gray-600">Jun 2023 - Sep 2023</p>
            <ul className="list-disc list-inside">
                <li>Conducted regular network performance monitoring and troubleshooting to ensure optimal uptime.</li>
                <li>Designed and implemented secure network infrastructures to support enterprise operations.</li>
            </ul>
        </div>
    </div>
);

const Education = () => (
    <div className="mb-4">
        <h3 className="text-2xl font-bold mb-2">Education</h3>
        <div className="mb-2">
            <h4 className="text-xl font-semibold">Bachelor of Science in Software Engineering</h4>
            <p className="text-gray-600">Isra University Hyd, 2018 - 2022</p>
        </div>
    </div>
);

const Skills = () => (
    <div className="mb-4 mt-2">
        <h3 className="text-2xl font-bold mb-2">Skills</h3>
        <ul className="list-disc list-inside">
            <li>JavaScript, React, Next.js, Node.js</li>
            <li>Python</li>
            <li>HTML, CSS, Tailwind CSS, Bootstrap</li>
            <li>Git, Docker, CI/CD</li>
            <li>Adobe: Photoshop, Illustrator, XD  </li>
        </ul>
    </div>
);

const Contact = () => (
    <div className="mb-4">
        <h3 className="text-2xl font-bold mb-2">Contact</h3>
        <p>ahsanalisoomro147@gmail.com</p>
        <p>(+92) 317-3215380</p>
    </div>
);

export default Resume;
