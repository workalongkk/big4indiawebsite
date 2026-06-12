"use client";

import { PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { useLeadForm } from "@/components/lead/lead-form-provider";
import { company } from "@/data/company";

export function CtaBanner() {
  const { open } = useLeadForm();

  return (
    <section className="py-20 lg:py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2rem] bg-navy px-6 py-16 text-center shadow-premium sm:px-12 lg:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/30 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-grid-faint opacity-[0.06]"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-balance font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Ready to make compliance effortless?
            </h2>
            <p className="mt-4 text-pretty text-white/80">
              Talk to a Big4India expert today. Get a free consultation and a
              clear, fixed quote — with zero obligation.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <WhatsAppCTA
                variant="white"
                size="xl"
                message="Hi Big4India, I'm ready to get started. Please guide me."
              >
                Get started on WhatsApp
              </WhatsAppCTA>
              <Button
                onClick={() => open("cta-banner")}
                size="xl"
                className="border border-white/25 bg-white/10 text-white hover:bg-white/20 hover:shadow-none"
              >
                <PhoneCall className="size-4" /> Request a callback
              </Button>
            </div>
            <p className="mt-6 text-sm text-white/70">
              Or call us at{" "}
              <a
                href={`tel:${company.phoneTel}`}
                className="font-semibold text-white underline-offset-4 hover:underline"
              >
                {company.phoneDisplay}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
