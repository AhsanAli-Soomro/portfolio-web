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
        <div className='bg-black text-white py-12'>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className='text-4xl font-bold text-orange-400 mb-8 text-center'>
                    My Blogs
                </h2>
                <div className='flex flex-wrap justify-center gap-4'>
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
                        <p className="text-white">No blogs available.</p>
                    )}
                </div>
                <div className='mt-8 text-center'>
                    <Link href="/Blogs/new">
                        <p className='text-orange-500 hover:text-orange-600'>Write a new blog</p>
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
