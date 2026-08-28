"use client";

import { useState } from "react";

export function CopyUsername({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        } catch {
          setCopied(false);
        }
      }}
      className="text-sm text-[var(--muted)] transition-opacity hover:text-[var(--fg)] hover:opacity-70"
    >
      {copied ? "Copied!" : label}
    </button>
  );
}
