import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Check,
  ArrowRight,
  ShieldCheck,
  FileText,
  Clock,
  Laptop,
  BadgeCheck,
  TrendingUp,
  IndianRupee,
  Award,
  Headset,
  Star,
  type LucideIcon,
} from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { ServiceNav, type NavSection } from "@/components/service/service-nav";
import { ServiceIcon } from "@/components/service-icon";
import { ServiceCard } from "@/components/service-card";
import { TestimonialCard } from "@/components/testimonials";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { LeadButton } from "@/components/lead/lead-button";
import { LeadFormFields } from "@/components/lead/lead-form-fields";
import { getService, getCategory, allServiceParams } from "@/data/services";
import { getCategoryContent } from "@/data/category-content";
import { testimonials } from "@/data/testimonials";
import {
  answerParagraph,
  metaDescription,
  allFaqs,
  relatedServices,
  priceText,
  SERVICE_INCLUDES,
} from "@/lib/service-content";
import { company } from "@/data/company";
import { formatINR } from "@/lib/utils";

type Params = { category: string; slug: string };

const BENEFIT_ICONS: LucideIcon[] = [
  ShieldCheck,
  TrendingUp,
  Clock,
  IndianRupee,
  Award,
  Headset,
];

export function generateStaticParams() {
  return allServiceParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const service = getService(category, slug);
  if (!service) return {};

  const title = `${service.name} — Online at ${priceText(service)}`;
  const description = metaDescription(service);
  const path = `/services/${category}/${slug}`;

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
    twitter: {
      card: "summary_large_image",
      title: `${title} · Big4India`,
      description,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category, slug } = await params;
  const service = getService(category, slug);
  const cat = getCategory(category);
  const cc = getCategoryContent(category);
  if (!service || !cat || !cc) notFound();

  const answer = answerParagraph(service);
  const faqs = allFaqs(service);
  const related = relatedServices(service, 3);
  const url = `${company.url}/services/${category}/${slug}`;
  const proof = [testimonials[0], testimonials[1]];

  const navSections: NavSection[] = [
    { id: "overview", label: "Overview" },
    { id: "benefits", label: "Benefits" },
    { id: "eligibility", label: "Eligibility" },
    { id: "documents", label: "Documents" },
    { id: "process", label: "Process" },
    { id: "pricing", label: "Pricing" },
    { id: "faqs", label: "FAQs" },
  ];

  const keyFacts = [
    { icon: Clock, label: cc.timeline },
    { icon: Laptop, label: "100% online" },
    { icon: BadgeCheck, label: "CA / CS handled" },
    { icon: IndianRupee, label: "Transparent pricing" },
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: company.url },
        { "@type": "ListItem", position: 2, name: "Services", item: `${company.url}/services` },
        { "@type": "ListItem", position: 3, name: cat.name, item: `${company.url}/services/${category}` },
        { "@type": "ListItem", position: 4, name: service.name, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.name,
      description: answer,
      serviceType: cat.name,
      url,
      provider: {
        "@type": "ProfessionalService",
        name: company.name,
        url: company.url,
        telephone: company.phoneTel,
        email: company.email,
      },
      areaServed: { "@type": "Country", name: "India" },
      offers: {
        "@type": "Offer",
        price: service.price,
        priceCurrency: "INR",
        url,
        availability: "https://schema.org/InStock",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: service.price,
          priceCurrency: "INR",
          valueAddedTaxIncluded: false,
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: `${service.name} — Big4India`,
      description: answer,
      category: cat.name,
      brand: { "@type": "Brand", name: company.name },
      offers: {
        "@type": "Offer",
        price: service.price,
        priceCurrency: "INR",
        url,
        availability: "https://schema.org/InStock",
        seller: { "@type": "Organization", name: company.name },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: `How to get ${service.name} with Big4India`,
      description: answer,
      step: cc.process.map((p, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: p.title,
        text: p.desc,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ];

  return (
    <>
      <JsonLd id="schema-service" data={schema} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-secondary/50 to-background">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 right-[-8%] h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl"
        />
        <div className="container relative grid items-start gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-16">
          <div>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: cat.short, href: `/services/${category}` },
                { label: service.name },
              ]}
            />

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
              <ServiceIcon name={cat.icon} className="size-3.5" />
              {cat.name}
            </div>

            <h1 className="mt-4 text-balance font-display text-3xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-4xl lg:text-[2.9rem]">
              {service.name}
            </h1>

            <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {answer}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex items-center gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">4.9/5</span> ·
                10,000+ businesses served
              </span>
            </div>

            <ul className="mt-8 flex flex-wrap gap-2.5">
              {keyFacts.map((f) => (
                <li
                  key={f.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-3 py-1.5 text-sm text-foreground shadow-soft"
                >
                  <f.icon className="size-4 text-primary" />
                  {f.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Lead form */}
          <div id="lead" className="lg:sticky lg:top-28">
            <div className="rounded-3xl border border-border bg-white/90 p-6 shadow-premium backdrop-blur sm:p-7">
              <div className="mb-5 flex items-baseline justify-between gap-3">
                <div>
                  <h2 className="font-display text-xl font-semibold text-foreground">
                    Get {service.name}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Free consultation · No obligation
                  </p>
                </div>
                <div className="text-right">
                  <div className="font-display text-2xl font-semibold text-foreground">
                    {formatINR(service.price)}
                  </div>
                  <div className="text-[11px] text-muted-foreground">
                    {service.unit === "monthly" ? "/month · " : ""}excl. taxes
                  </div>
                </div>
              </div>
              <LeadFormFields source={`service:${category}/${slug}`} />
            </div>
          </div>
        </div>
      </section>

      {/* Sticky in-page nav */}
      <ServiceNav sections={navSections} />

      {/* Body */}
      <div className="container py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
          <div className="min-w-0 space-y-16">
            {/* Overview */}
            <section id="overview" className="scroll-mt-32">
              <SectionHeading
                index="01"
                eyebrow="Overview"
                title={`What is ${service.name}?`}
              />
              <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
                {cc.overview}
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {SERVICE_INCLUDES.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="size-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section id="benefits" className="scroll-mt-32">
              <SectionHeading
                index="02"
                eyebrow="Benefits"
                title={`Why ${service.name} matters`}
              />
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {cc.benefits.map((b, i) => {
                  const Icon = BENEFIT_ICONS[i % BENEFIT_ICONS.length];
                  return (
                    <div
                      key={b.title}
                      className="rounded-2xl border border-border bg-white p-5 shadow-soft"
                    >
                      <span className="inline-flex size-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                        <Icon className="size-5" />
                      </span>
                      <h3 className="mt-4 font-semibold text-foreground">
                        {b.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {b.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Eligibility */}
            <section id="eligibility" className="scroll-mt-32">
              <SectionHeading
                index="03"
                eyebrow="Eligibility"
                title="Who needs this & who can apply"
              />
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {cc.eligibility.map((e) => (
                  <li
                    key={e}
                    className="flex items-start gap-3 rounded-xl border border-border bg-white p-4"
                  >
                    <BadgeCheck className="mt-0.5 size-5 shrink-0 text-primary" />
                    <span className="text-sm text-foreground">{e}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Documents */}
            <section id="documents" className="scroll-mt-32">
              <SectionHeading
                index="04"
                eyebrow="Documents"
                title="Documents required"
                description="Share these and we handle the rest. We'll confirm the exact checklist for your specific case."
              />
              <div className="mt-8 grid gap-x-8 gap-y-3 rounded-2xl border border-border bg-white p-6 sm:grid-cols-2 sm:p-7">
                {cc.documents.map((doc) => (
                  <div key={doc} className="flex items-start gap-3">
                    <FileText className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-sm text-foreground">{doc}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Process */}
            <section id="process" className="scroll-mt-32">
              <SectionHeading
                index="05"
                eyebrow="Process"
                title={`How ${service.name} works`}
                description={`A clear, expert-led journey — typical turnaround is ${cc.timeline}.`}
              />
              <ol className="mt-10 space-y-6">
                {cc.process.map((step, i) => (
                  <li key={step.title} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm font-semibold text-white">
                        {i + 1}
                      </span>
                      {i < cc.process.length - 1 && (
                        <span className="mt-1 w-px flex-1 bg-border" aria-hidden />
                      )}
                    </div>
                    <div className="pb-2">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <h3 className="font-semibold text-foreground">
                          {step.title}
                        </h3>
                        {step.duration && (
                          <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground">
                            {step.duration}
                          </span>
                        )}
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {step.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* Social proof */}
            <section>
              <SectionHeading eyebrow="Client stories" title="What our clients say" />
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {proof.map((t) => (
                  <TestimonialCard key={t.name} testimonial={t} />
                ))}
              </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="scroll-mt-32">
              <SectionHeading
                index="06"
                eyebrow="Pricing"
                title="Simple, transparent pricing"
                description="One fixed professional fee. No hidden charges, no surprises."
              />
              <div className="mt-8 rounded-3xl border border-border bg-gradient-to-br from-white to-secondary/40 p-7 shadow-premium">
                <div className="flex flex-wrap items-end justify-between gap-5">
                  <div>
                    <div className="text-sm text-muted-foreground">
                      Professional fee
                    </div>
                    <div className="font-display text-4xl font-semibold text-foreground">
                      {formatINR(service.price)}
                      {service.unit === "monthly" && (
                        <span className="text-base font-normal text-muted-foreground">
                          /month
                        </span>
                      )}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      Excl. GST &amp; Govt fees · No hidden charges
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <WhatsAppCTA
                      service={service.name}
                      price={service.price}
                      size="lg"
                    >
                      Get started
                    </WhatsAppCTA>
                    <LeadButton
                      source={`service-pricing:${slug}`}
                      variant="outline"
                      size="lg"
                    >
                      Free consultation
                    </LeadButton>
                  </div>
                </div>
                <hr className="my-6 border-border" />
                <div className="grid gap-3 sm:grid-cols-2">
                  {SERVICE_INCLUDES.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-primary"
                        strokeWidth={3}
                      />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* FAQs */}
            <section id="faqs" className="scroll-mt-32">
              <SectionHeading
                index="07"
                eyebrow="FAQs"
                title={`${service.name} — frequently asked questions`}
                description={`${faqs.length} answers covering cost, process, documents, timelines and more.`}
              />
              <div className="mt-8 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-white">
                {faqs.map((faq) => (
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
            </section>
          </div>

          {/* Sticky rail (desktop) */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-4">
              <div className="rounded-2xl border border-border bg-white p-6 shadow-premium">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground">
                  <ServiceIcon name={cat.icon} className="size-3.5" />
                  {cat.short}
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold text-foreground">
                  {service.name}
                </h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-display text-3xl font-semibold text-foreground">
                    {formatINR(service.price)}
                  </span>
                  {service.unit === "monthly" && (
                    <span className="text-sm text-muted-foreground">/mo</span>
                  )}
                </div>
                <div className="text-xs text-muted-foreground">
                  Excl. GST &amp; Govt fees
                </div>
                <div className="mt-5 space-y-2.5">
                  <WhatsAppCTA
                    service={service.name}
                    price={service.price}
                    size="lg"
                    className="w-full"
                  >
                    Get started
                  </WhatsAppCTA>
                  <LeadButton
                    source={`service-rail:${slug}`}
                    variant="outline"
                    size="lg"
                    className="w-full"
                  >
                    Get free consultation
                  </LeadButton>
                </div>
                <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                  {[
                    "Dedicated CA / CS expert",
                    "100% online process",
                    "On-time filing assurance",
                    "Real-time WhatsApp updates",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-muted-foreground"
                    >
                      <ShieldCheck className="size-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-border bg-secondary/40 py-16 lg:py-20">
          <div className="container">
            <div className="flex items-end justify-between gap-4">
              <SectionHeading
                eyebrow="Keep exploring"
                title={`Related ${cat.name} services`}
              />
              <Link
                href={`/services/${category}`}
                className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-saffron-600 sm:inline-flex"
              >
                View all <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
