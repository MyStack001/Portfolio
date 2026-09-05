"use client";

import SectionWrapper from "../components/SectionWrapper";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Pipsoul",
    description:
      "A full-stack trading journal and analytics platform built to help forex traders record trades, analyze performance, and develop better trading habits.",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    github: "https://github.com/obaahshadrach/pipsoul-dashboard",
    live: "https://pipsoul-dashboard-six.vercel.app",
    featured: true,
  },
  {
    title: "Pipsoul Traders University",
    description:
      "A full-stack learning platform designed to help traders build a strong foundation in Forex, Crypto, Stocks, and financial markets through structured learning experiences.",
    tech: ["React", "Vite", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github:
      "https://github.com/obaahshadrach/pipsoul-traders-university",
    status: "Work in Progress",
    live: "https://pipsoul-traders-university.vercel.app",
    featured: true,
  },
  {
    title: "Programmers University",
    description:
      "A modern responsive platform for a full-stack development bootcamp, featuring programs, pricing, testimonials, and an application experience.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    live: "https://theprogrammersuniversity.com/",
  },
  {
    title: "EasyShip",
    description:
      "A responsive logistics and shipping platform focused on shipment tracking, clear information architecture, and a smooth user experience.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    live: "https://easyship.live/",
  },
  {
    title: "Useoniix",
    description:
      "A modern web application focused on responsive frontend development, polished interfaces, and a clean user experience.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    live: "https://useoniix.com/",
  },
  {
    title: "DRO Health App",
    description:
      "A healthcare application concept exploring responsive interfaces, reusable components, and a structured digital health experience.",
    tech: ["Figma", "React", "Design System"],
    behance:
      "https://www.behance.net/gallery/238761839/DRO-Health-App-Feature-Extension",
  },
  {
    title: "GlowPay",
    description:
      "A modern mobile wallet concept exploring digital payments, financial interactions, and a simple mobile experience.",
    tech: ["Figma"],
    behance:
      "https://www.behance.net/gallery/237297515/GlowPay-Fintech-App-UIUX-Case-Study",
  },
  {
    title: "FlowBill",
    description:
      "A modern billing and revenue-tracking platform concept designed around invoices, transactions, and financial insights.",
    tech: ["Figma"],
    behance:
      "https://www.behance.net/gallery/240075781/Flowbill-Smart-Finance-Invoicing-Platform-Design",
  },
];

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="mx-auto max-w-6xl py-20">

        {/* Header */}
        <div className="mb-10">
          <span className="text-xs uppercase tracking-widest text-slate-500">
            Selected Work
          </span>

          <h2 className="mt-2 text-3xl font-semibold text-slate-900">
            Things I've Built
          </h2>

          <p className="mt-3 max-w-2xl leading-relaxed text-slate-600">
            A selection of web applications and digital experiences I've
            built using modern frontend and backend technologies.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects
            .filter((project) => project.featured)
            .map((p) => (
              <ProjectCard
                key={p.title}
                title={p.title}
                description={p.description}
                tech={p.tech}
                github={p.github}
                live={p.live}
                behance={p.behance}
                status={p.status}
                featured
              />
            ))}
        </div>

        {/* Other Projects */}
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects
            .filter((project) => !project.featured)
            .map((p) => (
              <ProjectCard
                key={p.title}
                title={p.title}
                description={p.description}
                tech={p.tech}
                github={p.github}
                live={p.live}
                behance={p.behance}
                status={p.status}
              />
            ))}
        </div>

      </div>
    </SectionWrapper>
  );
}