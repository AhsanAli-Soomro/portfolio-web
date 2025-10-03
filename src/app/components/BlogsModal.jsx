// BlogsModal.jsx
"use client";
import React, { useEffect, useRef, useCallback } from "react";
import Image from "next/image";

const BlogsModal = ({ blog, onClose, onNext, onPrev }) => {
  if (!blog) return null;

  const overlayRef = useRef(null);
  const dialogRef = useRef(null);

  // Keyboard controls + focus trap
  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose?.();
      } else if (e.key === "ArrowRight") {
        onNext?.();
      } else if (e.key === "ArrowLeft") {
        onPrev?.();
      } else if (e.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [onClose, onNext, onPrev]
  );

  // Lock body scroll + focus dialog initially
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => dialogRef.current?.focus(), 0);
    return () => {
      document.body.style.overflow = prev;
      clearTimeout(t);
    };
  }, []);

  // Click on backdrop to close
  const onBackdropClick = (e) => {
    if (e.target === overlayRef.current) onClose?.();
  };

  const titleId = "blogs-modal-title";

  // Build better alt text (includes your name)
  const author = blog.author || "Ahsan Ali Soomro";
  const imageAlt = `${blog.title} — illustration for blog by ${author}`;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75"
      onClick={onBackdropClick}
      onKeyDown={onKeyDown}
    >
      {/* Prev control (desktop) */}
      <div className="hidden md:flex w-1/5 h-svh items-center justify-center">
        <button
          type="button"
          onClick={onPrev}
          aria-label="Previous blog"
          title="Previous blog"
          className="p-2 text-orange-600 hover:text-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded transition-transform hover:scale-110"
        >
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-12 h-12"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M19 12H5M12 19l-7-7 7-7"></path>
          </svg>
        </button>
      </div>

      {/* Dialog */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="bg-gray-100 border z-10 h-svh pt-6 p-8 rounded-lg max-w-3xl w-4/5 my-10 relative overflow-y-auto max-h-screen text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          title="Close"
          className="absolute top-2 right-2 text-orange-600 rounded-full p-2 hover:text-red-600 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          &times;
        </button>

        <h2 id={titleId} className="text-3xl font-bold mb-2 text-orange-600">
          {blog.title}
        </h2>
        <p className="mb-4 text-sm text-gray-700">
          by <span className="font-semibold">{author}</span>
        </p>

        <div className="relative w-full h-auto mb-6">
          <Image
            src={blog.image}
            width={1200}
            height={630}
            alt={imageAlt}
            className="rounded-md object-cover w-full h-auto"
            sizes="(max-width: 768px) 100vw, 800px"
            priority={false}
          />
        </div>

        <p className="text-lg mb-4">{blog.description}</p>

        {blog.features && blog.features.length > 0 && (
          <div>
            <h3 className="text-xl text-orange-600 font-semibold mb-2">
              Key Features
            </h3>
            <ul className="list-disc list-inside mb-4 space-y-1">
              {blog.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-4 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="bg-orange-500 text-black py-2 px-4 rounded hover:bg-orange-600 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Close
          </button>
        </div>
      </div>

      {/* Next control (desktop) */}
      <div className="hidden md:flex w-1/5 h-svh items-center justify-center">
        <button
          type="button"
          onClick={onNext}
          aria-label="Next blog"
          title="Next blog"
          className="p-2 text-orange-600 hover:text-orange-800 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded transition-transform hover:scale-110"
        >
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-12 h-12"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BlogsModal;
