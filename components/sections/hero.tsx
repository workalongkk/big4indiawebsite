"use client";

import { Star, ShieldCheck, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { LeadFormFields } from "@/components/lead/lead-form-fields";
import { useLeadForm } from "@/components/lead/lead-form-provider";
import { totalServiceCount } from "@/data/services";

export function Hero() {
  const { open } = useLeadForm();

  return (
    <section className="relative overflow-hidden">
      {/* Background treatment — faint grid + emerald aurora */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-faint bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_top,#000_30%,transparent_75%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-primary/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 left-[-10%] h-[32rem] w-[32rem] rounded-full bg-navy/10 blur-3xl"
      />

      <div className="container relative grid items-center gap-12 py-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:py-24">
        {/* Left — value proposition */}
        <div>
          <div className="animate-fade-up">
            <Badge>
              <span className="size-1.5 rounded-full bg-primary" />
              India&apos;s premium legal &amp; compliance platform
            </Badge>
          </div>

          <h1 className="mt-6 max-w-2xl text-balance font-display text-[2.6rem] font-semibold leading-[1.04] tracking-tight text-foreground animate-fade-up sm:text-5xl lg:text-[3.65rem]">
            Build, file &amp; stay{" "}
            <span className="text-gradient-brand">compliant</span> — without
            the chaos.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground animate-fade-up [animation-delay:80ms]">
            Company incorporation, GST, income tax, MCA filings, payroll and
            CA-certified certificates — handled end-to-end by experts.{" "}
            <span className="font-medium text-foreground">
              {totalServiceCount}+ services
            </span>{" "}
            at transparent, fixed prices.
          </p>

          <div className="mt-8 flex flex-col gap-3 animate-fade-up [animation-delay:160ms] sm:flex-row">
            <Button size="xl" onClick={() => open("hero")}>
              Get free consultation <ArrowRight className="size-4" />
            </Button>
            <WhatsAppCTA
              variant="white"
              size="xl"
              message="Hi Big4India, I'd like to know more about your services. Please guide me."
            >
              Chat on WhatsApp
            </WhatsAppCTA>
          </div>

          {/* Trust strip */}
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 animate-fade-up [animation-delay:240ms]">
            <div>
              <div className="flex items-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Rated <span className="font-semibold text-foreground">4.9/5</span>{" "}
                by founders across India
              </p>
            </div>
            <div className="h-10 w-px bg-border" />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="size-5 text-primary" />
              <span>
                <span className="font-semibold text-foreground">10,000+</span>{" "}
                businesses served
              </span>
            </div>
          </div>
        </div>

        {/* Right — embedded lead form */}
        <div className="relative animate-fade-up [animation-delay:120ms]">
          <div className="absolute -inset-3 -z-10 rounded-[1.8rem] bg-gradient-to-br from-primary/15 via-transparent to-navy/10 blur-xl" />
          <div className="rounded-3xl border border-border bg-white/90 p-6 shadow-premium backdrop-blur sm:p-7">
            <div className="mb-5">
              <h2 className="font-display text-xl font-semibold text-foreground">
                Get expert help in minutes
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Free consultation · No obligation · 100% confidential
              </p>
            </div>
            <LeadFormFields source="hero-card" />
          </div>
        </div>
      </div>
    </section>
  );
}
