import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SummaryBlock } from "@/components/work/summary-block";
import { TagPills } from "@/components/work/tag-pills";
import { caseStudies, getCaseStudyBySlug } from "@/content/case-studies";
import { buildPageMetadata } from "@/lib/seo";

type CaseStudyPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const study = getCaseStudyBySlug(params.slug);

  if (!study) {
    return {
      title: "Case Study Not Found",
    };
  }

  return buildPageMetadata({
    title: `${study.title} (Case Study)`,
    description: study.teaser,
    path: `/work/${study.slug}`,
  });
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const study = getCaseStudyBySlug(params.slug);

  if (!study) {
    notFound();
  }

  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <Link href="/work" className="btn-base btn-secondary">
          Back to Work
        </Link>
        <p className="section-label">{study.summary.role}</p>
        <h1 className="max-w-4xl text-3xl font-semibold tracking-tight sm:text-4xl">{study.title}</h1>
        <p className="max-w-3xl">{study.teaser}</p>
        <TagPills items={study.skills} />
      </div>

      <SummaryBlock summary={study.summary} />

      <article className="section-card space-y-6">
        <section className="space-y-2">
          <h2>Challenge</h2>
          <p>{study.challenge}</p>
        </section>

        <section className="space-y-2">
          <h2>Approach</h2>
          <ul className="list-disc space-y-2 pl-5">
            {study.approach.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="space-y-2">
          <h2>Impact</h2>
          <ul className="list-disc space-y-2 pl-5">
            {study.impact.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </article>
    </section>
  );
}
