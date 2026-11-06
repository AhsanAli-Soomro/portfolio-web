import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BlogProvider } from "../context/BlogContext";
import Script from "next/script";
import { SITE_URL, siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteConfig.defaultTitle,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.description,
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: siteConfig.defaultTitle,
    siteName: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} (${siteConfig.alternateName}) - ${siteConfig.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@AhsanAli3860",
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: siteConfig.googleSiteVerification,
  },
};

export default function RootLayout({ children }) {
  const personId = `${SITE_URL}#person`;
  const websiteId = `${SITE_URL}#website`;

  const ldJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE_URL,
        name: `${siteConfig.name} (${siteConfig.alternateName})`,
        alternateName: [siteConfig.name, siteConfig.alternateName, `${siteConfig.alternateName} Portfolio`],
        description: siteConfig.description,
        inLanguage: "en",
        publisher: {
          "@id": personId,
        },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: siteConfig.name,
        alternateName: [siteConfig.alternateName],
        url: SITE_URL,
        image: siteConfig.ogImage,
        jobTitle: siteConfig.role,
        knowsAbout: siteConfig.skills,
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.location.city,
          addressCountry: siteConfig.location.country,
        },
        sameAs: siteConfig.sameAs,
        email: `mailto:${siteConfig.email}`,
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* Person and WebSite JSON-LD Structured Data */}
        <script
          id="ld-root-identity"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
        />

        <Script id="theme-init" strategy="beforeInteractive">
          {`try{var t=localStorage.getItem('portfolio-theme');document.documentElement.dataset.theme=t||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}catch(e){}`}
        </Script>

        <BlogProvider>
          <Navbar />
          {children}
          <Footer />
        </BlogProvider>
      </body>
    </html>
  );
}
