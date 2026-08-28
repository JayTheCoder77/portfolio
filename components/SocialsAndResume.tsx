import { CopyUsername } from "@/components/CopyUsername";

export function SocialsAndResume({
  socials,
  resumeHref,
  resumeLabel = "Download Resume",
}: {
  socials: { label: string; href?: string; copy?: string }[];
  resumeHref: string;
  resumeLabel?: string;
}) {
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-baseline sm:justify-between">
      <ul className="flex flex-wrap gap-x-4 gap-y-1">
        {socials.map((s) =>
          s.copy ? (
            <li key={s.label}>
              <CopyUsername label={s.label} value={s.copy} />
            </li>
          ) : (
            <li key={s.label}>
              <a
                href={s.href}
                className="text-sm text-[var(--muted)] transition-opacity hover:text-[var(--fg)] hover:opacity-70"
              >
                {s.label}
              </a>
            </li>
          )
        )}
      </ul>
      <a
        href={resumeHref}
        className="text-sm text-[var(--muted)] transition-opacity hover:text-[var(--fg)] hover:opacity-70"
      >
        {resumeLabel}
      </a>
    </div>
  );
}
