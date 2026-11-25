// ProjectModal.jsx
"use client";
import React, { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight, IconCheck, IconDeviceGamepad2, IconCode } from "@tabler/icons-react";

const ProjectModal = ({ project, onClose, onNext, onPrev }) => {
  const overlayRef = useRef(null);
  const dialogRef = useRef(null);

  // Close on ESC and handle keyboard navigation
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
    if (!project) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      dialogRef.current?.focus();
    }, 0);
    return () => {
      document.body.style.overflow = prev;
      clearTimeout(t);
    };
  }, [project]);

  if (!project) return null;

  const onBackdropClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  const titleId = "project-modal-title";

  return (
    <div
      ref={overlayRef}
      className="modal-overlay"
      onClick={onBackdropClick}
      onKeyDown={onKeyDown}
      aria-hidden={false}
    >
      {/* Prev area */}
      {onPrev && (
        <div className="hidden md:flex w-1/6 h-svh items-center justify-center">
          <button
            type="button"
            onClick={onPrev}
            aria-label="Previous project"
            title="Previous project"
            className="modal-arrow"
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
      )}

      {/* Dialog */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="theme-modal theme-modal-large"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          title="Close"
          className="modal-close"
        >
          &times;
        </button>

        {project.role && (
          <span className="section-index" style={{ display: "block", marginBottom: "8px" }}>
            {project.role}
          </span>
        )}

        <h2 id={titleId}>{project.title}</h2>

        {project.techStack?.length > 0 && (
          <div className="project-badges" style={{ marginBottom: "18px" }}>
            {project.techStack.map((tech) => (
              <span className="project-badge" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-col md:flex-row gap-4">
          {project.image && (
            <div className={`relative overflow-hidden rounded-xl border border-[var(--line)] ${project.imageapp ? "md:w-3/4" : "w-full"}`}>
              <span className="modal-label">
                {project.mediaLabel || "Preview"}
              </span>
              <Image
                src={project.image}
                width={1200}
                height={675}
                alt={`${project.title} — Gameplay and UI preview by Ahsan Ali Soomro`}
                className="rounded-xl object-cover w-full h-64 md:h-80"
                sizes="(max-width: 768px) 100vw, 800px"
                priority={false}
              />
            </div>
          )}

          {project.imageapp && (
            <div className="relative mx-auto md:mx-0 md:w-1/4 overflow-hidden rounded-xl border border-[var(--line)]">
              <span className="modal-label">Mobile View</span>
              <Image
                src={project.imageapp}
                width={300}
                height={500}
                alt={`${project.title} — Mobile view of project by Ahsan Ali Soomro`}
                className="rounded-xl object-cover h-64 md:h-80 w-full"
                sizes="(max-width: 768px) 60vw, 250px"
              />
            </div>
          )}
        </div>

        <p className="modal-content" style={{ marginTop: "20px", fontSize: "15px" }}>
          {project.description}
        </p>

        {project.features && project.features.length > 0 && (
          <div>
            <h3 className="modal-subtitle">Key Technical Highlights</h3>
            <ul className="modal-highlights-list">
              {project.features.map((feature, index) => (
                <li key={index}>
                  <IconCheck size={16} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="modal-footer-actions">
          <button type="button" onClick={onClose} className="button-ghost">
            Close
          </button>

          <div className="modal-cta-group">
            {project.cta ? (
              <>
                <Link
                  href={`/Projects/${project.slug}#gameplay-demo`}
                  onClick={onClose}
                  className="button-primary"
                >
                  <IconDeviceGamepad2 size={17} />
                  {project.cta.demoLabel}
                </Link>
                <Link
                  href={`/Projects/${project.slug}#technical-highlights`}
                  onClick={onClose}
                  className="button-ghost"
                >
                  <IconCode size={17} />
                  {project.cta.breakdownLabel}
                </Link>
              </>
            ) : (
              <>
                <Link
                  href={`/Projects/${project.slug}`}
                  onClick={onClose}
                  className="button-ghost"
                >
                  Case Study <IconArrowUpRight size={16} />
                </Link>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-primary"
                  >
                    Visit Site <IconArrowUpRight size={16} />
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Next area */}
      {onNext && (
        <div className="hidden md:flex w-1/6 h-svh items-center justify-center">
          <button
            type="button"
            onClick={onNext}
            aria-label="Next project"
            title="Next project"
            className="modal-arrow"
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
      )}
    </div>
  );
};

export default ProjectModal;
