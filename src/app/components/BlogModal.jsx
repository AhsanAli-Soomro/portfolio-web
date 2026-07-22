import React from 'react';

const BlogModal = ({ blog, onClose }) => {
    return (
        <div className="modal-overlay">

            <div className="theme-modal">

                <button
                    onClick={onClose}
                    className="modal-close"
                >
                    &times;
                </button>

                <div className="overflow-auto" style={{ maxHeight: '80vh' }}>
                    <h2>{blog.title}</h2>
                    <div
                        className="modal-content"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    ></div>
                    <p className="modal-meta">
                        Published on {new Date(blog.date).toLocaleDateString()}
                    </p>
                </div>

            </div>

        </div>
    );
};

export default BlogModal;
