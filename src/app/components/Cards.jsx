"use client";

import { IconAccessible, IconBolt, IconBrush, IconDeviceMobile, IconSearch } from "@tabler/icons-react";
import Reveal from "./Reveal";

const expertise = [
  [IconDeviceMobile, "Responsive design", "Fluid layouts that feel intentional across every screen and input method."],
  [IconBrush, "UI/UX implementation", "High-fidelity interfaces translated from ideas and prototypes into reusable code."],
  [IconSearch, "SEO foundations", "Semantic structure, metadata and technical foundations made for discoverability."],
  [IconBolt, "Motion & interaction", "Purposeful animation and feedback that guide users without slowing them down."],
  [IconAccessible, "Inclusive interfaces", "Accessible, keyboard-friendly experiences built for a wider audience."],
];

export default function Cards() {
  return (
    <section className="page-container expertise-section">
      <Reveal className="section-heading"><div><span className="section-index">Expertise / 04</span><h2>How I add value.</h2></div><p>Every decision connects visual quality with usability, performance and business goals.</p></Reveal>
      <div className="expertise-grid">{expertise.map(([Icon, title, desc], index) => (
        <Reveal as="article" className="glass-card expertise-card" delay={index * 100} key={title}>
          <Icon size={26} /><span>0{index + 1}</span><h3>{title}</h3><p>{desc}</p>
        </Reveal>
      ))}</div>
    </section>
  );
}
