import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowRight, ArrowLeft, Clock } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { BlogCard } from "@/components/blog/blog-card";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { buttonVariants } from "@/components/ui/button";
import { blogPosts, getPost, getRelatedPosts } from "@/data/blog";
import { company } from "@/data/company";
import { cn, formatDate } from "@/lib/utils";

type Params = { slug: string };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const path = `/blog/${slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: `${company.url}${path}`,
      siteName: company.name,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);
  const url = `${company.url}/blog/${slug}`;
  const initials = post.author
    .replace(/^CA |^CS /, "")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      dateModified: post.date,
      url,
      mainEntityOfPage: url,
      articleSection: post.category,
      keywords: post.tags.join(", "),
      author: { "@type": "Person", name: post.author, jobTitle: post.authorRole },
      publisher: {
        "@type": "Organization",
        name: company.name,
        url: company.url,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: company.url },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${company.url}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ];

  return (
    <>
      <JsonLd id="schema-post" data={schema} />

      <article>
        {/* Header */}
        <header className="border-b border-border bg-gradient-to-b from-secondary/50 to-background">
          <div className="container max-w-3xl py-12 lg:py-16">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: post.category },
              ]}
            />
            <div className="mt-6 flex items-center gap-2.5 text-xs">
              <span className="rounded-full bg-accent px-2.5 py-1 font-medium text-accent-foreground">
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1 text-muted-foreground">
                <Clock className="size-3.5" /> {post.readMinutes} min read
              </span>
            </div>
            <h1 className="mt-4 text-balance font-display text-3xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-4xl lg:text-[2.9rem]">
              {post.title}
            </h1>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              {post.excerpt}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="inline-flex size-10 items-center justify-center rounded-full bg-navy text-sm font-semibold text-white">
                {initials}
              </span>
              <span>
                <span className="block text-sm font-semibold text-foreground">
                  {post.author}
                </span>
                <span className="block text-xs text-muted-foreground">
                  {post.authorRole} · {formatDate(post.date)}
                </span>
              </span>
            </div>
          </div>
        </header>

        {/* Body */}
        <div className="container max-w-3xl py-12 lg:py-16">
          <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:tracking-tight prose-headings:text-foreground prose-h2:mt-10 prose-h2:text-2xl prose-h3:text-xl prose-p:leading-relaxed prose-p:text-muted-foreground prose-li:text-muted-foreground prose-li:marker:text-primary prose-strong:text-foreground prose-a:font-medium prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-table:text-sm prose-thead:border-border prose-th:text-foreground prose-td:text-muted-foreground prose-blockquote:rounded-r-xl prose-blockquote:border-l-primary prose-blockquote:bg-secondary/50 prose-blockquote:py-1 prose-blockquote:not-italic prose-blockquote:text-foreground">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.body}
            </ReactMarkdown>
          </div>

          {/* Tags */}
          <div className="mt-10 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* In-article CTA */}
          <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-navy p-7 text-center shadow-premium sm:p-9">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-white">
              Ready to take the next step?
            </h2>
            <p className="mx-auto mt-2 max-w-md text-pretty text-white/80">
              Let Big4India&apos;s experts handle it for you — transparent
              pricing, fully online, on time.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={post.cta.href}
                className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto")}
              >
                {post.cta.label} <ArrowRight className="size-4" />
              </Link>
              <WhatsAppCTA
                variant="white"
                size="lg"
                message="Hi Big4India, I read your blog and would like to know more. Please guide me."
                className="w-full sm:w-auto"
              >
                Chat on WhatsApp
              </WhatsAppCTA>
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-saffron-600"
            >
              <ArrowLeft className="size-4" /> Back to all articles
            </Link>
          </div>
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-border bg-secondary/40 py-16 lg:py-20">
          <div className="container">
            <SectionHeading eyebrow="Keep reading" title="Related articles" />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
