import React from 'react';
import Link from 'next/link';

const BlogCard = ({ blog, onClick, onDelete, onUpdate }) => {
    return (
        <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-10 cursor-pointer transition-transform transform hover:scale-105" onClick={onClick}>
            {blog.image && (
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="absolute inset-0 h-full w-full object-cover"
                />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 className="z-10 mt-3 text-3xl font-bold text-white">{blog.title}</h3>
            <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                {blog.content.replace(/<[^>]+>/g, '').substring(0, 100)}...
            </div>
            <div className="z-10 flex justify-between mt-3">
                <button onClick={(e) => { e.stopPropagation(); onUpdate(blog); }} className="text-orange-400 hover:text-blue-600">
                    Update
                </button>
                <button onClick={(e) => { e.stopPropagation(); onDelete(blog.id); }} className="text-red-400 hover:text-red-600">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default BlogCard;
