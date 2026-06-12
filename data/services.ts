/**
 * Big4India service catalog — single source of truth.
 *
 * Prices are professional fees in INR and EXCLUDE GST and government fees.
 * Routing is /services/[category]/[slug]; slugs are unique within a category,
 * so a few service names recur across categories with their own category price.
 */

export type PriceUnit = "one-time" | "monthly";

export interface Service {
  slug: string;
  name: string;
  /** Professional fee in INR, excluding GST/Govt fees. */
  price: number;
  unit?: PriceUnit;
  /** Short, factual one-liner for cards and previews. */
  blurb: string;
  /** Surface on the homepage "top services" grid. */
  popular?: boolean;
}

export interface ServiceCategory {
  slug: string;
  name: string;
  /** Short nav/menu label. */
  short: string;
  tagline: string;
  /** Lucide icon key — mapped in components/service-icon.tsx. */
  icon: string;
  services: Service[];
}

export const categories: ServiceCategory[] = [
  {
    slug: "business-incorporation",
    name: "Business Incorporation",
    short: "Incorporation",
    tagline: "Register the right structure for your business — fast.",
    icon: "Building2",
    services: [
      {
        slug: "private-limited-company",
        name: "Private Limited Company",
        price: 1990,
        popular: true,
        blurb: "India's most preferred structure for startups raising capital.",
      },
      {
        slug: "one-person-company",
        name: "One Person Company",
        price: 1490,
        blurb: "Limited-liability company for solo founders.",
      },
      {
        slug: "llp-registration",
        name: "Limited Liability Partnership",
        price: 1490,
        popular: true,
        blurb: "Partnership flexibility with limited liability protection.",
      },
      {
        slug: "partnership-firm",
        name: "Partnership Firm",
        price: 1290,
        blurb: "Simple registered partnership for two or more owners.",
      },
      {
        slug: "sole-proprietorship",
        name: "Sole Proprietorship",
        price: 990,
        blurb: "The quickest way to start as an individual business owner.",
      },
    ],
  },
  {
    slug: "registration",
    name: "Registration & Licenses",
    short: "Registrations",
    tagline: "Every licence and registration your business needs to operate.",
    icon: "BadgeCheck",
    services: [
      {
        slug: "udyam-registration",
        name: "Udyam Registration",
        price: 990,
        popular: true,
        blurb: "Official MSME registration to unlock government benefits.",
      },
      {
        slug: "startup-india-registration",
        name: "Startup India",
        price: 2490,
        popular: true,
        blurb: "DPIIT recognition for tax holidays and funding access.",
      },
      {
        slug: "fssai-registration",
        name: "FSSAI Registration & License",
        price: 990,
        blurb: "Mandatory food safety licence for food businesses.",
      },
      {
        slug: "fssai-renewal",
        name: "FSSAI Renewal",
        price: 990,
        blurb: "Renew your FSSAI licence before it lapses.",
      },
      {
        slug: "icegate-registration",
        name: "ICEGATE Registration",
        price: 1490,
        blurb: "Customs e-filing access for importers and exporters.",
      },
      {
        slug: "import-export-code",
        name: "Import Export Code",
        price: 1490,
        popular: true,
        blurb: "DGFT IEC — the licence to trade across borders.",
      },
      {
        slug: "pf-registration",
        name: "PF Registration",
        price: 990,
        blurb: "Provident Fund registration for your workforce.",
      },
      {
        slug: "esic-registration",
        name: "ESIC Registration",
        price: 990,
        blurb: "Employee State Insurance registration for staff welfare.",
      },
      {
        slug: "professional-tax-registration",
        name: "Professional Tax Registration",
        price: 1490,
        blurb: "State professional tax enrolment for employers.",
      },
      {
        slug: "rera-registration",
        name: "RERA Registration",
        price: 44990,
        blurb: "Mandatory real-estate project registration with RERA.",
      },
      {
        slug: "12a-registration",
        name: "12A Registration",
        price: 6990,
        blurb: "Income-tax exemption registration for NGOs and trusts.",
      },
      {
        slug: "80g-registration",
        name: "80G Registration",
        price: 6990,
        blurb: "Let donors claim tax deductions on contributions.",
      },
      {
        slug: "12a-80g-registration",
        name: "12A & 80G Registration",
        price: 12990,
        blurb: "Combined NGO exemption and donor-deduction registration.",
      },
      {
        slug: "digital-signature-certificate",
        name: "Digital Signature Certificate",
        price: 1990,
        popular: true,
        blurb: "Class-3 DSC for secure e-filing and tenders.",
      },
    ],
  },
  {
    slug: "gst",
    name: "Goods & Services Tax",
    short: "GST",
    tagline: "GST registration, returns and notices — handled end to end.",
    icon: "Receipt",
    services: [
      {
        slug: "gst-registration",
        name: "GST Registration",
        price: 1990,
        popular: true,
        blurb: "Get your GSTIN and start invoicing compliantly.",
      },
      {
        slug: "gst-registration-foreigners",
        name: "GST Registration for Foreigners",
        price: 4990,
        blurb: "GST registration for non-resident taxable persons.",
      },
      {
        slug: "gst-amendment",
        name: "GST Amendment",
        price: 990,
        blurb: "Update core or non-core fields on your GST registration.",
      },
      {
        slug: "gst-annual-return-gstr-9",
        name: "GST Annual Return (GSTR-9)",
        price: 2990,
        blurb: "Consolidated annual GST return filing.",
      },
      {
        slug: "gst-lut-form",
        name: "GST LUT Form",
        price: 1490,
        blurb: "File a Letter of Undertaking to export without paying IGST.",
      },
      {
        slug: "gst-notice",
        name: "GST Notice",
        price: 1990,
        blurb: "Expert drafting and response to GST department notices.",
      },
      {
        slug: "gst-return-filing",
        name: "GST Return Filing",
        price: 1490,
        blurb: "Monthly/quarterly GSTR-1 and GSTR-3B filing.",
      },
      {
        slug: "gst-revocation",
        name: "GST Revocation",
        price: 2990,
        blurb: "Revive a cancelled GST registration.",
      },
      {
        slug: "gstr-10",
        name: "GSTR-10 (Final Return)",
        price: 2990,
        blurb: "Final return on cancellation of GST registration.",
      },
      {
        slug: "gst-eway-bill",
        name: "GST e-Way Bill",
        price: 490,
        blurb: "Generate compliant e-way bills for goods movement.",
      },
    ],
  },
  {
    slug: "income-tax",
    name: "Income Tax",
    short: "Income Tax",
    tagline: "Returns, TDS, notices and planning by tax experts.",
    icon: "Landmark",
    services: [
      {
        slug: "income-tax-return",
        name: "Income Tax Return",
        price: 1490,
        popular: true,
        blurb: "Accurate ITR filing for individuals and businesses.",
      },
      {
        slug: "tds-return",
        name: "TDS Return",
        price: 990,
        blurb: "Quarterly TDS return filing and compliance.",
      },
      {
        slug: "tcs-return",
        name: "TCS Return",
        price: 990,
        blurb: "Tax Collected at Source return filing.",
      },
      {
        slug: "15ca-15cb-filing",
        name: "15 CA / 15 CB Filing",
        price: 4990,
        blurb: "Compliance for foreign remittances with CA certification.",
      },
      {
        slug: "pan-registration",
        name: "PAN Registration",
        price: 490,
        blurb: "Apply for a new Permanent Account Number.",
      },
      {
        slug: "tan-registration",
        name: "TAN Registration",
        price: 690,
        blurb: "Tax Deduction Account Number for TDS deductors.",
      },
      {
        slug: "it-notice-response",
        name: "IT Notice Response",
        price: 2490,
        blurb: "Professional response to income-tax notices.",
      },
      {
        slug: "it-planning",
        name: "Income Tax Planning",
        price: 2490,
        blurb: "Legitimate, structured planning to optimise tax.",
      },
      {
        slug: "advance-tax-computation",
        name: "Advance Tax Computation",
        price: 1490,
        blurb: "Quarterly advance-tax calculation to avoid interest.",
      },
      {
        slug: "form-26qb-filing",
        name: "Form 26QB Filing",
        price: 1990,
        blurb: "TDS on property purchase filed correctly.",
      },
    ],
  },
  {
    slug: "mca",
    name: "MCA Services",
    short: "MCA / ROC",
    tagline: "Keep your company and LLP compliant with the Registrar.",
    icon: "Scale",
    services: [
      {
        slug: "company-compliances",
        name: "Company Compliances",
        price: 19990,
        popular: true,
        blurb: "Annual ROC compliance package for private companies.",
      },
      {
        slug: "llp-compliances",
        name: "LLP Compliances",
        price: 14990,
        blurb: "Annual compliance package for LLPs.",
      },
      {
        slug: "company-name-change",
        name: "Company Name Change",
        price: 2490,
        blurb: "Change your company's registered name with MCA.",
      },
      {
        slug: "company-address-change",
        name: "Company Address Change",
        price: 2490,
        blurb: "Update your registered office address.",
      },
      {
        slug: "din-ekyc-filing",
        name: "DIN eKYC Filing",
        price: 990,
        blurb: "Annual DIR-3 KYC for every director.",
      },
      {
        slug: "din-reactivation",
        name: "DIN Reactivation",
        price: 1490,
        blurb: "Reactivate a deactivated Director Identification Number.",
      },
      {
        slug: "din-application",
        name: "DIN Application",
        price: 1490,
        blurb: "Apply for a new Director Identification Number.",
      },
      {
        slug: "director-change",
        name: "Director Change",
        price: 1990,
        blurb: "Appoint or update directors on the board.",
      },
      {
        slug: "removal-of-director",
        name: "Removal of Director",
        price: 1990,
        blurb: "File for resignation or removal of a director.",
      },
      {
        slug: "adt-1-filing",
        name: "ADT-1 Filing",
        price: 1490,
        blurb: "Notify the ROC of auditor appointment.",
      },
      {
        slug: "dpt-3-filing",
        name: "DPT-3 Filing",
        price: 1490,
        blurb: "Annual return of deposits and loans.",
      },
      {
        slug: "llp-form-11",
        name: "LLP Form 11",
        price: 1490,
        blurb: "Annual return filing for LLPs.",
      },
      {
        slug: "dormant-status-filing",
        name: "Dormant Status Filing",
        price: 2490,
        blurb: "Obtain dormant status for an inactive company.",
      },
      {
        slug: "moa-amendment",
        name: "MOA Amendment",
        price: 1990,
        blurb: "Amend the Memorandum of Association.",
      },
      {
        slug: "aoa-amendment",
        name: "AOA Amendment",
        price: 1990,
        blurb: "Amend the Articles of Association.",
      },
      {
        slug: "increase-authorised-capital",
        name: "Increasing Authorised Capital",
        price: 1490,
        blurb: "Raise your company's authorised share capital.",
      },
      {
        slug: "share-transfer",
        name: "Share Transfer",
        price: 1990,
        blurb: "Transfer shares between shareholders compliantly.",
      },
      {
        slug: "demat-shares",
        name: "Demat of Shares",
        price: 2490,
        blurb: "Dematerialise physical shares as required by law.",
      },
      {
        slug: "winding-up-llp",
        name: "Winding up - LLP",
        price: 4990,
        blurb: "Strike off and close an LLP cleanly.",
      },
      {
        slug: "winding-up-company",
        name: "Winding up - Company",
        price: 8990,
        blurb: "Strike off and close a private company.",
      },
    ],
  },
  {
    slug: "compliances",
    name: "Compliances",
    short: "Compliances",
    tagline: "Ongoing legal, RBI and RERA compliances, off your plate.",
    icon: "ShieldCheck",
    services: [
      {
        slug: "fdi-filing-rbi",
        name: "FDI Filing with RBI",
        price: 3490,
        blurb: "Report foreign investment to the RBI on FIRMS.",
      },
      {
        slug: "fssai-renewal",
        name: "FSSAI Renewal",
        price: 990,
        blurb: "Renew your food licence before expiry.",
      },
      {
        slug: "fssai-return-filing",
        name: "FSSAI Return Filing",
        price: 990,
        blurb: "Annual FSSAI return (Form D1) filing.",
      },
      {
        slug: "iec-modifications",
        name: "IEC Modifications",
        price: 1490,
        blurb: "Update details on your Import Export Code.",
      },
      {
        slug: "rent-agreement",
        name: "Rent Agreement",
        price: 990,
        blurb: "Legally drafted rent/lease agreements.",
      },
      {
        slug: "gift-deed",
        name: "Gift Deed",
        price: 990,
        blurb: "Properly drafted gift deed for assets or property.",
      },
      {
        slug: "professional-contracts",
        name: "Professional Contracts",
        price: 2490,
        blurb: "Custom, enforceable business contracts.",
      },
      {
        slug: "bookkeeping",
        name: "Bookkeeping",
        price: 3490,
        unit: "monthly",
        popular: true,
        blurb: "Monthly accounting and books maintained by experts.",
      },
      {
        slug: "rera-ca-certificate",
        name: "RERA CA Certificate",
        price: 14990,
        blurb: "CA-certified RERA fund utilisation certificate.",
      },
      {
        slug: "quarterly-rera-compliance",
        name: "Quarterly RERA Compliance",
        price: 14990,
        blurb: "Ongoing quarterly RERA project compliance.",
      },
    ],
  },
  {
    slug: "payroll",
    name: "Payroll",
    short: "Payroll",
    tagline: "PF, ESIC, PT and TDS payroll compliance, done monthly.",
    icon: "Users",
    services: [
      {
        slug: "pf-registration",
        name: "PF Registration",
        price: 990,
        blurb: "Provident Fund registration for employers.",
      },
      {
        slug: "esic-registration",
        name: "ESIC Registration",
        price: 990,
        blurb: "Employee State Insurance registration.",
      },
      {
        slug: "pf-return-filing",
        name: "PF Return Filing",
        price: 990,
        blurb: "Monthly Provident Fund return filing.",
      },
      {
        slug: "esic-return-filing",
        name: "ESIC Return Filing",
        price: 990,
        blurb: "Monthly ESIC return filing.",
      },
      {
        slug: "form-16",
        name: "Form 16",
        price: 290,
        blurb: "Issue Form 16 TDS certificates to employees.",
      },
      {
        slug: "professional-tax-registration",
        name: "Professional Tax Registration",
        price: 990,
        blurb: "Employer professional-tax enrolment.",
      },
      {
        slug: "pt-return-filing",
        name: "PT Return Filing",
        price: 990,
        blurb: "Periodic professional-tax return filing.",
      },
      {
        slug: "tds-return-filing",
        name: "TDS Return Filing",
        price: 990,
        blurb: "Salary TDS return filing for employers.",
      },
      {
        slug: "nps-compliance",
        name: "NPS Compliance",
        price: 1490,
        blurb: "National Pension System employer compliance.",
      },
    ],
  },
  {
    slug: "certificates",
    name: "Certificates",
    short: "Certificates",
    tagline: "CA-certified certificates and reports for banks and tenders.",
    icon: "Award",
    services: [
      {
        slug: "networth-certificate",
        name: "Networth Certificate",
        price: 4990,
        popular: true,
        blurb: "CA-certified net-worth certificate for visas and tenders.",
      },
      {
        slug: "turnover-certificate",
        name: "Turnover Certificate",
        price: 4990,
        blurb: "Certified turnover certificate for banks and bids.",
      },
      {
        slug: "rera-certificate",
        name: "RERA Certificate",
        price: 14990,
        blurb: "CA certificate for RERA project compliance.",
      },
      {
        slug: "plant-machinery-certificate",
        name: "Plant & Machinery Certificate",
        price: 4990,
        blurb: "Valuation certificate for plant and machinery.",
      },
      {
        slug: "valuation-certificate",
        name: "Valuation Certificate",
        price: 9990,
        blurb: "Business/asset valuation certificate by experts.",
      },
      {
        slug: "payroll-certificate",
        name: "Payroll Certificate",
        price: 4990,
        blurb: "Certified payroll certificate for compliance needs.",
      },
      {
        slug: "15ca-15cb-certificate",
        name: "15CA & 15CB Certificate",
        price: 4990,
        blurb: "CA certification for foreign remittances.",
      },
      {
        slug: "stock-certificate",
        name: "Stock Certificate",
        price: 6990,
        blurb: "Certified stock statement for working-capital limits.",
      },
      {
        slug: "estimated-projection-certificate",
        name: "Estimated Projection Certificate",
        price: 6990,
        blurb: "Projected financials certificate for loan applications.",
      },
      {
        slug: "cfa-report",
        name: "CFA Report",
        price: 8990,
        blurb: "Credit Facility Appraisal report for lenders.",
      },
      {
        slug: "project-report",
        name: "Project Report",
        price: 8990,
        blurb: "Bankable project report for funding and loans.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Derived helpers                                                     */
/* ------------------------------------------------------------------ */

export interface ServiceWithCategory extends Service {
  category: Pick<ServiceCategory, "slug" | "name" | "short" | "icon">;
}

/** Flattened list of every service, each tagged with its category. */
export const allServices: ServiceWithCategory[] = categories.flatMap((c) =>
  c.services.map((s) => ({
    ...s,
    category: { slug: c.slug, name: c.name, short: c.short, icon: c.icon },
  })),
);

export const totalServiceCount = allServices.length;

export function getCategory(slug: string): ServiceCategory | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getService(
  categorySlug: string,
  serviceSlug: string,
): ServiceWithCategory | undefined {
  return allServices.find(
    (s) => s.category.slug === categorySlug && s.slug === serviceSlug,
  );
}

/** Curated set surfaced on the homepage "top services" grid. */
export const popularServices: ServiceWithCategory[] = allServices.filter(
  (s) => s.popular,
);

/** All [category, service] slug pairs — used by generateStaticParams later. */
export function allServiceParams(): { category: string; slug: string }[] {
  return allServices.map((s) => ({ category: s.category.slug, slug: s.slug }));
}
