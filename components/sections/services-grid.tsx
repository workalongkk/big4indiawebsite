"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ServiceIcon } from "@/components/service-icon";
import { ServiceCard } from "@/components/service-card";
import {
  categories,
  allServices,
  popularServices,
  type ServiceWithCategory,
} from "@/data/services";
import { cn } from "@/lib/utils";

const TABS = [
  { slug: "popular", name: "Popular", icon: "BadgeCheck" },
  ...categories.map((c) => ({ slug: c.slug, name: c.short, icon: c.icon })),
];

export function ServicesGrid() {
  const [active, setActive] = useState("popular");

  const activeCategory = categories.find((c) => c.slug === active);
  const list: ServiceWithCategory[] =
    active === "popular"
      ? popularServices
      : allServices.filter((s) => s.category.slug === active);

  return (
    <section id="services" className="scroll-mt-24 py-20 lg:py-28">
      <div className="container">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <Badge className="mx-auto">Our services</Badge>
          <h2 className="mt-5 text-balance font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Everything your business needs, in one place
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            From incorporation to compliance — fixed prices, expert-handled,
            fully online. Pick a category to explore.
          </p>
        </ScrollReveal>

        {/* Category tabs */}
        <div className="mt-10">
          <div className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-2 lg:mx-0 lg:flex-wrap lg:justify-center lg:px-0">
            {TABS.map((tab) => {
              const isActive = active === tab.slug;
              return (
                <button
                  key={tab.slug}
                  type="button"
                  onClick={() => setActive(tab.slug)}
                  aria-pressed={isActive}
                  className={cn(
                    "inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "border-navy bg-navy text-white"
                      : "border-border bg-white text-muted-foreground hover:border-foreground/20 hover:text-foreground",
                  )}
                >
                  <ServiceIcon name={tab.icon} className="size-4" />
                  {tab.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Services grid */}
        <ScrollReveal className="mt-10">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((service) => (
              <ServiceCard
                key={`${service.category.slug}-${service.slug}`}
                service={service}
              />
            ))}
          </div>
        </ScrollReveal>

        {/* Browse-all link */}
        <div className="mt-10 text-center">
          <Link
            href={activeCategory ? `/services/${activeCategory.slug}` : "/services"}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-saffron-600"
          >
            {activeCategory
              ? `View all ${activeCategory.name}`
              : "Browse all services"}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
