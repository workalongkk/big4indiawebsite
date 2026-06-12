import { Star, Quote } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { ScrollReveal } from "@/components/scroll-reveal";
import { testimonials, type Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export function Testimonials({
  limit = 3,
  withHeading = true,
  className,
}: {
  limit?: number;
  withHeading?: boolean;
  className?: string;
}) {
  const list = testimonials.slice(0, limit);

  return (
    <section className={cn("py-20 lg:py-28", className)}>
      <div className="container">
        {withHeading && (
          <ScrollReveal>
            <SectionHeading
              align="center"
              index="04"
              eyebrow="Testimonials"
              title="Trusted by founders and finance teams"
              description="Thousands of businesses rely on Big4India for compliance they can forget about."
            />
          </ScrollReveal>
        )}
        <ScrollReveal className={withHeading ? "mt-12" : ""}>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function TestimonialCard({ testimonial: t }: { testimonial: Testimonial }) {
  return (
    <figure className="relative flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-soft">
      <Quote className="size-7 text-primary/20" aria-hidden />
      <div className="mt-3 flex items-center gap-0.5 text-primary" aria-label={`${t.rating} out of 5`}>
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="size-4 fill-current" />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground">
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
        <span className="inline-flex size-10 items-center justify-center rounded-full bg-navy text-sm font-semibold text-white">
          {t.initials}
        </span>
        <span>
          <span className="block text-sm font-semibold text-foreground">
            {t.name}
          </span>
          <span className="block text-xs text-muted-foreground">
            {t.role} · {t.city}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
