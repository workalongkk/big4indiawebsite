import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { categories } from "@/data/services";
import { company } from "@/data/company";
import type { ReactNode } from "react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-border bg-secondary/40">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {company.description}
            </p>
            <div className="mt-6">
              <WhatsAppCTA
                size="default"
                message="Hi Big4India, I'd like to speak with an expert. Please guide me."
              >
                Chat with an expert
              </WhatsAppCTA>
            </div>
          </div>

          {/* Service columns */}
          <FooterColumn title="Services">
            {categories.slice(0, 4).map((c) => (
              <FooterLink key={c.slug} href={`/services/${c.slug}`}>
                {c.name}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="More services">
            {categories.slice(4).map((c) => (
              <FooterLink key={c.slug} href={`/services/${c.slug}`}>
                {c.name}
              </FooterLink>
            ))}
          </FooterColumn>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Get in touch</h3>
            <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{company.address.full}</span>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-foreground"
                >
                  <Mail className="size-4 shrink-0 text-primary" />
                  {company.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${company.phoneTel}`}
                  className="flex items-center gap-3 transition-colors hover:text-foreground"
                >
                  <Phone className="size-4 shrink-0 text-primary" />
                  {company.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {year} {company.name}. All rights reserved.
          </p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-muted-foreground">
            <Link href="/services" className="transition-colors hover:text-foreground">
              Services
            </Link>
            <Link href="/blog" className="transition-colors hover:text-foreground">
              Blog
            </Link>
            <Link href="/#contact" className="transition-colors hover:text-foreground">
              Contact
            </Link>
          </nav>
          <p className="text-xs text-muted-foreground">
            Prices exclude GST &amp; Govt fees.
          </p>
        </div>
      </div>

      {/* Spacer so the mobile action bar never covers footer content */}
      <div className="h-20 sm:hidden" aria-hidden />
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        {children}
      </Link>
    </li>
  );
}
