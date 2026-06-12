import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/data/blog";
import { cn, formatDate } from "@/lib/utils";

export function BlogCard({
  post,
  featured = false,
}: {
  post: BlogPost;
  featured?: boolean;
}) {
  return (
    <article
      className={cn(
        "group relative flex flex-col rounded-2xl border border-border bg-white p-6 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-premium",
        featured && "sm:p-8",
      )}
    >
      <div className="flex items-center gap-2.5 text-xs">
        <span className="rounded-full bg-accent px-2.5 py-1 font-medium text-accent-foreground">
          {post.category}
        </span>
        <span className="text-muted-foreground">{post.readMinutes} min read</span>
      </div>

      <h3
        className={cn(
          "mt-4 text-balance font-display font-semibold leading-snug text-foreground",
          featured ? "text-2xl sm:text-3xl" : "text-lg",
        )}
      >
        <Link
          href={`/blog/${post.slug}`}
          className="transition-colors after:absolute after:inset-0 after:content-[''] group-hover:text-primary"
        >
          {post.title}
        </Link>
      </h3>

      <p
        className={cn(
          "mt-2.5 flex-1 text-pretty leading-relaxed text-muted-foreground",
          featured ? "text-base" : "line-clamp-3 text-sm",
        )}
      >
        {post.excerpt}
      </p>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
        <span>
          {post.author} · {formatDate(post.date)}
        </span>
        <span className="inline-flex items-center gap-1 font-semibold text-primary">
          Read <ArrowRight className="size-3.5" />
        </span>
      </div>
    </article>
  );
}
