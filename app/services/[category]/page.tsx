import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { ServiceIcon } from "@/components/service-icon";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { categories, getCategory, allServices } from "@/data/services";
import { getCategoryContent } from "@/data/category-content";
import { company } from "@/data/company";

type Params = { category: string };

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) return {};

  const title = `${cat.name} Services in India`;
  const description =
    `${cat.tagline} Explore ${cat.services.length} ${cat.name} services from Big4India — transparent fixed prices, expert CA/CS team, 100% online.`.slice(
      0,
      158,
    );
  const path = `/services/${category}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: `${company.url}${path}`,
      siteName: company.name,
      title: `${title} · Big4India`,
      description,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category } = await params;
  const cat = getCategory(category);
  const cc = getCategoryContent(category);
  if (!cat || !cc) notFound();

  const services = allServices.filter((s) => s.category.slug === category);
  const others = categories.filter((c) => c.slug !== category);

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: company.url },
        { "@type": "ListItem", position: 2, name: "Services", item: `${company.url}/services` },
        { "@type": "ListItem", position: 3, name: cat.name, item: `${company.url}/services/${category}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: `${cat.name} Services in India`,
      description: cat.tagline,
      url: `${company.url}/services/${category}`,
      isPartOf: { "@id": `${company.url}/#website` },
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: services.length,
        itemListElement: services.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: s.name,
          url: `${company.url}/services/${category}/${s.slug}`,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: cc.faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ];

  return (
    <>
      <JsonLd id="schema-category" data={schema} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-secondary/50 to-background">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 right-[-8%] h-[26rem] w-[26rem] rounded-full bg-primary/10 blur-3xl"
        />
        <div className="container relative py-12 lg:py-16">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: cat.name },
            ]}
          />
          <div className="mt-6 flex items-start gap-4">
            <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-2xl bg-accent text-accent-foreground shadow-soft">
              <ServiceIcon name={cat.icon} className="size-7" />
            </span>
            <div>
              <h1 className="text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.9rem]">
                {cat.name}
              </h1>
              <p className="mt-3 max-w-2xl text-pretty text-lg text-muted-foreground">
                {cat.tagline}
              </p>
            </div>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">
                {services.length}
              </span>{" "}
              services · transparent fixed pricing · typically {cc.timeline}
            </span>
            <WhatsAppCTA
              message={`Hi Big4India, I'm interested in your ${cat.name} services. Please guide me.`}
              size="default"
            >
              Talk to a {cat.short} expert
            </WhatsAppCTA>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="border-b border-border py-12 lg:py-14">
        <div className="container">
          <p className="max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {cc.overview}
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <SectionHeading
            index="01"
            eyebrow="Services"
            title={`All ${cat.name.toLowerCase()} services`}
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-t border-border bg-secondary/40 py-16 lg:py-20">
        <div className="container">
          <SectionHeading
            index="02"
            eyebrow="Why Big4India"
            title={`The Big4India advantage for ${cat.short.toLowerCase()}`}
          />
          <div className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {cc.benefits.map((b) => (
              <div key={b.title} className="flex gap-3.5">
                <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                <div>
                  <h3 className="font-semibold text-foreground">{b.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category FAQs */}
      <section className="py-16 lg:py-20">
        <div className="container max-w-3xl">
          <SectionHeading
            index="03"
            eyebrow="FAQs"
            title={`${cat.name} — frequently asked questions`}
          />
          <div className="mt-8 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-white">
            {cc.faqs.map((faq) => (
              <details key={faq.question} className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-medium text-foreground transition-colors hover:bg-secondary/50">
                  {faq.question}
                  <span className="text-primary transition-transform duration-200 group-open:rotate-45">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      aria-hidden
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Other categories */}
      <section className="border-t border-border bg-secondary/40 py-16 lg:py-20">
        <div className="container">
          <SectionHeading eyebrow="Explore more" title="Other service categories" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((c) => (
              <Link
                key={c.slug}
                href={`/services/${c.slug}`}
                className="group flex items-center gap-3 rounded-2xl border border-border bg-white p-4 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-premium"
              >
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <ServiceIcon name={c.icon} className="size-5" />
                </span>
                <span className="flex-1 text-sm font-semibold text-foreground">
                  {c.name}
                </span>
                <ArrowRight className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
