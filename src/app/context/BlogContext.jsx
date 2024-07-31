"use client"
import { createContext, useContext, useState, useEffect } from 'react';

const BlogContext = createContext();

const loadBlogsFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
        const storedBlogs = localStorage.getItem('blogs');
        return storedBlogs ? JSON.parse(storedBlogs) : [];
    }
    return [];
};

const saveBlogsToLocalStorage = (blogs) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('blogs', JSON.stringify(blogs));
    }
};

export const BlogProvider = ({ children }) => {
    const [blogs, setBlogs] = useState(loadBlogsFromLocalStorage);

    useEffect(() => {
        saveBlogsToLocalStorage(blogs);
    }, [blogs]);

    const addBlog = (newBlog) => {
        setBlogs([...blogs, { ...newBlog, id: blogs.length.toString() }]);
    };

    return (
        <BlogContext.Provider value={{ blogs, setBlogs, addBlog }}>
            {children}
        </BlogContext.Provider>
    );
};

export const useBlog = () => {
    return useContext(BlogContext);
};
