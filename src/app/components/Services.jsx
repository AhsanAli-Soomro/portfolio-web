"use client";
import React from "react";
import { IconCode, IconGauge, IconLayoutGrid } from "@tabler/icons-react";

export default function Services() {
  const services = [
    {
      title: "UI Engineering",
      desc: "Design systems, component libraries, and pixel-perfect front-end builds with scalable architecture.",
      icon: <IconLayoutGrid className="size-8 text-orange-400" />,
      metric: "0.00 CLS",
    },
    {
      title: "Performance Optimization",
      desc: "Improve Core Web Vitals, reduce bundle size, and optimize Lighthouse scores using modern web practices.",
      icon: <IconGauge className="size-8 text-yellow-400" />,
      metric: "<2.0s LCP",
    },
    {
      title: "Front-End Development",
      desc: "Building responsive, accessible, and fast web apps with Next.js, React, and Tailwind CSS.",
      icon: <IconCode className="size-8 text-amber-400" />,
      metric: "A11y AA+",
    },
  ];

  return (
    <section
      id="services"
      className="flex justify-center items-center min-h-screen"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 text-center">
        <h2
          id="services-heading"
          className="text-3xl sm:text-4xl font-bold text-white mb-4"
        >
          What I Do
        </h2>
        <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-12">
          I craft modern, performant, and accessible interfaces for brands and
          startups — turning complex ideas into intuitive user experiences.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur-sm hover:bg-white/10 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 mx-auto rounded-xl bg-orange-500/10 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-white/80 leading-relaxed mb-4">
                {service.desc}
              </p>
              <p className="inline-block text-sm font-medium text-white/90 bg-white/10 px-3 py-1 rounded-lg">
                {service.metric}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
