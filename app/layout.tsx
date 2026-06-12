import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import { Toaster } from "sonner";
import { LeadFormProvider } from "@/components/lead/lead-form-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";
import "./globals.css";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const fontDisplay = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: "Big4India — Legal, Tax & Compliance Experts in India",
    template: "%s · Big4India",
  },
  description: company.description,
  keywords: [
    "company registration India",
    "GST registration",
    "income tax return filing",
    "MCA ROC compliance",
    "private limited company",
    "LLP registration",
    "trademark",
    "payroll compliance",
    "CA certificate",
    "Big4India",
  ],
  authors: [{ name: company.name }],
  creator: company.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: company.url,
    siteName: company.name,
    title: "Big4India — Legal, Tax & Compliance Experts in India",
    description: company.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Big4India — Legal, Tax & Compliance Experts in India",
    description: company.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#16285C",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn(fontSans.variable, fontDisplay.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-dvh bg-background font-sans text-foreground">
        <LeadFormProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LeadFormProvider>
        <Toaster
          position="top-center"
          richColors
          closeButton
          toastOptions={{ duration: 5000 }}
        />
      </body>
    </html>
  );
}
