// ProjectModal.jsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectModal = ({ project, onClose, onNext, onPrev }) => {
    if (!project) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 overflow-y-auto">
            <button
                onClick={onPrev}
                className="text-white transition-transform transform hover:scale-110 sm:mb-0"
            >
                <span className='text-9xl'>{"<"}</span>
            </button>
            <div className="bg-black border pt-6 p-8 rounded-lg max-w-3xl w-full mx-4 my-10 relative overflow-y-auto max-h-screen text-white">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-orange-400 rounded-full p-2 hover:text-red-600 transition-transform transform hover:scale-110"
                >
                    &times;
                </button>
                <h2 className="text-3xl font-bold mb-4 text-orange-400">{project.title}</h2>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="relative transition-transform transform hover:scale-110">
                        <span className="top-2 left-2 z-10 bg-black bg-opacity-75 text-white p-1 rounded">Laptop View</span>
                        <Image
                            src={project.image}
                            width={400}
                            height={500}
                            alt={project.title}
                            className="rounded object-fill h-60 w-full"
                        />
                    </div>
                    <div className="relative mx-auto md:mx-0 transition-transform transform hover:scale-110">
                        <span className="top-2 left-2 z-10 bg-black bg-opacity-75 text-white p-1 rounded">Mobile View</span>
                        <Image
                            src={project.imageapp}
                            width={300}
                            height={200}
                            alt={project.title}
                            className="mb-4 rounded object-fill h-60 w-36"
                        />
                    </div>
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
                <div className="flex mt-4 justify-between items-center text-center">
                    <button
                        onClick={onClose}
                        className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition-transform transform hover:scale-110 mb-2 sm:mb-0"
                    >
                        Close
                    </button>
                    <Link href={project.link} passHref>
                        <p
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-400 dark:text-white hover:text-blue-600 inline-flex items-center transition-transform transform hover:scale-110"
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
                        </p>
                    </Link>
                </div>
            </div>
            <button
                onClick={onNext}
                className="text-white transition-transform transform hover:scale-110 sm:mb-0"
            >
                <span className='text-9xl'>{">"}</span>
            </button>
        </div>
    );
};

export default ProjectModal;
