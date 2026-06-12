const AUTHORITIES = [
  "MCA",
  "GSTN",
  "Income Tax Dept.",
  "MSME · Udyam",
  "FSSAI",
  "RBI",
  "RERA",
  "DGFT",
  "EPFO",
  "ESIC",
  "ICEGATE",
  "Startup India",
];

export function TrustedMarquee() {
  // Duplicated track for a seamless, gap-free loop.
  const track = [...AUTHORITIES, ...AUTHORITIES];

  return (
    <section className="border-y border-border bg-white py-8">
      <div className="container">
        <p className="text-center text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Seamless filings with every Indian authority
        </p>
        <div className="mask-fade-x mt-6 overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-10 pause-on-hover">
            {track.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="whitespace-nowrap font-display text-lg font-medium text-foreground/70"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
