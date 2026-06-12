import { ScrollReveal } from "@/components/scroll-reveal";
import { totalServiceCount } from "@/data/services";

const STATS = [
  { value: "10,000+", label: "Businesses served" },
  { value: `${totalServiceCount}+`, label: "Services offered" },
  { value: "4.9/5", label: "Average client rating" },
  { value: "100%", label: "Online & paperless" },
];

export function Stats() {
  return (
    <section className="border-b border-border bg-secondary/40 py-14">
      <div className="container">
        <ScrollReveal>
          <dl className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <dt className="font-display text-4xl font-semibold tracking-tight text-foreground lg:text-5xl">
                  {s.value}
                </dt>
                <dd className="mt-2 text-sm text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </ScrollReveal>
      </div>
    </section>
  );
}
