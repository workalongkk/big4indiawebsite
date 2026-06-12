import { JsonLd } from "@/components/json-ld";
import { Hero } from "@/components/sections/hero";
import { TrustedMarquee } from "@/components/sections/trusted-marquee";
import { Stats } from "@/components/sections/stats";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Why } from "@/components/sections/why";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/testimonials";
import { CtaBanner } from "@/components/sections/cta-banner";
import { company } from "@/data/company";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${company.url}/#organization`,
  name: company.name,
  description: company.description,
  url: company.url,
  email: company.email,
  telephone: company.phoneTel,
  priceRange: "₹₹",
  areaServed: { "@type": "Country", name: "India" },
  address: {
    "@type": "PostalAddress",
    streetAddress: `${company.address.line1}, ${company.address.line2}`,
    addressLocality: company.address.city,
    addressRegion: company.address.state,
    postalCode: company.address.postalCode,
    addressCountry: company.address.countryCode,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: company.phoneTel,
    email: company.email,
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["en", "hi"],
  },
  sameAs: [
    company.social.linkedin,
    company.social.twitter,
    company.social.instagram,
    company.social.facebook,
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${company.url}/#website`,
  url: company.url,
  name: company.name,
  description: company.description,
  publisher: { "@id": `${company.url}/#organization` },
  inLanguage: "en-IN",
};

export default function HomePage() {
  return (
    <>
      <JsonLd id="schema-org" data={[organizationSchema, websiteSchema]} />
      <Hero />
      <TrustedMarquee />
      <Stats />
      <ServicesGrid />
      <Why />
      <Process />
      <Testimonials limit={3} />
      <CtaBanner />
    </>
  );
}
