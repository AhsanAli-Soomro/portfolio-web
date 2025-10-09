import Script from "next/script";
import BlogsPage from "../components/BlogsPage";


const siteUrl = "https://ahsanalisoomro.vercel.app";
const pageUrl = `${siteUrl}/Blogs`;

export const metadata = {
  title: "Blogs — Ahsan Ali Soomro",
  description:
    "Explore blogs by Ahsan Ali Soomro — covering web development, Next.js, React, Tailwind CSS, and technology insights.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Blogs — Ahsan Ali Soomro",
    siteName: "Ahsan Ali Soomro",
    description:
      "Insights and articles on web development, Next.js, React, Tailwind CSS, and modern front-end practices.",
    images: [
      {
        url: "/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Blogs by Ahsan Ali Soomro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs — Ahsan Ali Soomro",
    description:
      "Latest blogs and tutorials on Next.js, React, Tailwind CSS, and modern front-end development.",
    images: ["/og-cover.png"],
  },
  robots: { index: true, follow: true },
};

export default function BlogsListPage() {
  // Example blog list for structured data (replace with real posts from your BlogsPage)
  const blogs = [
    {
      title: "Building Scalable Apps with Next.js",
      url: `${pageUrl}/nextjs-scalable-apps`,
      description:
        "A practical guide on scaling applications using Next.js features like ISR, SSR, and API routes.",
      datePublished: "2025-06-01",
    },
    {
      title: "Why Tailwind CSS Speeds Up Front-End Development",
      url: `${pageUrl}/tailwind-speed`,
      description:
        "Exploring how Tailwind CSS simplifies styling, promotes consistency, and speeds up prototyping.",
      datePublished: "2025-06-10",
    },
  ];

  const jsonLd = {
    
    "@context": "https://schema.org", "@type": "Blog", url: pageUrl, name: "Blogs — Ahsan Ali Soomro",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Blogs — Ahsan Ali Soomro",
        description:
          "Blogs and insights by Ahsan Ali Soomro on web development, React, Next.js, Tailwind CSS, and modern UI/UX practices.",
        isPartOf: { "@id": `${siteUrl}#website` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Blogs", item: pageUrl },
        ],
      },
      {
        "@type": "Blog",
        "@id": `${pageUrl}#blog`,
        name: "Ahsan Ali Soomro — Blogs",
        url: pageUrl,
        description:
          "Technical blogs and tutorials by Ahsan Ali Soomro on Next.js, React, Tailwind CSS, and front-end development.",
        blogPost: blogs.map((b) => ({
          "@type": "BlogPosting",
          headline: b.title,
          url: b.url,
          description: b.description,
          author: {
            "@type": "Person",
            name: "Ahsan Ali Soomro",
            url: siteUrl,
          },
          datePublished: b.datePublished,
        })),
      },
    ],
  };

  return (
    <>
      <Script id="ld-blogs" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1 className="sr-only">Blogs — Ahsan Ali Soomro</h1>
      <BlogsPage />
    </>
  );
}
