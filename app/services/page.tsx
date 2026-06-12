import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { ServiceCard } from "@/components/service-card";
import { ServiceIcon } from "@/components/service-icon";
import { Badge } from "@/components/ui/badge";
import {
  categories,
  popularServices,
  totalServiceCount,
} from "@/data/services";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "All Services — Company, GST, Tax & Compliance",
  description: `Browse all ${totalServiceCount}+ Big4India services across incorporation, GST, income tax, MCA, payroll, registrations and CA certificates — transparent fixed prices, 100% online.`,
  alternates: { canonical: "/services" },
  openGraph: {
    type: "website",
    url: `${company.url}/services`,
    siteName: company.name,
    title: "All Services · Big4India",
    description: `Browse all ${totalServiceCount}+ Big4India services — transparent fixed prices, expert CA/CS team, 100% online.`,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: company.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: `${company.url}/services`,
    },
  ],
};

export default function ServicesIndexPage() {
  return (
    <>
      <JsonLd id="schema-services" data={breadcrumbSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid-faint bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_top,#000_25%,transparent_70%)]"
        />
        <div className="container relative py-12 lg:py-16">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Services" }]}
          />
          <div className="mt-6 max-w-2xl">
            <Badge>All services</Badge>
            <h1 className="mt-5 text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[3rem]">
              {totalServiceCount}+ services, one trusted partner
            </h1>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Everything from incorporation to ongoing compliance — handled by
              qualified experts at transparent, fixed prices. Choose a category
              to begin.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/services/${c.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-white p-6 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-premium"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  <ServiceIcon name={c.icon} className="size-6" />
                </span>
                <h2 className="mt-4 font-semibold text-foreground">{c.name}</h2>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {c.tagline}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  {c.services.length} services
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular */}
      <section className="border-t border-border bg-secondary/40 py-16 lg:py-20">
        <div className="container">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Most popular services
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {popularServices.map((s) => (
              <ServiceCard key={`${s.category.slug}-${s.slug}`} service={s} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
