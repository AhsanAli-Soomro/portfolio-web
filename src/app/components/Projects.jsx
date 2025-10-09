"use client";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "./data/projects";


export default function Projects() {
  return (
    <main className="relative py-20">
      <h1 className="sr-only">Projects — Ahsan Ali Soomro</h1>

      <section aria-labelledby="projects-heading" className="container mx-auto px-4 sm:px-6 lg:px-16">
        <h2 id="projects-heading" className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-10">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projectsData.map((p) => (
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
                  sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/75 line-clamp-2">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {(p.features?.slice(0, 2) || []).map((t, i) => (
                    <span key={i} className="text-xs text-white/90 bg-white/10 rounded px-2 py-1">
                      {t.replace(/\.$/, "")}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
