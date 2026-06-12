# Big4India

Premium legal, tax & compliance platform for Indian businesses — company incorporation, GST, income tax, MCA/ROC filings, registrations, payroll and CA‑certified certificates, handled end‑to‑end by experts.

Built with the Next.js App Router, fully statically generated, SEO/AEO‑first, with a WhatsApp‑based checkout and a lead form on every page.

## ✨ Highlights

- **89 service pages** with the full customer journey — overview, benefits, eligibility, documents, step‑by‑step process, transparent pricing and **10–13 FAQs each**.
- **8 category pages** + an all‑services directory.
- **Blog** with 10 SEO‑targeted articles (Markdown‑authored, editorial typography).
- **WhatsApp checkout** — every CTA opens a prefilled `wa.me` message with the service and price.
- **Ubiquitous lead form** — desktop slide‑over, mobile bottom‑sheet, and embedded in hero/service pages.
- **SEO/AEO built‑in** — dynamic metadata, `Organization`, `Service`, `Product`, `FAQPage`, `HowTo`, `BlogPosting` and `BreadcrumbList` JSON‑LD, plus `robots.txt`, `llms.txt` and a generated sitemap.
- **Brand system** — navy `#16285C` + saffron `#F47920`, Fraunces (display) + Plus Jakarta Sans (body).

## 🧱 Tech stack

| Area | Choice |
| --- | --- |
| Framework | Next.js 15 (App Router) + React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v3 + `@tailwindcss/typography` |
| Animation | Framer Motion |
| Icons | lucide-react |
| Toasts | sonner |
| Content | Markdown via `react-markdown` + `remark-gfm` |

## 🚀 Getting started

```bash
# 1. Install dependencies
npm install

# 2. (optional) configure environment
cp .env.example .env.local   # then fill in values

# 3. Run the dev server
npm run dev                  # http://localhost:3000

# 4. Production build
npm run build && npm start
```

Requires Node 18.18+ (Node 20+ recommended).

## 🗂️ Project structure

```
app/                     # routes (App Router)
  page.tsx               # homepage
  services/              # /services, /services/[category], /services/[category]/[slug]
  blog/                  # /blog, /blog/[slug]
  api/lead/route.ts      # lead form endpoint
  sitemap.ts             # generated sitemap
components/              # UI + sections (header, footer, lead form, cards, …)
data/                    # ← edit content here
  company.ts             # contact details, address, socials
  services.ts            # the full service catalogue + prices
  category-content.ts    # per-category benefits, documents, process, FAQs
  blog.ts                # blog posts (Markdown)
  testimonials.ts        # client testimonials
lib/                     # helpers (cn, formatINR, whatsapp link, content)
public/                  # robots.txt, llms.txt, static assets
```

## ✏️ Editing content (no deep coding needed)

- **Contact / address / socials** → `data/company.ts`
- **Services & prices** → `data/services.ts`
- **Service page depth (benefits, docs, process, FAQs)** → `data/category-content.ts`
- **Blog posts** → append an object to `data/blog.ts` (Markdown body); the index, sitemap and schema update automatically
- **Testimonials** → `data/testimonials.ts` (currently placeholders — replace before launch)

## 📨 Lead notifications

The lead form posts to `app/api/lead/route.ts`. Set `RESEND_API_KEY` (see `.env.example`) to receive each submission by email via [Resend](https://resend.com); without it, leads are validated and logged to the server console. The email includes one‑click **Reply on WhatsApp** and **Email** actions.

## ☁️ Deployment

Deployed on **Vercel** (auto‑deploys on every push to `main`). The domain `www.big4india.com` is managed via DNS at Hostinger.

## 📄 License

© Big4India. All rights reserved.
