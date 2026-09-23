"use client";

import { useState } from "react";

export function IconPlaceholder({
  size = 128,
  src,
  altSrc,
  alt = "",
}: {
  size?: number;
  src?: string;
  altSrc?: string;
  alt?: string;
}) {
  const [flipped, setFlipped] = useState(false);
  const [altFailed, setAltFailed] = useState(false);

  const canToggle = Boolean(src && altSrc && !altFailed);

  // Static fallback when there's no second avatar (or it failed to load)
  if (!canToggle) {
    return (
      <div
        className="overflow-hidden rounded-md border border-[var(--border)]"
        style={{ width: size, height: size }}
      >
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt} className="h-full w-full object-cover" />
        ) : null}
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setFlipped((v) => !v)}
      aria-pressed={flipped}
      aria-label="Toggle profile avatar"
      title="Click to toggle avatar"
      className="cursor-pointer rounded-md [perspective:1000px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--fg)]"
      style={{ width: size, height: size }}
    >
      <span
        className="relative block h-full w-full transition-transform duration-500 [transform-style:preserve-3d]"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Front */}
        <span className="absolute inset-0 overflow-hidden rounded-md border border-[var(--border)] [backface-visibility:hidden]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} className="h-full w-full object-cover" />
        </span>
        {/* Back */}
        <span className="absolute inset-0 overflow-hidden rounded-md border border-[var(--border)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {altSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={altSrc}
              alt={`${alt} (alternate)`}
              className="h-full w-full object-cover"
              onError={() => setAltFailed(true)}
            />
          ) : null}
        </span>
      </span>
    </button>
  );
}
