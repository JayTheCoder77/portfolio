"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FlickeringGrid } from "./FlickeringGrid";

/**
 * Very subtle full-page flickering grid.
 * - Light mode: faint black squares
 * - Dark mode: faint white squares
 * Fades out with a radial mask so it never fights the content.
 */
export function SubtleGridBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Avoid hydration mismatch — render nothing until theme is known.
  // Defaults to light-mode values once mounted.
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <FlickeringGrid
        className="absolute inset-0 size-full [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black_30%,transparent_100%)]"
        squareSize={4}
        gridGap={6}
        color={isDark ? "rgb(255, 255, 255)" : "rgb(0, 0, 0)"}
        maxOpacity={isDark ? 0.12 : 0.07}
        flickerChance={0.08}
      />
      {/* Soft fade into page background at the bottom edge */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, transparent 40%, var(--bg) 95%)",
        }}
      />
    </div>
  );
}
