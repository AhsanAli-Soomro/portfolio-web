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
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-4xl font-bold text-orange-400 mb-8 text-center'>
                Write a New Blog
            </h2>
            <form onSubmit={handleSubmit} className='space-y-6'>
                <div>
                    <label className='block text-sm font-medium text-gray-700'>Title</label>
                    <input
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className='mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                    />
                </div>
                <div>
                    <label className='block text-sm font-medium text-gray-700'>Content</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        className='mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md'
                    />
                </div>
                <div>
                    <button
                        type='submit'
                        className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none'
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BlogFormPage;
