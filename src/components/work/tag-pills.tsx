type TagPillsProps = {
  items: string[];
  className?: string;
};

export function TagPills({ items, className }: TagPillsProps) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className ?? ""}`}>
      {items.map((item) => (
        <li key={item} className="rounded-full border border-teal-800/20 bg-teal-700/10 px-3 py-1 text-xs font-medium text-teal-900">
          {item}
        </li>
      ))}
    </ul>
  );
}
