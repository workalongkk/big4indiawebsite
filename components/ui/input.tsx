import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => (
  <input
    type={type}
    ref={ref}
    className={cn(
      "flex h-12 w-full rounded-xl border border-input bg-white px-3.5 text-[0.95rem] text-foreground shadow-sm transition-colors",
      "placeholder:text-muted-foreground/70",
      "focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-0",
      "aria-[invalid=true]:border-destructive aria-[invalid=true]:focus-visible:ring-destructive/30",
      "disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
  />
));
Input.displayName = "Input";

export { Input };
