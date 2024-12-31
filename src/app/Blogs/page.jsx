"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import BlogCard from '../components/BlogCard';
import BlogModal from '../components/BlogModal';
import { useBlog } from '../../context/BlogContext';
import BlogFormPage from './new/page';

const BlogsPage = () => {
    const { blogs, updateBlog, deleteBlog } = useBlog();
    const [selectedBlog, setSelectedBlog] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const handleBlogClick = (blog) => {
        setSelectedBlog(blog);
    };

    const handleCloseModal = () => {
        setSelectedBlog(null);
    };

    const handleDelete = (id) => {
        deleteBlog(id);
    };

    const handleUpdate = (blog) => {
        setSelectedBlog(blog);
        setIsEditing(true);
    };

    const handleSave = (updatedBlog) => {
        updateBlog(updatedBlog);
        setIsEditing(false);
        setSelectedBlog(null);
    };

    return (
        <div className='bg-gray-100 text-black pt-16 py-12 h-svh'>
            <div className="mx-auto">
                <h2 className="text-2xl py-1 fixed w-full z-20 text-white font-bold bg-purple-700 mb-12 text-center animate-fadeIn">
                    My Blogs
                </h2>
                <div className='flex pt-16 flex-wrap justify-center gap-4'>
                    {blogs.length > 0 ? (
                        blogs.map((blog, index) => (
                            <BlogCard
                                key={index}
                                blog={blog}
                                onClick={() => handleBlogClick(blog)}
                                onDelete={handleDelete}
                                onUpdate={handleUpdate}
                            />
                        ))
                    ) : (
                        <p className="text-black">No blogs available.</p>
                    )}
                </div>
                <div className='mt-8 text-center'>
                    <Link href="/Blogs/new">
                        {/* <p className='text-purple-700 hover:text-purple-900'>Write a new blog</p> */}
                    </Link>
                </div>
            </div>
            {selectedBlog && isEditing && (
                <BlogFormPage blog={selectedBlog} onSave={handleSave} />
            )}
            {selectedBlog && !isEditing && <BlogModal blog={selectedBlog} onClose={handleCloseModal} />}
        </div>
    );
};

export default BlogsPage;