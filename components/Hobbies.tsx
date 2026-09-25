"use client";

import { useEffect, useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Hobby = {
  label: string;
  items: string[];
  note: string;
};

// Touch devices have no hover, so fall back to a tap-to-open Popover there.
function useTouchDevice() {
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(hover: none)");
    setIsTouch(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsTouch(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return isTouch;
}

const triggerClassName =
  "rounded-full border border-[var(--border)] px-3 py-1 text-[13px] text-[var(--muted)] transition-colors hover:text-[var(--fg)]";

function HobbyCard({ hobby }: { hobby: Hobby }) {
  return (
    <>
      <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted)]">
        {hobby.label}
      </p>
      <ul className="mt-2 space-y-1 text-[13px] leading-snug">
        {hobby.items.map((item) => (
          <li key={item}>· {item}</li>
        ))}
      </ul>
      <p className="mt-2 text-[13px] text-[var(--muted)]">{hobby.note}</p>
    </>
  );
}

export function Hobbies({ items }: { items: Hobby[] }) {
  const isTouch = useTouchDevice();

  return (
    <div className="space-y-3">
      <p className="text-xs font-medium tracking-widest uppercase text-[var(--muted)]">
        Hobbies
      </p>
      <div className="flex flex-wrap gap-2">
      {items.map((hobby) =>
        isTouch ? (
          <Popover key={hobby.label}>
            <PopoverTrigger asChild>
              <button type="button" className={`${triggerClassName} cursor-pointer`}>
                {hobby.label}
              </button>
            </PopoverTrigger>
            <PopoverContent side="top" align="start" className="w-60">
              <HobbyCard hobby={hobby} />
            </PopoverContent>
          </Popover>
        ) : (
          <HoverCard key={hobby.label} openDelay={100} closeDelay={200}>
            <HoverCardTrigger asChild>
              <button type="button" className={`${triggerClassName} cursor-default`}>
                {hobby.label}
              </button>
            </HoverCardTrigger>
            <HoverCardContent side="top" align="start" className="w-60">
              <HobbyCard hobby={hobby} />
            </HoverCardContent>
          </HoverCard>
        )
      )}
      </div>
    </div>
  );
}
