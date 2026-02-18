import type { Metadata } from "next";
import { CaseStudyCard } from "@/components/work/case-study-card";
import { caseStudies } from "@/content/case-studies";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Work",
  description:
    "Case studies in digital project and program delivery across integrated brand activation, transformation, and cross-functional execution.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <section className="space-y-7">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Case Studies</h1>
      <p className="max-w-3xl">
        A data-driven overview of delivery and transformation work relevant to Senior Project Manager, Associate Project Director,
        and Associate Program Manager opportunities.
      </p>

      <div className="grid gap-5">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </div>
    </section>
  );
}
