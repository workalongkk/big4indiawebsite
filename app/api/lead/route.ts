import { NextResponse } from "next/server";
import { company } from "@/data/company";

/**
 * Lead capture endpoint for the ubiquitous lead form.
 *
 * Delivery: if RESEND_API_KEY is set, each lead is emailed to you via Resend
 * (https://resend.com) using a plain fetch — no SDK dependency. If it's not
 * set, the lead is still validated and logged to the server console, so the
 * form keeps working in development and nothing is ever lost.
 *
 * Configure in .env.local (local) and in Vercel → Settings → Environment
 * Variables (production). See .env.example.
 */

type Lead = {
  name: string;
  mobile: string;
  email: string;
  city: string;
  source: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function notifyByEmail(lead: Lead): Promise<{ delivered: boolean }> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { delivered: false };

  const to = process.env.LEAD_NOTIFICATION_EMAIL || company.email;
  const from =
    process.env.LEAD_FROM_EMAIL || "Big4India Leads <onboarding@resend.dev>";

  const firstName = escapeHtml(lead.name.split(" ")[0] || lead.name);
  const name = escapeHtml(lead.name);
  const city = escapeHtml(lead.city);
  const email = escapeHtml(lead.email);
  const source = escapeHtml(lead.source);
  const wa = `https://wa.me/91${lead.mobile}`;
  const receivedAt = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  });

  const row = (label: string, value: string) =>
    `<tr><td style="padding:7px 0;color:#64748b;width:130px;font-size:13px;">${label}</td><td style="padding:7px 0;color:#0f172a;font-weight:600;font-size:14px;">${value}</td></tr>`;

  const html = `
  <div style="font-family:-apple-system,Segoe UI,Roboto,Arial,sans-serif;max-width:560px;margin:0 auto;">
    <div style="background:#16285C;padding:18px 24px;border-radius:12px 12px 0 0;">
      <span style="color:#fff;font-size:18px;font-weight:700;letter-spacing:-.02em;">Big4India</span>
      <span style="color:#F47920;margin:0 6px;">&bull;</span>
      <span style="color:#cbd5e1;font-size:14px;">New website lead</span>
    </div>
    <div style="border:1px solid #e2e8f0;border-top:none;border-radius:0 0 12px 12px;padding:24px;">
      <h2 style="margin:0 0 16px;font-size:18px;color:#0f172a;">${name} wants to get started</h2>
      <table style="width:100%;border-collapse:collapse;">
        ${row("Name", name)}
        ${row("Mobile", `<a href="${wa}" style="color:#0e6b3f;">+91 ${lead.mobile}</a>`)}
        ${row("Email", `<a href="mailto:${email}" style="color:#0e6b3f;">${email}</a>`)}
        ${row("City", city)}
        ${row("Interested in", source)}
        ${row("Received", receivedAt + " IST")}
      </table>
      <div style="margin-top:22px;">
        <a href="${wa}" style="background:#25D366;color:#fff;text-decoration:none;padding:11px 18px;border-radius:8px;font-weight:600;font-size:14px;display:inline-block;">Reply on WhatsApp</a>
        <a href="mailto:${email}" style="background:#F47920;color:#fff;text-decoration:none;padding:11px 18px;border-radius:8px;font-weight:600;font-size:14px;display:inline-block;margin-left:8px;">Email ${firstName}</a>
      </div>
    </div>
  </div>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: lead.email,
        subject: `New lead: ${lead.name} — ${lead.city}`,
        html,
      }),
    });
    if (!res.ok) {
      console.error("[big4india:lead:email]", res.status, await res.text());
      return { delivered: false };
    }
    return { delivered: true };
  } catch (err) {
    console.error("[big4india:lead:email] request failed", err);
    return { delivered: false };
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = String(body?.name ?? "").trim();
    const mobile = String(body?.mobile ?? "").replace(/\D/g, "");
    const email = String(body?.email ?? "").trim();
    const city = String(body?.city ?? "").trim();
    const source = String(body?.source ?? "website");

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!name || mobile.length < 10 || !emailOk || !city) {
      return NextResponse.json(
        { ok: false, error: "Please provide a valid name, mobile, email and city." },
        { status: 400 },
      );
    }

    const lead: Lead = { name, mobile, email, city, source };

    // Always log (visible in Vercel function logs) so a lead is never lost.
    console.log("[big4india:lead]", { ...lead, at: new Date().toISOString() });

    const { delivered } = await notifyByEmail(lead);
    if (!delivered) {
      console.warn(
        "[big4india:lead] email not delivered (RESEND_API_KEY missing or send failed) — lead is in logs above.",
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }
}
