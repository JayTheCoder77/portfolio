export function Hackathons({
  items,
}: {
  items: {
    title: string;
    location: string;
    description: string;
  }[];
}) {
  return (
    <div className="space-y-8">
      {items.map((item, i) => (
        <div
          key={item.title}
          className={i < items.length - 1 ? "pb-8 border-b border-[var(--border)]" : ""}
        >
          <div className="flex items-baseline justify-between gap-4">
            <span className="text-[15px] md:text-[16px] font-medium text-[var(--fg)]">
              {item.title}
            </span>
            <span className="text-[13px] md:text-[14px] text-[var(--muted)] font-mono shrink-0">
              {item.location}
            </span>
          </div>
          <p className="mt-1 max-w-[60ch] text-[14px] md:text-[15px] text-[var(--muted)]">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
