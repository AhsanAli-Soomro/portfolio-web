import Link from "next/link";

export default function NotFound() {
  return (
    <main className="empty-state inner-page"><span className="section-index">404 / Not found</span>
      <h1>Project not found.</h1><p>The project you’re looking for doesn’t exist or has moved.</p>
      <Link href="/Projects" className="button-primary">Back to projects</Link>
    </main>
  );
}
