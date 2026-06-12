"use client";

import type { ReactNode } from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { useLeadForm } from "@/components/lead/lead-form-provider";

/** Opens the global lead form. Usable from server components. */
export function LeadButton({
  source,
  children,
  ...props
}: Omit<ButtonProps, "onClick"> & { source?: string; children: ReactNode }) {
  const { open } = useLeadForm();
  return (
    <Button onClick={() => open(source)} {...props}>
      {children}
    </Button>
  );
}
