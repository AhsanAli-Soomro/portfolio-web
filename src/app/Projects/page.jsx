import Script from "next/script";
import Projects from "../components/Projects";


const siteUrl = "https://ahsanalisoomro.vercel.app";
const pageUrl = `${siteUrl}/projects`;

export const metadata = {
  title: "Projects — Ahsan Ali Soomro",
  description: "Selected projects by Ahsan Ali Soomro — Front-End Developer specializing in Next.js, React, and Tailwind CSS.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Projects — Ahsan Ali Soomro",
    siteName: "Ahsan Ali Soomro",
    description: "Showcase of Front-End projects built with Next.js, React, and Tailwind CSS.",
    images: [{ url: "/og-cover.png", width: 1200, height: 630, alt: "Projects by Ahsan Ali Soomro" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects — Ahsan Ali Soomro",
    description: "A portfolio of Front-End work using Next.js, React, and Tailwind CSS.",
    images: ["/og-cover.png"],
  },
  robots: { index: true, follow: true },
};

export default function ProjectsListPage() {
  // optional: keep your JSON-LD builder here if you like
  const jsonLd = { "@context": "https://schema.org", "@type": "WebPage", url: pageUrl, name: "Projects — Ahsan Ali Soomro" };

  return (
    <>
      <Script id="ld-projects" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1 className="sr-only">Projects — Ahsan Ali Soomro</h1>
      <Projects />
    </>
  );
}
