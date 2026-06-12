/**
 * Rich, India-specific content authored per service category. Every service
 * inherits its category's overview, benefits, documents, process, eligibility
 * and FAQs — so each of the ~89 service pages is deep and accurate without
 * 89 hand-written essays. Service-level specifics are layered on top in
 * lib/service-content.ts.
 *
 * Note: figures (thresholds, rates, due dates) are general guidance and can
 * change with the Finance Act / notifications — phrased to stay evergreen.
 */

export interface BenefitItem {
  title: string;
  desc: string;
}

export interface ProcessStep {
  title: string;
  desc: string;
  duration?: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface CategoryContent {
  overview: string;
  benefits: BenefitItem[];
  documents: string[];
  process: ProcessStep[];
  eligibility: string[];
  faqs: Faq[];
  timeline: string;
}

export const categoryContent: Record<string, CategoryContent> = {
  "business-incorporation": {
    overview:
      "Choosing and registering the right business structure is the foundation of every successful venture in India. The entity you pick shapes your liability, taxes, compliance load and ability to raise capital. Big4India helps you incorporate the right structure end-to-end — from name approval to your Certificate of Incorporation, PAN, TAN and current bank account.",
    timeline: "7–12 working days",
    benefits: [
      { title: "Limited liability protection", desc: "Your personal assets stay protected — liability is limited to your capital contribution." },
      { title: "Credibility & fundraising", desc: "A registered company earns trust with banks, clients and investors, and is essential to raise equity." },
      { title: "Perpetual succession", desc: "The business continues seamlessly regardless of changes in ownership or management." },
      { title: "Tax efficiency", desc: "Access lower corporate tax rates, deductions and the Startup India tax holiday." },
      { title: "Brand & name protection", desc: "Reserve your unique company name across India and build a defensible brand." },
      { title: "End-to-end with one partner", desc: "We handle MCA filing, PAN, TAN, DSCs and bank account setup in one go." },
    ],
    documents: [
      "PAN card of all directors / partners",
      "Aadhaar card of all directors / partners",
      "Passport-size photographs",
      "Identity & address proof (bank statement / utility bill, max 2 months old)",
      "Registered office proof (rent agreement + NOC, or ownership proof)",
      "Latest utility bill of the registered office",
      "Passport (mandatory for foreign nationals / NRIs)",
      "Email ID and mobile number of all directors",
    ],
    process: [
      { title: "Consultation & structure selection", desc: "We understand your goals and recommend the ideal entity.", duration: "Day 1" },
      { title: "Name reservation (SPICe+ Part A)", desc: "We check availability and reserve your company name with the MCA.", duration: "1–2 days" },
      { title: "Digital Signatures & DIN", desc: "We obtain DSCs and Director Identification Numbers for all directors.", duration: "1–2 days" },
      { title: "Drafting & filing (SPICe+, MOA, AOA)", desc: "We prepare and file all incorporation documents with the MCA.", duration: "2–3 days" },
      { title: "Incorporation, PAN & TAN", desc: "The MCA issues your Certificate of Incorporation with company PAN and TAN.", duration: "3–5 days" },
      { title: "Bank account & post-setup", desc: "We help open a current account and set up your initial compliance.", duration: "2–3 days" },
    ],
    eligibility: [
      "Minimum 2 directors and 2 shareholders for a Private Limited Company (1 each for an OPC)",
      "At least one director must be a resident of India",
      "A unique company name, not identical to an existing company or trademark",
      "A valid registered office address in India",
      "Valid PAN and identity/address proof for all directors",
    ],
    faqs: [
      { question: "Which business structure is best for a startup in India?", answer: "Most scalable or funded startups choose a Private Limited Company for its credibility and ability to raise equity. Solo founders often prefer an OPC or LLP. We'll recommend the best fit in a free consultation based on your goals." },
      { question: "How long does company registration take?", answer: "Typically 7–12 working days once all documents are ready, subject to MCA processing and name-approval timelines." },
      { question: "Can I register a company at my home (residential) address?", answer: "Yes. You can use a residential address as your registered office with a recent utility bill and a No-Objection Certificate from the owner." },
      { question: "Is there a minimum capital requirement to start a company?", answer: "No. There is no minimum paid-up capital requirement for a Private Limited Company or LLP in India — you can start with any amount." },
      { question: "Can foreign nationals or NRIs be directors or shareholders?", answer: "Yes. Foreign nationals and NRIs can be directors and shareholders, but at least one director must be an Indian resident and foreign documents must be notarised/apostilled." },
      { question: "What do I receive after incorporation?", answer: "Your Certificate of Incorporation, company PAN & TAN, DIN for directors, DSCs, MOA & AOA, and our help to open a current bank account." },
      { question: "Do I need GST registration along with incorporation?", answer: "GST is a separate registration. Many new companies register for GST right after incorporation — we can bundle both so you're fully ready to invoice." },
    ],
  },

  registration: {
    overview:
      "Beyond incorporation, every business needs registrations and licences to operate legally and unlock benefits — from MSME/Udyam and Startup India recognition to FSSAI, Import Export Code, PF/ESIC and professional tax. The right registrations open subsidies, tenders, collateral-free loans and customer trust. Big4India identifies exactly what your business needs and gets you registered fast.",
    timeline: "Same week for most registrations",
    benefits: [
      { title: "Unlock government benefits", desc: "MSME, Startup India and similar registrations open subsidies, tax holidays and priority lending." },
      { title: "Operate fully legally", desc: "Licences like FSSAI and IEC are mandatory for specific activities — we keep you compliant." },
      { title: "Access tenders & loans", desc: "Many registrations are prerequisites for government tenders and collateral-free MSME loans." },
      { title: "Build customer trust", desc: "Displayed registrations signal legitimacy to customers, marketplaces and partners." },
      { title: "Every licence, one partner", desc: "We handle all your registrations under one roof with a single point of contact." },
    ],
    documents: [
      "PAN and Aadhaar of the proprietor / directors / partners",
      "Business PAN (for companies / LLPs)",
      "Certificate of Incorporation / partnership deed",
      "Registered office / place-of-business address proof",
      "Bank account details / cancelled cheque",
      "Passport-size photographs",
      "Digital Signature Certificate (where required)",
      "Activity-specific documents (e.g. food-premises layout for FSSAI)",
    ],
    process: [
      { title: "Requirement assessment", desc: "We map exactly which registrations your business legally needs.", duration: "Day 1" },
      { title: "Document collection", desc: "We share a precise checklist and collect your documents.", duration: "1–2 days" },
      { title: "Application filing", desc: "We file applications on the relevant government portals.", duration: "1–3 days" },
      { title: "Department processing", desc: "We respond to any departmental queries or clarifications.", duration: "Varies" },
      { title: "Certificate issuance", desc: "You receive your registration certificate or number.", duration: "3–10 days" },
    ],
    eligibility: [
      "Any individual, firm, LLP or company carrying on business in India",
      "Valid PAN and a bank account in the business or owner's name",
      "Activity-specific eligibility (e.g. food business for FSSAI, exporter for IEC)",
      "A valid Indian address proof for the place of business",
    ],
    faqs: [
      { question: "Which registrations does my business actually need?", answer: "It depends on your activity, turnover and goals. Common ones are Udyam (MSME), GST, FSSAI (food), IEC (import/export) and PF/ESIC (employees). We give you a tailored checklist free of cost." },
      { question: "Is Udyam (MSME) registration mandatory and free?", answer: "Udyam registration is free on the government portal and not strictly mandatory, but it's highly recommended to access MSME benefits, subsidies and easier credit. Our fee covers expert handling and accuracy." },
      { question: "How long is an FSSAI licence valid?", answer: "FSSAI licences are valid for 1 to 5 years depending on the period you choose, and must be renewed before expiry to avoid penalties and business disruption." },
      { question: "What is an Import Export Code (IEC) and who needs it?", answer: "IEC is a 10-digit code from the DGFT, mandatory for any business importing or exporting goods or services from India. It's a one-time registration with lifetime validity." },
      { question: "Who is eligible for Startup India (DPIIT) recognition?", answer: "Entities incorporated less than 10 years ago with turnover under ₹100 crore, working on innovation or scalability, can get DPIIT recognition for tax holidays, self-certification and funding access." },
      { question: "When are PF and ESIC registrations mandatory?", answer: "PF (EPFO) is mandatory for establishments with 20+ employees and ESIC for 10+ employees in notified areas. Smaller employers can also register voluntarily." },
    ],
  },

  gst: {
    overview:
      "GST is India's unified indirect tax, and staying compliant is non-negotiable for most businesses. From obtaining your GSTIN to filing monthly and annual returns, claiming input tax credit and handling notices, small errors can mean penalties and blocked credit. Big4India manages your entire GST lifecycle so you stay compliant, claim every rupee of credit, and never miss a deadline.",
    timeline: "3–7 working days for registration",
    benefits: [
      { title: "Claim legitimate input credit", desc: "Reconcile and claim input tax credit correctly to improve cash flow." },
      { title: "Avoid penalties & interest", desc: "Timely, accurate filing prevents late fees, 18% interest and notices." },
      { title: "Sell across India & online", desc: "GST registration lets you trade inter-state and on e-commerce marketplaces." },
      { title: "Dedicated GST specialist", desc: "An expert handles reconciliation and filing every cycle — not a bot." },
      { title: "Notice handling included", desc: "We draft and respond to GST department notices on your behalf." },
    ],
    documents: [
      "PAN of the business and proprietor / directors",
      "Aadhaar of the proprietor / authorised signatory",
      "Proof of business registration or incorporation",
      "Address proof of the principal place of business",
      "Bank account statement / cancelled cheque",
      "Photographs of the proprietor / partners / directors",
      "Digital Signature Certificate (for companies / LLPs)",
      "Authorisation letter / board resolution",
    ],
    process: [
      { title: "Eligibility & document check", desc: "We confirm your registration type and collect documents.", duration: "Day 1" },
      { title: "GST application (REG-01)", desc: "We file your registration on the GST portal.", duration: "1–2 days" },
      { title: "ARN & verification", desc: "An Application Reference Number is generated; we handle any queries.", duration: "1–3 days" },
      { title: "GSTIN issued", desc: "Your GST number and registration certificate are issued.", duration: "3–7 days" },
      { title: "Ongoing return filing", desc: "We file GSTR-1, GSTR-3B and annual returns on schedule.", duration: "Monthly / Quarterly" },
    ],
    eligibility: [
      "Turnover above ₹40 lakh for goods (₹20 lakh for services) in most states",
      "Inter-state suppliers and e-commerce sellers (mandatory regardless of turnover)",
      "Casual taxable persons and non-resident taxable persons",
      "Businesses voluntarily registering to claim input tax credit",
    ],
    faqs: [
      { question: "Who must register for GST in India?", answer: "Businesses with turnover above ₹40 lakh (goods) or ₹20 lakh (services), inter-state suppliers, and e-commerce sellers must register — in some cases regardless of turnover. We'll confirm your obligation free." },
      { question: "How long does GST registration take?", answer: "Usually 3–7 working days after a complete application, subject to Aadhaar authentication and departmental verification." },
      { question: "What are the GST return due dates?", answer: "GSTR-1 and GSTR-3B are typically due on the 11th and 20th of the following month; QRMP taxpayers file quarterly. We track every deadline so you never miss one." },
      { question: "What happens if I miss a GST return?", answer: "Late filing attracts a late fee (₹50/day, ₹20 for nil returns) plus 18% interest, and can block your e-way bills and input tax credit until you file." },
      { question: "Should I register for GST voluntarily?", answer: "Voluntary registration lets you claim input tax credit and sell to GST-registered buyers who prefer compliant vendors — often worth it even below the threshold." },
      { question: "What is a LUT and who needs to file it?", answer: "A Letter of Undertaking lets exporters and SEZ suppliers ship goods/services without paying IGST. It's filed annually at the start of each financial year." },
      { question: "What is GSTR-9 and who files it?", answer: "GSTR-9 is the annual GST return consolidating all monthly/quarterly returns, mandatory for regular taxpayers above the prescribed turnover limit." },
    ],
  },

  "income-tax": {
    overview:
      "Income-tax compliance — from filing returns to managing TDS, responding to notices and planning ahead — protects your finances and unlocks refunds and deductions. Mistakes invite scrutiny, penalties and interest. Big4India's tax experts file accurately, optimise your tax legally, and represent you on notices, so you keep more of what you earn and stay stress-free.",
    timeline: "Filed within 24–48 hours of documents",
    benefits: [
      { title: "Maximise refunds & deductions", desc: "Claim every eligible deduction under 80C, 80D, NPS, home-loan interest and more." },
      { title: "Avoid penalties & notices", desc: "Accurate, on-time filing keeps you off the department's radar." },
      { title: "Expert notice handling", desc: "We draft replies and represent you for income-tax notices and scrutiny." },
      { title: "Legitimate tax planning", desc: "Structure income and investments to legally minimise your tax outgo." },
      { title: "Faster refunds", desc: "Clean, correctly-filed returns get processed and refunded faster." },
    ],
    documents: [
      "PAN and Aadhaar",
      "Form 16 / salary slips (for salaried individuals)",
      "Form 26AS and AIS / TIS statements",
      "Bank statements and interest certificates",
      "Investment proofs (80C, 80D, etc.)",
      "Capital-gains statements (if any)",
      "Business books / financials (for business income)",
      "Details of other income (rent, dividends, etc.)",
    ],
    process: [
      { title: "Document collection & review", desc: "We gather your income, TDS and deduction details.", duration: "Day 1" },
      { title: "Computation & optimisation", desc: "We compute tax and apply every eligible deduction and regime choice.", duration: "1–2 days" },
      { title: "Your review & approval", desc: "You review the computation before anything is filed.", duration: "1 day" },
      { title: "E-filing & verification", desc: "We file the return and complete e-verification.", duration: "Same day" },
      { title: "Refund tracking", desc: "We track processing and keep you posted on your refund.", duration: "Ongoing" },
    ],
    eligibility: [
      "Individuals with income above the basic exemption limit",
      "Anyone seeking a refund of excess TDS",
      "Businesses, professionals and freelancers",
      "Those with foreign income/assets or losses to carry forward",
    ],
    faqs: [
      { question: "Who needs to file an income tax return?", answer: "Anyone whose income exceeds the basic exemption limit, or who wants a refund, has foreign assets, or needs to carry forward losses, should file an ITR — even if no tax is finally payable." },
      { question: "What is the due date for filing ITR?", answer: "For most individuals it's 31 July of the assessment year; audited cases have later dates. Filing after the due date attracts a late fee of up to ₹5,000." },
      { question: "Which ITR form should I file?", answer: "It depends on your income sources — salary, business, capital gains, etc. Our experts select the correct form so your return isn't treated as defective." },
      { question: "What are Form 26AS and AIS?", answer: "Form 26AS and the Annual Information Statement show your TDS and reported transactions. We reconcile them with your return to avoid mismatches and notices." },
      { question: "How can I save tax legally?", answer: "Through deductions (80C, 80D, NPS, home-loan interest), the right regime choice, and structuring income. We build a personalised, fully legal tax plan." },
      { question: "I received an income tax notice — what should I do?", answer: "Don't ignore it. Share the notice with us; we'll analyse it, draft a proper response and represent you within the deadline to resolve it cleanly." },
      { question: "Old regime or new regime — which is better for me?", answer: "It depends on your deductions and income mix. We compute both and recommend the one that minimises your tax for the year." },
    ],
  },

  mca: {
    overview:
      "Once incorporated, every company and LLP must meet ongoing MCA/ROC obligations — annual filings, director changes, KYC, statutory registers and event-based forms. Missing these invites penalties of ₹100 per day per form, with no upper cap, and can disqualify directors. Big4India keeps your company in good standing with a dedicated company secretary handling every filing and deadline.",
    timeline: "Filed within statutory due dates",
    benefits: [
      { title: "Avoid uncapped penalties", desc: "ROC late fees are ₹100/day per form with no maximum — we ensure you never incur them." },
      { title: "Stay in good standing", desc: "An active compliance status keeps banking, funding and tenders open to you." },
      { title: "Protect your directors", desc: "Avoid director disqualification and DIN deactivation." },
      { title: "Dedicated company secretary", desc: "A qualified CS manages your statutory calendar and filings." },
      { title: "Audit-ready records", desc: "Registers, minutes and resolutions maintained and kept audit-ready." },
    ],
    documents: [
      "Certificate of Incorporation, MOA & AOA",
      "PAN of the company / LLP",
      "DSC of directors / designated partners",
      "Financial statements and audit report",
      "Board / shareholder resolutions",
      "Details of directors and shareholders",
      "Previous year's MCA filings (if any)",
      "Event-specific documents (e.g. resignation letter for a director change)",
    ],
    process: [
      { title: "Compliance audit", desc: "We review your company's status and any pending filings.", duration: "Day 1" },
      { title: "Document & data collection", desc: "We gather financials, resolutions and director KYC.", duration: "1–3 days" },
      { title: "Form preparation", desc: "We prepare the relevant MCA forms (AOC-4, MGT-7, etc.).", duration: "2–4 days" },
      { title: "Filing with the ROC", desc: "We file with your DSC and pay the statutory fees.", duration: "1–2 days" },
      { title: "Acknowledgement & records", desc: "You receive challans and updated statutory registers.", duration: "Same day" },
    ],
    eligibility: [
      "All Private Limited, OPC and Public companies registered in India",
      "All Limited Liability Partnerships (LLPs)",
      "Companies needing event-based filings (director/address/capital changes)",
      "Every director required to complete annual DIN KYC",
    ],
    faqs: [
      { question: "What are the annual compliance requirements for a Pvt Ltd company?", answer: "Key filings include AOC-4 (financials), MGT-7 (annual return), DIR-3 KYC, board meetings and the statutory audit — every financial year, regardless of turnover or activity." },
      { question: "What is the penalty for late ROC filing?", answer: "Late filing of MCA forms attracts ₹100 per day per form with no maximum cap, so even a short delay becomes expensive. We make sure you file on time." },
      { question: "Is annual compliance needed even with no business activity?", answer: "Yes. Even dormant or zero-revenue companies must file annual returns and complete KYC, or face penalties and eventual strike-off by the ROC." },
      { question: "What is DIR-3 KYC and why does it matter?", answer: "Every director with a DIN must complete annual KYC with the MCA. Missing it deactivates the DIN and attracts a ₹5,000 reactivation fee." },
      { question: "How do I change my company's name or registered office?", answer: "Both require board/shareholder approval and specific MCA filings. We handle the resolutions and forms end-to-end so the change is clean and compliant." },
      { question: "What happens if a company doesn't file for several years?", answer: "It can be marked inactive, its directors disqualified, and the company struck off. We can also help with revival, condonation and back-filing." },
      { question: "Can you handle director appointments and resignations?", answer: "Yes. We file DIR-12 and related forms for appointments, resignations and removals, and update your statutory registers accordingly." },
    ],
  },

  compliances: {
    overview:
      "Growing businesses face a web of ongoing compliances beyond tax — RBI/FDI reporting under FEMA, RERA for real estate, FSSAI renewals, legal agreements and bookkeeping. Each has its own forms, deadlines and penalties. Big4India acts as your outsourced compliance department, keeping every obligation on track so you can focus on growth, not paperwork.",
    timeline: "Aligned to each statutory deadline",
    benefits: [
      { title: "One compliance partner", desc: "RBI, RERA, FSSAI, contracts and books — all managed under one roof." },
      { title: "Penalty protection", desc: "We track every due date so you never miss a filing or renewal." },
      { title: "Audit-ready books", desc: "Clean, reconciled bookkeeping that's ready for any scrutiny." },
      { title: "Legally sound documents", desc: "Agreements drafted by professionals, not generic templates." },
      { title: "Sector expertise", desc: "Specialists for RBI/FEMA, RERA and food-sector compliance." },
    ],
    documents: [
      "Business registration and PAN",
      "Financial records and bank statements",
      "Foreign investment details (for FDI / FEMA filings)",
      "Project and sale-deed details (for RERA)",
      "Existing licences to be renewed (e.g. FSSAI)",
      "Agreement terms and party details (for contracts)",
      "Previous compliance filings",
    ],
    process: [
      { title: "Compliance mapping", desc: "We list every obligation applicable to your business.", duration: "Day 1" },
      { title: "Calendar & checklist", desc: "We build a due-date calendar and document checklist.", duration: "1–2 days" },
      { title: "Preparation & drafting", desc: "We prepare filings or draft your agreements.", duration: "2–5 days" },
      { title: "Filing / execution", desc: "We file with the authority or finalise the document.", duration: "Varies" },
      { title: "Records & reminders", desc: "You get records plus reminders for the next cycle.", duration: "Ongoing" },
    ],
    eligibility: [
      "Companies receiving or making foreign investment (FDI / ODI)",
      "Real-estate promoters and agents (RERA)",
      "Food businesses (FSSAI) and importers/exporters (IEC)",
      "Any business needing legal agreements or outsourced bookkeeping",
    ],
    faqs: [
      { question: "What is FDI reporting to the RBI?", answer: "Companies receiving foreign investment must report it to the RBI (Form FC-GPR) within 30 days of share allotment via the FIRMS portal. Delays attract penalties under FEMA — we manage the deadline for you." },
      { question: "Who needs RERA registration and compliance?", answer: "Real-estate promoters of projects above the prescribed size, and property agents, must register under RERA and file quarterly project updates plus a CA certificate." },
      { question: "How often must FSSAI returns be filed?", answer: "Most food businesses file an annual return (Form D1) by 31 May; certain categories file half-yearly. We handle renewals and returns so your licence stays active." },
      { question: "Do you provide monthly bookkeeping?", answer: "Yes. Our bookkeeping service maintains your ledgers, bank reconciliation and management reports monthly, keeping you audit- and tax-ready year-round." },
      { question: "Can you draft legal agreements and contracts?", answer: "Yes — rent agreements, gift deeds, professional and vendor contracts, all drafted and vetted by professionals for enforceability." },
      { question: "What are the penalties for missing RBI/FEMA filings?", answer: "FEMA contraventions can attract penalties up to three times the amount involved, so timely reporting is critical. We keep your foreign-investment filings on schedule." },
    ],
  },

  payroll: {
    overview:
      "Running payroll in India means more than paying salaries — it's PF, ESIC, professional tax, TDS and Form 16, each with its own monthly deadlines and filings. Errors hurt employee trust and invite penalties. Big4India runs your statutory payroll compliance accurately every month, so your team is paid right and your filings are always on time.",
    timeline: "Processed every payroll cycle",
    benefits: [
      { title: "Accurate statutory filings", desc: "PF, ESIC, PT and TDS computed and filed correctly every cycle." },
      { title: "Penalty-free compliance", desc: "Never miss a payroll deadline or face interest and damages." },
      { title: "Employee trust", desc: "Correct deductions and timely Form 16 build confidence in your team." },
      { title: "Scales as you grow", desc: "Onboard more employees without adding compliance headaches." },
      { title: "Confidential & secure", desc: "Payroll and salary data handled with bank-grade security." },
    ],
    documents: [
      "Employee details (PAN, Aadhaar, bank, UAN)",
      "Salary structure and attendance / leave data",
      "PF and ESIC registration details",
      "Professional tax registration",
      "TAN of the employer",
      "Previous payroll / challan records",
      "Offer letters / CTC break-ups",
    ],
    process: [
      { title: "Setup & registration", desc: "We register or verify PF, ESIC, PT and TAN.", duration: "Week 1" },
      { title: "Salary & deduction processing", desc: "We compute salaries, PF, ESIC, PT and TDS each cycle.", duration: "Each cycle" },
      { title: "Challan generation", desc: "We generate challans for all statutory dues.", duration: "Monthly" },
      { title: "Return filing", desc: "We file PF, ESIC, PT and TDS returns on time.", duration: "Monthly / Quarterly" },
      { title: "Form 16 & reports", desc: "We issue Form 16 and management payroll reports.", duration: "Annual" },
    ],
    eligibility: [
      "Employers with employees on payroll in India",
      "Establishments with 20+ employees (PF) or 10+ (ESIC) — mandatory",
      "Businesses deducting TDS on salaries (TAN required)",
      "Any employer wanting to outsource payroll compliance",
    ],
    faqs: [
      { question: "When is PF registration mandatory?", answer: "PF (EPFO) registration is mandatory for establishments employing 20 or more people; smaller employers can register voluntarily to offer the benefit." },
      { question: "When is ESIC applicable?", answer: "ESIC applies to establishments with 10 or more employees in notified areas, covering workers earning up to ₹21,000/month with medical and cash benefits." },
      { question: "What are the PF and ESIC contribution rates?", answer: "PF is 12% each from employee and employer; ESIC is 0.75% (employee) and 3.25% (employer) of wages. We compute and file these accurately every month." },
      { question: "What is Form 16 and when must it be issued?", answer: "Form 16 is the TDS certificate employers issue to salaried employees, typically by 15 June each year, which employees use to file their income tax returns." },
      { question: "What is professional tax and who pays it?", answer: "Professional tax is a state-level tax on salaries and professions (where applicable), deducted by employers and paid to the state. Rates and applicability vary by state." },
      { question: "Can you handle payroll for a small team?", answer: "Absolutely. We support businesses of every size — from a single employee to large teams — with the same accuracy and statutory compliance." },
    ],
  },

  certificates: {
    overview:
      "Banks, tenders, visas and investors often demand CA-certified certificates — net worth, turnover, valuation, projections and more. To be accepted, these must be issued by a practising Chartered Accountant with proper backing documentation and a UDIN. Big4India delivers accurate, verifiable, CA-certified certificates fast, so your loan, bid or application never stalls.",
    timeline: "1–3 working days",
    benefits: [
      { title: "Accepted everywhere", desc: "Certificates issued by practising CAs, accepted by banks, tenders and embassies." },
      { title: "Fast turnaround", desc: "Get certified documents quickly when your deadline is tight." },
      { title: "Accurate & defensible", desc: "Every figure is backed by proper computation and documentation." },
      { title: "Wide range covered", desc: "Net worth, turnover, valuation, projections, stock and more." },
      { title: "Expert guidance", desc: "We tell you exactly which certificate you need and in what format." },
    ],
    documents: [
      "PAN and KYC of the applicant / entity",
      "Financial statements / audited accounts",
      "Bank statements and asset/liability details",
      "Purpose of the certificate (bank, visa, tender, etc.)",
      "Supporting documents specific to the certificate",
      "GST / sales records (for turnover certificates)",
      "Asset valuation inputs (for valuation / net-worth)",
    ],
    process: [
      { title: "Requirement & purpose check", desc: "We confirm which certificate you need and its required format.", duration: "Day 1" },
      { title: "Document collection", desc: "We gather your financials and supporting evidence.", duration: "1–2 days" },
      { title: "Computation & verification", desc: "Our CA verifies the figures and prepares the certificate.", duration: "1–3 days" },
      { title: "CA certification (UDIN)", desc: "A practising CA signs and stamps the certificate with a UDIN.", duration: "1 day" },
      { title: "Delivery", desc: "You receive the certificate digitally and/or physically.", duration: "Same day" },
    ],
    eligibility: [
      "Individuals or businesses needing a certified financial document",
      "Loan, visa or tender applicants requiring CA certification",
      "Companies needing valuation, net-worth or projection certificates",
      "Anyone whose figures can be supported with documentation",
    ],
    faqs: [
      { question: "What is a CA-certified certificate?", answer: "It's a financial certificate (net worth, turnover, valuation, etc.) issued and signed by a practising Chartered Accountant with a UDIN, making it officially verifiable by the requesting authority." },
      { question: "What is a UDIN and why is it important?", answer: "A Unique Document Identification Number is generated by the CA on the ICAI portal. It lets any bank, embassy or authority verify that the certificate is genuine and CA-issued." },
      { question: "When do I need a net worth certificate?", answer: "Commonly for visa applications, bank loans, tenders and director/partner KYC — to prove an individual's or entity's financial standing with CA backing." },
      { question: "How quickly can I get a certificate?", answer: "Many certificates are issued within 1–3 working days once the supporting documents are in order. Urgent requirements can often be expedited." },
      { question: "What is a turnover certificate used for?", answer: "To prove business revenue for tenders, bank facilities and government schemes, certified against your books and GST/sales records." },
      { question: "Do you provide valuation and projection certificates?", answer: "Yes — business and asset valuation, projected financials (CMA / project reports) and stock certificates, all CA-certified for loans and funding." },
    ],
  },
};

export function getCategoryContent(slug: string): CategoryContent | undefined {
  return categoryContent[slug];
}
