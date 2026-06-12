import type { ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons";
import { whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type ButtonStyle = VariantProps<typeof buttonVariants>;

/**
 * Big4India's checkout primitive: every "Buy Now" / "Get Started" routes to
 * WhatsApp with a prefilled, service-aware message instead of a cart.
 */
export function WhatsAppCTA({
  service,
  price,
  message,
  children,
  className,
  variant = "default",
  size = "default",
  showIcon = true,
}: {
  service?: string;
  price?: number;
  message?: string;
  children?: ReactNode;
  className?: string;
  variant?: ButtonStyle["variant"];
  size?: ButtonStyle["size"];
  showIcon?: boolean;
}) {
  return (
    <a
      href={whatsappUrl({ service, price, message })}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(buttonVariants({ variant, size }), className)}
    >
      {showIcon && <WhatsAppIcon className="size-[1.05rem]" />}
      {children ?? "Get Started on WhatsApp"}
    </a>
  );
}
