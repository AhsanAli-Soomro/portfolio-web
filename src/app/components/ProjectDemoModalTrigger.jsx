"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { IconCode, IconDeviceGamepad2, IconX } from "@tabler/icons-react";

export default function ProjectDemoActions({ project }) {
  const [openPreview, setOpenPreview] = useState(false);

  useEffect(() => {
    if (!openPreview) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpenPreview(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openPreview]);

  const handleBreakdownClick = (e) => {
    e.preventDefault();
    const el = document.getElementById("technical-highlights");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div className="detail-action">
        <button
          type="button"
          onClick={() => setOpenPreview(true)}
          className="button-primary"
          style={{ border: 0, cursor: "pointer" }}
        >
          <IconDeviceGamepad2 size={18} />
          {project.cta?.demoLabel || "Gameplay Demo"}
        </button>

        <a
          href="#technical-highlights"
          onClick={handleBreakdownClick}
          className="button-ghost"
        >
          <IconCode size={18} />
          {project.cta?.breakdownLabel || "Technical Breakdown"}
        </a>
      </div>

      {openPreview && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} Gameplay Preview`}
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpenPreview(false);
          }}
        >
          <div className="theme-modal theme-modal-large">
            <button
              type="button"
              onClick={() => setOpenPreview(false)}
              aria-label="Close gameplay preview"
              className="modal-close"
            >
              <IconX size={22} />
            </button>

            <span className="section-index" style={{ display: "block", marginBottom: "8px" }}>
              {project.mediaLabel || "Unity 6 (URP) · Gameplay Preview"}
            </span>
            <h2>{project.title}</h2>

            <div className="demo-preview-stage">
              <Image
                src={project.image}
                alt={`${project.title} — Gameplay preview capture`}
                fill
                sizes="(max-width: 900px) 100vw, 820px"
                className="object-cover"
              />
              <div className="demo-hud-badge">
                <span>60 FPS URP · Mobile &amp; Desktop Ready</span>
              </div>
            </div>

            <p className="modal-content" style={{ marginTop: "18px", fontSize: "14px" }}>
              In-engine gameplay capture showing real-time muzzle flash mesh VFX, holographic ADS sight, procedural shell ejection, wave counter HUD, and ergonomic mobile touch controls.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
