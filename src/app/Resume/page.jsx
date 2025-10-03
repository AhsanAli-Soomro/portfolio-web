import Script from "next/script";
import Resume from "../components/Resume";

const siteUrl = "https://ahsanalisoomro.vercel.app";
const pageUrl = `${siteUrl}/Resume`;

export const metadata = {
  title: "Resume — Ahsan Ali Soomro",
  description:
    "Resume of Ahsan Ali Soomro — Front-End Developer & UI Engineer specializing in Next.js, React, and Tailwind CSS. Experience, skills, and contact details.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "profile",
    url: pageUrl,
    title: "Resume — Ahsan Ali Soomro",
    siteName: "Ahsan Ali Soomro",
    description:
      "Front-End Developer focused on Next.js, React, Tailwind CSS, accessibility and performance.",
    images: [
      {
        url: "/og-cover.png", // put a 1200x630 image in /public
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
    title: "Resume — Ahsan Ali Soomro",
    description:
      "Experience, projects, and skills of Front-End Developer Ahsan Ali Soomro.",
    images: ["/og-cover.png"],
  },
  robots: { index: true, follow: true },
};

export default function ResumePage() {
  // Public profiles / contact
  const sameAs = [
    "https://www.linkedin.com/in/ahsanali-soomro",
    "https://github.com/AhsanAli-Soomro",
    "https://twitter.com/AhsanAli3860",
    "https://www.facebook.com/ahsanali.king.92",
    "https://www.instagram.com/soomroahsan_ali/",
    "mailto:ahsanalisoomro147@gmail.com",
  ];

  // Skills for schema (adjust freely)
  const skills = [
    "Next.js",
    "React",
    "Tailwind CSS",
    "TypeScript",
    "JavaScript",
    "UI Engineering",
    "Accessibility",
    "Performance Optimization",
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Resume — Ahsan Ali Soomro",
        description:
          "Resume/CV of Front-End Developer Ahsan Ali Soomro — experience, projects, skills, and contact.",
        isPartOf: { "@id": `${siteUrl}#website` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
        about: { "@id": `${siteUrl}#person` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Resume", item: pageUrl },
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
        email: "mailto:ahsanalisoomro147@gmail.com",
        knowsAbout: skills,
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "work",
            email: "mailto:ahsanalisoomro147@gmail.com",
          },
        ],
      },
    ],
  };

  return (
    <>
      {/* Structured data for rich results */}
      <Script
        id="ld-resume"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hidden H1 ensures the keyword is always present */}
      <h1 className="sr-only">Resume — Ahsan Ali Soomro</h1>

      <Resume />
    </>
  );
}
