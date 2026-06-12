import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Editorial section heading: numbered eyebrow + display title + description. */
export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  index?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        align === "center" && "mx-auto max-w-2xl text-center",
        className,
      )}
    >
      {(eyebrow || index) && (
        <div
          className={cn(
            "flex items-center gap-2.5",
            align === "center" && "justify-center",
          )}
        >
          {index && (
            <span className="font-display text-sm font-semibold text-primary">
              {index}
            </span>
          )}
          {index && eyebrow && (
            <span className="h-4 w-px bg-border" aria-hidden />
          )}
          {eyebrow && (
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              {eyebrow}
            </span>
          )}
        </div>
      )}
      <h2 className="mt-3 text-balance font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
