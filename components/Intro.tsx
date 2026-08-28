export function Intro({ name, lines }: { name: string; lines: string[] }) {
  return (
    <div className="space-y-2">
      <h1 className="text-[28px] md:text-[36px] font-medium tracking-[-0.02em] leading-[1.2] text-[var(--fg)]">
        {name}
      </h1>
      {lines.map((line) => (
        <p key={line} className="text-[15px] md:text-[16px] text-[var(--muted)]">
          {line}
        </p>
      ))}
    </div>
  );
}
