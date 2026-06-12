import { NextResponse } from "next/server";

/**
 * Lead capture endpoint for the ubiquitous lead form.
 *
 * Currently validates and logs the lead. Wire this to your CRM / email /
 * Google Sheet / webhook where indicated below — the client contract
 * ({ ok: boolean }) stays the same.
 */
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

    // TODO: persist the lead — e.g. CRM API, transactional email, or DB.
    console.log("[big4india:lead]", {
      name,
      mobile,
      email,
      city,
      source,
      at: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }
}
