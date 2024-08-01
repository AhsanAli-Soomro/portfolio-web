import React from 'react';

const BlogModal = ({ blog, onClose }) => {
    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
            <div className='bg-white p-6 rounded-lg shadow-lg relative w-full max-w-3xl mx-auto'>
                <button onClick={onClose} className='absolute top-2 right-2 text-black'>
                    &times;
                </button>
                <div className='overflow-auto' style={{ maxHeight: '80vh' }}>
                    <h2 className='text-2xl font-bold mb-4 text-black'>{blog.title}</h2>
                    <div className='text-black' dangerouslySetInnerHTML={{ __html: blog.content }}></div>
                    <p className='mt-4 text-gray-500 text-sm'>Published on {new Date(blog.date).toLocaleDateString()}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogModal;
