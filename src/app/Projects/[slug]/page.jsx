import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/app/components/data/projects";
import { IconArrowLeft, IconArrowRight, IconArrowUpRight, IconCheck } from "@tabler/icons-react";


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
    <main className="inner-page detail-page">
      <Script id="ld-project" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="detail-container">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb"
          className="breadcrumbs"  >
          <Link href="/">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/Projects">Projects</Link>
          <span className="mx-2">/</span>
          <span>{project.title}</span>
        </nav>

        <span className="section-index">Project case study</span>
        <h1 className="detail-title">{project.heading || project.title}</h1>
        <p className="detail-lead">{project.description}</p>

        {/* Images */}
        <div className="detail-gallery">
          {project.image && (
            <div className="detail-main-image">
              <Image src={project.image} alt={project.title} fill sizes="(max-width:768px) 100vw, 800px" className="object-cover" priority />
            </div>
          )}
          {project.imageapp && (
            <div className="detail-app-image">
              <Image src={project.imageapp} alt={`${project.title} — app view`} fill sizes="(max-width:768px) 100vw, 300px" className="object-cover" />
            </div>
          )}
        </div>

        {/* Highlights */}
        {project.features?.length > 0 && (
          <div className="detail-highlights">
            <span className="section-index">What I delivered</span><h2>Project highlights</h2>
            <ul>{project.features.map((f, i) => <li key={i}><IconCheck size={17}/>{f}</li>)}
            </ul>
          </div>
        )}

        {/* External link */}
        {project.link && (
          <div className="detail-action">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary"
            >
              Visit live project <IconArrowUpRight size={18}/>
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
    <div className="prev-next">
      <Link href={`/Projects/${prev.slug}`}><IconArrowLeft/><span><small>Previous project</small>{prev.title}</span></Link>
      <Link href={`/Projects/${next.slug}`}><span><small>Next project</small>{next.title}</span><IconArrowRight/></Link>
    </div>
  );
}
