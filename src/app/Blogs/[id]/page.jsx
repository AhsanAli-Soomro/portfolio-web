"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { useBlog } from '../../../context/BlogContext';

const BlogDetailPage = () => {
    const router = useRouter();
    const { blogs } = useBlog();
    const { id } = router.query;
    const blog = blogs.find(blog => blog.id === id);

    if (!blog) {
        return <p>Blog not found</p>;
    }

    return (
        <div className="bg-black text-white py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-orange-400 mb-8">{blog.title}</h2>
                {blog.image && <img src={blog.image} alt={blog.title} className="mb-4 rounded-md max-h-60 object-cover" />}
                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                <p className="mt-4 text-gray-500 text-sm">Published on {new Date(blog.date).toLocaleDateString()}</p>
            </div>
        </div>
    );
};

export default BlogDetailPage;
