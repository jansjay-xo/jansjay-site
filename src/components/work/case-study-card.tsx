import Link from "next/link";
import type { CaseStudy } from "@/content/case-studies";
import { TagPills } from "@/components/work/tag-pills";

type CaseStudyCardProps = {
  study: CaseStudy;
};

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <article className="section-card">
      <p className="text-xs uppercase tracking-[0.13em] text-slate-500">{study.summary.role}</p>
      <h2 className="mt-2 text-2xl font-semibold">{study.title}</h2>
      <p className="mt-3 text-slate-700">{study.teaser}</p>
      <TagPills items={study.skills} className="mt-5" />
      <div className="mt-6">
        <Link href={`/work/${study.slug}`} className="btn-base btn-secondary">
          Read case study
        </Link>
      </div>
    </article>
  );
}
