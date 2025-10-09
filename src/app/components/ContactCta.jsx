"use client";

import Link from "next/link";

export default function ContactCta() {
  return (
    <section
      id="contact"
      className="relative py-14"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 id="contact-heading" className="text-white text-2xl font-bold">
              Have a project in mind?
            </h2>
            <p className="mt-2 text-white/80">
              I help startups and teams ship fast, accessible, and beautiful UIs.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/hire"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-orange-800 font-semibold shadow hover:scale-[1.02] transition"
              aria-label="Start a project"
            >
              Start a project
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-white/80 text-white font-semibold hover:bg-white/10 transition"
              aria-label="View resume"
            >
              View resume
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
