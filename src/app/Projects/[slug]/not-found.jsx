import Link from "next/link";

export default function NotFound() {
  return (
    <main className="py-24 text-center">
      <h1 className="text-3xl font-bold text-white">Project not found</h1>
      <p className="mt-3 text-white/80">The project you’re looking for doesn’t exist.</p>
      <div className="mt-6">
        <Link href="/projects" className="underline text-white/90 hover:text-white">Back to projects</Link>
      </div>
    </main>
  );
}
