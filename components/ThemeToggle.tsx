"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const current = theme === "system" ? resolvedTheme : theme;

  return (
    <button
      onClick={() => setTheme(current === "dark" ? "light" : "dark")}
      className="fixed top-6 right-6 z-10 text-sm text-[var(--muted)] transition-opacity hover:text-[var(--fg)] hover:opacity-70"
    >
      {current === "dark" ? "Light" : "Dark"}
    </button>
  );
}
