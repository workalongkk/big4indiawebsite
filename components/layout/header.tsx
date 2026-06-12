"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Button, buttonVariants } from "@/components/ui/button";
import { useLeadForm } from "@/components/lead/lead-form-provider";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";

const NAV = [
  { label: "Services", href: "/services" },
  { label: "Why Big4India", href: "/#why" },
  { label: "Process", href: "/#process" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const { open } = useLeadForm();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="hidden bg-foreground text-white/80 md:block">
        <div className="container flex h-9 items-center justify-between text-xs">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-3.5 text-primary" />
            {company.address.city}, {company.address.state}
          </span>
          <div className="flex items-center gap-5">
            <a
              href={`mailto:${company.email}`}
              className="transition-colors hover:text-white"
            >
              {company.email}
            </a>
            <a
              href={`tel:${company.phoneTel}`}
              className="font-medium text-white transition-colors hover:text-primary"
            >
              {company.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Primary nav */}
      <div
        className={cn(
          "border-b transition-shadow duration-300",
          scrolled
            ? "glass-strong border-border shadow-soft"
            : "glass border-transparent",
        )}
      >
        <nav className="container flex h-16 items-center justify-between gap-4">
          <Link href="/" aria-label="Big4India home" className="shrink-0">
            <Logo />
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${company.phoneTel}`}
              className={cn(
                buttonVariants({ variant: "ghost", size: "default" }),
                "hidden text-muted-foreground md:inline-flex",
              )}
            >
              <Phone className="size-4" />
              Talk to an expert
            </a>
            <Button
              onClick={() => open("header")}
              className="hidden sm:inline-flex"
            >
              Get Started
            </Button>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary lg:hidden"
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="border-t border-border bg-white lg:hidden">
            <div className="container space-y-1 py-4">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  {item.label}
                </Link>
              ))}
              <Button
                onClick={() => {
                  setMenuOpen(false);
                  open("mobile-menu");
                }}
                size="lg"
                className="mt-2 w-full"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
