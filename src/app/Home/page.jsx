import Script from "next/script";
import Hero from "../components/Hero";
import Services from "../components/Services";
import FeaturedProjects from "../components/FeaturedProjects";
import ContactCta from "../components/ContactCta";

const siteUrl = "https://ahsanalisoomro.vercel.app";

export const metadata = {
  title: "Ahsan Ali Soomro — Front-End Developer & UI Engineer",
  description: "Portfolio of Ahsan Ali Soomro — Front-End Developer specializing in Next.js, React, and modern interface engineering.",
  alternates: { canonical: siteUrl },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ahsan Ali Soomro",
    url: siteUrl,
    jobTitle: "Front-End Developer",
    image: `${siteUrl}/ahsana.png`,
  };

  return (
    <main className="site-shell">
      <Script id="ld-home" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="site-grid" aria-hidden="true" />
      <div className="orb orb-one" aria-hidden="true" />
      <div className="orb orb-two" aria-hidden="true" />
      <Hero />
      <Services />
      <FeaturedProjects limit={6} />
      <ContactCta />
    </main>
  );
}
