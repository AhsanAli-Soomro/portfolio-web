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
        <div className="inner-page legacy-form-page">

            <h2 className="subpage-title">
                Write a New Blog
            </h2>

            <form onSubmit={handleSubmit} className="legacy-form contact-form-card">

                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="theme-input"
                    />
                </div>

                <div>
                    <label>Content</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        className="theme-input"
                        rows="6"
                    />
                </div>

                <div>
                    <button
                        type="submit"
                        className="button-primary form-submit"
                    >
                        Submit
                    </button>
                </div>
                
            </form>

        </div>
    );
};

export default BlogFormPage;
