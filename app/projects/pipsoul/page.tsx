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

      {/* Key Features */}
<section
  className="border-t border-white/10 text-white"
  style={{
    background:
      "radial-gradient(circle at top right, rgba(7, 182, 213, 0.10), transparent 35%), linear-gradient(135deg, #08111F 0%, #0A1728 50%, #08111F 100%)",
  }}
>
  <div className="mx-auto max-w-6xl px-6 py-20">
    {/* Section Intro */}
    <div className="max-w-3xl">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
        Key Features
      </span>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
        Built around the complete trading workflow.
      </h2>

      <p className="mt-4 text-base leading-relaxed text-slate-400">
        Pipsoul combines structured trade journaling, performance analytics,
        intelligent insights, and automated feedback into one connected
        trading experience.
      </p>
    </div>

    {/* Feature Grid */}
    <div className="mt-12 grid gap-6 sm:grid-cols-2">
      {/* Trade Journaling */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-[#07B6D5]/30 hover:bg-white/[0.06]">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-lg font-semibold text-white">
            Trade Journaling
          </h3>

          <span className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[11px] font-medium text-slate-400">
            Core
          </span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          Traders can record entries, exits, setups, bias, notes, outcomes,
          and other contextual details to build a structured history of
          their trading decisions.
        </p>
      </div>

      {/* Performance Analytics */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-[#07B6D5]/30 hover:bg-white/[0.06]">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-lg font-semibold text-white">
            Performance Analytics
          </h3>

          <span className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[11px] font-medium text-slate-400">
            Analytics
          </span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          Performance data is transformed into useful statistics and
          visualizations, helping traders evaluate results and understand
          how their trading is developing over time.
        </p>
      </div>

      {/* Journal Insights */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-[#07B6D5]/30 hover:bg-white/[0.06]">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-lg font-semibold text-white">
            Journal Insights
          </h3>

          <span className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[11px] font-medium text-slate-400">
            Insights
          </span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          Journal data can be examined alongside trading outcomes to surface
          recurring behaviors, patterns, and observations that can support
          better decision-making.
        </p>
      </div>

      {/* Pipsoul AI */}
<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-[#07B6D5]/30 hover:bg-white/[0.06]">
  <div className="flex items-center justify-between gap-4">
    <h3 className="text-lg font-semibold text-white">
      Pipsoul AI
    </h3>

    <span className="rounded-full border border-[#07B6D5]/20 bg-[#07B6D5]/10 px-2.5 py-1 text-[11px] font-semibold text-[#07B6D5]">
      AI-Powered
    </span>
  </div>

  <p className="mt-3 text-sm leading-relaxed text-slate-400">
    Pipsoul AI analyzes a trader&apos;s journal context and recorded
    performance to generate contextual feedback, identify recurring
    behaviors, and help traders turn their trading history into
    actionable insights.
  </p>
</div>

      {/* Notifications & Automation */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-[#07B6D5]/30 hover:bg-white/[0.06]">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-lg font-semibold text-white">
            Notifications & Automation
          </h3>

          <span className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[11px] font-medium text-slate-400">
            Automation
          </span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          Automated notifications keep traders informed about important
          activity and events without requiring them to constantly monitor
          the application.
        </p>
      </div>

      {/* Achievements & Streaks */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-[#07B6D5]/30 hover:bg-white/[0.06]">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-lg font-semibold text-white">
            Achievements & Streaks
          </h3>

          <span className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[11px] font-medium text-slate-400">
            Engagement
          </span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          Journaling milestones and consistency streaks encourage traders
          to maintain disciplined habits and continuously document their
          trading activity.
        </p>
      </div>

      {/* Authentication & Data Isolation */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-[#07B6D5]/30 hover:bg-white/[0.06]">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-lg font-semibold text-white">
            Authentication & Data Isolation
          </h3>

          <span className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[11px] font-medium text-slate-400">
            Security
          </span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          Supabase authentication and row-level security provide account
          isolation, ensuring each trader&apos;s journals, trades, analytics,
          and personal data remain associated with the correct user.
        </p>
      </div>
    </div>
  </div>
</section>
{/* Visual Design System */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          {/* Section Intro */}
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#07B6D5]">
              Visual Design System
            </span>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              A visual language built for clarity and focus.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Pipsoul uses a focused visual system designed to keep trading
              information clear, reduce visual noise, and make important
              actions and performance signals easy to recognize.
            </p>
          </div>

          {/* Color + Typography */}
          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            {/* Color System */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    01
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold text-[#08111F]">
                    Color System
                  </h3>
                </div>

                <div className="h-10 w-10 rounded-full bg-[#07B6D5]" />
              </div>

              <div className="mt-10 space-y-4">
                {/* Dark */}
                <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-[#08111F] p-4">
                  <div className="h-14 w-14 shrink-0 rounded-xl border border-white/10 bg-[#08111F]" />

                  <div>
                    <p className="font-medium text-white">
                      Pipsoul Dark
                    </p>

                    <p className="mt-1 font-mono text-xs text-slate-400">
                      #08111F
                    </p>
                  </div>
                </div>

                {/* Light */}
                <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="h-14 w-14 shrink-0 rounded-xl border border-slate-200 bg-white" />

                  <div>
                    <p className="font-medium text-[#08111F]">
                      Pipsoul Light
                    </p>

                    <p className="mt-1 font-mono text-xs text-slate-500">
                      #FFFFFF
                    </p>
                  </div>
                </div>

                {/* Cyan */}
                <div className="flex items-center gap-4 rounded-2xl border border-cyan-100 bg-cyan-50 p-4">
                  <div className="h-14 w-14 shrink-0 rounded-xl bg-[#07B6D5]" />

                  <div>
                    <p className="font-medium text-[#08111F]">
                      Primary Accent
                    </p>

                    <p className="mt-1 font-mono text-xs text-slate-500">
                      #07B6D5
                    </p>
                  </div>
                </div>

                {/* Green */}
                <div className="flex items-center gap-4 rounded-2xl border border-green-100 bg-green-50 p-4">
                  <div className="h-14 w-14 shrink-0 rounded-xl bg-[#22C55E]" />

                  <div>
                    <p className="font-medium text-[#08111F]">
                      Positive / Buy
                    </p>

                    <p className="mt-1 font-mono text-xs text-slate-500">
                      #22C55E
                    </p>
                  </div>
                </div>

                {/* Red */}
                <div className="flex items-center gap-4 rounded-2xl border border-red-100 bg-red-50 p-4">
                  <div className="h-14 w-14 shrink-0 rounded-xl bg-[#EF4444]" />

                  <div>
                    <p className="font-medium text-[#08111F]">
                      Negative / Sell
                    </p>

                    <p className="mt-1 font-mono text-xs text-slate-500">
                      #EF4444
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Typography */}
<div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
  <div>
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
      02
    </p>

    <h3 className="mt-2 text-2xl font-semibold text-[#08111F]">
      Typography
    </h3>
  </div>

  <div className="mt-10">
    {/* Typeface */}
    <div className="border-b border-slate-200 pb-8">
      <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
        Typeface
      </p>

      <p className="mt-5 text-5xl font-semibold tracking-tight text-[#08111F]">
        Inter
      </p>

      <p className="mt-3 text-sm text-slate-500">
        Used across the product for clear hierarchy, readable data, and
        consistent interface communication.
      </p>
    </div>

    {/* Body */}
    <div className="border-b border-slate-200 py-8">
      <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
        Body
      </p>

      <p className="mt-4 max-w-md text-lg leading-relaxed text-slate-600">
        Clear typography keeps trade details, journal entries, and AI
        insights easy to scan.
      </p>
    </div>

    {/* Trading Data */}
    <div className="pt-8">
      <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
        Trading Data
      </p>

      <div className="mt-4 space-y-3">
        <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3">
          <div>
            <p className="text-sm font-medium text-[#08111F]">
              GBPUSD · BUY
            </p>
            <p className="mt-1 text-xs text-slate-500">
              London Session
            </p>
          </div>

          <span className="text-sm font-semibold text-[#22C55E]">
            +2.4R
          </span>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white px-4 py-3">
          <p className="text-sm font-medium text-[#08111F]">
            AI Insight
          </p>

          <p className="mt-1 text-xs leading-relaxed text-slate-500">
            Strong execution, but entries show a recurring tendency to
            chase momentum.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

          {/* Visual Language */}
          <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  03
                </p>

                <h3 className="mt-2 text-2xl font-semibold text-[#08111F]">
                  Visual Language
                </h3>

                <p className="mt-4 leading-relaxed text-slate-600">
                  Rounded surfaces, subtle borders, generous spacing, and
                  strong contrast create an interface that feels modern
                  without distracting from the data.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="h-10 w-10 rounded-xl bg-cyan-50" />

                  <p className="mt-5 font-medium text-[#08111F]">
                    Soft surfaces
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    Layered cards create separation without heavy shadows.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="h-10 w-10 rounded-xl border border-slate-200" />

                  <p className="mt-5 font-medium text-[#08111F]">
                    Subtle borders
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    Fine borders define structure while keeping the UI light.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex gap-2">
                    <span className="h-2 w-12 rounded-full bg-[#07B6D5]" />
                    <span className="h-2 w-6 rounded-full bg-slate-200" />
                  </div>

                  <p className="mt-5 font-medium text-[#08111F]">
                    Clear hierarchy
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    Color and scale guide attention toward important data.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs text-[#07B6D5]">
                      AI
                    </span>

                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs text-[#22C55E]">
                      BUY
                    </span>

                    <span className="rounded-full bg-red-50 px-3 py-1 text-xs text-[#EF4444]">
                      SELL
                    </span>
                  </div>

                  <p className="mt-5 font-medium text-[#08111F]">
                    Meaningful color
                  </p>

                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    Color communicates interaction, status, and trading state.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Design Principles */}
          <div className="mt-16">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                04
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-[#08111F]">
                Design Principles
              </h3>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Clarity",
                  description:
                    "Important trading information should be immediately understandable.",
                },
                {
                  number: "02",
                  title: "Focus",
                  description:
                    "The interface stays focused on the trader's workflow rather than decoration.",
                },
                {
                  number: "03",
                  title: "Consistency",
                  description:
                    "Shared patterns make navigation and interaction predictable.",
                },
                {
                  number: "04",
                  title: "Feedback",
                  description:
                    "Visual states communicate actions, outcomes, and important changes.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <span className="font-mono text-xs text-[#07B6D5]">
                    {item.number}
                  </span>

                  <h4 className="mt-5 font-semibold text-[#08111F]">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm leading-relaxed text-slate-500">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
     </section>

      {/* Technical Architecture */}
<section
  className="border-t border-white/10 text-white"
  style={{
    background:
      "radial-gradient(circle at top right, rgba(7, 182, 213, 0.10), transparent 35%), linear-gradient(135deg, #08111F 0%, #0A1728 50%, #08111F 100%)",
  }}
>
  <div className="mx-auto max-w-6xl px-6 py-24">
    {/* Section Intro */}
    <div className="max-w-3xl">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#07B6D5]">
        Technical Architecture
      </span>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        The system behind the trading experience.
      </h2>

      <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
        Pipsoul connects a modern Next.js frontend with Supabase
        services, structured trading data, and AI-powered workflows
        to create a complete trading journal and analytics platform.
      </p>
    </div>

    {/* Architecture Tree */}
    <div className="mt-20">
      <div className="flex flex-col items-center">
        {/* Root */}
        <div className="relative rounded-2xl border border-[#07B6D5]/30 bg-white/[0.04] px-8 py-5 text-center shadow-[0_0_40px_rgba(7,182,213,0.08)]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#07B6D5]">
            Full-Stack Platform
          </p>

          <h3 className="mt-1 text-2xl font-semibold tracking-tight text-white">
            Pipsoul
          </h3>
        </div>

        {/* Root Connector */}
        <div className="h-12 w-px bg-white/15" />

        {/* Horizontal Branch */}
        <div className="hidden h-px w-[72%] bg-white/15 lg:block" />

        {/* Main Architecture Branches */}
        <div className="relative grid w-full gap-12 lg:grid-cols-3 lg:gap-8">
          {/* Frontend */}
          <div className="relative flex flex-col items-center text-center">
            <div className="hidden h-10 w-px bg-white/15 lg:block" />

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#07B6D5]">
  01
</p>

            <h3 className="mt-2 text-xl font-semibold text-white">
              Frontend
            </h3>

            <div className="mt-6 space-y-3 text-sm text-slate-400">
              <p>Next.js</p>
              <p>React</p>
              <p>TypeScript</p>
              <p>Tailwind CSS</p>
              <p>Framer Motion</p>
              <p>Recharts</p>
            </div>
          </div>

          {/* Backend & Data */}
          <div className="relative flex flex-col items-center text-center">
            <div className="hidden h-10 w-px bg-white/15 lg:block" />

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#07B6D5]">
  02
</p>

            <h3 className="mt-2 text-xl font-semibold text-white">
              Backend &amp; Data
            </h3>

            <div className="mt-6 space-y-3 text-sm text-slate-400">
              <p>Supabase</p>
              <p>PostgreSQL</p>
              <p>Supabase Auth</p>
              <p>Storage</p>
              <p>Row Level Security</p>
            </div>
          </div>

          {/* AI & Automation */}
          <div className="relative flex flex-col items-center text-center">
            <div className="hidden h-10 w-px bg-white/15 lg:block" />

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#07B6D5]">
  03
</p>

            <h3 className="mt-2 text-xl font-semibold text-white">
              AI &amp; Automation
            </h3>

            <div className="mt-6 space-y-3 text-sm text-slate-400">
              <p>Pipsoul AI</p>
              <p>OpenAI</p>
              <p>Journal Analysis</p>
              <p>AI Feedback</p>
              <p>Automated Notifications</p>
            </div>
          </div>
        </div>

        {/* Convergence */}
        <div className="mt-14 hidden h-12 w-px bg-white/15 lg:block" />

        <div className="hidden h-px w-[72%] bg-white/15 lg:block" />

        {/* Core Experience */}
        <div className="mt-12 w-full">
          <div className="flex flex-col items-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Core Trading Experience
            </p>

            <div className="mt-8 grid w-full gap-4 sm:grid-cols-3">
              <div className="border-l border-white/15 pl-5">
                <p className="font-medium text-white">
                  Trade Journaling
                </p>

                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  Structured trade records, setups, notes, outcomes,
                  and contextual data.
                </p>
              </div>

              <div className="border-l border-white/15 pl-5">
                <p className="font-medium text-white">
                  Performance Analytics
                </p>

                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  Trading statistics and visual analysis built from
                  recorded performance.
                </p>
              </div>

              <div className="border-l border-white/15 pl-5">
                <p className="font-medium text-white">
                  AI Insights
                </p>

                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  Contextual feedback that connects journal behavior
                  with trading performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Architecture Note */}
    <div className="mt-20 border-t border-white/10 pt-8">
      <p className="max-w-3xl text-sm leading-relaxed text-slate-500">
        The architecture keeps the presentation layer, data services,
        authentication, and AI workflows connected while maintaining
        account-level data isolation through Supabase Row Level Security.
      </p>
    </div>
  </div>
</section>
      {/* Engineering Challenges & Solutions */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          {/* Section Intro */}
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#07B6D5]">
              Engineering Challenges &amp; Solutions
            </span>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#08111F] sm:text-4xl">
              Real problems encountered while building Pipsoul.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Building Pipsoul involved solving problems across
              authentication, database architecture, realtime data,
              persistence, security, and AI integration.
            </p>
          </div>

          {/* Challenges */}
          <div className="mt-20">
            {/* Challenge 01 */}
            <div className="relative border-t border-slate-200 py-14">
              <div className="grid gap-10 lg:grid-cols-[0.35fr_1fr]">
                <div>
                  <span className="font-mono text-sm text-[#07B6D5]">
                    01
                  </span>

                  <h3 className="mt-4 max-w-xs text-xl font-semibold tracking-tight text-[#08111F]">
                    Supabase Profile &amp; Authentication
                  </h3>
                </div>

                <div className="grid gap-8 sm:grid-cols-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Challenge
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      New users could authenticate successfully, but profile
                      data and dashboard greetings were not always available
                      when the UI expected them.
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Solution
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Separated authentication state from profile loading
                      and implemented reliable profile fetching and provider
                      logic.
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#07B6D5]">
                      Result
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Consistent user identity and profile data across the
                      authenticated application.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Challenge 02 */}
            <div className="relative border-t border-slate-200 py-14">
              <div className="grid gap-10 lg:grid-cols-[0.35fr_1fr]">
                <div>
                  <span className="font-mono text-sm text-[#07B6D5]">
                    02
                  </span>

                  <h3 className="mt-4 max-w-xs text-xl font-semibold tracking-tight text-[#08111F]">
                    Database Trigger &amp; Schema Mismatch
                  </h3>
                </div>

                <div className="grid gap-8 sm:grid-cols-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Challenge
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      The Supabase{" "}
                      <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-700">
                        handle_new_user
                      </code>{" "}
                      trigger was still trying to insert{" "}
                      <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-700">
                        bio
                      </code>{" "}
                      after the profile schema had moved to{" "}
                      <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-700">
                        strategy
                      </code>
                      .
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Solution
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Updated the trigger to match the current profile
                      schema and verified the signup flow against the
                      database.
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#07B6D5]">
                      Result
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      New accounts could be created without the database
                      trigger failing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Challenge 03 */}
            <div className="relative border-t border-slate-200 py-14">
              <div className="grid gap-10 lg:grid-cols-[0.35fr_1fr]">
                <div>
                  <span className="font-mono text-sm text-[#07B6D5]">
                    03
                  </span>

                  <h3 className="mt-4 max-w-xs text-xl font-semibold tracking-tight text-[#08111F]">
                    Account-Level Data Isolation
                  </h3>
                </div>

                <div className="grid gap-8 sm:grid-cols-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Challenge
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Trading journals, trades, notifications, and profile
                      data needed to remain isolated between users.
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Solution
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Implemented Supabase Row Level Security policies tied
                      to authenticated user IDs and enforced ownership at
                      the database layer.
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#07B6D5]">
                      Result
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Each trader accesses only their own application data.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Challenge 04 */}
            <div className="relative border-t border-slate-200 py-14">
              <div className="grid gap-10 lg:grid-cols-[0.35fr_1fr]">
                <div>
                  <span className="font-mono text-sm text-[#07B6D5]">
                    04
                  </span>

                  <h3 className="mt-4 max-w-xs text-xl font-semibold tracking-tight text-[#08111F]">
                    AI Context &amp; Actionable Insights
                  </h3>
                </div>

                <div className="grid gap-8 sm:grid-cols-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Challenge
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      AI feedback needed to be useful to the trader rather
                      than producing generic trading advice.
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Solution
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Passed relevant journal and performance context into
                      the AI workflow so insights could reflect the
                      trader&apos;s recorded behavior.
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#07B6D5]">
                      Result
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Pipsoul AI became an application feature connected to
                      actual user data and workflow.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Challenge 05 */}
            <div className="relative border-t border-slate-200 py-14">
              <div className="grid gap-10 lg:grid-cols-[0.35fr_1fr]">
                <div>
                  <span className="font-mono text-sm text-[#07B6D5]">
                    05
                  </span>

                  <h3 className="mt-4 max-w-xs text-xl font-semibold tracking-tight text-[#08111F]">
                    Supabase Realtime Subscriptions
                  </h3>
                </div>

                <div className="grid gap-8 sm:grid-cols-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Challenge
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Realtime database updates were not consistently
                      reaching the interface, affecting notification and
                      live application state.
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Solution
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Debugged the Supabase realtime configuration,
                      subscription lifecycle, and client-side listeners
                      until database events were correctly reflected in
                      application state.
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#07B6D5]">
                      Result
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Notifications and relevant data changes could update
                      the interface without requiring unnecessary manual
                      refreshes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Challenge 06 */}
            <div className="relative border-y border-slate-200 py-14">
              <div className="grid gap-10 lg:grid-cols-[0.35fr_1fr]">
                <div>
                  <span className="font-mono text-sm text-[#07B6D5]">
                    06
                  </span>

                  <h3 className="mt-4 max-w-xs text-xl font-semibold tracking-tight text-[#08111F]">
                    User Data Persistence &amp; Ownership
                  </h3>
                </div>

                <div className="grid gap-8 sm:grid-cols-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Challenge
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      User-specific information needed to persist reliably
                      across sessions while ensuring profile, journal,
                      trade, and notification data remained associated with
                      the correct account.
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Solution
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Connected authenticated user IDs to persisted records,
                      corrected data-fetching and state-management flows,
                      and verified ownership across the application's
                      major user workflows.
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#07B6D5]">
                      Result
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      User data persisted across sessions and remained
                      correctly associated with the authenticated trader.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Closing Note */}
          <div className="mt-16 max-w-3xl">
            <p className="text-sm leading-relaxed text-slate-500">
              These challenges shaped the final architecture of Pipsoul,
              turning individual debugging problems into more reliable
              authentication, data handling, security, realtime behavior,
              and AI-driven workflows.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}