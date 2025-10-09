"use client";
import { useEffect, useState } from "react";
import { IconBrandNextjs, IconBrandReact, IconBrandTailwind, IconBrandFramerMotion } from "@tabler/icons-react";

export default function TrustBar() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handleChange = (e) => setReducedMotion(e.matches);
    mq.addEventListener?.("change", handleChange);
    return () => mq.removeEventListener?.("change", handleChange);
  }, []);

  return (
    <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-3 text-white/80">
      {/* Trusted clients */}
      <span className="inline-flex items-center gap-2 text-sm">
        <span
          className="inline-block h-2 w-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(34,197,94,0.8)]"
          aria-hidden="true"
        />
        Trusted by <strong className="font-semibold">&nbsp;12+&nbsp;</strong> clients
      </span>

      {/* Divider */}
      <span
        className={`h-1 w-1 rounded-full bg-white/50 ${reducedMotion ? "" : "animate-pulse"}`}
        aria-hidden="true"
      />

      {/* Tech stack */}
      <span className="inline-flex flex-wrap items-center gap-3 text-sm">
        <span className="inline-flex items-center gap-1.5" title="Next.js">
          <IconBrandNextjs className="size-4 opacity-90" aria-hidden="true" />
          Next.js
        </span>
        <span className="inline-flex items-center gap-1.5" title="React">
          <IconBrandReact className="size-4 opacity-90" aria-hidden="true" />
          React
        </span>
        <span className="inline-flex items-center gap-1.5" title="Tailwind CSS">
          <IconBrandTailwind className="size-4 opacity-90" aria-hidden="true" />
          Tailwind
        </span>
        <span className="inline-flex items-center gap-1.5" title="Framer Motion">
          <IconBrandFramerMotion className="size-4 opacity-90" aria-hidden="true" />
          Framer Motion
        </span>
      </span>
    </div>
  );
}
