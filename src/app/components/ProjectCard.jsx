// components/ProjectCard.jsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ project, onClick }) => {
    return (
        <div >
            <article
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-10 cursor-pointer transition-transform transform hover:scale-105"
                onClick={() => onClick(project)}
            >
                <Image
                    src={project.image}
                    width={400}
                    height={300}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <h3 className="z-10 mt-3 text-3xl font-bold text-white">{project.title}</h3>
                <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                    {project.heading}
                </div>
            </article>
            <Link href={project.link} className="ml-3 mt-3 text-orange-400 dark:text-white hover:text-blue-600 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                    strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </Link>
        </div>
    );
};

export default ProjectCard;
