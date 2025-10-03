"use client";
import React, { useState } from "react";
import BlogsModal from "./BlogsModal";
import BlogsCard from "./BlogsCard";

/**
 * Exported so you can reuse in:
 * - /Blogs/page.jsx JSON-LD (Blog + BlogPosting)
 * - dynamic routes (/Blogs/[slug])
 * - sitemap generation
 */
export const blogsData = [
  {
    slug: "figma-ai-fusion",
    author: "Ahsan Ali Soomro",
    title: "Figma AI Fusion — by Ahsan Ali Soomro",
    heading:
      "How Figma AI is Transforming the Design Workflow (insights by Ahsan Ali Soomro)",
    description:
      "Figma AI brings intelligent automation to collaborative design. As Ahsan Ali Soomro explains, it accelerates wireframing, UI crafting, and UX ideation with layout suggestions, content awareness, and natural-language prompts—turning Figma into a co-creator for faster concept-to-prototype delivery.",
    image: "/FigmaAIFusion.png",
    features: [
      "Auto Layout Intelligence: Optimal spacing/alignment suggestions reduce manual tweaks.",
      "Content-Aware Design: Generates placeholder copy, icons, and components from descriptions.",
      "Real-Time Collaboration Enhancements: Smart suggestions while teams iterate together.",
      "Voice & Text Prompts: Mock screens/components from natural-language ideas.",
      "Plugin Synergy: Works seamlessly with Figma’s plugin ecosystem.",
    ],
    datePublished: "2025-07-01",
  },

  {
    slug: "notion-ai-nexus",
    author: "Ahsan Ali Soomro",
    title: "Notion AI Nexus — by Ahsan Ali Soomro",
    heading:
      "How Notion AI is Revolutionizing Productivity and Content Creation (Ahsan Ali Soomro)",
    description:
      "Notion AI brings generative intelligence into your workspace. In this overview, Ahsan Ali Soomro shows how it drafts, summarizes, and structures content directly in docs & databases—acting like a writing assistant, research analyst, and project coordinator in one.",
    image: "/NotionAINexus.jpg",
    features: [
      "Smart Writing Assistance: Draft, rephrase, and summarize with prompts.",
      "Knowledge Summarization: Turn long notes into key insights quickly.",
      "Task & Project Automation: Generate action items and timelines.",
      "Multilingual Capabilities: Create/translate across languages.",
      "Seamless Notion Integration: Native feel—no context switching.",
    ],
    datePublished: "2025-07-03",
  },

  {
    slug: "copilot-codecraft",
    author: "Ahsan Ali Soomro",
    title: "Copilot Codecraft — by Ahsan Ali Soomro",
    heading:
      "How GitHub Copilot is Reshaping the Developer Workflow with AI (Ahsan Ali Soomro)",
    description:
      "GitHub Copilot acts like an intelligent pair programmer. Ahsan Ali Soomro explains how Copilot understands intent, suggests functions/tests/docs, and speeds up development across languages—so devs focus on logic over boilerplate.",
    image: "/CopilotCodecraft.png",
    features: [
      "AI-Powered Code Suggestions across many languages.",
      "Contextual Awareness of files and project history.",
      "Docs & Tests generation on demand.",
      "Deep IDE integration (VS Code/JetBrains).",
    ],
    datePublished: "2025-07-06",
  },

  {
    slug: "astro-ascendancy",
    author: "Ahsan Ali Soomro",
    title: "Astro Ascendancy — by Ahsan Ali Soomro",
    heading:
      "Why Astro is Redefining the Future of Web Development (by Ahsan Ali Soomro)",
    description:
      "Astro ships zero JS by default for ultra-fast sites. Ahsan Ali Soomro covers islands architecture, framework-agnostic components, and MD/MDX support ideal for content-heavy sites and docs.",
    image: "/AstroAscendancy.jpeg",
    features: [
      "Zero JS by default → stellar performance.",
      "Islands architecture with partial hydration.",
      "Framework-agnostic: React, Vue, Svelte, etc.",
      "Markdown/MDX first-class support.",
      "SSG/SSR/Edge options for modern deploys.",
    ],
    datePublished: "2025-07-09",
  },

  {
    slug: "nextjs-nirvana",
    author: "Ahsan Ali Soomro",
    title: "Next.js Nirvana — by Ahsan Ali Soomro",
    heading:
      "Why Next.js is the Ultimate Framework for Production-Ready Web Apps (Ahsan Ali Soomro)",
    description:
      "Next.js combines SSR, SSG, and ISR with great DX. In this explainer, Ahsan Ali Soomro highlights image optimization, API routes, and code-splitting for fast, SEO-friendly apps.",
    image: "/NextjsNirvana.jpg",
    features: [
      "Hybrid rendering: SSG/SSR/ISR.",
      "File-based routing and prefetching.",
      "Built-in image optimization.",
      "API routes for backend needs.",
      "Great DX with TS/CSS Modules/HMR.",
    ],
    datePublished: "2025-07-12",
  },

  {
    slug: "reactjs-revolution",
    author: "Ahsan Ali Soomro",
    title: "ReactJS Revolution — by Ahsan Ali Soomro",
    heading:
      "Why ReactJS is the Future of Modern Web Development (Ahsan Ali Soomro)",
    description:
      "React’s component model, Virtual DOM, and vast ecosystem changed front-end forever. Here Ahsan Ali Soomro outlines why enterprises rely on React for speed, reliability, and scalability.",
    image: "/ReactJSRevolution.avif",
    features: [
      "Component-based architecture for reuse.",
      "Virtual DOM for efficient rendering.",
      "Simple state management patterns.",
      "Huge ecosystem & community.",
      "Cross-platform via React Native.",
    ],
    datePublished: "2025-07-15",
  },

  {
    slug: "crafting-experiences",
    author: "Ahsan Ali Soomro",
    title: "Crafting Experiences — by Ahsan Ali Soomro",
    heading:
      "Building User-Centric Web Interfaces with Front-End Technologies (Ahsan Ali Soomro)",
    description:
      "Front-end development blends usability, performance, and design. Ahsan Ali Soomro breaks down responsive layouts, JS frameworks, CSS techniques, and a11y foundations.",
    image: "/frontendweb.jpg",
    features: [
      "Responsive design across devices.",
      "Modern JS frameworks (React/Vue/Angular).",
      "Advanced CSS (Grid/Flexbox/Sass).",
      "Web performance optimization.",
      "Accessibility (WCAG) best practices.",
    ],
    datePublished: "2025-07-18",
  },

  {
    slug: "blueprint-of-success",
    author: "Ahsan Ali Soomro",
    title: "Blueprint of Success — by Ahsan Ali Soomro",
    heading:
      "From Concept to Launch: Mastering the Website Development Process (Ahsan Ali Soomro)",
    description:
      "From discovery to deployment, Ahsan Ali Soomro outlines stack choices, security/compliance, SEO, and continuous improvement with analytics.",
    image: "/webdevweb.jpg",
    features: [
      "Strategic planning & goals.",
      "Tech-stack selection (MERN/JAMstack).",
      "On-page & technical SEO.",
      "Security & compliance (SSL/GDPR).",
      "Iterate with analytics & UX research.",
    ],
    datePublished: "2025-07-21",
  },

  {
    slug: "vuejs-dynamics",
    author: "Ahsan Ali Soomro",
    title: "Vue.js Dynamics — by Ahsan Ali Soomro",
    heading:
      "Unleashing the Power of Vue.js for Modern Front-End Development (Ahsan Ali Soomro)",
    description:
      "Vue balances simplicity and power. Ahsan Ali Soomro explores reactivity, components, CLI scaffolding, and Vuex for complex apps.",
    image: "/vuejsweb.jpeg",
    features: [
      "Reactive data binding.",
      "Component-based architecture.",
      "Vue CLI for fast scaffolding.",
      "Vuex for state management.",
      "Easy integration in existing apps.",
    ],
    datePublished: "2025-07-24",
  },

  {
    slug: "angular-mastery",
    author: "Ahsan Ali Soomro",
    title: "Angular Mastery — by Ahsan Ali Soomro",
    heading:
      "Building Robust Applications with the Angular Framework (Ahsan Ali Soomro)",
    description:
      "Angular’s opinionated, TypeScript-first approach suits large apps. Ahsan Ali Soomro covers DI, RxJS, CLI, and Universal for SSR.",
    image: "/angularweb.png",
    features: [
      "Two-way data binding.",
      "TypeScript foundation.",
      "Angular CLI productivity.",
      "RxJS for async streams.",
      "Enterprise-ready modularity.",
    ],
    datePublished: "2025-07-27",
  },

  {
    slug: "progressive-web-applications",
    author: "Ahsan Ali Soomro",
    title: "Progressive Web Applications — by Ahsan Ali Soomro",
    heading:
      "Revolutionizing User Experience with PWAs (explained by Ahsan Ali Soomro)",
    description:
      "PWAs bridge web and native. Ahsan Ali Soomro explains offline support, push notifications, installability, and performance wins.",
    image: "/pwaweb.jpeg",
    features: [
      "Offline via Service Workers.",
      "Responsive, app-like UX.",
      "Push notifications.",
      "Add-to-home-screen install.",
      "Caching & background sync.",
    ],
    datePublished: "2025-07-30",
  },

  {
    slug: "full-stack-development",
    author: "Ahsan Ali Soomro",
    title: "Full-Stack Development — by Ahsan Ali Soomro",
    heading:
      "Mastering Front-End and Back-End for Complete Web Solutions (Ahsan Ali Soomro)",
    description:
      "Full-stack spans UI, server, and DB. Ahsan Ali Soomro walks through MERN/MEAN stacks, APIs, and DevOps practices for end-to-end delivery.",
    image: "/fullstackweb.png",
    features: [
      "Front-end (React/Angular/Vue).",
      "Back-end (Node/Python/Java).",
      "DBs (Mongo/Postgres/MySQL).",
      "REST/GraphQL integrations.",
      "CI/CD and cloud (AWS/Azure).",
    ],
    datePublished: "2025-08-02",
  },

  {
    slug: "nextjs-masterclass",
    author: "Ahsan Ali Soomro",
    title: "Next.js Masterclass — by Ahsan Ali Soomro",
    heading:
      "Building High-Performance Applications with Next.js (Ahsan Ali Soomro)",
    description:
      "Next.js simplifies production apps. Ahsan Ali Soomro details SSR/SSG, image optimization, API routes, and code splitting for speed & SEO.",
    image: "/nextjsweb.png",
    features: [
      "SSR for dynamic + SEO.",
      "SSG for fast static pages.",
      "API routes baked in.",
      "Automatic code splitting.",
      "Image optimization pipeline.",
    ],
    datePublished: "2025-08-05",
  },
];

const BlogsPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const blogs = blogsData;

  const handleOpen = (index) => setSelectedIndex(index);
  const handleClose = () => setSelectedIndex(null);
  const handleNextBlog = () => setSelectedIndex((i) => (i + 1) % blogs.length);
  const handlePrevBlog = () =>
    setSelectedIndex((i) => (i - 1 + blogs.length) % blogs.length);

  return (
    <main className="bg-gradient-to-br from-orange-800 via-orange-600 to-orange-500 py-20">
      {/* Real H1 for SEO/a11y */}
      <h1 className="sr-only">Blogs — Ahsan Ali Soomro</h1>

      <section
        aria-labelledby="blogs-heading"
        className="container mx-auto px-4 sm:px-6 lg:px-16"
      >
        <h2
          id="blogs-heading"
          className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-10"
        >
          My Blogs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {blogs.map((blog, index) => (
            <article key={blog.slug} className="contents">
              <BlogsCard blog={blog} onClick={() => handleOpen(index)} />
            </article>
          ))}
        </div>
      </section>

      {selectedIndex !== null && (
        <BlogsModal
          blog={blogs[selectedIndex]}
          onClose={handleClose}
          onNext={handleNextBlog}
          onPrev={handlePrevBlog}
        />
      )}
    </main>
  );
};

export default BlogsPage;
