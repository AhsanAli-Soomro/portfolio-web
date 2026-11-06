"use client";

import Link from "next/link";
import Image from "next/image";
import { IconArrowUpRight, IconCalendar } from "@tabler/icons-react";
import { blogsData } from "./data/blogs";
import Reveal from "./Reveal";

export default function Blogs() {
  return (
    <main className="inner-page">
      <header className="page-header page-container">
        <span className="section-index hero-animate">Journal / Ideas & insights</span>
        <h1 className="page-title hero-animate">Articles & Insights<br /><em>by Ahsan Ali Soomro</em></h1>
        <p className="page-lead hero-animate">
          Practical tutorials, architecture deep-dives, and frontend insights authored by Ahsan Ali Soomro (Ahsan Soomro).
        </p>
      </header>
      <section className="page-container blog-grid" aria-label="Articles list">
        {blogsData.map((blog, index) => (
          <Reveal as="article" className={`blog-list-card ${index === 0 ? "featured-blog" : ""}`} delay={(index % 3) * 90} key={blog.slug}>
            <Link href={`/Blogs/${blog.slug}`}>
              <div className="blog-image">
                <Image
                  src={blog.image}
                  alt={`${blog.title} — Written by Ahsan Ali Soomro`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="project-image"
                />
              </div>
              <div className="blog-info">
                <div className="blog-date">
                  <IconCalendar size={14} />
                  {blog.datePublished}
                </div>
                <h2>{blog.title}</h2>
                <p>{blog.description}</p>
                <span className="read-link">Read article <IconArrowUpRight size={16} /></span>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>
    </main>
  );
}
