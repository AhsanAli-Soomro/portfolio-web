import BlogsPage from "../components/BlogsPage";
import { blogsData } from "../components/data/blogs";
import { SITE_URL, siteConfig } from "@/config/site";

const pageUrl = `${SITE_URL}/Blogs`;

export const metadata = {
  title: "Blogs & Articles | Ahsan Ali Soomro (Ahsan Soomro)",
  description:
    "Explore web development and engineering articles by Ahsan Ali Soomro (Ahsan Soomro) covering Next.js, React, TypeScript, and modern frontend tools.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Blogs & Articles by Ahsan Ali Soomro (Ahsan Soomro)",
    siteName: siteConfig.name,
    description:
      "Insights and articles on web development, Next.js, React, TypeScript, and modern engineering practices.",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Blogs by Ahsan Ali Soomro (Ahsan Soomro)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs by Ahsan Ali Soomro (Ahsan Soomro)",
    description:
      "Latest articles and tutorials on Next.js, React, TypeScript, and modern web development.",
    images: [siteConfig.ogImage],
  },
  robots: { index: true, follow: true },
};

export default function BlogsListPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Blogs & Articles by Ahsan Ali Soomro (Ahsan Soomro)",
        description:
          "Blogs and technical insights by Ahsan Ali Soomro on Next.js, React, TypeScript, and software engineering.",
        isPartOf: { "@id": `${SITE_URL}#website` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Blogs", item: pageUrl },
        ],
      },
      {
        "@type": "Blog",
        "@id": `${pageUrl}#blog`,
        name: "Ahsan Ali Soomro (Ahsan Soomro) — Articles & Insights",
        url: pageUrl,
        description:
          "Technical articles and tutorials by Ahsan Ali Soomro on Next.js, React, TypeScript, and modern web engineering.",
        author: {
          "@type": "Person",
          "@id": `${SITE_URL}#person`,
          name: siteConfig.name,
          alternateName: [siteConfig.alternateName],
          url: SITE_URL,
        },
        blogPost: blogsData.map((b) => ({
          "@type": "BlogPosting",
          headline: b.title,
          url: `${SITE_URL}/Blogs/${b.slug}`,
          description: b.description,
          image: b.image ? `${SITE_URL}${b.image}` : siteConfig.ogImage,
          author: {
            "@type": "Person",
            "@id": `${SITE_URL}#person`,
            name: siteConfig.name,
            alternateName: [siteConfig.alternateName],
            url: SITE_URL,
          },
          datePublished: b.datePublished,
        })),
      },
    ],
  };

  return (
    <>
      <script
        id="ld-blogs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogsPage />
    </>
  );
}
