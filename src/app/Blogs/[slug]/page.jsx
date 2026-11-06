import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogsData } from "@/app/components/data/blogs";
import { IconArrowLeft, IconArrowRight, IconCheck, IconUser } from "@tabler/icons-react";
import { SITE_URL, siteConfig } from "@/config/site";

const getBlog = (slug) => blogsData.find((b) => b.slug === slug);

export async function generateStaticParams() {
  return blogsData.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || params?.slug;
  const blog = getBlog(slug);
  if (!blog) return {};

  const pageUrl = `${SITE_URL}/Blogs/${blog.slug}`;
  const title = `${blog.title} — Article by Ahsan Ali Soomro (Ahsan Soomro)`;
  const description =
    blog.description?.slice(0, 160) ||
    "Technical article authored by Full Stack Developer Ahsan Ali Soomro.";
  const image = blog.image ? `${SITE_URL}${blog.image}` : siteConfig.ogImage;

  return {
    title,
    description,
    alternates: { canonical: pageUrl },
    openGraph: {
      type: "article",
      url: pageUrl,
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: `${blog.title} by Ahsan Ali Soomro` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || params?.slug;
  const blog = getBlog(slug);
  if (!blog) return notFound();

  const pageUrl = `${SITE_URL}/Blogs/${blog.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    headline: blog.heading || blog.title,
    url: pageUrl,
    image: blog.image ? [`${SITE_URL}${blog.image}`] : [siteConfig.ogImage],
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}#person`,
      name: siteConfig.name,
      alternateName: [siteConfig.alternateName],
      url: SITE_URL,
    },
    publisher: {
      "@type": "Person",
      "@id": `${SITE_URL}#person`,
      name: siteConfig.name,
      url: SITE_URL,
    },
    datePublished: blog.datePublished,
    dateModified: blog.datePublished,
    description: blog.description,
  };

  return (
    <main className="inner-page detail-page article-page">
      <script
        id="ld-blog"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="detail-container">
        <nav aria-label="Breadcrumb" className="breadcrumbs">
          <Link href="/">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/Blogs">Journal</Link>
          <span className="mx-2">/</span>
          <span>{blog.title}</span>
        </nav>

        <span className="section-index">Article / {blog.datePublished}</span>
        <h1 className="detail-title">{blog.heading || blog.title}</h1>
        
        {/* Clear author attribution */}
        <p className="article-meta" style={{ display: "flex", alignItems: "center", gap: "8px", margin: "10px 0 16px" }}>
          <IconUser size={16} />
          <span>Written by <strong>Ahsan Ali Soomro (Ahsan Soomro)</strong> · Published on {blog.datePublished}</span>
        </p>

        {blog.image && (
          <div className="article-cover">
            <Image
              src={blog.image}
              alt={`${blog.title} — Written by Ahsan Ali Soomro`}
              fill
              sizes="(max-width: 1000px) 100vw, 850px"
              className="object-cover"
              priority
            />
          </div>
        )}

        <p className="article-body">{blog.description}</p>

        {blog.features?.length > 0 && (
          <div className="detail-highlights">
            <span className="section-index">In this article</span>
            <h2>Key takeaways</h2>
            <ul>
              {blog.features.map((f, i) => (
                <li key={i}>
                  <IconCheck size={17} />
                  {f}
                </li>
              ))}
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
      <Link href={`/Blogs/${prev.slug}`}>
        <IconArrowLeft />
        <span>
          <small>Previous article</small>
          {prev.title}
        </span>
      </Link>
      <Link href={`/Blogs/${next.slug}`}>
        <span>
          <small>Next article</small>
          {next.title}
        </span>
        <IconArrowRight />
      </Link>
    </div>
  );
}
