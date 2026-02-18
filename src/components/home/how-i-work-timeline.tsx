const steps = [
  {
    title: "1. Align outcomes",
    description: "Define success criteria, constraints, and decision paths with stakeholders early.",
  },
  {
    title: "2. Build the plan",
    description: "Map milestones, dependencies, and owners so teams can execute with confidence.",
  },
  {
    title: "3. Run the rhythm",
    description: "Drive clear cadence for status, risk visibility, and fast decision-making.",
  },
  {
    title: "4. Land outcomes",
    description: "Track impact, close gaps, and transition delivery into durable operating habits.",
  },
];

export function HowIWorkTimeline() {
  return (
    <section className="section-card space-y-5">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">How I work</p>
        <h2 className="mt-2 text-2xl font-semibold">Execution style built for clarity and momentum</h2>
      </div>

      <ol className="grid gap-4 md:grid-cols-2">
        {steps.map((step) => (
          <li
            key={step.title}
            className="relative rounded-xl border border-slate-900/10 bg-[color:color-mix(in_srgb,var(--surface)_90%,transparent)] p-4 shadow-[2px_2px_0_rgba(15,23,42,0.08)]"
          >
            <h3 className="text-base font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm text-slate-700">{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
