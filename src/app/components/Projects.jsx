"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

// Export for reuse (JSON-LD, sitemap, detail pages, etc.)
export const projectsData = [
  {
    slug: "clinic-management-platform",
    title: "Clinic/Doctor/Patient Management Platform",
    heading: "Streamlined Management for Clinics, Doctors, and Patients",
    description:
      "A robust web app built with Next.js, React, and MySQL to simplify clinic operations. Patients manage appointments, doctors control schedules, and admins oversee users and bookings. Deployed on AWS for scalability and security.",
    image: "/clinic-management.png",
    imageapp: "/doctor-patient-dashboard.png",
    features: [
      "Built with Next.js and React for fast, responsive UX.",
      "MySQL for secure, relational data storage.",
      "AWS hosting for performance, scalability, and security.",
      "Patient profiles with registration, updates, and appointment booking.",
      "Doctor schedule management and availability.",
      "Admin dashboard for users, appointments, and operations.",
      "Real-time appointment booking and availability checks.",
      "Secure authentication with email verification.",
    ],
    link: "https://mydoctorbooking.vercel.app",
  },

  {
    slug: "inventory-management-system",
    title: "Inventory Management System",
    heading: "Powerful Inventory Control at Your Fingertips",
    description:
      "A streamlined desktop application built with Python and Tkinter for managing employees, suppliers, customers, categories, products, and sales. Ideal for SMBs that need simple, reliable inventory control.",
    image: "/ims.png",
    imageapp: "/ims-login.png",
    features: [
      "Built with Python for power and clarity.",
      "Tkinter GUI for a clean, intuitive desktop experience.",
      "Modular architecture for Employees, Suppliers, Customers, Products, Sales.",
      "Real-time dashboard metrics for quick oversight.",
      "Integrated billing for fast transaction processing.",
      "Easy navigation with reports, logs, sales & purchase history.",
      "Secure login system with session control.",
    ],
    link: "https://github.com/AhsanAli-Soomro/IMS_Project",
  },

  {
    slug: "dailypulse",
    title: "DailyPulse",
    heading: "Your Pulse on News Trends and Thoughtful Insights",
    description:
      "A blogs + real-time news platform covering tech, lifestyle, business, and more—curated by passionate writers and experts.",
    image: "/dailypulseweb.png",
    imageapp: "/dailypulseapp.png",
    features: [
      "Blogs across diverse topics and interests.",
      "Real-time news updates across multiple categories.",
      "Clear categorization for easy navigation.",
      "Engaging, expert-written insights and analyses.",
      "Interactive features: comments, polls, discussions.",
    ],
    link: "https://dailyp.vercel.app/",
  },

  {
    slug: "royalhunt",
    title: "RoyalHunt",
    heading:
      "Your Premier Destination for Premium Products and Exclusive Deals",
    description:
      "A curated e-commerce platform for fashion, electronics, home essentials, and more—focused on quality and great prices.",
    image: "/royalhuntweb.png",
    imageapp: "/royalhuntapp.png",
    features: [
      "Wide product range across key categories.",
      "Exclusive deals and regularly updated discounts.",
      "User-friendly UX for desktop and mobile.",
      "Customer reviews and ratings for trust.",
      "Personalized recommendations.",
      "Secure payments and fast shipping.",
    ],
    link: "https://royalhunt.vercel.app/",
  },

  {
    slug: "imagartify",
    title: "Imagartify",
    heading: "Revolutionizing Image Editing with AI",
    description:
      "AI-powered online image editor offering background removal, restoration, expansion, and more—built for speed and simplicity.",
    image: "/imagartifyweb.webp",
    imageapp: "/imagartifyapp.webp",
    features: [
      "Instant background removal with high precision.",
      "Seamless background restoration.",
      "Natural background expansion for more canvas space.",
      "Additional AI tools for enhancement and retouching.",
    ],
    link: "https://imageartify.vercel.app/",
  },

  {
    slug: "hireside-clone",
    title: "HireSide — Front-End Clone",
    heading: "Front-End Clone Model of HireSide",
    description:
      "A front-end clone inspired by the HireSide full-stack app by Verge Systems Ltd., replicating look-and-feel and UI flows.",
    image: "/hireside-clone.png",
    imageapp: "/hiresideapp.png",
    features: [
      "UI parity for key screens and interactions.",
      "Componentized front-end architecture.",
      "For the original product and full feature set, see: https://hireside.com",
    ],
    link: "https://github.com/AhsanAli-Soomro/hireside-clone",
  },

  {
    slug: "eventify",
    title: "Eventify",
    heading: "Your Ultimate Event Creation Platform",
    description:
      "An immersive event planning platform for corporate, social, and personal events with collaboration and attendee engagement.",
    image: "/eventweb.webp",
    imageapp: "/eventapp.webp",
    features: [
      "Comprehensive event planning and management toolkit.",
      "Sleek, user-friendly interface.",
      "Customizable templates for various event types.",
      "Real-time collaboration for teams.",
      "RSVPs, live polls, and social integration.",
      "Cross-device compatibility.",
    ],
    link: "https://eventify-gold.vercel.app/",
  },

  {
    slug: "autocare-pro",
    title: "AutoCare Pro",
    heading:
      "Redefining Car Maintenance and Repair with Expertise and Technology",
    description:
      "A modern platform connecting drivers with diagnostics, scheduled maintenance, and expert mechanics—built for speed and trust.",
    image: "/autocareproweb.webp",
    imageapp: "/autocareproapp.webp",
    features: [
      "Advanced diagnostics and troubleshooting.",
      "Scheduled maintenance with reminders.",
      "Emergency repair workflows.",
      "Customer-centric booking and status tracking.",
      "Expert tips and knowledge base.",
    ],
    link: "https://car-service-iota.vercel.app/",
  },

  {
    slug: "myvideos",
    title: "MyVideos",
    heading: "Your Ultimate Video Watching Platform",
    description:
      "A smooth, high-definition video platform with recommendations, community features, and cross-device support.",
    image: "/myvideosweb.webp",
    imageapp: "/myvideosapp.webp",
    features: [
      "Large library across genres.",
      "Intuitive, modern interface.",
      "Smart personalized recommendations.",
      "High-quality streaming with minimal buffering.",
      "Community engagement: comments, likes, shares.",
      "Works great across devices and screens.",
    ],
    link: "https://my-videos-nine.vercel.app/",
  },
];

