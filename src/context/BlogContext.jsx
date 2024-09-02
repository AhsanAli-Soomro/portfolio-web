"use client"
import { createContext, useContext, useState, useEffect } from 'react';

const BlogContext = createContext();

export const useBlog = () => useContext(BlogContext);

export const BlogProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const storedBlogs = localStorage.getItem('blogs');
        if (storedBlogs) {
            setBlogs(JSON.parse(storedBlogs));
        }
    }, []);

    const addBlog = (blog) => {
        const updatedBlogs = [...blogs, blog];
        setBlogs(updatedBlogs);
        localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    };

    const updateBlog = (updatedBlog) => {
        const updatedBlogs = blogs.map(blog => blog.id === updatedBlog.id ? updatedBlog : blog);
        setBlogs(updatedBlogs);
        localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    };

    const deleteBlog = (id) => {
        const updatedBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(updatedBlogs);
        localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
    };

    return (
        <BlogContext.Provider value={{ blogs, addBlog, updateBlog, deleteBlog }}>
            {children}
        </BlogContext.Provider>
    );
};