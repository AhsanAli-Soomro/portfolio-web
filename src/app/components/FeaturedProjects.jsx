"use client";

import Link from "next/link";
import Image from "next/image";
import { projectsData } from "./data/projects";


export default function FeaturedProjects({ limit = 6 }) {
  const projects = projectsData.slice(0, limit);

  return (
    <section
      id="featured-projects"
      aria-labelledby="featured-heading"
      className="relative py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="flex items-end justify-between gap-4">
          <h2
            id="featured-heading"
            className="text-2xl sm:text-3xl font-bold text-white"
          >
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="text-sm text-white/85 hover:text-white transition"
            aria-label="View all projects"
          >
            View all →
          </Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/Projects/${p.slug}`}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition"
              aria-label={`Open project ${p.title}`}
            >
              <div className="relative h-44">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>

              <div className="p-5">
                <h3 className="text-white font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/75 line-clamp-2">
                  {p.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {(p.features?.slice(0, 2) || []).map((t, i) => (
                    <span
                      key={i}
                      className="text-xs text-white/90 bg-white/10 rounded px-2 py-1"
                    >
                      {t.replace(/\.$/, "")}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
