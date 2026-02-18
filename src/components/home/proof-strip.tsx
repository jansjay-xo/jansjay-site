type ProofStripProps = {
  items: string[];
};

export function ProofStrip({ items }: ProofStripProps) {
  return (
    <section aria-label="Proof points" className="section-card">
      <p className="section-label">Proof</p>
      <ul className="mt-4 flex flex-wrap gap-2.5">
        {items.map((item) => (
          <li
            key={item}
            className="neo-badge rounded-full px-3 py-1.5 text-xs font-medium shadow-[2px_2px_0_rgba(8,18,28,0.08)]"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
