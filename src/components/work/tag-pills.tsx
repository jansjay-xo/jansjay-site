type TagPillsProps = {
  items: string[];
  className?: string;
};

export function TagPills({ items, className }: TagPillsProps) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className ?? ""}`}>
      {items.map((item) => (
        <li key={item} className="neo-pill rounded-full px-3 py-1 text-xs font-medium shadow-[2px_2px_0_rgba(8,18,28,0.08)]">
          {item}
        </li>
      ))}
    </ul>
  );
}