const ProjectsPage = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const projects = projectsData;

  const handleProjectClick = (index) => setSelectedIndex(index);
  const handleCloseModal = () => setSelectedIndex(null);
  const handleNextProject = () =>
    setSelectedIndex((prev) => (prev + 1) % projects.length);
  const handlePreviousProject = () =>
    setSelectedIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <main className="bg-gradient-to-br from-orange-800 via-orange-600 to-orange-500 py-20">
      {/* Real H1 for SEO/a11y (visually hidden to keep your current design) */}
      <h1 className="sr-only">Projects — Ahsan Ali Soomro</h1>

      <section
        aria-labelledby="projects-heading"
        className="container mx-auto px-4 sm:px-6 lg:px-16"
      >
        <h2
          id="projects-heading"
          className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-10"
        >
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <article key={project.slug} className="contents">
              {/* Keep your card component for visuals/click logic */}
              <ProjectCard
                project={project}
                onClick={() => handleProjectClick(index)}
              />
            </article>
          ))}
        </div>
      </section>

      {selectedIndex !== null && (
        <ProjectModal
          project={projects[selectedIndex]}
          onClose={handleCloseModal}
          onNext={handleNextProject}
          onPrev={handlePreviousProject}
        />
      )}
    </main>
  );
};

export default ProjectsPage;
