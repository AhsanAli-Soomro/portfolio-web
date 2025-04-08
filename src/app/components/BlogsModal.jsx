// ProjectModal.jsx
import React from 'react';
import Image from 'next/image';

const BlogsModal = ({ blog, onClose, onNext, onPrev }) => {
    if (!blog) return null;

    return (
        <div className="fixed w-full inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 overflow-y-auto">
            <div onClick={onPrev} className='flex transition-transform transform hover:scale-110 cursor-pointer w-2/5 text-center hover:bg-opacity-40 h-svh justify-center items-center'>
                <button
                    onClick={onPrev}
                    className="text-orange-600 p-2 focus:outline-none hover:text-orange-800"
                >
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-12 h-12 mr-2"
                        viewBox="0 0 24 24"
                    >
                        <path d="M19 12H5M12 19l-7-7 7-7"></path>
                    </svg>

                </button>
            </div>

            <div className="bg-gray-100 border z-10 h-svh pt-6 p-8 rounded-lg max-w-3xl w-4/5 my-10 relative overflow-y-auto max-h-screen text-black">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-orange-600 rounded-full p-2 hover:text-red-600 transition-transform transform hover:scale-110"
                >
                    &times;
                </button>

                <h2 className="text-3xl font-bold mb-4 text-orange-600">{blog.title}</h2>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="relative w-full h-full">
                        <Image
                            src={blog.image}
                            width={400}
                            height={500}
                            alt={blog.title}
                            className="rounded-md object-fill h-full w-full"
                        />
                    </div>

                </div>

                <p className="text-lg mb-4">{blog.description}</p>
                {blog.features && (
                    <div>
                        <h3 className="text-xl text-orange-600 font-semibold mb-2">Key Features:</h3>
                        <ul className="list-disc list-inside mb-4 space-y-1">
                            {blog.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="flex mt-4 justify-between items-center text-center">
                    <button
                        onClick={onClose}
                        className="bg-orange-500 text-black py-2 px-4 rounded hover:bg-orange-600 transition-transform transform hover:scale-110 mb-2 sm:mb-0"
                    >
                        Close
                    </button>
                </div>
            </div>

            <div onClick={onNext} className='flex transition-transform transform hover:scale-110 cursor-pointer w-2/5 text-center hover:bg-opacity-40 h-svh justify-center items-center'>
                <button
                    onClick={onNext}
                    className="text-orange-600 p-2 focus:outline-none hover:text-orange-800"
                >
                    <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-12 h-12 ml-2"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>

                </button>
            </div>

        </div>
    );
};

export default BlogsModal;
