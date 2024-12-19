// components/ProjectCard.jsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ project, onClick }) => {
    return (
        <div className="max-w-sm mt-10">
            <article
                className="relative h-64 w-80 isolate flex flex-col justify-end overflow-hidden rounded-2xl shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => onClick(project)}
            >
                <Image
                    src={project.image}
                    width={400}
                    height={300}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                <div className="relative z-10 px-6 pb-6">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-300">{project.heading}</p>
                </div>
            </article>
            <div className="mt-3 text-center">
                <Link
                    href={project.link}
                    className="text-purple-700 hover:text-purple-900 font-medium transition duration-300 inline-flex items-center"
                >
                    Visit Site
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;
