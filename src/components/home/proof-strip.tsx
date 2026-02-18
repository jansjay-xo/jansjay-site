type ProofStripProps = {
  items: string[];
};

export function ProofStrip({ items }: ProofStripProps) {
  return (
    <section aria-label="Proof points" className="section-card">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Proof</p>
      <ul className="mt-4 flex flex-wrap gap-2.5">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-teal-800/20 bg-[color:color-mix(in_srgb,var(--surface)_88%,transparent)] px-3 py-1.5 text-xs font-medium text-[var(--text)] shadow-[2px_2px_0_rgba(15,23,42,0.08)]"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
