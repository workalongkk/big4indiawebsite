import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import { BlogCard } from "@/components/blog/blog-card";
import { blogPosts } from "@/data/blog";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Blog — Compliance, Tax & Business Insights",
  description:
    "Expert, easy-to-read guides on company registration, GST, income tax, MCA compliance, MSME and more — from the Big4India team of CAs and CSs.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: `${company.url}/blog`,
    siteName: company.name,
    title: "Big4India Blog — Compliance, Tax & Business Insights",
    description:
      "Expert guides on company registration, GST, income tax and compliance for Indian businesses.",
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  url: `${company.url}/blog`,
  name: `${company.name} Blog`,
  description:
    "Expert guides on company registration, GST, income tax, MCA compliance and growth for Indian businesses.",
  publisher: { "@id": `${company.url}/#organization` },
  blogPost: blogPosts.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    description: p.excerpt,
    url: `${company.url}/blog/${p.slug}`,
    datePublished: p.date,
    author: { "@type": "Person", name: p.author },
  })),
};

export default function BlogIndexPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <JsonLd id="schema-blog" data={blogSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-secondary/50 to-background">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid-faint bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_at_top,#000_25%,transparent_70%)]"
        />
        <div className="container relative py-12 lg:py-16">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Blog" }]}
          />
          <div className="mt-6 max-w-2xl">
            <Badge>Big4India Blog</Badge>
            <h1 className="mt-5 text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[3rem]">
              Compliance, tax & business — made clear
            </h1>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Practical, expert-written guides to help you register, file and
              grow your business in India — without the jargon.
            </p>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <SectionHeading eyebrow="Latest" title="Featured article" />
          <div className="mt-8">
            <BlogCard post={featured} featured />
          </div>
        </div>
      </section>

      {/* All posts */}
      <section className="border-t border-border bg-secondary/40 py-16 lg:py-20">
        <div className="container">
          <SectionHeading eyebrow="All articles" title="More from the blog" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
