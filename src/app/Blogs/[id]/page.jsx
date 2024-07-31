import React from 'react';
import { useRouter } from 'next/router';
import { useBlog } from '../../context/BlogContext';

const BlogDetailPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const { blogs } = useBlog();
    const blog = blogs.find(blog => blog.id === id);

    if (!blog) {
        return <div>Blog not found</div>;
    }

    return (
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-4xl font-bold text-orange-400 mb-8 text-center'>
                {blog.title}
            </h2>
            <div className='bg-white p-6 rounded-lg shadow-lg'>
                {blog.image && <img src={blog.image} alt={blog.title} className='mb-4 max-h-60' />}
                <p>{blog.content}</p>
                <p className='mt-4 text-gray-500 text-sm'>Published on {new Date(blog.date).toLocaleDateString()}</p>
            </div>
        </div>
    );
};

export default BlogDetailPage;
