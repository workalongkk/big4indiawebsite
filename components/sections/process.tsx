import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/scroll-reveal";

const STEPS = [
  {
    no: "01",
    title: "Tell us what you need",
    desc: "Share your requirement in a 2-minute form or a quick WhatsApp message.",
  },
  {
    no: "02",
    title: "Get matched with an expert",
    desc: "A dedicated CA or CS is assigned to your case and reaches out to you.",
  },
  {
    no: "03",
    title: "Submit documents online",
    desc: "Upload once. We handle the drafting, review and government filing.",
  },
  {
    no: "04",
    title: "Sit back — we file & comply",
    desc: "Receive confirmations and stay compliant, year-round, with reminders.",
  },
];

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 py-20 lg:py-28">
      <div className="container">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <Badge className="mx-auto">How it works</Badge>
          <h2 className="mt-5 text-balance font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Compliance in four simple steps
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            No jargon, no office visits. Just a clear path from requirement to
            done.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {STEPS.map((step, i) => (
            <ScrollReveal key={step.no} delay={i * 0.08}>
              <div className="relative lg:pt-8">
                {/* Connector line on desktop */}
                <span
                  aria-hidden
                  className="absolute left-0 right-0 top-0 hidden h-px bg-gradient-to-r from-border via-border to-transparent lg:block"
                />
                <span
                  aria-hidden
                  className="absolute left-0 top-0 hidden size-2.5 -translate-y-1/2 rounded-full bg-primary lg:block"
                />
                <div className="font-display text-4xl font-semibold text-primary/25">
                  {step.no}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
