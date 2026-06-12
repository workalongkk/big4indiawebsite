"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type NavSection = { id: string; label: string };

/**
 * Sticky in-page navigation with scroll-spy. Highlights the section currently
 * in view via an IntersectionObserver — the kind of detail that separates a
 * polished service page from a generic one.
 */
export function ServiceNav({ sections }: { sections: NavSection[] }) {
  const [active, setActive] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: 0 },
    );
    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="sticky top-16 z-40 border-b border-border glass-strong">
      <div className="container">
        <nav
          aria-label="On this page"
          className="-mx-6 flex gap-1 overflow-x-auto px-6 lg:mx-0 lg:px-0"
        >
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={cn(
                "shrink-0 border-b-2 px-3.5 py-3.5 text-sm font-medium transition-colors",
                active === s.id
                  ? "border-primary text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground",
              )}
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
