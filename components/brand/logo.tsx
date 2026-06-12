import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

/** Ashoka Chakra — 24 spokes, rendered in currentColor (brand saffron). */
export function Chakra({ className, ...props }: SVGProps<SVGSVGElement>) {
  const spokes = Array.from({ length: 24 });
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="Ashoka Chakra"
      {...props}
    >
      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="7" />
      <g stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
        {spokes.map((_, i) => {
          const a = (i * 15 * Math.PI) / 180;
          return (
            <line
              key={i}
              x1="50"
              y1="50"
              x2={50 + 43 * Math.cos(a)}
              y2={50 + 43 * Math.sin(a)}
            />
          );
        })}
      </g>
      <circle cx="50" cy="50" r="7" fill="currentColor" />
    </svg>
  );
}

/** Mark-only export (e.g. for favicons). */
export const LogoMark = Chakra;

/** Full Big4India lockup: navy wordmark + saffron chakra + saffron underline. */
export function Logo({
  className,
  tone = "navy",
}: {
  className?: string;
  tone?: "navy" | "white";
}) {
  return (
    <span className={cn("relative inline-flex items-center", className)}>
      <span
        className={cn(
          "font-sans text-[1.4rem] font-extrabold leading-none tracking-[-0.02em]",
          tone === "white" ? "text-white" : "text-navy",
        )}
      >
        Big4India
      </span>
      <Chakra className="absolute -right-3 -top-2 size-[1.05rem] text-saffron" />
      <span
        aria-hidden
        className="absolute -bottom-1.5 right-0 h-[3px] w-12 rounded-full bg-saffron"
      />
    </span>
  );
}
