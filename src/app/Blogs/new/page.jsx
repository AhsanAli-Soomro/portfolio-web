"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useBlog } from '../../context/BlogContext';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const BlogFormPage = ({ blog, onSave }) => {
    const [formData, setFormData] = useState({ title: '', content: '', image: null });
    const router = useRouter();
    const { addBlog } = useBlog();

    useEffect(() => {
        if (blog) {
            setFormData(blog);
        }
    }, [blog]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleContentChange = (value) => {
        setFormData({ ...formData, content: value });
    };

    const handleImageChange = (e) => {
        setFormData({ ...formData, image: URL.createObjectURL(e.target.files[0]) });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (blog) {
            onSave(formData);
        } else {
            const newBlog = { ...formData, date: new Date().toISOString() };
            addBlog(newBlog);
            router.push('/blogs');
        }
    };

    return (
        <div className='container bg-black text-white mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-4xl font-bold text-orange-400 mb-8 text-center'>
                {blog ? 'Edit Blog' : 'Write a New Blog'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                    <label className="block text-gray-400">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-950 text-white border-gray-600"
                        required
                    />
                </div>
                <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                    <label className="block text-gray-400">Content</label>
                    <ReactQuill
                        value={formData.content}
                        onChange={handleContentChange}
                        className="bg-gray-950 text-white"
                        modules={{
                            toolbar: [
                                [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
                                [{size: []}],
                                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                [{'list': 'ordered'}, {'list': 'bullet'}, 
                                 {'indent': '-1'}, {'indent': '+1'}],
                                ['link', 'image', 'video'],
                                ['clean']
                            ],
                        }}
                        formats={[
                            'header', 'font', 'size',
                            'bold', 'italic', 'underline', 'strike', 'blockquote',
                            'list', 'bullet', 'indent',
                            'link', 'image', 'video'
                        ]}
                    />
                </div>
                <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                    <label className="block text-gray-400">Image</label>
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-950 text-white border-gray-600"
                    />
                    {formData.image && (
                        <img src={formData.image} alt="Preview" className="mt-4 max-h-60" />
                    )}
                </div>
                <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                    <button
                        type="submit"
                        className="w-full bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    >
                        {blog ? 'Save Changes' : 'Submit Blog'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BlogFormPage;
