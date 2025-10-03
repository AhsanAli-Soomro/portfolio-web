// ProjectModal.jsx
"use client";
import React, { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectModal = ({ project, onClose, onNext, onPrev }) => {
  if (!project) return null;

  const overlayRef = useRef(null);
  const dialogRef = useRef(null);

  // Close on ESC
  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowRight") {
        onNext?.();
      } else if (e.key === "ArrowLeft") {
        onPrev?.();
      } else if (e.key === "Tab") {
        // basic focus trap
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

  // Lock body scroll; focus dialog initially
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      dialogRef.current?.focus();
    }, 0);
    return () => {
      document.body.style.overflow = prev;
      clearTimeout(t);
    };
  }, []);

  // Close when clicking on backdrop (but not inside the dialog)
  const onBackdropClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  const titleId = "project-modal-title";

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75"
      onClick={onBackdropClick}
      onKeyDown={onKeyDown}
      aria-hidden={false}
    >
      {/* Prev area */}
      <div className="hidden md:flex w-1/5 h-svh items-center justify-center">
        <button
          type="button"
          onClick={onPrev}
          aria-label="Previous project"
          title="Previous project"
          className="p-2 text-orange-400 hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 rounded transition-transform hover:scale-110"
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
        className="bg-gray-100 border z-10 h-svh pt-6 p-8 rounded-lg max-w-3xl w-4/5 my-10 relative overflow-y-auto max-h-screen text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          title="Close"
          className="absolute top-2 right-2 text-orange-400 rounded-full p-2 hover:text-red-600 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          &times;
        </button>

        <h2 id={titleId} className="text-3xl font-bold mb-4 text-orange-400">
          {project.title}
        </h2>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="relative transition-transform hover:scale-105">
            <span className="absolute top-2 left-2 z-10 bg-orange-500/75 text-black px-2 py-0.5 rounded">
              Laptop View
            </span>
            <Image
              src={project.image}
              width={400}
              height={500}
              alt={`${project.title} — Laptop view`}
              className="rounded object-cover h-60 w-full"
              sizes="(max-width: 768px) 100vw, 400px"
              priority={false}
            />
          </div>

          <div className="relative mx-auto md:mx-0 transition-transform hover:scale-105">
            <span className="absolute top-2 left-2 z-10 bg-orange-500/75 text-black px-2 py-0.5 rounded">
              Mobile View
            </span>
            <Image
              src={project.imageapp}
              width={300}
              height={200}
              alt={`${project.title} — Mobile view`}
              className="mb-4 rounded object-cover h-60 w-36"
              sizes="(max-width: 768px) 40vw, 300px"
            />
          </div>
        </div>

        <p className="text-lg mt-4 mb-4">{project.description}</p>

        {project.features && project.features.length > 0 && (
          <div>
            <h3 className="text-xl text-orange-400 font-semibold mb-2">
              Key Features
            </h3>
            <ul className="list-disc list-inside mb-4 space-y-1">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex mt-4 justify-between items-center">
          <button
            type="button"
            onClick={onClose}
            className="bg-orange-500 text-black py-2 px-4 rounded hover:bg-orange-600 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            Close
          </button>

          {project.link && (
            <Link href={project.link} target="_blank" rel="noopener noreferrer">
              <p
                className="text-orange-600 hover:text-orange-700 inline-flex items-center font-medium transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 rounded px-2"
                title="Open project in new tab"
              >
                Visit Site
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </p>
            </Link>
          )}
        </div>
      </div>

      {/* Next area */}
      <div className="hidden md:flex w-1/5 h-svh items-center justify-center">
        <button
          type="button"
          onClick={onNext}
          aria-label="Next project"
          title="Next project"
          className="p-2 text-orange-400 hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 rounded transition-transform hover:scale-110"
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

export default ProjectModal;
