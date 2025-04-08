"use client"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BlogFormPage = ({ addBlog }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBlog = { title, content, date: new Date().toISOString() };
        addBlog(newBlog);
        navigate('/blogs');
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">

            <h2 className="text-4xl font-extrabold text-purple-700 mb-8 text-center">
                Write a New Blog
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-md rounded-lg p-8 max-w-lg mx-auto">

                <div>
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Content</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                        rows="6"
                    />
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                    >
                        Submit
                    </button>
                </div>
                
            </form>

        </div>
    );
};

export default BlogFormPage;
