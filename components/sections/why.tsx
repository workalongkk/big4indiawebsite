import {
  ShieldCheck,
  IndianRupee,
  Clock,
  MonitorSmartphone,
  Lock,
  Headset,
  Check,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/scroll-reveal";

const FEATURES = [
  {
    icon: IndianRupee,
    title: "Transparent fixed pricing",
    desc: "Know the exact professional fee upfront. No hidden charges, ever.",
  },
  {
    icon: ShieldCheck,
    title: "Expert CA & CS team",
    desc: "Qualified professionals handle every filing — not a call-centre script.",
  },
  {
    icon: Clock,
    title: "On-time, every time",
    desc: "Proactive reminders and deadline tracking so you never miss a date.",
  },
  {
    icon: MonitorSmartphone,
    title: "100% online process",
    desc: "Share documents, track progress and receive deliverables — all digital.",
  },
  {
    icon: Headset,
    title: "Dedicated relationship manager",
    desc: "One point of contact who knows your business, right on WhatsApp.",
  },
  {
    icon: Lock,
    title: "Bank-grade data security",
    desc: "Your financial and personal data is encrypted and never shared.",
  },
];

const COMPARE = [
  "Transparent fixed pricing",
  "Dedicated CA / CS expert",
  "On-time filing assurance",
  "Real-time WhatsApp updates",
  "End-to-end, fully online",
];

export function Why() {
  return (
    <section id="why" className="scroll-mt-24 bg-secondary/40 py-20 lg:py-28">
      <div className="container">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <Badge className="mx-auto">Why Big4India</Badge>
          <h2 className="mt-5 text-balance font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            The premium standard for Indian compliance
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Built to feel less like a filing portal and more like having a Big-4
            firm on speed dial — at a fraction of the cost.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 0.05}>
              <div className="flex gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-soft ring-1 ring-border">
                  <f.icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {f.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Comparison */}
        <ScrollReveal className="mt-16">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-border bg-white shadow-premium">
            <div className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-b border-border bg-secondary/50 px-6 py-4 text-sm font-semibold sm:px-8">
              <span className="text-muted-foreground">How we compare</span>
              <span className="w-24 text-center text-foreground">Big4India</span>
              <span className="w-24 text-center text-muted-foreground">
                Typical portals
              </span>
            </div>
            {COMPARE.map((row) => (
              <div
                key={row}
                className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-b border-border px-6 py-4 text-sm last:border-0 sm:px-8"
              >
                <span className="text-foreground">{row}</span>
                <span className="flex w-24 justify-center">
                  <Check className="size-5 text-primary" strokeWidth={2.5} />
                </span>
                <span className="flex w-24 justify-center">
                  <X className="size-5 text-muted-foreground/50" />
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
