/**
 * Placeholder testimonials — replace with real, consented client quotes
 * before going live. Kept realistic and India-specific for layout fidelity.
 */
export interface Testimonial {
  name: string;
  role: string;
  city: string;
  quote: string;
  rating: number;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Aarav Mehta",
    role: "Founder, D2C apparel brand",
    city: "Ahmedabad",
    quote:
      "Big4India incorporated my Private Limited company in under a week and set up GST right after. The dedicated manager answered every question on WhatsApp — it felt like having an in-house CA.",
    rating: 5,
    initials: "AM",
  },
  {
    name: "Priya Nair",
    role: "Co-founder, SaaS startup",
    city: "Bengaluru",
    quote:
      "We moved our GST and monthly filings here after a bad experience elsewhere. Zero missed deadlines in a year, clear pricing, and they actually understand startups. Highly recommend.",
    rating: 5,
    initials: "PN",
  },
  {
    name: "Rohan Gupta",
    role: "Director, import–export trading",
    city: "Surat",
    quote:
      "IEC, GST and annual ROC compliance — all handled without me chasing anyone. Transparent fees and genuinely knowledgeable people. Far better than the big portals I'd used before.",
    rating: 5,
    initials: "RG",
  },
  {
    name: "Sneha Reddy",
    role: "Owner, cloud kitchen",
    city: "Hyderabad",
    quote:
      "Got my FSSAI licence and income tax filing done stress-free. They explained every step in plain language and were always reachable. Worth every rupee.",
    rating: 5,
    initials: "SR",
  },
  {
    name: "Vikram Singh",
    role: "MD, manufacturing unit",
    city: "Pune",
    quote:
      "Their team manages our company's annual MCA compliance end-to-end. We've never received a single penalty notice since switching. Reliable and professional.",
    rating: 5,
    initials: "VS",
  },
  {
    name: "Ananya Sharma",
    role: "Independent consultant",
    city: "Mumbai",
    quote:
      "The tax planning advice alone saved me more than their fee. My ITR was filed accurately and quickly, with proactive reminders. Exactly the expertise I was looking for.",
    rating: 5,
    initials: "AS",
  },
];
