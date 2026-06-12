import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServiceIcon } from "@/components/service-icon";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { formatINR } from "@/lib/utils";
import type { ServiceWithCategory } from "@/data/services";

/**
 * Reusable service card. The whole card links to the detail page (via an
 * overlay link); the WhatsApp CTA sits above it (z-10) and stays separately
 * clickable.
 */
export function ServiceCard({ service }: { service: ServiceWithCategory }) {
  const href = `/services/${service.category.slug}/${service.slug}`;

  return (
    <article className="group relative flex flex-col rounded-2xl border border-border bg-white p-5 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-premium">
      <div className="flex items-center justify-between">
        <span className="inline-flex size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
          <ServiceIcon name={service.category.icon} className="size-5" />
        </span>
        <span className="text-xs font-medium text-muted-foreground">
          {service.category.short}
        </span>
      </div>

      <h3 className="mt-4 font-semibold text-foreground">
        <Link
          href={href}
          className="transition-colors after:absolute after:inset-0 after:content-[''] group-hover:text-primary"
        >
          {service.name}
        </Link>
      </h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
        {service.blurb}
      </p>

      <div className="mt-5 flex items-end justify-between gap-3">
        <div>
          <div className="text-xs text-muted-foreground">Starting at</div>
          <div className="font-display text-xl font-semibold text-foreground">
            {formatINR(service.price)}
            {service.unit === "monthly" && (
              <span className="text-xs font-normal text-muted-foreground">
                /mo
              </span>
            )}
          </div>
        </div>
        <div className="relative z-10">
          <WhatsAppCTA
            service={service.name}
            price={service.price}
            size="sm"
            showIcon={false}
          >
            Get started <ArrowRight className="size-3.5" />
          </WhatsAppCTA>
        </div>
      </div>

      <p className="mt-2.5 text-[11px] text-muted-foreground/70">
        Excl. GST &amp; Govt fees
      </p>
    </article>
  );
}
