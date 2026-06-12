import { company } from "@/data/company";

type WhatsAppOptions = {
  /** Service name to reference in the prefilled message. */
  service?: string;
  /** Service price (INR, excl. GST/Govt fees) to reference. */
  price?: number;
  /** Fully custom message — overrides service/price templating. */
  message?: string;
};

/**
 * Build a wa.me deep link with a prefilled, URL-encoded message.
 * This is the checkout primitive for Big4India — every "Buy Now" /
 * "Get Started" CTA routes here instead of a traditional cart.
 */
export function whatsappUrl(opts: WhatsAppOptions = {}): string {
  const base = `https://wa.me/${company.whatsapp}`;

  let text: string;
  if (opts.message) {
    text = opts.message;
  } else if (opts.service) {
    const priceStr = opts.price
      ? ` priced at ₹${opts.price.toLocaleString("en-IN")}`
      : "";
    text = `Hi Big4India, I am interested in the ${opts.service} service${priceStr}. Please guide me.`;
  } else {
    text = `Hi Big4India, I'd like to know more about your services. Please guide me.`;
  }

  return `${base}?text=${encodeURIComponent(text)}`;
}
