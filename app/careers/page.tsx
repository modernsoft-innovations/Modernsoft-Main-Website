import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Careers at Modernsoft Innovations",
  description:
    "Join Modernsoft Innovations and work on enterprise-grade software products for global clients.",
}

export default function CareersPage() {
  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="pt-40 pb-32 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-sm font-medium text-slate-500">
            Careers at Modernsoft Innovations
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 max-w-4xl">
            Build software that businesses rely on
          </h1>

          <p className="mt-8 text-lg text-slate-600 max-w-3xl leading-relaxed">
            We are a growing software agency focused on building scalable,
            maintainable, and business-critical digital systems for clients
            worldwide. We value engineering discipline, ownership, and long-term
            thinking.
          </p>

          <div className="mt-10 flex flex-wrap gap-6">
            <Link
              href="#openings"
              className="px-8 py-4 rounded-md bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition"
            >
              View Open Positions
            </Link>

            <a
              href="mailto:hr@modernsoftinnovations.com"
              className="px-8 py-4 rounded-md border border-slate-300 text-sm font-medium text-slate-900 hover:border-slate-900 transition"
            >
              Send Resume
            </a>
          </div>
        </div>
      </section>

      {/* ================= WHY MODERNSOFT ================= */}
      <section className="py-28 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-slate-900 mb-16">
            Why work at Modernsoft
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <ValueCard
              title="Engineering-Driven Culture"
              text="We prioritize clean architecture, documentation, testing, and scalability over rushed delivery."
            />
            <ValueCard
              title="Real Production Work"
              text="You will work on live client systems used by real businesses — not demo or dummy projects."
            />
            <ValueCard
              title="Global Standards"
              text="We follow professional workflows, communication practices, and delivery standards expected by international clients."
            />
          </div>
        </div>
      </section>

      {/* ================= GROWTH & LEARNING ================= */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900 mb-6">
              Career growth & learning
            </h2>

            <p className="text-slate-600 leading-relaxed">
              Growth at Modernsoft is structured and responsibility-driven.
              Interns and junior team members gradually move into ownership
              roles based on performance, not time.
            </p>
          </div>

          <div className="space-y-4">
            <GrowthItem text="Hands-on experience with real client systems" />
            <GrowthItem text="Code reviews and technical feedback" />
            <GrowthItem text="Exposure to scalable backend & frontend architecture" />
            <GrowthItem text="Clear progression from intern → junior → mid-level roles" />
          </div>
        </div>
      </section>

      {/* ================= HIRING PROCESS ================= */}
      <section className="py-28 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-16">
            Our hiring process
          </h2>

          <div className="grid md:grid-cols-4 gap-10">
            <ProcessStep step="01" title="Application" text="Submit your CV via email." />
            <ProcessStep step="02" title="Initial Review" text="We review skills and background." />
            <ProcessStep step="03" title="Technical Discussion" text="Practical knowledge discussion." />
            <ProcessStep step="04" title="Final Decision" text="Offer and onboarding." />
          </div>
        </div>
      </section>

      {/* ================= JOB OPENINGS ================= */}
      <section id="openings" className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-slate-900 mb-14">
            Current openings
          </h2>

          <div className="space-y-8">
            <JobCard
              title="Frontend Developer Intern"
              description="Work with React and Next.js to build scalable, accessible, and high-performance user interfaces."
            />
            <JobCard
              title="Backend Developer Intern"
              description="Develop APIs, database-driven systems, and business logic using Node.js or ASP.NET Core."
            />
            <JobCard
              title="UI/UX Design Intern"
              description="Design structured, business-focused interfaces and maintain design consistency."
            />
            <JobCard
              title="QA / Software Testing Intern"
              description="Test production systems, document issues, and ensure enterprise-grade quality."
            />
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-slate-900 mb-6">
            Ready to build your career with us?
          </h2>
          <p className="text-slate-600 mb-10">
            Send your CV and a short introduction to our hiring team.
          </p>

          <a
            href="mailto:hr@modernsoftinnovations.com"
            className="inline-block px-10 py-4 rounded-md bg-slate-900 text-white font-medium hover:bg-slate-800 transition"
          >
            hr@modernsoftinnovations.com
          </a>
        </div>
      </section>

    </main>
  )
}

/* ================= COMPONENTS ================= */

function ValueCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-8">
      <h3 className="text-lg font-medium text-slate-900 mb-3">
        {title}
      </h3>
      <p className="text-slate-600 leading-relaxed">
        {text}
      </p>
    </div>
  )
}

function GrowthItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-4">
      <span className="mt-1 h-2 w-2 rounded-full bg-slate-900" />
      <p className="text-slate-700">{text}</p>
    </div>
  )
}

function ProcessStep({
  step,
  title,
  text,
}: {
  step: string
  title: string
  text: string
}) {
  return (
    <div>
      <p className="text-slate-400 text-sm mb-2">{step}</p>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-slate-300 text-sm leading-relaxed">{text}</p>
    </div>
  )
}

function JobCard({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="border border-slate-200 rounded-xl p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div>
        <h3 className="text-lg font-medium text-slate-900 mb-2">
          {title}
        </h3>
        <p className="text-slate-600 max-w-2xl">
          {description}
        </p>
      </div>

      <a
        href="mailto:hr@modernsoftinnovations.com"
        className="shrink-0 px-6 py-3 text-sm font-medium border border-slate-300 rounded-md hover:border-slate-900 transition"
      >
        Apply
      </a>
    </div>
  )
}
