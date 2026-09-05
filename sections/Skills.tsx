import SectionWrapper from "../components/SectionWrapper";

const skillCategories = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, accessible, and interactive web applications.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Vite",
      "Vue.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Development",
      "Accessibility",
    ],
  },
  {
    title: "Backend Development",
    description:
      "Building reliable backend systems, APIs, authentication, and data flows.",
    skills: [
      "Node.js",
      "Express.js",
      "Supabase",
      "PostgreSQL",
      "Laravel",
      "REST APIs",
      "Authentication & Authorization",
      "Database Design",
    ],
  },
  {
    title: "Development Tools",
    description:
      "Using modern tools and workflows to build, manage, and deploy applications.",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Netlify",
      "API Integration",
      "Deployment",
    ],
  },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div>
        {/* Header */}
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-600">
            Skills & Technologies
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            The technologies I build with
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-slate-600">
            A practical stack covering frontend development, backend
            engineering, databases, APIs, and modern deployment workflows.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="
                group relative rounded-3xl
                border border-white/60
                bg-white/50
                p-8
                shadow-[0_8px_32px_rgba(15,23,42,0.08)]
                backdrop-blur-xl
                transition-all duration-300 ease-out
                hover:-translate-y-2
                hover:shadow-[0_20px_60px_rgba(15,23,42,0.15)]
              "
            >
              {/* Glow */}
              <div
                className="
                  pointer-events-none absolute inset-0 rounded-3xl
                  opacity-0 transition duration-300
                  group-hover:opacity-100
                  ring-1 ring-sky-400/20
                  shadow-[0_0_0_1px_rgba(56,189,248,0.15),0_25px_80px_-30px_rgba(56,189,248,0.35)]
                "
              />

              {/* Content */}
              <div className="relative">
                <h3 className="text-lg font-semibold text-slate-900">
                  {category.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {category.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        rounded-full
                        border border-white/50
                        bg-white/70
                        px-4 py-2
                        text-sm font-medium
                        text-slate-700
                        backdrop-blur-md
                        transition-all duration-300
                        hover:bg-sky-50 hover:text-sky-700
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}