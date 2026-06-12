import { allServices, type ServiceWithCategory } from "@/data/services";
import { getCategoryContent, type Faq } from "@/data/category-content";

const CATEGORY_CONTEXT: Record<string, string> = {
  "business-incorporation": "company incorporation",
  registration: "business registration and licensing",
  gst: "GST compliance",
  "income-tax": "income-tax compliance",
  mca: "MCA / ROC compliance",
  compliances: "regulatory compliance",
  payroll: "payroll compliance",
  certificates: "CA-certified certification",
};

export function categoryContext(categorySlug: string): string {
  return CATEGORY_CONTEXT[categorySlug] ?? "business compliance";
}

export function priceText(s: Pick<ServiceWithCategory, "price" | "unit">): string {
  const p = `₹${s.price.toLocaleString("en-IN")}`;
  return s.unit === "monthly" ? `${p}/month` : p;
}

/** Deterministic template variation from the slug (stable across builds). */
function variant(slug: string, mod: number): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return h % mod;
}

/**
 * 40–60 word, answer-first definition optimised for AI answer engines
 * (Perplexity, ChatGPT, Gemini) to quote as a citation.
 */
export function answerParagraph(s: ServiceWithCategory): string {
  const ctx = categoryContext(s.category.slug);
  const price = priceText(s);
  const b = s.blurb.trim();

  switch (variant(s.slug, 3)) {
    case 0:
      return `${s.name} is a ${ctx} service from Big4India for businesses across India. ${b} A qualified CA/CS team manages the whole process online — from documents to final government filing — at a transparent professional fee of ${price}, excluding GST and government fees.`;
    case 1:
      return `Big4India offers ${s.name} as part of its ${ctx} services for Indian businesses. ${b} Experts prepare, review and file everything online so you stay compliant without the paperwork. The professional fee is ${price}, excluding GST and government fees, with no hidden charges.`;
    default:
      return `Looking for ${s.name}? Big4India delivers it end-to-end as a ${ctx} service. ${b} A dedicated expert handles drafting, submission and follow-up — fully online and on time — at a transparent ${price}, excluding GST and government fees.`;
  }
}

/** Short meta description (~150 chars) derived from the answer paragraph. */
export function metaDescription(s: ServiceWithCategory): string {
  const price = priceText(s);
  return `${s.name} online with Big4India at ${price} (excl. GST & Govt fees). ${s.blurb} Expert CA/CS support, 100% online. Get a free consultation.`.slice(
    0,
    158,
  );
}

export type { Faq };

function documentsSentence(s: ServiceWithCategory): string {
  const cc = getCategoryContent(s.category.slug);
  if (!cc || cc.documents.length === 0)
    return "Documentation is minimal and depends on your specific case.";
  const top = cc.documents.slice(0, 3).join(", ");
  return `Typically you'll need your ${top}, plus a few related documents.`;
}

/** Service-specific FAQs (combined with category FAQs in allFaqs). */
export function serviceFaqs(s: ServiceWithCategory): Faq[] {
  const price = priceText(s);
  const ctx = categoryContext(s.category.slug);
  const timeline = getCategoryContent(s.category.slug)?.timeline ?? "a few working days";
  return [
    {
      question: `How much does ${s.name} cost?`,
      answer: `The professional fee for ${s.name} at Big4India is ${price}, excluding GST and government fees. There are no hidden charges — share your details for an exact, no-obligation quote tailored to your requirement.`,
    },
    {
      question: `How long does ${s.name} take?`,
      answer: `Typical turnaround is ${timeline}. Most ${ctx} work begins within 24 hours of your request; the exact timeline depends on document readiness and government processing, and your assigned expert shares a clear estimate upfront.`,
    },
    {
      question: `Is ${s.name} done completely online?`,
      answer: `Yes. Big4India completes ${s.name} fully online. You submit documents digitally and a dedicated CA/CS expert handles preparation, filing and follow-up, keeping you updated on WhatsApp at every step.`,
    },
    {
      question: `What documents are required for ${s.name}?`,
      answer: `${documentsSentence(s)} Once you reach out, we share a precise, service-specific checklist so you only gather what's actually needed.`,
    },
    {
      question: `Why choose Big4India for ${s.name}?`,
      answer: `Transparent fixed pricing, a qualified CA/CS handling your case, on-time delivery and real-time WhatsApp updates — with no hidden charges. We're built to outperform typical filing portals on quality and expertise.`,
    },
  ];
}

/**
 * Full FAQ set for a service page: service-specific FAQs followed by the
 * category FAQs, de-duplicated. Yields 10–13 schema-valid FAQs for SEO/AEO.
 */
export function allFaqs(s: ServiceWithCategory): Faq[] {
  const cc = getCategoryContent(s.category.slug);
  const combined: Faq[] = [...serviceFaqs(s), ...(cc?.faqs ?? [])];
  const seen = new Set<string>();
  return combined.filter((f) => {
    const key = f.question.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

/** Other services in the same category, for cross-linking. */
export function relatedServices(
  s: ServiceWithCategory,
  n = 4,
): ServiceWithCategory[] {
  return allServices
    .filter((x) => x.category.slug === s.category.slug && x.slug !== s.slug)
    .slice(0, n);
}

/** What every Big4India engagement includes (generic, reused across pages). */
export const SERVICE_INCLUDES: string[] = [
  "Free consultation with a qualified expert",
  "End-to-end documentation & drafting",
  "Government application & filing",
  "Dedicated relationship manager",
  "Real-time status updates on WhatsApp",
];
