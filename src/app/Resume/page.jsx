import Resume from "../components/Resume";
import { SITE_URL, siteConfig } from "@/config/site";

const pageUrl = `${SITE_URL}/Resume`;

export const metadata = {
  title: "Résumé | Ahsan Ali Soomro (Ahsan Soomro)",
  description:
    "Explore the resume of Ahsan Ali Soomro (Ahsan Soomro) — Full Stack Developer & UI Engineer with 4+ years of experience building Next.js and React products.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "profile",
    url: pageUrl,
    title: "Résumé — Ahsan Ali Soomro (Ahsan Soomro)",
    siteName: siteConfig.name,
    description:
      "Full Stack Developer specializing in Next.js, React, Node.js, and TypeScript. Experience, skills, and education.",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Ahsan Ali Soomro (Ahsan Soomro) — Résumé",
      },
    ],
    firstName: "Ahsan",
    lastName: "Soomro",
  },
  twitter: {
    card: "summary_large_image",
    title: "Résumé — Ahsan Ali Soomro (Ahsan Soomro)",
    description:
      "Experience, projects, and skills of Full Stack Developer Ahsan Ali Soomro.",
    images: [siteConfig.ogImage],
  },
  robots: { index: true, follow: true },
};

export default function ResumePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Résumé | Ahsan Ali Soomro (Ahsan Soomro)",
        description:
          "Resume/CV of Full Stack Developer Ahsan Ali Soomro — experience, projects, skills, and contact.",
        isPartOf: { "@id": `${SITE_URL}#website` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        about: { "@id": `${SITE_URL}#person` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Resume", item: pageUrl },
        ],
      },
    ],
  };

  return (
    <>
      <script
        id="ld-resume"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Resume />
    </>
  );
}
