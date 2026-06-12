/**
 * Blog content. Bodies are Markdown (rendered with react-markdown + remark-gfm).
 * Seeded with 10 high-intent, India-specific posts. Information is general
 * guidance and may change with the Finance Act / notifications.
 *
 * To publish a new post, append an object to blogPosts — the index, post page,
 * sitemap and JSON-LD update automatically.
 */
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  author: string;
  authorRole: string;
  date: string; // ISO (YYYY-MM-DD)
  readMinutes: number;
  cta: { label: string; href: string };
  body: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-register-private-limited-company-india",
    title: "How to Register a Private Limited Company in India: 2026 Step-by-Step Guide",
    excerpt:
      "Everything you need to register a Private Limited Company in India — eligibility, documents, the SPICe+ process, costs and timelines, explained simply.",
    category: "Business Incorporation",
    tags: ["Private Limited", "Company Registration", "Startup", "MCA"],
    author: "CA Rahul Shah",
    authorRole: "Chartered Accountant",
    date: "2026-05-28",
    readMinutes: 7,
    cta: {
      label: "Register your Private Limited Company",
      href: "/services/business-incorporation/private-limited-company",
    },
    body: `A Private Limited Company is the most popular structure for startups and growing businesses in India — and for good reason. It offers limited liability, a separate legal identity, and the credibility investors and banks look for. This guide walks you through exactly how to register one in 2026.

## What is a Private Limited Company?

A Private Limited Company (Pvt Ltd) is a privately held entity registered under the Companies Act, 2013 and regulated by the Ministry of Corporate Affairs (MCA). Its shareholders enjoy **limited liability** — personal assets are protected — and the company continues to exist independently of its owners.

## Eligibility and requirements

Before you begin, make sure you meet the basic conditions:

- A **minimum of 2 directors** and **2 shareholders** (a person can be both).
- At least **one director must be a resident of India**.
- A **unique company name** not identical to an existing company or trademark.
- A **registered office address** in India (a residential address works).
- There is **no minimum capital** requirement.

## Documents required

- PAN and Aadhaar of all directors and shareholders
- Passport-size photographs
- Identity and address proof (bank statement or utility bill, max 2 months old)
- Registered office proof — rent agreement plus a No-Objection Certificate, or ownership proof
- Latest utility bill of the office address
- Passport (mandatory for foreign nationals)

## The registration process (SPICe+)

The MCA's integrated **SPICe+** form handles incorporation end to end:

1. **Name reservation (SPICe+ Part A)** — reserve a unique name.
2. **Digital Signature Certificates (DSC)** — obtained for all directors.
3. **Director Identification Number (DIN)** — applied within the SPICe+ form.
4. **Drafting MOA & AOA** — your company's charter documents.
5. **Filing SPICe+ Part B** — incorporation, PAN and TAN in a single application.
6. **Certificate of Incorporation** — issued by the MCA with your CIN.

## Costs and timeline

Government fees vary by state and authorised capital, while professional fees are separate. With Big4India, the professional fee for Private Limited registration starts at **₹1,990 (excluding GST and government fees)**. The entire process typically takes **7–12 working days** once documents are ready.

## What you get after incorporation

Your Certificate of Incorporation, company PAN and TAN, DINs, DSCs, and MOA & AOA. You can then open a current bank account and begin operations.

> **Tip:** Most founders register for GST right after incorporation so they're ready to raise invoices from day one.

Registering a company correctly the first time saves you from costly corrections later. If you'd like experts to handle it end to end, our team can take care of everything.`,
  },

  {
    slug: "pvt-ltd-vs-llp-vs-opc",
    title: "Private Limited vs LLP vs OPC: Which Business Structure Should You Choose?",
    excerpt:
      "Confused between a Private Limited Company, LLP and One Person Company? Compare liability, compliance, taxation and fundraising to pick the right structure.",
    category: "Business Incorporation",
    tags: ["Private Limited", "LLP", "OPC", "Business Structure"],
    author: "CA Neha Verma",
    authorRole: "Chartered Accountant",
    date: "2026-05-12",
    readMinutes: 6,
    cta: {
      label: "Not sure which to choose? Talk to an expert",
      href: "/services/business-incorporation",
    },
    body: `Choosing the right structure is one of the most important early decisions for any founder. It affects your liability, taxes, compliance burden and ability to raise funds. Here's how the three most common options compare.

## Quick comparison

| Factor | Private Limited | LLP | One Person Company |
| --- | --- | --- | --- |
| Owners | 2–200 shareholders | 2+ partners | 1 owner |
| Liability | Limited | Limited | Limited |
| Fundraising | Best (equity) | Limited | Limited |
| Compliance | High | Moderate | Moderate |
| Best for | Startups, scaling | Professionals, firms | Solo founders |

## Private Limited Company

The go-to choice for **startups planning to scale or raise venture capital**. It allows equity shares, ESOPs and easy entry/exit of investors. The trade-off is higher compliance — annual filings, board meetings and audits.

## Limited Liability Partnership (LLP)

An LLP blends a partnership's flexibility with limited liability. It has **lower compliance costs** than a company and no mandatory audit below prescribed turnover. It's ideal for **professional services firms and bootstrapped businesses** that don't plan to raise equity.

## One Person Company (OPC)

Designed for **solo entrepreneurs** who want limited liability without a partner. An OPC has a single shareholder and continues the benefits of a corporate structure, but it must convert to a Private Limited Company once it crosses certain thresholds.

## How to decide

- **Raising funding or issuing ESOPs?** Choose a Private Limited Company.
- **A professional firm or low-compliance preference?** An LLP fits well.
- **A solo founder wanting a corporate shield?** Start with an OPC.

There's no one-size-fits-all answer — the right choice depends on your goals, funding plans and risk appetite. A short consultation can save you from an expensive restructuring later.`,
  },

  {
    slug: "gst-registration-process-documents",
    title: "GST Registration in India: Process, Documents, Fees & Threshold Explained",
    excerpt:
      "Who needs GST registration, what documents are required, how long it takes and what it costs — a complete, up-to-date guide for Indian businesses.",
    category: "GST",
    tags: ["GST", "GST Registration", "GSTIN", "Compliance"],
    author: "CA Rahul Shah",
    authorRole: "Chartered Accountant",
    date: "2026-04-30",
    readMinutes: 6,
    cta: {
      label: "Get GST registered in 3–7 days",
      href: "/services/gst/gst-registration",
    },
    body: `Goods and Services Tax (GST) is India's unified indirect tax. If your business crosses the turnover threshold or sells across states, GST registration isn't optional — it's the law. Here's everything you need to know.

## Who needs to register for GST?

You must register if:

- Your turnover exceeds **₹40 lakh** for goods (**₹20 lakh** for services) in most states.
- You make **inter-state supplies** of goods.
- You sell through **e-commerce** marketplaces.
- You're a **casual** or **non-resident** taxable person.

Many businesses also register **voluntarily** to claim input tax credit and sell to GST-registered buyers.

## Documents required

- PAN of the business and proprietor/directors
- Aadhaar of the proprietor or authorised signatory
- Proof of business registration or incorporation
- Address proof of the principal place of business
- Bank statement or cancelled cheque
- Photographs and a Digital Signature Certificate (for companies/LLPs)

## The registration process

1. File application **REG-01** on the GST portal with your details and documents.
2. Complete **Aadhaar authentication**.
3. An **Application Reference Number (ARN)** is generated.
4. The department verifies and, if satisfied, issues your **GSTIN** and certificate.

## Fees and timeline

There's no government fee for GST registration. Professional handling at Big4India starts at **₹1,990 (excluding GST)**, and registration typically completes in **3–7 working days**.

## After registration

Once registered, you must file returns — usually **GSTR-1** and **GSTR-3B** monthly or quarterly, plus the annual **GSTR-9**. Missing deadlines attracts late fees and 18% interest, and can block your input credit.

> **Note:** Thresholds and rules differ for special-category states and specific sectors. When in doubt, confirm your obligation before you start invoicing.

Getting your GSTIN right — and filing on time every month — keeps your input credit flowing and your business penalty-free.`,
  },

  {
    slug: "how-to-file-income-tax-return-india",
    title: "How to File Your Income Tax Return (ITR) in India: A Complete Guide",
    excerpt:
      "Who must file an ITR, which form to use, the documents you need and the due dates — plus tips to maximise your refund and avoid notices.",
    category: "Income Tax",
    tags: ["Income Tax", "ITR", "Tax Filing", "Refund"],
    author: "CA Neha Verma",
    authorRole: "Chartered Accountant",
    date: "2026-04-15",
    readMinutes: 7,
    cta: {
      label: "File your ITR with an expert",
      href: "/services/income-tax/income-tax-return",
    },
    body: `Filing your Income Tax Return (ITR) is a yearly obligation — and an opportunity to claim refunds and deductions. This guide makes it simple.

## Who needs to file an ITR?

You should file if:

- Your **total income exceeds the basic exemption limit**.
- You want a **refund** of excess TDS.
- You have **foreign income or assets**.
- You want to **carry forward losses** to future years.

Even if no tax is finally payable, filing builds a clean financial record useful for loans and visas.

## Choose the right ITR form

The correct form depends on your income sources:

- **ITR-1 (Sahaj)** — salaried individuals with income up to ₹50 lakh.
- **ITR-2** — capital gains, multiple house properties, foreign assets.
- **ITR-3** — business or professional income.
- **ITR-4 (Sugam)** — presumptive income for small businesses and professionals.

Filing the wrong form can render your return **defective**, so this step matters.

## Documents you'll need

- PAN and Aadhaar
- Form 16 and salary slips
- Form 26AS and the Annual Information Statement (AIS)
- Bank and interest statements
- Investment proofs for deductions (80C, 80D, etc.)
- Capital gains statements, if any

## Key due dates

For most individuals, the due date is **31 July** of the assessment year. Filing late attracts a fee of up to **₹5,000** and interest on any tax due.

## Tips to maximise your refund

- Reconcile your return with **Form 26AS and AIS** to avoid mismatches.
- Claim every eligible deduction — **80C, 80D, NPS, home-loan interest**.
- Compare the **old vs new tax regime** before you file.
- E-verify within 30 days, or your return is treated as not filed.

> Received a tax notice? Don't panic and don't ignore it — most notices are routine and resolvable with a timely, correct response.

Accurate filing means faster refunds and fewer questions from the department. If your situation is even slightly complex, expert review is well worth it.`,
  },

  {
    slug: "old-vs-new-tax-regime",
    title: "Old vs New Tax Regime: Which One Saves You More Tax?",
    excerpt:
      "A practical comparison of India's old and new income tax regimes — who benefits from each, and how to decide which one minimises your tax.",
    category: "Income Tax",
    tags: ["Income Tax", "Tax Planning", "Tax Regime", "Deductions"],
    author: "CA Rahul Shah",
    authorRole: "Chartered Accountant",
    date: "2026-03-22",
    readMinutes: 5,
    cta: {
      label: "Get a personalised tax plan",
      href: "/services/income-tax/it-planning",
    },
    body: `Every year, taxpayers face the same question: old regime or new? The answer depends entirely on your deductions. Here's how to choose.

## The core difference

The **old regime** has higher tax rates but lets you claim a wide range of **deductions and exemptions** — 80C, 80D, HRA, home-loan interest and more. The **new regime** offers **lower slab rates** but removes most deductions.

## When the old regime wins

The old regime usually works out better if you **claim significant deductions**, for example:

- ₹1.5 lakh under **80C** (PF, ELSS, life insurance, etc.)
- **Home-loan interest** under Section 24
- **HRA** if you live in rented accommodation
- **80D** for health insurance premiums

If your deductions are substantial, the old regime's higher rates are more than offset.

## When the new regime wins

The new regime tends to win if you **don't claim many deductions** — for instance, young earners, those without a home loan, or anyone who prefers simplicity over investment-linked exemptions. It also offers a higher rebate threshold, making lower incomes effectively tax-free.

## How to decide

1. Total up the deductions you can genuinely claim.
2. Compute tax under **both** regimes.
3. Pick whichever results in lower tax for the year.

The choice can be made **each year**, so review it annually as your income and investments change.

> **Bottom line:** There's no universally "better" regime — only the one that's better *for you this year*. A quick computation under both is the only reliable way to know.

Our experts run both calculations and recommend the option that keeps the most money in your pocket — fully legally.`,
  },

  {
    slug: "private-limited-company-annual-compliance-checklist",
    title: "Annual Compliance for Private Limited Companies: Checklist & Due Dates",
    excerpt:
      "Every Pvt Ltd company must meet annual MCA and tax compliances — even with zero revenue. Here's the complete checklist, forms and due dates.",
    category: "MCA",
    tags: ["MCA", "ROC", "Annual Compliance", "Private Limited"],
    author: "CS Anjali Rao",
    authorRole: "Company Secretary",
    date: "2026-03-05",
    readMinutes: 6,
    cta: {
      label: "Let us handle your annual compliance",
      href: "/services/mca/company-compliances",
    },
    body: `Incorporating a company is just the start. Every Private Limited Company must meet annual compliances — and the penalties for missing them are steep. Here's your complete checklist.

## Why it matters

ROC late-filing penalties are **₹100 per day, per form, with no upper cap**. Persistent non-compliance can lead to **director disqualification** and the company being **struck off**. Crucially, these apply **even if your company had no business activity**.

## Key annual filings

| Form | Purpose | Indicative due date |
| --- | --- | --- |
| AOC-4 | Financial statements | Within 30 days of AGM |
| MGT-7 / 7A | Annual return | Within 60 days of AGM |
| DIR-3 KYC | Director KYC | 30 September |
| ADT-1 | Auditor appointment | Within 15 days of AGM |
| ITR-6 | Company income tax return | 31 October (audited) |

## Other recurring obligations

- Hold a minimum number of **board meetings** during the year.
- Conduct the **Annual General Meeting (AGM)**.
- Maintain **statutory registers** and minutes.
- Get accounts **audited** by a Chartered Accountant.

## DIR-3 KYC — don't miss it

Every director with a DIN must complete **annual KYC**. Miss it and the DIN is deactivated, attracting a **₹5,000** reactivation fee.

## Dormant or zero-revenue companies

A common and costly myth is that inactive companies are exempt. They aren't — annual returns and KYC are still mandatory. If your company is genuinely inactive, you can apply for **dormant status** instead.

> **Plan ahead:** Build a compliance calendar at the start of each financial year so deadlines never sneak up on you.

A dedicated company secretary keeps every filing on time so you avoid penalties and keep your company in good standing — exactly what we do for our clients.`,
  },

  {
    slug: "udyam-msme-registration-benefits",
    title: "Udyam (MSME) Registration: Benefits, Process & Eligibility",
    excerpt:
      "Udyam registration unlocks MSME benefits — subsidies, collateral-free loans and tender preference. Here's who's eligible and how to register.",
    category: "Registration",
    tags: ["Udyam", "MSME", "Registration", "Government Schemes"],
    author: "Big4India Team",
    authorRole: "Compliance Desk",
    date: "2026-02-18",
    readMinutes: 5,
    cta: {
      label: "Register for Udyam (MSME)",
      href: "/services/registration/udyam-registration",
    },
    body: `Udyam registration is the government's official recognition for Micro, Small and Medium Enterprises (MSMEs). It's quick, and it unlocks a range of valuable benefits.

## What is Udyam registration?

Udyam is the MSME registration system run by the Ministry of MSME. Once registered, your business receives a permanent **Udyam Registration Number** and certificate, classifying it as micro, small or medium based on investment and turnover.

## Benefits of registering

- **Collateral-free loans** under government credit schemes.
- **Interest subsidies** and priority-sector lending.
- **Preference in government tenders.**
- **Protection against delayed payments** from buyers.
- Concessions on **electricity, trademarks and patents**.

## Eligibility

Any business — proprietorship, partnership, LLP or company — engaged in manufacturing or services qualifies, provided it stays within the MSME investment and turnover limits for its category.

## How to register

1. Provide your **Aadhaar** and **PAN**.
2. Enter business and bank details.
3. The system auto-fetches investment and turnover data from linked records.
4. Your **Udyam certificate** is issued.

## Common questions

**Is it mandatory?** No, but it's highly recommended to access MSME benefits.

**Is it free?** The government portal charges no fee; professional handling ensures your details and classification are accurate.

**Does it expire?** No — Udyam registration is permanent and doesn't require renewal.

> Many businesses leave money on the table simply by not registering. If you qualify, the benefits far outweigh the small effort.

We handle Udyam registration accurately so you can start claiming MSME benefits without the guesswork.`,
  },

  {
    slug: "import-export-code-guide",
    title: "Import Export Code (IEC): How to Get It and Why You Need It",
    excerpt:
      "Planning to import or export from India? You need an IEC. Learn what it is, who needs it, the documents required and how to apply.",
    category: "Registration",
    tags: ["IEC", "Import Export", "DGFT", "Trade"],
    author: "Big4India Team",
    authorRole: "Compliance Desk",
    date: "2026-02-02",
    readMinutes: 4,
    cta: {
      label: "Apply for your Import Export Code",
      href: "/services/registration/import-export-code",
    },
    body: `If your business deals in cross-border trade, the Import Export Code (IEC) is your gateway. Here's a concise guide.

## What is an IEC?

The **Import Export Code** is a 10-digit identification number issued by the **Directorate General of Foreign Trade (DGFT)**. It's mandatory for anyone importing or exporting goods or services from India.

## Who needs it?

- Businesses **importing** goods into India.
- Businesses **exporting** goods or services from India.
- Anyone wanting to avail **export incentives** under foreign trade policy.

Importantly, the IEC is a **one-time registration with lifetime validity** — no renewal required (though annual updating on the DGFT portal is recommended).

## Documents required

- PAN of the business or individual
- Aadhaar / identity proof of the applicant
- Business address proof
- Bank account details and a cancelled cheque

## How to apply

1. Register on the **DGFT portal**.
2. Submit the application with documents.
3. Pay the government fee.
4. The IEC is typically issued **within 1–3 working days**.

## Why it matters

Without an IEC, banks won't process your international trade transactions and customs won't clear your shipments. It's the foundational registration for any import-export business.

> **Tip:** If your business details change, file an IEC modification promptly to keep your code valid and your shipments moving.

We get your IEC issued quickly so you can start trading internationally without delays.`,
  },

  {
    slug: "fssai-registration-license-guide",
    title: "FSSAI Registration & License: Types, Process and Renewal",
    excerpt:
      "Any food business in India needs an FSSAI licence. Understand the three licence types, eligibility, documents and renewal requirements.",
    category: "Registration",
    tags: ["FSSAI", "Food License", "Registration", "Compliance"],
    author: "Big4India Team",
    authorRole: "Compliance Desk",
    date: "2026-01-20",
    readMinutes: 5,
    cta: {
      label: "Get your FSSAI licence",
      href: "/services/registration/fssai-registration",
    },
    body: `If you run any food business in India — from a home kitchen to a manufacturing plant — you need an FSSAI licence. Here's what to know.

## What is FSSAI?

The **Food Safety and Standards Authority of India (FSSAI)** regulates food businesses. An FSSAI licence or registration certifies that your business meets food-safety standards, and displaying the FSSAI number builds customer trust.

## The three types

| Type | Who it's for | Based on |
| --- | --- | --- |
| Basic Registration | Small businesses | Turnover up to ₹12 lakh |
| State License | Medium businesses | ₹12 lakh–₹20 crore |
| Central License | Large / import-export | Above ₹20 crore |

Your category depends on turnover, scale and the nature of operations.

## Documents required

- Identity and address proof of the proprietor
- Passport-size photograph
- Business address proof
- Food-premises layout (for State/Central licences)
- List of food products handled

## Process

1. Determine the correct **licence type**.
2. File the application on the **FoSCoS** portal.
3. Submit documents and pay the fee.
4. Respond to any inspection or query.
5. Receive your **FSSAI licence** with a 14-digit number.

## Validity and renewal

FSSAI licences are valid for **1 to 5 years**. You must **renew before expiry** — lapsing can mean penalties and forced closure. Most food businesses also file an **annual return (Form D1)** by 31 May.

> **Don't risk it:** Operating without a valid FSSAI licence can attract heavy penalties under the Food Safety Act.

We identify the right licence type for your business and handle registration and renewals end to end.`,
  },

  {
    slug: "tds-rates-returns-due-dates",
    title: "TDS Explained: Rates, Returns, Due Dates & How to File",
    excerpt:
      "Tax Deducted at Source (TDS) trips up many businesses. Understand what TDS is, common rates, return types and due dates — and how to stay compliant.",
    category: "Income Tax",
    tags: ["TDS", "Income Tax", "Payroll", "Returns"],
    author: "CA Neha Verma",
    authorRole: "Chartered Accountant",
    date: "2026-01-08",
    readMinutes: 6,
    cta: {
      label: "Get help with TDS returns",
      href: "/services/income-tax/tds-return",
    },
    body: `Tax Deducted at Source (TDS) is one of the most common compliance areas for businesses — and one of the easiest to get wrong. Here's a clear primer.

## What is TDS?

TDS is a mechanism where tax is **deducted at the point of payment** — on salaries, rent, professional fees, interest and more — and deposited with the government on the recipient's behalf. The deductor needs a **TAN** (Tax Deduction Account Number).

## Common TDS rates

Rates depend on the nature of payment. A few common examples:

- **Salaries** — as per the employee's slab rate.
- **Professional/technical fees (194J)** — typically 10%.
- **Rent (194I)** — 10% on land/building.
- **Contractor payments (194C)** — 1%–2%.

Always confirm the current rate and threshold for your specific payment type.

## TDS return types

| Form | For |
| --- | --- |
| 24Q | TDS on salaries |
| 26Q | TDS on non-salary payments (residents) |
| 27Q | TDS on payments to non-residents |
| 27EQ | TCS returns |

## Due dates

- **Deposit TDS** by the **7th** of the following month (special rule for March).
- **File TDS returns quarterly**, typically by the end of the month following each quarter.
- **Issue Form 16/16A** to deductees after filing.

## Penalties for non-compliance

- **Late deposit:** interest of 1%–1.5% per month.
- **Late filing:** ₹200 per day under Section 234E.
- **Non-filing:** additional penalties may apply.

> **Stay ahead:** TDS deadlines are monthly and quarterly — a missed date is easy to avoid with a simple compliance calendar.

We manage TDS deduction, deposit, returns and Form 16 issuance so your business stays fully compliant, every quarter.`,
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, n = 3): BlogPost[] {
  const current = getPost(slug);
  if (!current) return blogPosts.slice(0, n);
  const sameCategory = blogPosts.filter(
    (p) => p.slug !== slug && p.category === current.category,
  );
  const rest = blogPosts.filter(
    (p) => p.slug !== slug && p.category !== current.category,
  );
  return [...sameCategory, ...rest].slice(0, n);
}

export const blogCategories = Array.from(
  new Set(blogPosts.map((p) => p.category)),
);
