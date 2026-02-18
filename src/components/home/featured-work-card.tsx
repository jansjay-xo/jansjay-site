import Link from "next/link";
import type { CaseStudy } from "@/content/case-studies";

type FeaturedWorkCardProps = {
  study: CaseStudy;
};

export function FeaturedWorkCard({ study }: FeaturedWorkCardProps) {
  return (
    <article className="section-card flex h-full flex-col">
      <p className="section-label">{study.summary.role}</p>
      <h3 className="mt-2 text-xl font-semibold">{study.title}</h3>
      <p className="mt-3 text-sm">{study.teaser}</p>

      <div className="neo-divider mt-4 border-t pt-4">
        <p className="section-label">Outcome highlight</p>
        <p className="mt-1 text-sm">{study.summary.outcomes[0]}</p>
      </div>

      <div className="mt-6">
        <Link href={`/work/${study.slug}`} className="btn-base btn-secondary">
          Read case study
        </Link>
      </div>
    </article>
  );
}
