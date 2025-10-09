import Script from "next/script";
import Hero from "../components/Hero";
import Cards from "../components/Cards";
import Services from "../components/Services";

const siteUrl = "https://ahsanalisoomro.vercel.app";

export const metadata = {
  title: "Ahsan Ali Soomro — Front-End Developer & UI Engineer",
  description:
    "Portfolio of Ahsan Ali Soomro — Front-End Developer specializing in Next.js, React, and Tailwind CSS. Explore projects, resume, and ways to hire me.",
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Ahsan Ali Soomro — Portfolio",
    siteName: "Ahsan Ali Soomro",
    description:
      "Front-End Developer focusing on Next.js, React, Tailwind CSS, accessibility and performance.",
    images: [
      {
        url: "/og-cover.png", // create this image in /public
        width: 1200,
        height: 630,
        alt: "Ahsan Ali Soomro — Front-End Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahsan Ali Soomro — Front-End Developer",
    description:
      "Portfolio and resume of Ahsan Ali Soomro, specializing in Next.js, React, and Tailwind CSS.",
    images: ["/og-cover.png"],
  },
  robots: { index: true, follow: true },
};

export default function HomePage() {
  const sameAs = [
    "https://www.linkedin.com/in/ahsanali-soomro",
    "https://github.com/AhsanAli-Soomro",
    "https://twitter.com/AhsanAli3860",
    "https://www.facebook.com/ahsanali.king.92",
    "https://www.instagram.com/soomroahsan_ali/",
    "mailto:ahsanalisoomro147@gmail.com",
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        url: siteUrl,
        name: "Ahsan Ali Soomro",
        inLanguage: "en",
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}#webpage`,
        url: siteUrl,
        name: "Ahsan Ali Soomro — Front-End Developer & UI Engineer",
        isPartOf: { "@id": `${siteUrl}#website` },
        breadcrumb: { "@id": `${siteUrl}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
        ],
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
    ],
  };

  return (
    <>
      <Script
        id="ld-home"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    <section
      className="relative items-center bg-gradient-to-br from-orange-900 via-orange-700 to-orange-500 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background Glow Effects (decorative) */}
      <div className="absolute inset-0 z-0" aria-hidden="true" role="presentation">
        <div className="absolute top-1/3 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-orange-700/40 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-yellow-400/40 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-950/60" />
      </div>

      {/* Hero Section */}
      <Hero />
      <Services />
      {/* Optional: show cards on homepage */}
      {/* <Cards /> */}

    </section>
    </>
  );
}
