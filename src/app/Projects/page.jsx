import Projects from "../components/Projects";
import { SITE_URL, siteConfig } from "@/config/site";

const pageUrl = `${SITE_URL}/Projects`;

export const metadata = {
  title: "Projects | Ahsan Ali Soomro (Ahsan Soomro)",
  description:
    "Explore web applications and software systems built by Ahsan Ali Soomro (Ahsan Soomro) using Next.js, React, Node.js, TypeScript, and modern web architecture.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Projects by Ahsan Ali Soomro (Ahsan Soomro)",
    siteName: siteConfig.name,
    description:
      "Showcase of Full Stack and frontend projects built with Next.js, React, Node.js, and TypeScript.",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Projects by Ahsan Ali Soomro (Ahsan Soomro)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects by Ahsan Ali Soomro (Ahsan Soomro)",
    description:
      "A portfolio of web applications and interfaces engineered by Ahsan Ali Soomro.",
    images: [siteConfig.ogImage],
  },
  robots: { index: true, follow: true },
};

export default function ProjectsListPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: "Projects by Ahsan Ali Soomro (Ahsan Soomro)",
    description:
      "Portfolio of projects and web applications engineered by Ahsan Ali Soomro.",
    isPartOf: { "@id": `${SITE_URL}#website` },
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}#person`,
      name: siteConfig.name,
      alternateName: [siteConfig.alternateName],
    },
  };

  return (
    <>
      <script
        id="ld-projects"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Projects />
    </>
  );
}
