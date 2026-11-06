import About from "../components/AboutComponent";
import { SITE_URL, siteConfig } from "@/config/site";

const pageUrl = `${SITE_URL}/About`;

export const metadata = {
  title: "About | Ahsan Ali Soomro (Ahsan Soomro)",
  description:
    "Learn about Ahsan Ali Soomro (Ahsan Soomro) — Full Stack Developer based in Hyderabad, Pakistan. Explore background, skills in Next.js, and featured projects.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "profile",
    url: pageUrl,
    title: "About Ahsan Ali Soomro (Ahsan Soomro) | Full Stack Developer",
    siteName: siteConfig.name,
    description:
      "Full Stack Developer specializing in Next.js, React, Node.js, and TypeScript. Learn about Ahsan Ali Soomro.",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Ahsan Ali Soomro (Ahsan Soomro) - Full Stack Developer",
      },
    ],
    firstName: "Ahsan",
    lastName: "Soomro",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Ahsan Ali Soomro (Ahsan Soomro)",
    description:
      "Full Stack Developer specializing in Next.js, React, Node.js, and TypeScript.",
    images: [siteConfig.ogImage],
  },
  robots: { index: true, follow: true },
};

export default function AboutPage() {
  const faqs = [
    {
      q: "What technologies does Ahsan Ali Soomro work with?",
      a: "Ahsan specializes in Full Stack development with Next.js, React, Node.js, TypeScript, Tailwind CSS, REST APIs, and database engineering.",
    },
    {
      q: "Where is Ahsan Ali Soomro located?",
      a: "Ahsan is based in Hyderabad, Pakistan, and collaborates remotely with clients and companies worldwide.",
    },
    {
      q: "Is Ahsan Ali Soomro available for freelance or contract roles?",
      a: "Yes, Ahsan is available for freelance projects, contract engagements, and full-time opportunities. Reach out via the Hire page.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "About Ahsan Ali Soomro (Ahsan Soomro)",
        description:
          "About Ahsan Ali Soomro (Ahsan Soomro) — Full Stack Developer & UI Engineer based in Hyderabad, Pakistan.",
        isPartOf: { "@id": `${SITE_URL}#website` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "About",
            item: pageUrl,
          },
        ],
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
        id="ld-about"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <About />
    </>
  );
}
