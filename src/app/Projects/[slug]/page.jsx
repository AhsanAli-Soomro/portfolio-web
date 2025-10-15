import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/app/components/data/projects";


// Helpers
const getProject = (slug) => projectsData.find((p) => p.slug === slug);

export async function generateStaticParams() {
  return projectsData.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const project = getProject(params.slug);
  if (!project) return {};

  const siteUrl = "https://ahsanalisoomro.vercel.app";
  const pageUrl = `${siteUrl}/projects/${project.slug}`;
  const title = `${project.title} — Project by Ahsan Ali Soomro`;
  const description = project.description?.slice(0, 160) || "Project case study by Ahsan Ali Soomro.";
  const imageUrl = project.image || "/og-cover.png";

  return {
    title,
    description,
    alternates: { canonical: pageUrl },
    openGraph: {
      type: "article",
      url: pageUrl,
      title,
      description,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default function ProjectDetailPage({ params }) {
  const project = getProject(params.slug);
  if (!project) return notFound();

  const siteUrl = "https://ahsanalisoomro.vercel.app";
  const pageUrl = `${siteUrl}/projects/${project.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    url: pageUrl,
    image: project.image ? [`${siteUrl}${project.image}`] : undefined,
    headline: project.heading || project.title,
    description: project.description,
    author: { "@type": "Person", name: "Ahsan Ali Soomro", url: siteUrl },
  };

  return (
    <main className="py-16">
      <Script id="ld-project" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="mx-auto max-w-3xl px-6 sm:px-10 lg:px-0">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb"
          className="relative z-20 mb-6 text-sm text-white/70"  >
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/Projects" className="hover:text-white">Projects</Link>
          <span className="mx-2">/</span>
          <span className="text-white/90">{project.title}</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">{project.heading || project.title}</h1>
        <p className="mt-4 text-white/85 leading-relaxed">{project.description}</p>

        {/* Images */}
        <div className="flex mt-8 gap-4">
          {project.image && (
            <div className="relative w-[75%] h-64 sm:h-80 rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <Image src={project.image} alt={project.title} fill sizes="(max-width:768px) 100vw, 800px" className="object-fill" priority />
            </div>
          )}
          {project.imageapp && (
            <div className="relative w-[25%] h-64 sm:h-80 rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <Image src={project.imageapp} alt={`${project.title} — app view`} fill sizes="(max-width:768px) 100vw, 800px" className="object-fill" />
            </div>
          )}
        </div>

        {/* Highlights */}
        {project.features?.length > 0 && (
          <div className="mt-10">
            <h2 className="text-xl font-semibold text-white">Highlights</h2>
            <ul className="mt-4 grid gap-3 list-disc pl-5 text-white/85">
              {project.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>
        )}

        {/* External link */}
        {project.link && (
          <div className="mt-10">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-orange-800 font-semibold shadow hover:scale-[1.02] transition"
            >
              Visit project ↗
            </a>
          </div>
        )}

        <PrevNext slug={project.slug} />
      </section>
    </main>
  );
}

// Prev / Next links
function PrevNext({ slug }) {
  const idx = projectsData.findIndex((p) => p.slug === slug);
  if (idx === -1) return null;
  const prev = projectsData[(idx - 1 + projectsData.length) % projectsData.length];
  const next = projectsData[(idx + 1) % projectsData.length];

  return (
    <div className="mt-14 flex items-center justify-between text-white/85">
      <Link href={`/Projects/${prev.slug}`} className="hover:text-white">&larr; {prev.title}</Link>
      <Link href={`/Projects/${next.slug}`} className="hover:text-white">{next.title} &rarr;</Link>
    </div>
  );
}
