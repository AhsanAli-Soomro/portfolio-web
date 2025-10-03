import Script from "next/script";
import About from "../components/AboutComponent";


const siteUrl = "https://ahsanalisoomro.vercel.app";
const pageUrl = `${siteUrl}/About`; // matches your folder name

export const metadata = {
  title: "About — Ahsan Ali Soomro",
  description:
    "Learn about Ahsan Ali Soomro — Front-End Developer & UI Engineer specializing in Next.js, React, and Tailwind CSS. Background, skills, and ways to collaborate.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "profile",
    url: pageUrl,
    title: "About — Ahsan Ali Soomro",
    siteName: "Ahsan Ali Soomro",
    description:
      "Front-End Developer focusing on Next.js, React, Tailwind CSS, accessibility and performance.",
    images: [
      {
        url: "/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Ahsan Ali Soomro — Front-End Developer",
      },
    ],
    firstName: "Ahsan",
    lastName: "Soomro",
  },
  twitter: {
    card: "summary_large_image",
    title: "About — Ahsan Ali Soomro",
    description:
      "Front-End Developer (Next.js, React, Tailwind CSS). Learn more and work together.",
    images: ["/og-cover.png"],
  },
  robots: { index: true, follow: true },
};

export default function AboutPage() {
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
      a: "I focus on Next.js, React, TypeScript, Tailwind CSS, and accessibility & performance best practices.",
    },
    {
      q: "Are you available for freelance work?",
      a: "Yes. Visit the Hire page to share your project details and timelines.",
    },
    {
      q: "How can I contact you?",
      a: "Email me at ahsanalisoomro147@gmail.com or connect via LinkedIn.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "About — Ahsan Ali Soomro",
        description:
          "About Ahsan Ali Soomro — Front-End Developer & UI Engineer specializing in Next.js, React, and Tailwind CSS.",
        isPartOf: { "@id": `${siteUrl}#website` },
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
            item: siteUrl,
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
      <Script
        id="ld-about"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <About />
    </>
  );
}
