import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogsData } from "@/app/components/data/blogs";
import { IconArrowLeft, IconArrowRight, IconCheck } from "@tabler/icons-react";
// import { blogsData } from "@/data/blogs"; // put your blogsData here

const getBlog = (slug) => blogsData.find((b) => b.slug === slug);

export async function generateStaticParams() {
  return blogsData.map((b) => ({ slug: b.slug }));
}

// 👇 params may be a Promise — await it
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = getBlog(slug);
  if (!blog) return {};

  const siteUrl = "https://ahsanalisoomro.vercel.app";
  const pageUrl = `${siteUrl}/blogs/${blog.slug}`;
  const title = blog.title;
  const description = blog.description?.slice(0, 160) || "Blog post by Ahsan Ali Soomro.";
  const image = blog.image || "/og-cover.png";

  return {
    title,
    description,
    alternates: { canonical: pageUrl },
    openGraph: { type: "article", url: pageUrl, title, description, images: [{ url: image, width: 1200, height: 630 }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

// 👇 await params in the page too
export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = getBlog(slug);
  if (!blog) return notFound();

  const siteUrl = "https://ahsanalisoomro.vercel.app";
  const pageUrl = `${siteUrl}/blogs/${blog.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    url: pageUrl,
    image: blog.image ? [`${siteUrl}${blog.image}`] : undefined,
    author: { "@type": "Person", name: blog.author, url: siteUrl },
    datePublished: blog.datePublished,
    description: blog.description,
  };

  return (
    <main className="inner-page detail-page article-page">
      <Script
        id="ld-blog"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="detail-container">
        <nav aria-label="Breadcrumb"
          className="breadcrumbs">
          <Link href="/">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/Blogs">Journal</Link>
          <span className="mx-2">/</span>
          <span>{blog.title}</span>
        </nav>

        <span className="section-index">Article / {blog.datePublished}</span>
        <h1 className="detail-title">{blog.heading || blog.title}</h1>
        <p className="article-meta">Written by <strong>Ahsan Ali Soomro</strong> · {blog.datePublished}</p>

        {blog.image && (
          <div className="article-cover">
            <Image src={blog.image} alt={blog.title} fill className="object-cover" priority />
          </div>
        )}

        <p className="article-body">{blog.description}</p>

        {blog.features?.length > 0 && (
          <div className="detail-highlights">
            <span className="section-index">In this article</span><h2>Key takeaways</h2>
            <ul>{blog.features.map((f, i) => <li key={i}><IconCheck size={17}/>{f}</li>)}
            </ul>
          </div>
        )}

        <PrevNext slug={blog.slug} />
      </article>
    </main>
  );
}

function PrevNext({ slug }) {
  const idx = blogsData.findIndex((b) => b.slug === slug);
  if (idx === -1) return null;
  const prev = blogsData[(idx - 1 + blogsData.length) % blogsData.length];
  const next = blogsData[(idx + 1) % blogsData.length];

  return (
    <div className="prev-next">
      <Link href={`/Blogs/${prev.slug}`}><IconArrowLeft/><span><small>Previous article</small>{prev.title}</span></Link>
      <Link href={`/Blogs/${next.slug}`}><span><small>Next article</small>{next.title}</span><IconArrowRight/></Link>
    </div>
  );
}
