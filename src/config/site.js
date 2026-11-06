/**
 * Centralized Site Configuration & SEO Constants
 * 
 * Update SITE_URL here to update canonical URLs, sitemaps, Open Graph, 
 * Twitter cards, and JSON-LD structured data site-wide.
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ahsanalisoomro.com";

export const siteConfig = {
  name: "Ahsan Ali Soomro",
  alternateName: "Ahsan Soomro",
  role: "Full Stack Developer",
  shortRole: "Full Stack Developer",
  secondaryRole: "Frontend Developer & UI Engineer",
  tagline: "Full Stack Developer · UI Engineer",
  
  // SEO Metadata
  defaultTitle: "Ahsan Ali Soomro (Ahsan Soomro) | Full Stack Developer",
  titleTemplate: "%s | Ahsan Ali Soomro (Ahsan Soomro)",
  description:
    "Explore the portfolio of Ahsan Ali Soomro (Ahsan Soomro), a Full Stack Developer specializing in Next.js, React, and TypeScript. Discover projects and skills.", // Exactly 157 chars
  url: SITE_URL,
  ogImage: `${SITE_URL}/ahsan.png`,
  email: "ahsanalisoomro147@gmail.com",
  phone: "+923173215380",
  googleSiteVerification: "BHq22lYaWsktu4xjtVQSfesRcXb-QFHwQPMbZxMBJhs",
  
  // Location (city and country only, no street address)
  location: {
    city: "Hyderabad",
    country: "Pakistan",
    addressCountry: "PK",
    display: "Hyderabad, Pakistan",
  },
  
  // Core skills for structured data (knowsAbout)
  skills: [
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Full Stack Development",
    "REST APIs",
    "UI/UX Engineering",
    "Performance Optimization",
    "Web Accessibility (a11y)",
    "PostgreSQL",
    "MySQL",
    "AWS",
  ],

  // Social & Developer Profiles
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/ahsanali-soomro",
    github: "https://github.com/AhsanAli-Soomro",
    devto: "https://dev.to/ahsanali_soomro",
    twitter: "https://twitter.com/AhsanAli3860",
    facebook: "https://www.facebook.com/ahsanali.king.92",
    instagram: "https://www.instagram.com/soomroahsan_ali/",
  },

  // Authoritative identity URLs for Person schema sameAs
  sameAs: [
    "https://www.linkedin.com/in/ahsanali-soomro",
    "https://github.com/AhsanAli-Soomro",
    "https://dev.to/ahsanali_soomro",
    "https://twitter.com/AhsanAli3860",
    "https://www.facebook.com/ahsanali.king.92",
    "https://www.instagram.com/soomroahsan_ali/",
  ],
};

