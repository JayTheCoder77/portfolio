export function ExperienceList({
  items,
}: {
  items: {
    company: string;
    role: string;
    period: string;
    location?: string;
    description?: string;
  }[];
}) {
  return (
    <div className="space-y-8">
      {items.map((item, i) => (
        <div
          key={item.company}
          className={i < items.length - 1 ? "pb-8 border-b border-[var(--border)]" : ""}
        >
          <div className="flex items-baseline justify-between gap-4">
            <span className="text-[15px] md:text-[16px] font-medium text-[var(--fg)]">
              {item.company}
            </span>
            <span className="text-[13px] md:text-[14px] text-[var(--muted)] font-mono shrink-0">
              {item.period}
            </span>
          </div>
          <p className="mt-1 text-[14px] md:text-[15px] text-[var(--muted)]">
            {item.role}
            {item.location ? (
              <span className="font-mono text-[13px]">
                {" "}
                · {item.location}
              </span>
            ) : null}
          </p>
          {item.description ? (
            <p className="mt-1 max-w-[60ch] text-[14px] md:text-[15px] text-[var(--muted)]">
              {item.description}
            </p>
          ) : null}
        </div>
      ))}
    </div>
  );
}
