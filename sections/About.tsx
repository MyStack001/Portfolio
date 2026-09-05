import SectionWrapper from "../components/SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="mx-auto max-w-4xl py-20">
        {/* Header */}
        <div className="mb-8">
          <span className="text-xs uppercase tracking-widest text-slate-500">
            About Me
          </span>

          <h2 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Building software from idea to deployment.
          </h2>
        </div>

        {/* Content */}
        <div className="space-y-5 text-base leading-7 text-slate-600">
          <p>
            I'm a Full-Stack Developer focused on building modern,
            responsive, and reliable web applications. I enjoy taking an
            idea from its early stages and turning it into a functional
            product that people can actually use.
          </p>

          <p>
            My work spans both frontend and backend development, with
            experience using technologies such as React, Next.js,
            TypeScript, Tailwind CSS, Supabase, and modern web development
            tools. I care about writing clean, maintainable code while
            building interfaces that are responsive, accessible, and easy
            to use.
          </p>

          <p>
            I've worked on applications involving authentication,
            databases, APIs, dashboards, analytics, real-time features,
            and responsive user interfaces. I particularly enjoy solving
            problems where the frontend experience and the underlying
            backend systems need to work together seamlessly.
          </p>

          <p>
            I'm continuously learning, improving my engineering skills,
            and exploring better ways to build scalable software. Whether
            working independently or as part of a team, I approach each
            project with curiosity, attention to detail, and a strong
            focus on delivering practical results.
          </p>
        </div>

        {/* Core Skills */}
        <div className="mt-10 flex flex-wrap gap-3">
          {[
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Supabase",
            "REST APIs",
            "Authentication",
            "Database Design",
            "Responsive Development",
            "Figma",
          ].map((skill) => (
            <span
              key={skill}
              className="
                rounded-full
                border border-slate-200
                bg-white/70
                px-3 py-1.5
                text-sm text-slate-700
                shadow-sm
                backdrop-blur-sm
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}