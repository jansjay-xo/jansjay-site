import Link from "next/link";
import type { CaseStudy } from "@/content/case-studies";

type FeaturedWorkCardProps = {
  study: CaseStudy;
};

export function FeaturedWorkCard({ study }: FeaturedWorkCardProps) {
  return (
    <article className="section-card flex h-full flex-col">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{study.summary.role}</p>
      <h3 className="mt-2 text-xl font-semibold">{study.title}</h3>
      <p className="mt-3 text-sm text-slate-700">{study.teaser}</p>

      <div className="mt-4 border-t border-slate-900/10 pt-4">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Outcome highlight</p>
        <p className="mt-1 text-sm text-slate-700">{study.summary.outcomes[0]}</p>
      </div>

      <div className="mt-6">
        <Link href={`/work/${study.slug}`} className="btn-base btn-secondary">
          Read case study
        </Link>
      </div>
    </article>
  );
}
