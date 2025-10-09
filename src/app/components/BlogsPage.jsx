"use client";
import Link from "next/link";
import Image from "next/image";
import { blogsData } from "./data/blogs";


export default function Blogs() {
  return (
    <main className="bg-gradient-to-br from-orange-800 via-orange-600 to-orange-500 py-20">
      <h1 className="sr-only">Blogs — Ahsan Ali Soomro</h1>

      <section aria-labelledby="blogs-heading" className="container mx-auto px-4 sm:px-6 lg:px-16">
        <h2 id="blogs-heading" className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-10">
          My Blogs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {blogsData.map((b) => (
            <Link
              key={b.slug}
              href={`/Blogs/${b.slug}`}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition"
              aria-label={`Open blog ${b.title}`}
            >
              <div className="relative h-44">
                <Image src={b.image} alt={b.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm text-white/75 line-clamp-2">{b.description}</p>
                <div className="mt-3 text-xs text-white/80">{b.datePublished}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
