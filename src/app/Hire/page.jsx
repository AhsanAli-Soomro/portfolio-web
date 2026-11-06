import Hire from "../components/Hire";
import { SITE_URL, siteConfig } from "@/config/site";

const pageUrl = `${SITE_URL}/Hire`;

export const metadata = {
  title: "Hire | Ahsan Ali Soomro (Ahsan Soomro)",
  description:
    "Hire Ahsan Ali Soomro (Ahsan Soomro) — Full Stack Developer & UI Engineer specializing in Next.js, React, Node.js, and TypeScript. Fast, reliable web development.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Hire Ahsan Ali Soomro (Ahsan Soomro) | Full Stack Developer",
    siteName: siteConfig.name,
    description:
      "Work with Full Stack Developer Ahsan Ali Soomro for modern, accessible web products built with Next.js, React, and TypeScript.",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Hire Ahsan Ali Soomro (Ahsan Soomro) — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Ahsan Ali Soomro (Ahsan Soomro)",
    description:
      "Full Stack Developer (Next.js, React, Node.js, TypeScript). Let's collaborate.",
    images: [siteConfig.ogImage],
  },
  robots: { index: true, follow: true },
};

export default function HirePage() {
  const faqs = [
    {
      q: "What technical services does Ahsan Ali Soomro provide?",
      a: "Ahsan specializes in Full Stack development, Next.js / React application architecture, custom UI component systems, API integrations, and performance optimization.",
    },
    {
      q: "Is Ahsan available for remote work?",
      a: "Yes, Ahsan is based in Hyderabad, Pakistan, and works with clients and companies worldwide across different time zones.",
    },
    {
      q: "How quickly can I expect a response?",
      a: "Ahsan typically responds to new project enquiries within 24 hours.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["WebPage", "ContactPage"],
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Hire Ahsan Ali Soomro (Ahsan Soomro)",
        description:
          "Hire Full Stack Developer Ahsan Ali Soomro for Next.js, React, and TypeScript projects.",
        isPartOf: { "@id": `${SITE_URL}#website` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        about: { "@id": `${SITE_URL}#person` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Hire", item: pageUrl },
        ],
      },
      {
        "@type": "Service",
        name: "Full Stack Development & UI Engineering",
        serviceType: "Web Development",
        areaServed: "Worldwide",
        provider: { "@id": `${SITE_URL}#person` },
        description:
          "Full Stack web engineering with Next.js, React, Node.js, TypeScript, and modern database architecture.",
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: pageUrl,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        id="ld-hire"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hire />
    </>
  );
}
