import Image from "next/image";
import Link from "next/link";

export default function PipsoulCaseStudy() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Back to Portfolio */}
      <div className="mx-auto max-w-6xl px-6 pt-8">
        <Link
          href="/#projects"
          className="text-sm font-medium text-slate-500 transition hover:text-sky-600"
        >
          ← Back to Projects
        </Link>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-16">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
            Case Study
          </span>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Pipsoul
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
            A full-stack trading journal and analytics platform designed to
            help forex traders record trades, understand their performance,
            and build better trading habits.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {["Next.js", "TypeScript", "Supabase", "Tailwind CSS"].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600 shadow-sm"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>

        {/* Project Preview */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
          <div className="relative aspect-video">
            <Image
              src="/images/projects/pipsoul.png"
              alt="Pipsoul dashboard"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>
      {/* Problem & Goal */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Problem */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
                The Problem
              </span>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
                Trading is more than entering and exiting a position.
              </h2>

              <p className="mt-5 leading-relaxed text-slate-600">
                Many traders record their trades without having a clear way to
                understand the patterns behind their decisions. Important
                details can become scattered across spreadsheets, notes, and
                screenshots, making it difficult to review performance
                consistently.
              </p>

              <p className="mt-4 leading-relaxed text-slate-600">
                The real challenge is not simply keeping a record. It is
                turning that record into useful insight that can help a trader
                identify mistakes, recognize patterns, and develop better
                habits over time.
              </p>
            </div>

            {/* Goal */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
                The Goal
              </span>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
                Turn trade history into actionable insight.
              </h2>

              <p className="mt-5 leading-relaxed text-slate-600">
                Pipsoul was designed to bring journaling, performance
                analytics, and trading habits into one focused experience.
              </p>

              <p className="mt-4 leading-relaxed text-slate-600">
                The goal was to create a platform where traders could quickly
                document a trade, review their decisions, understand their
                performance, and build consistency without adding unnecessary
                complexity to their workflow.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Project Overview */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
              Project Overview
            </span>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              From product idea to full-stack application.
            </h2>

            <p className="mt-5 leading-relaxed text-slate-600">
              Pipsoul was built as a complete digital product rather than
              simply a dashboard interface. The application combines trade
              journaling, performance analytics, notifications, achievements,
              and account management into one connected experience.
            </p>

            <p className="mt-4 leading-relaxed text-slate-600">
              I designed and developed the product end-to-end, working across
              the interface, application architecture, authentication,
              database integration, and core trading workflows.
            </p>
          </div>

          {/* Role & Responsibilities */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
  {
    title: "Frontend",
    description:
      "Built responsive interfaces and interactive experiences using Next.js, React, and Tailwind CSS.",
  },
  {
    title: "Backend",
    description:
      "Implemented authentication, database interactions, storage, and application logic with Supabase.",
  },
  {
    title: "Database & Authentication",
    description:
      "Designed the data structure and implemented secure user authentication and account-level data access.",
  },
  {
    title: "Product Development",
    description:
      "Connected the application end-to-end and iterated on features based on real usage.",
  },
].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}