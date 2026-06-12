"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { Loader2, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { cn } from "@/lib/utils";

type Fields = { name: string; mobile: string; email: string; city: string };
const EMPTY: Fields = { name: "", mobile: "", email: "", city: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function LeadFormFields({
  source = "website",
  onSuccess,
  className,
}: {
  source?: string;
  onSuccess?: () => void;
  className?: string;
}) {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [loading, setLoading] = useState(false);

  function set<K extends keyof Fields>(key: K, value: string) {
    setValues((p) => ({ ...p, [key]: value }));
    if (errors[key]) setErrors((p) => ({ ...p, [key]: undefined }));
  }

  function validate() {
    const e: Partial<Record<keyof Fields, string>> = {};
    if (!values.name.trim()) e.name = "Please enter your name";
    if (values.mobile.replace(/\D/g, "").length < 10)
      e.mobile = "Enter a valid 10-digit mobile";
    if (!EMAIL_RE.test(values.email)) e.email = "Enter a valid email address";
    if (!values.city.trim()) e.city = "Please enter your city";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, source }),
      });
      if (!res.ok) throw new Error("request_failed");
      toast.success("Thank you! Our expert will reach out shortly.", {
        description: `We'll contact ${values.name.split(" ")[0]} on +91 ${values.mobile}.`,
      });
      setValues(EMPTY);
      onSuccess?.();
    } catch {
      toast.error("Something went wrong.", {
        description: "Please try again or message us directly on WhatsApp.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className={cn("space-y-3.5", className)} noValidate>
      <Field id="lead-name" label="Full name" error={errors.name}>
        <Input
          id="lead-name"
          value={values.name}
          onChange={(e) => set("name", e.target.value)}
          placeholder="e.g. Rajesh Sharma"
          autoComplete="name"
          aria-invalid={!!errors.name}
        />
      </Field>

      <Field id="lead-mobile" label="Mobile number" error={errors.mobile}>
        <div className="relative">
          <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-medium text-muted-foreground">
            +91
          </span>
          <Input
            id="lead-mobile"
            inputMode="numeric"
            value={values.mobile}
            onChange={(e) => set("mobile", e.target.value)}
            placeholder="98765 43210"
            className="pl-12"
            autoComplete="tel-national"
            aria-invalid={!!errors.mobile}
          />
        </div>
      </Field>

      <Field id="lead-email" label="Email address" error={errors.email}>
        <Input
          id="lead-email"
          type="email"
          value={values.email}
          onChange={(e) => set("email", e.target.value)}
          placeholder="you@company.com"
          autoComplete="email"
          aria-invalid={!!errors.email}
        />
      </Field>

      <Field id="lead-city" label="City" error={errors.city}>
        <Input
          id="lead-city"
          value={values.city}
          onChange={(e) => set("city", e.target.value)}
          placeholder="e.g. Mumbai"
          autoComplete="address-level2"
          aria-invalid={!!errors.city}
        />
      </Field>

      <Button type="submit" size="lg" disabled={loading} className="w-full">
        {loading ? (
          <>
            <Loader2 className="size-4 animate-spin" /> Submitting…
          </>
        ) : (
          <>
            Get free consultation <ArrowRight className="size-4" />
          </>
        )}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        No spam, ever. Your details stay private.
      </p>

      <div className="flex items-center gap-3 py-0.5 text-xs text-muted-foreground/70">
        <span className="h-px flex-1 bg-border" />
        or
        <span className="h-px flex-1 bg-border" />
      </div>

      <WhatsAppCTA
        variant="outline"
        size="lg"
        className="w-full"
        message="Hi Big4India, I'd like a free consultation. Please guide me."
      >
        Chat on WhatsApp
      </WhatsAppCTA>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
      {error ? <p className="text-xs text-destructive">{error}</p> : null}
    </div>
  );
}
