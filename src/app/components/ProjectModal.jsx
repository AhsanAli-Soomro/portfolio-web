// components/ProjectModal.jsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="fixed inset-0 mb-10 z-50 flex items-center justify-center bg-black bg-opacity-75 overflow-y-auto">
            <div className="bg-black border pt-6 m-10 p-8 rounded-lg max-w-3xl w-full mx-4 my-10 relative overflow-y-auto max-h-screen text-white">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-orange-400 rounded-full p-2 hover:text-red-600 transition-transform transform hover:scale-110"
                >
                    &times;
                </button>
                <h2 className="text-3xl font-bold mb-4 text-orange-400">{project.title}</h2>
                <div className='flex gap-6'>

                    <Image src={project.image} width={400} height={300} alt={project.title} className="mb-4 rounded transition-transform transform hover:scale-110" />
                    <Image src={project.imageapp} width={200} height={300} alt={project.title} className="mb-4 rounded transition-transform transform hover:scale-110" />
                </div>
                <p className="text-lg mb-4">{project.description}</p>
                {project.features && (
                    <div>
                        <h3 className="text-xl text-orange-400 font-semibold mb-2">Key Features:</h3>
                        <ul className="list-disc list-inside mb-4 space-y-1">
                            {project.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <div className="flex justify-between mt-4">
                    <button
                        onClick={onClose}
                        className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition-transform transform hover:scale-110"
                    >
                        Close
                    </button>
                    <Link href={project.link} className="mt-3 text-orange-400 dark:text-white hover:text-blue-600 inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                            strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
