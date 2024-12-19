"use client"
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard';
import BlogModal from './BlogModal';

const BlogsPage = ({ blogs }) => {
    const [selectedBlog, setSelectedBlog] = useState(null);

    const handleBlogClick = (blog) => {
        setSelectedBlog(blog);
    };

    const handleCloseModal = () => {
        setSelectedBlog(null);
    };

    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-extrabold text-purple-700 mb-8 text-center">
                    My Blogs
                </h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {blogs.map((blog, index) => (
                        <BlogCard key={index} blog={blog} onClick={() => handleBlogClick(blog)} />
                    ))}
                </div>
                <div className="mt-8 text-center">
                    <Link
                        to="/write-blog"
                        className="text-purple-500 hover:text-purple-700 font-medium transition duration-300"
                    >
                        Write a new blog
                    </Link>
                </div>
            </div>
            {selectedBlog && <BlogModal blog={selectedBlog} onClose={handleCloseModal} />}
        </div>
    );
};

export default BlogsPage;
