import type { CaseStudySummary } from "@/content/case-studies";
import { TagPills } from "@/components/work/tag-pills";

type SummaryBlockProps = {
  summary: CaseStudySummary;
};

const summaryRows = (summary: CaseStudySummary) => [
  { label: "Role", value: summary.role },
  { label: "Scope", value: summary.scope },
  { label: "Team/Stakeholders", value: summary.teamStakeholders },
  { label: "Channels", value: summary.channels },
  { label: "Timeline", value: summary.timeline },
] as const;

export function SummaryBlock({ summary }: SummaryBlockProps) {
  return (
    <aside className="section-card space-y-5">
      <h2 className="text-xl font-semibold">Project Summary</h2>
      <dl className="space-y-3">
        {summaryRows(summary).map((row) => (
          <div key={row.label} className="border-b border-slate-900/10 pb-3 last:border-b-0 last:pb-0">
            <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{row.label}</dt>
            <dd className="mt-1 text-slate-800">{row.value}</dd>
          </div>
        ))}
      </dl>
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Outcomes</h3>
        <TagPills items={summary.outcomes} className="mt-2" />
      </div>
    </aside>
  );
}
