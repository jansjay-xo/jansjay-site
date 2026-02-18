import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";

const focusRoles = ["Sr Project Manager", "Associate Project Director", "Associate Program Manager"];

export const metadata: Metadata = buildPageMetadata({
  title: "Home",
  description:
    "Digital project and program leadership portfolio for Jansjay LLC with case studies, resume, and contact information.",
  path: "/",
});

export default function HomePage() {
  return (
    <section className="space-y-10">
      <div className="section-card">
        <p className="mb-3 inline-flex rounded-full border border-slate-900/15 bg-white px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-600">
          Jansjay LLC
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Program and project leadership for teams scaling complex delivery.
        </h1>
        <p className="mt-5 max-w-2xl text-slate-700">
          I build delivery systems that keep strategy, execution, and people aligned. This site highlights case studies and my approach to driving outcomes in high-trust, fast-moving environments.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/work" className="rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-paper hover:bg-slate-700">
            View Case Studies
          </Link>
          <Link href="/resume" className="rounded-full border border-slate-900/15 bg-white px-5 py-2 text-sm font-medium text-slate-800 hover:border-slate-900/30">
            Open Resume
          </Link>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {focusRoles.map((role) => (
          <article key={role} className="section-card p-5">
            <p className="text-xs uppercase tracking-[0.15em] text-slate-500">Target Role</p>
            <h2 className="mt-2 text-xl font-semibold">{role}</h2>
            <p className="mt-2 text-sm text-slate-700">Focused on measurable business outcomes, clear governance, and reliable execution.</p>
          </article>
        ))}
      </div>
    </section>
  );
}
