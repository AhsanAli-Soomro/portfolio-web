import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectsData } from "@/app/components/data/projects";
import { IconArrowLeft, IconArrowRight, IconArrowUpRight, IconCheck, IconUser } from "@tabler/icons-react";
import { SITE_URL, siteConfig } from "@/config/site";

// Helpers
const getProject = (slug) => projectsData.find((p) => p.slug === slug);

export async function generateStaticParams() {
  return projectsData.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || params?.slug;
  const project = getProject(slug);
  if (!project) return {};

  const pageUrl = `${SITE_URL}/Projects/${project.slug}`;
  const title = `${project.title} — Project by Ahsan Ali Soomro (Ahsan Soomro)`;
  const description =
    project.description?.slice(0, 160) ||
    "Project case study engineered by Full Stack Developer Ahsan Ali Soomro.";
  const imageUrl = project.image ? `${SITE_URL}${project.image}` : siteConfig.ogImage;

  return {
    title,
    description,
    alternates: { canonical: pageUrl },
    openGraph: {
      type: "article",
      url: pageUrl,
      title,
      description,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: `${project.title} by Ahsan Ali Soomro` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug || params?.slug;
  const project = getProject(slug);
  if (!project) return notFound();

  const pageUrl = `${SITE_URL}/Projects/${project.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    url: pageUrl,
    image: project.image ? [`${SITE_URL}${project.image}`] : [siteConfig.ogImage],
    headline: project.heading || project.title,
    description: project.description,
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}#person`,
      name: siteConfig.name,
      alternateName: [siteConfig.alternateName],
      url: SITE_URL,
    },
    creator: {
      "@type": "Person",
      "@id": `${SITE_URL}#person`,
      name: siteConfig.name,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Person",
      "@id": `${SITE_URL}#person`,
      name: siteConfig.name,
      url: SITE_URL,
    },
  };

  return (
    <main className="inner-page detail-page">
      <script
        id="ld-project"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="detail-container">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="breadcrumbs">
          <Link href="/">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/Projects">Projects</Link>
          <span className="mx-2">/</span>
          <span>{project.title}</span>
        </nav>

        <span className="section-index">Project case study</span>
        <h1 className="detail-title">{project.heading || project.title}</h1>
        
        {/* Visible Author attribution */}
        <p className="article-meta" style={{ display: "flex", alignItems: "center", gap: "8px", margin: "10px 0 16px" }}>
          <IconUser size={16} />
          <span>Project by <strong>Ahsan Ali Soomro (Ahsan Soomro)</strong> · Full Stack Developer</span>
        </p>

        <p className="detail-lead">{project.description}</p>

        {/* Images with descriptive alt tags */}
        <div className="detail-gallery">
          {project.image && (
            <div className="detail-main-image">
              <Image
                src={project.image}
                alt={`${project.title} — Full Stack application by Ahsan Ali Soomro`}
                fill
                sizes="(max-width:768px) 100vw, 800px"
                className="object-cover"
                priority
              />
            </div>
          )}
          {project.imageapp && (
            <div className="detail-app-image">
              <Image
                src={project.imageapp}
                alt={`${project.title} — Responsive mobile interface designed by Ahsan Ali Soomro`}
                fill
                sizes="(max-width:768px) 100vw, 300px"
                className="object-cover"
              />
            </div>
          )}
        </div>

        {/* Highlights */}
        {project.features?.length > 0 && (
          <div className="detail-highlights">
            <span className="section-index">What I delivered</span>
            <h2>Project highlights</h2>
            <ul>
              {project.features.map((f, i) => (
                <li key={i}>
                  <IconCheck size={17} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* External links */}
        <div className="detail-action">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary"
            >
              Visit live project <IconArrowUpRight size={18} />
            </a>
          )}

          {project.privacyPolicy && (
            <Link
              href={`/Projects/${project.slug}/privacy-policy`}
              className="button-ghost"
            >
              Privacy Policy
            </Link>
          )}
        </div>

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
      <Link href={`/Projects/${prev.slug}`}>
        <IconArrowLeft />
        <span>
          <small>Previous project</small>
          {prev.title}
        </span>
      </Link>
      <Link href={`/Projects/${next.slug}`}>
        <span>
          <small>Next project</small>
          {next.title}
        </span>
        <IconArrowRight />
      </Link>
    </div>
  );
}
