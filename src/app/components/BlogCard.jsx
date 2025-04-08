import React from 'react';

const BlogCard = ({ blog, onClick, onDelete, onUpdate }) => {
    return (
        <div
            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl shadow-lg px-6 pb-6 pt-40 max-w-sm mx-auto mt-10 cursor-pointer transition-transform transform hover:scale-105 bg-white"
            onClick={onClick}
        >

            {blog.image && (
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="absolute inset-0 h-full w-full object-cover rounded-2xl"
                />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-purple-700/30 to-transparent"></div>

            <h3 className="z-10 mt-3 text-2xl font-bold text-white">{blog.title}</h3>
            <p className="z-10 text-sm leading-6 text-gray-200 mt-2">
                {blog.content.replace(/<[^>]+>/g, '').substring(0, 100)}...
            </p>
            <div className="z-10 flex justify-between mt-4">

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onUpdate(blog);
                    }}
                    className="text-purple-300 hover:text-purple-500 font-medium transition duration-200"
                >
                    Update
                </button>

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onDelete(blog.id);
                    }}
                    className="text-red-400 hover:text-red-600 font-medium transition duration-200"
                >
                    Delete
                </button>
                
            </div>

        </div>
    );
};

export default BlogCard;
