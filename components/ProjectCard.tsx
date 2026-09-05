"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  behance?: string;
  status?: string;
  featured?: boolean;
  image?: string;
};

const card = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  live,
  behance,
  status,
  featured = false,
  image,
}: Props) {
  return (
    <motion.article
      variants={card}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`
        group relative flex h-full flex-col rounded-xl p-6
        bg-white/70 backdrop-blur-md
        border border-slate-200/60
        shadow-sm
        transition-all duration-300 ease-out
        hover:-translate-y-2 hover:shadow-xl
        hover:border-slate-300
        ${featured ? "min-h-[300px] p-7" : ""}
      `}
    >
      {/* Glow layer */}
      <div
        className="
          pointer-events-none absolute inset-0 rounded-xl
          opacity-0 group-hover:opacity-100
          transition duration-300
          ring-1 ring-sky-400/20
          shadow-[0_0_0_1px_rgba(56,189,248,0.15),0_25px_80px_-30px_rgba(56,189,248,0.35)]
        "
      />

      {/* Content */}
      <div className="relative flex h-full flex-col">
      {image && (
  <div className="relative mb-6 aspect-video overflow-hidden rounded-lg border border-slate-200/60 bg-slate-100">
    <Image
      src={image}
      alt={`${title} screenshot`}
      fill
      className="object-cover transition duration-500 group-hover:scale-[1.02]"
    />
  </div>
)}

        {/* Featured label */}
        {featured && (
          <span className="mb-4 w-fit rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-sky-700">
            Featured Project
          </span>
        )}

        <h3
          className={`
            font-semibold text-slate-800 transition
            group-hover:text-slate-900
            ${featured ? "text-xl" : "text-lg"}
          `}
        >
          {title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {description}
        </p>

        {/* Tech stack */}
        <div className="mt-5 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="
                rounded-full border border-slate-200/60
                bg-slate-100/80 px-2 py-1
                text-xs text-slate-700
              "
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-auto flex min-h-[44px] items-center gap-4 pt-6">

          {github && (
            <Link
              href={github}
              target="_blank"
              className="
                text-sm font-medium text-sky-600
                underline underline-offset-4
                transition hover:text-sky-700
              "
            >
              GitHub
            </Link>
          )}

          {live && (
            <Link
              href={live}
              target="_blank"
              className="
                text-sm font-medium text-sky-600
                underline underline-offset-4
                transition hover:text-sky-700
              "
            >
              Live
            </Link>
          )}

          {behance && (
            <Link
              href={behance}
              target="_blank"
              className="
                text-sm font-medium text-sky-600
                underline underline-offset-4
                transition hover:text-sky-700
              "
            >
              Behance
            </Link>
          )}

          {status && (
            <span className="mb-3 inline-flex rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-[11px] font-medium text-amber-700">
              {status}
            </span>
          )}

        </div>
      </div>
    </motion.article>
  );
}