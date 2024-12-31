"use client";
import React, { useState } from "react";

const BlogFormPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleContentChange = (e) => {
    setFormData({ ...formData, content: e.target.value });
  };

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      setFormData({ ...formData, image: URL.createObjectURL(e.target.files[0]) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Blog Submitted:", formData);
    // Add blog submission logic here
    setFormData({ title: "", content: "", image: null });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full">
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">
          Write a Blog
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title Input */}
          <div>
            <label className="block text-gray-700 mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-700 focus:outline-none"
              placeholder="Enter blog title"
              required
            />
          </div>

          {/* Content Input */}
          <div>
            <label className="block text-gray-700 mb-2">Content</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleContentChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-700 focus:outline-none"
              placeholder="Write your blog content here..."
              rows="6"
              required
            ></textarea>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-gray-700 mb-2">Upload Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none"
            />
            {formData.image && (
              <img
                src={formData.image}
                alt="Preview"
                className="mt-4 rounded-lg max-h-48"
              />
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-purple-700 text-white py-2 rounded-lg hover:bg-purple-900 transition duration-300"
            >
              Submit Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogFormPage;
