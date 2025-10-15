import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogsData } from "@/app/components/data/blogs";
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
    <main className="py-16">
      <Script
        id="ld-blog"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="mx-auto max-w-3xl px-6 sm:px-10 lg:px-0">
        <nav aria-label="Breadcrumb"
          className="relative z-20 mb-6 text-sm text-white/70">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/Blogs" className="hover:text-white">Blogs</Link>
          <span className="mx-2">/</span>
          <span className="text-white/90">{blog.title}</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">{blog.heading || blog.title}</h1>
        <p className="mt-2 text-white/80">
          by <span className="font-semibold text-white">Ahsan Ali Soomro</span>
        </p>
        <p className="mt-1 text-white/70 text-sm">{blog.datePublished}</p>

        {blog.image && (
          <div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden border border-white/10 bg-white/5 mt-6">
            <Image src={blog.image} alt={blog.title} fill className="object-cover" priority />
          </div>
        )}

        <p className="mt-6 text-white/85 leading-relaxed">{blog.description}</p>

        {blog.features?.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-white">Key points</h2>
            <ul className="mt-4 grid gap-3 list-disc pl-5 text-white/85">
              {blog.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>
        )}

        <PrevNext slug={blog.slug} />
      </section>
    </main>
  );
}

function PrevNext({ slug }) {
  const idx = blogsData.findIndex((b) => b.slug === slug);
  if (idx === -1) return null;
  const prev = blogsData[(idx - 1 + blogsData.length) % blogsData.length];
  const next = blogsData[(idx + 1) % blogsData.length];

  return (
    <div className="relative mt-14 flex items-center justify-between text-white/85">
      <Link href={`/blogs/${prev.slug}`} className="hover:text-white">&larr; {prev.title}</Link>
      <Link href={`/blogs/${next.slug}`} className="hover:text-white">{next.title} &rarr;</Link>
    </div>
  );
}
