"use client";

import { IconCode, IconGauge, IconLayoutGrid, IconArrowUpRight } from "@tabler/icons-react";
import Reveal from "./Reveal";

const services = [
  { number: "01", title: "UI Engineering", desc: "Thoughtful design systems and pixel-precise interfaces built to scale with your product.", icon: IconLayoutGrid, metric: "0.00 CLS" },
  { number: "02", title: "Web Development", desc: "Responsive, accessible web apps crafted with React, Next.js and modern architecture.", icon: IconCode, metric: "A11y AA+" },
  { number: "03", title: "Performance", desc: "Core Web Vitals, bundle optimization and resilient experiences that feel instant.", icon: IconGauge, metric: "<2.0s LCP" },
];

export default function Services() {
  return (
    <section id="services" className="content-section" aria-labelledby="services-heading">
      <Reveal className="section-heading">
        <div><span className="section-index">01 / Services</span><h2 id="services-heading">Ideas, engineered<br />with intention.</h2></div>
        <p>I bridge design and engineering to build interfaces that look sharp, work beautifully and deliver measurable results.</p>
      </Reveal>
      <div className="services-grid">
        {services.map((service, index) => {
          const ServiceIcon = service.icon;
          return (
            <Reveal as="article" className="glass-card service-card" delay={index * 130} key={service.title}>
              <span className="card-number">{service.number}</span>
              <div className="service-icon"><ServiceIcon size={27} /></div>
              <h3>{service.title}</h3><p>{service.desc}</p>
              <div className="card-footer"><span>{service.metric}</span><IconArrowUpRight size={20} /></div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
