import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Resume",
  description:
    "Resume of Jay Smith, senior digital project manager and program director with 15+ years in integrated delivery.",
  path: "/resume",
});

const highlights = [
  "15+ years leading digital project and program delivery in agency and brand environments.",
  "Strong track record managing concurrent integrated workstreams across Social, Creative, Strategy, Data, and UX.",
  "Trusted partner to senior client and internal leadership for planning, risk management, and execution quality.",
];

const coreSkills = [
  "Project Leadership",
  "Integrated Brand Activation",
  "Multichannel Campaign Management",
  "Agile/Scrum",
  "Stakeholder Management",
  "Budget & Financial Management",
  "Resource & Scope Management",
  "Cross-Functional Leadership",
  "Roadmapping & Risk Management",
];

const recentExperience = [
  {
    title: "Sr. Project Manager (Freelancer)",
    org: "Huge",
    period: "06/2025 - Present",
    bullets: [
      "Lead execution of high-visibility design projects across strategy, creative, and technical workstreams.",
      "Manage fast-paced scopes while protecting quality, accuracy, and strategic intent.",
      "Identify risks early and drive mitigation plans to keep complex, multi-stakeholder work on track.",
      "Oversee program-level budget development and resource allocation.",
    ],
  },
  {
    title: "Project Manager / Delivery Lead",
    org: "Jansjay LLC",
    period: "05/2017 - Present",
    bullets: [
      "Serve as primary PM lead for large-scale integrated brand activation campaigns.",
      "Run 2-3 concurrent workstreams across multiple clients and delivery teams.",
      "Partner with client leadership across Social, Creative, Strategy, Data/Insights, and UX.",
      "Drive end-to-end planning for timelines, dependencies, and delivery accountability.",
    ],
  },
  {
    title: "Sr. Project Manager",
    org: "Blue State Digital",
    period: "02/2016 - 04/2017",
    bullets: [
      "Led integrated digital marketing initiatives across product, creative, and technical teams.",
      "Served as primary client partner and advisor for portfolio execution.",
      "Managed website redesigns and digital strategy evaluations aligned to business goals.",
    ],
  },
];

const earlierExperience = [
  "Sr. Project Manager, Huge (07/2014 - 01/2016)",
  "Sr. Project Manager, Red Fuse (02/2012 - 06/2014)",
  "Sr. Project Manager (Freelancer), Patients & Purpose (06/2011 - 01/2012)",
  "Digital Producer (Freelancer), Wunderman (11/2010 - 05/2011)",
  "Digital Producer, Prudential (05/2010 - 11/2010)",
  "Project Manager, Anywhere Real Estate Inc. (02/2005 - 04/2010)",
];

export default function ResumePage() {
  return (
    <>
      <section className="space-y-7">
        <header className="section-card space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.13em] text-slate-500">Resume</p>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="max-w-3xl space-y-3">
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Jay Smith</h1>
              <p className="text-slate-700">
                Senior Project Manager / Program Director with deep experience leading digital delivery in fast-moving agency
                environments.
              </p>
              <p className="text-sm text-slate-600">Washington, DC · (301) 335-1283 · jansjay@gmail.com</p>
            </div>
            <Link href="/resume/jansjay-resume.pdf" className="btn-base btn-primary" target="_blank" aria-label="Download Jay Smith resume as PDF">
              Download PDF
            </Link>
          </div>
        </header>

        <article className="section-card">
          <h2>At a glance</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
            {highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </article>

        <article className="section-card">
          <h2>Core strengths</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {coreSkills.map((skill) => (
              <li key={skill} className="rounded-full border border-teal-800/20 bg-teal-700/10 px-3 py-1 text-xs font-medium text-teal-900">
                {skill}
              </li>
            ))}
          </ul>
        </article>

        <article className="section-card">
          <h2>Recent experience</h2>
          <div className="mt-4 space-y-6">
            {recentExperience.map((exp) => (
              <section key={exp.title + exp.org} className="border-b border-slate-900/10 pb-5 last:border-b-0 last:pb-0">
                <h3 className="font-semibold">
                  {exp.title} · {exp.org}
                </h3>
                <p className="text-sm text-slate-500">{exp.period}</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                  {exp.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </article>

        <article className="section-card grid gap-6 lg:grid-cols-2">
          <section>
            <h2>Earlier experience</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
              {earlierExperience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section className="space-y-6">
            <div>
              <h2>Education</h2>
              <p className="mt-3 text-slate-700">
                Howard University, Bachelor of Business Administration (Marketing), Washington, DC (09/2001 - 05/2004)
              </p>
            </div>
            <div>
              <h2>Certification</h2>
              <p className="mt-3 text-slate-700">
                Essential Principles of Agile Management, Villanova University Online Business Programs (09/2016 - 02/2017)
              </p>
              <p className="text-sm text-slate-500">Credential ID: CERTVIL095</p>
            </div>
          </section>
        </article>
      </section>

      <aside className="pointer-events-none fixed bottom-6 right-6 z-40 hidden md:block">
        <div className="pointer-events-auto section-card p-3">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Ready for details?</p>
          <Link href="/resume/jansjay-resume.pdf" className="btn-base btn-primary" target="_blank" aria-label="Open resume PDF in new tab">
            Download PDF
          </Link>
        </div>
      </aside>
    </>
  );
}
