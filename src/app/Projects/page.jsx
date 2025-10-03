import Script from "next/script";
import ProjectsPage from "../components/Projects";
// If you're inside src/app/Projects/page.jsx, this usually is ../../components/Projects


const siteUrl = "https://ahsanalisoomro.vercel.app";
const pageUrl = `${siteUrl}/Projects`; // use /projects if your folder is lowercase

export const metadata = {
  title: "Projects — Ahsan Ali Soomro",
  description:
    "Selected projects by Ahsan Ali Soomro — Front-End Developer specializing in Next.js, React, and Tailwind CSS.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Projects — Ahsan Ali Soomro",
    siteName: "Ahsan Ali Soomro",
    description:
      "Showcase of Front-End projects built with Next.js, React, and Tailwind CSS.",
    images: [
      {
        url: "/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Projects by Ahsan Ali Soomro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects — Ahsan Ali Soomro",
    description:
      "A portfolio of Front-End work using Next.js, React, and Tailwind CSS.",
    images: ["/og-cover.png"],
  },
  robots: { index: true, follow: true },
};

export default function ProjectsListPage() {
  // 👇️ List your live projects here (titles, URLs, short descriptions, dates).
  // These feed the JSON-LD so Google understands the collection.
  // Replace the examples with your real projects.
  const projects = [
    {
      name: "Modern UI Portfolio",
      url: `${siteUrl}/projects/modern-ui-portfolio`,
      description:
        "Personal portfolio built with Next.js, React, and Tailwind CSS focusing on performance and accessibility.",
      datePublished: "2025-06-15",
    },
    {
      name: "E-commerce Product Gallery",
      url: `${siteUrl}/projects/ecommerce-gallery`,
      description:
        "Responsive product gallery with filters, SSR/ISR, and optimized images using Next/Image.",
      datePublished: "2025-05-20",
    },
    {
      name: "SaaS Marketing Landing",
      url: `${siteUrl}/projects/saas-landing`,
      description:
        "High-converting landing page with A/B test slots and clean component system.",
      datePublished: "2025-04-10",
    },
  ];

  // JSON-LD: ItemList of Projects + Breadcrumbs + WebPage
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Projects — Ahsan Ali Soomro",
        description:
          "Selected projects by Ahsan Ali Soomro — Front-End Developer (Next.js, React, Tailwind CSS).",
        isPartOf: { "@id": `${siteUrl}#website` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Projects", item: pageUrl },
        ],
      },
      {
        "@type": "ItemList",
        itemListElement: projects.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "CreativeWork",
            "@id": p.url,
            url: p.url,
            name: p.name,
            description: p.description,
            datePublished: p.datePublished,
            author: {
              "@type": "Person",
              name: "Ahsan Ali Soomro",
              url: siteUrl,
            },
          },
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        url: siteUrl,
        name: "Ahsan Ali Soomro",
        inLanguage: "en",
      },
    ],
  };

  return (
    <>
      {/* Structured data for the Projects list */}
      <Script
        id="ld-projects"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* In case your Projects component doesn't output an H1, we add one for SEO/a11y */}
      <h1 className="sr-only">Projects — Ahsan Ali Soomro</h1>

      {/* Your visual page */}
      <ProjectsPage />
    </>
  );
}
