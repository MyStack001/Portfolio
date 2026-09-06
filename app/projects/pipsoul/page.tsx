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
    </main>
  );
}