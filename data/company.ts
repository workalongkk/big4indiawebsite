/**
 * Single source of truth for Big4India contact + brand details.
 * Injected globally into Header, Footer, Contact, schema markup and WhatsApp links.
 */
export const company = {
  name: "Big4India",
  legalName: "Big4India",
  tagline: "India's premium legal, tax & compliance platform",
  description:
    "Big4India is a premium legal, tax and compliance platform helping Indian businesses with company incorporation, GST, income tax, MCA filings, payroll and CA-certified certificates — handled end-to-end by experts.",
  email: "contact@big4india.com",
  // Display vs. raw (E.164 without +) for tel:/wa.me links
  phoneDisplay: "+91 94262 62938",
  phoneTel: "+919426262938",
  whatsapp: "919426262938",
  url: "https://big4india.com",
  foundingLocation: "Valsad, Gujarat",
  address: {
    line1: "Shop - 6 'B', Sai Srushti Apartment",
    line2: "Atul 1st Gate, Parnera, Atul",
    city: "Valsad",
    state: "Gujarat",
    postalCode: "396020",
    country: "India",
    countryCode: "IN",
    full: "Shop - 6 'B', Sai Srushti Apartment, Atul 1st Gate, Parnera, Atul, Valsad, Gujarat - 396020",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/big4india",
    twitter: "https://twitter.com/big4india",
    instagram: "https://instagram.com/big4india",
    facebook: "https://facebook.com/big4india",
  },
} as const;

export type Company = typeof company;
