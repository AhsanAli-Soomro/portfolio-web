import Script from "next/script";
import Hire from "../components/Hire";

const siteUrl = "https://ahsanalisoomro.vercel.app";
const pageUrl = `${siteUrl}/Hire`;

export const metadata = {
  title: "Hire — Ahsan Ali Soomro",
  description:
    "Hire Ahsan Ali Soomro — Front-End Developer & UI Engineer specializing in Next.js, React, and Tailwind CSS. Get fast, accessible, and high-quality web apps.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Hire — Ahsan Ali Soomro",
    siteName: "Ahsan Ali Soomro",
    description:
      "Work with a Front-End Developer focused on performance, accessibility, and modern UX using Next.js, React, and Tailwind CSS.",
    images: [
      {
        url: "/og-cover.png", // place a 1200x630 image in /public
        width: 1200,
        height: 630,
        alt: "Hire Ahsan Ali Soomro — Front-End Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire — Ahsan Ali Soomro",
    description:
      "Front-End Developer (Next.js, React, Tailwind). Let’s build something great together.",
    images: ["/og-cover.png"],
  },
  robots: { index: true, follow: true },
};

export default function HirePage() {
  const sameAs = [
    "https://www.linkedin.com/in/ahsanali-soomro",
    "https://github.com/AhsanAli-Soomro",
    "https://twitter.com/AhsanAli3860",
    "https://www.facebook.com/ahsanali.king.92",
    "https://www.instagram.com/soomroahsan_ali/",
    "mailto:ahsanalisoomro147@gmail.com",
  ];

  const faqs = [
    {
      q: "What technologies do you use?",
      a: "I specialize in Next.js, React, Tailwind CSS, and TypeScript, with a focus on accessibility and performance.",
    },
    {
      q: "Are you available for freelance or contract work?",
      a: "Yes. I take on freelance and short/long-term contracts. Share your scope and timeline on this page.",
    },
    {
      q: "How can I contact you?",
      a: "Email me at ahsanalisoomro147@gmail.com or message me on LinkedIn.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["WebPage", "ContactPage"],
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Hire — Ahsan Ali Soomro",
        description:
          "Hire Front-End Developer Ahsan Ali Soomro for Next.js/React projects focused on speed, accessibility, and clean UI.",
        isPartOf: { "@id": `${siteUrl}#website` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        about: { "@id": `${siteUrl}#person` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Hire", item: pageUrl },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        url: siteUrl,
        name: "Ahsan Ali Soomro",
        inLanguage: "en",
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}#person`,
        name: "Ahsan Ali Soomro",
        url: siteUrl,
        jobTitle: "Front-End Developer",
        image: `${siteUrl}/ahsana.png`,
        sameAs,
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "work",
            email: "mailto:ahsanalisoomro147@gmail.com",
            areaServed: "Worldwide",
            availableLanguage: ["en"],
          },
        ],
      },
      {
        "@type": "Service",
        name: "Front-End Development & UI Engineering",
        serviceType: "Web development",
        areaServed: "Worldwide",
        provider: { "@id": `${siteUrl}#person` },
        description:
          "Next.js/React development, performance optimization, accessibility, and component-driven UI with Tailwind CSS.",
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
      {/* Structured data for rich results */}
      <Script
        id="ld-hire"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hidden H1 (keeps your design clean, boosts keyword presence) */}
      <h1 className="sr-only">Hire Ahsan Ali Soomro — Front-End Developer</h1>

      <Hire />
    </>
  );
}
