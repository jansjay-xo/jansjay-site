import type { Metadata } from "next";
import Link from "next/link";
import { FeaturedWorkCard } from "@/components/home/featured-work-card";
import { HowIWorkTimeline } from "@/components/home/how-i-work-timeline";
import { ProofStrip } from "@/components/home/proof-strip";
import { caseStudies } from "@/content/case-studies";
import { buildPageMetadata } from "@/lib/seo";

const focusRoles = ["Sr Project Manager", "Associate Project Director", "Associate Program Manager"];
const proofPoints = [
  "15+ years in digital project/program delivery",
  "Led integrated workstreams across Strategy, Creative, Data, UX, and Engineering",
  "Trusted by senior stakeholders to stabilize and scale execution",
];

export const metadata: Metadata = buildPageMetadata({
  title: "Home",
  description:
    "Digital project and program leadership portfolio for Jansjay LLC with case studies, resume, and contact information.",
  path: "/",
});

export default function HomePage() {
  return (
    <section className="space-y-8">
      <header className="section-card relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-14 -top-24 h-60 w-60 rounded-full bg-[radial-gradient(circle,rgba(15,118,110,0.26),transparent_66%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 right-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(14,165,164,0.24),transparent_64%)]"
        />
        <div className="relative z-10">
          <p className="mb-3 inline-flex rounded-full border border-slate-900/15 bg-white px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-600">
            Jansjay LLC
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Senior digital delivery leader for complex project and program execution.
          </h1>
          <p className="mt-5 max-w-2xl text-slate-700">
            I help teams turn strategy into shipped outcomes through clear planning, risk visibility, and cross-functional
            alignment.
          </p>
          <p className="mt-3 max-w-2xl text-slate-700">
            Currently focused on full-time opportunities: Sr Project Manager, Associate Project Director, and Associate Program
            Manager.
          </p>
          <p className="mt-3 max-w-2xl text-slate-700">
            Also available for selective consulting through Jansjay LLC for organizations that need delivery leadership during
            high-stakes initiatives.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/work" className="btn-base btn-primary">
              View Case Studies
            </Link>
            <Link href="/contact" className="btn-base btn-secondary">
              Discuss a Role
            </Link>
            <Link href="/contact" className="btn-base btn-secondary">
              Consulting Inquiry
            </Link>
          </div>
        </div>
      </header>

      <ProofStrip items={proofPoints} />

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Featured work</p>
            <h2 className="mt-1 text-2xl font-semibold">Selected case studies</h2>
          </div>
          <Link href="/work" className="btn-base btn-secondary">
            View all
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {caseStudies.slice(0, 3).map((study) => (
            <FeaturedWorkCard key={study.slug} study={study} />
          ))}
        </div>
      </section>

      <HowIWorkTimeline />

      <section className="grid gap-4 md:grid-cols-3">
        {focusRoles.map((role) => (
          <article key={role} className="section-card p-5">
            <p className="text-xs uppercase tracking-[0.15em] text-slate-500">Target Role</p>
            <h2 className="mt-2 text-xl font-semibold">{role}</h2>
            <p className="mt-2 text-sm text-slate-700">
              Focused on measurable business outcomes, clear governance, and reliable execution.
            </p>
          </article>
        ))}
      </section>
    </section>
  );
}
