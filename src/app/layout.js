import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BlogProvider } from "../context/BlogContext";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://ahsanalisoomro.vercel.app";
const personId = `${siteUrl}#person`;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ahsan Ali Soomro — Front-End Developer & UI Engineer",
    template: "%s | Ahsan Ali Soomro",
  },
  description:
    "Portfolio of Ahsan Ali Soomro — Front-End Developer specializing in Next.js, React, and Tailwind CSS. Explore projects, blogs, resume, and hire me.",
  alternates: { canonical: siteUrl },
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
    url: siteUrl,
    title: "Ahsan Ali Soomro — Portfolio",
    siteName: "Ahsan Ali Soomro",
    description:
      "Front-End Developer (Next.js, React, Tailwind). Projects, blogs, resume, and contact.",
    images: [
      {
        url: "/og-cover.png", // ensure this exists in /public
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
      "Next.js, React, Tailwind CSS. Portfolio, projects, blogs, and resume.",
    images: ["/og-cover.png"],
  },
  icons: {
    icon: "/favicon.ico", // replaces your previous 'icon' field
  },
};

export default function RootLayout({ children }) {
  // Centralized social profiles (reusable across pages)
  const sameAs = [
    "https://www.linkedin.com/in/ahsanali-soomro",
    "https://github.com/AhsanAli-Soomro",
    "https://twitter.com/AhsanAli3860",
    "https://www.facebook.com/ahsanali.king.92",
    "https://www.instagram.com/soomroahsan_ali/",
  ];

  const ldJson = {
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
        "@type": "Person",
        "@id": personId,
        name: "Ahsan Ali Soomro",
        url: siteUrl,
        jobTitle: "Front-End Developer",
        image: `${siteUrl}/ahsan.png`, // make sure this file exists
        sameAs,
        email: "mailto:ahsanalisoomro147@gmail.com", // email goes here, not in sameAs
      },
    ],
  };

  return (
    <html lang="en">
      <body className="relative items-center bg-gradient-to-br from-orange-900 via-orange-700 to-orange-500 ">
      {/* Background Glow Effects (decorative) */}
      <div className="absolute inset-0 z-0" aria-hidden="true" role="presentation">
        <div className="absolute top-1/3 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-orange-700/40 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-yellow-400/40 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-950/60" />
      </div>
        {/* Root-level structured data (declared once) */}
        <Script
          id="ld-root"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
        />

        <BlogProvider>
          <Navbar />
          {children}
          <Footer />
        </BlogProvider>
      </body>
    </html>
  );
}
