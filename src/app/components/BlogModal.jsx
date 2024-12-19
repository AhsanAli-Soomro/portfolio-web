import React from 'react';

const BlogModal = ({ blog, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl relative w-full max-w-3xl mx-auto">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl focus:outline-none"
                >
                    &times;
                </button>
                <div className="overflow-auto" style={{ maxHeight: '80vh' }}>
                    <h2 className="text-3xl font-bold mb-4 text-purple-700">{blog.title}</h2>
                    <div
                        className="text-gray-700 leading-6"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    ></div>
                    <p className="mt-6 text-sm text-gray-500">
                        Published on {new Date(blog.date).toLocaleDateString()}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BlogModal;
