export function TechFooter({ items }: { items: string[] }) {
  return (
    <footer className="space-y-6 border-t border-[var(--border)] pt-16">
      <h1 className="text-2xl font-medium tracking-[-0.02em] text-[var(--fg)] md:text-3xl">
        Tech
      </h1>
      <ul className="flex flex-wrap items-center gap-x-1 gap-y-1 text-sm text-[var(--muted)]">
        {items.map((t, i) => (
          <li key={t} className="flex items-center gap-x-1">
            <span className="cursor-default rounded px-1.5 py-0.5 transition-colors duration-200 hover:bg-[var(--border)] hover:text-[var(--fg)]">
              {t}
            </span>
            {i < items.length - 1 ? (
              <span aria-hidden className="select-none">
                ·
              </span>
            ) : null}
          </li>
        ))}
      </ul>
    </footer>
  );
}
