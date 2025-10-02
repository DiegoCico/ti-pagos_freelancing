"use client";

export default function Hero() {
  return (
    <section className="section" style={{ position: "relative", overflow: "hidden" }}>
      <div className="hero-bg" />

      <div className="container hero-grid">
        {/* Left copy */}
        <div>
          <div
            className="badge"
            style={{ marginBottom: 14, borderColor: "var(--ring)", color: "var(--accent)" }}
          >
            Banks • Crypto • Payments Infrastructure
          </div>

          <h1 className="grad-text hero-title">
            Crypto rails & cards for financial institutions
          </h1>

          <p className="hero-lead" style={{ color: "var(--muted)", maxWidth: 640, marginTop: 12 }}>
            TIPagos powers compliant buy/sell, custody, and branded debit/credit cards —
            blockchain-anchored, encrypted end-to-end, and ready to scale.
          </p>

          <div className="hero-actions" style={{ display: "flex", gap: 14, marginTop: 22 }}>
            <a href="https://calendly.com/anderson-tipagos/30min" target="_blank" className="btn">Book a Call</a>
            <a href="mailto:hello@tipagos.com" className="btn btn--ghost">See Solutions</a>
          </div>

          <div className="hero-sub" style={{ marginTop: 16, color: "var(--muted)" }}>
            ISO-27001 aligned • PCI-DSS scope ready • SOC-friendly audit logs
          </div>
        </div>

        {/* Right visual */}
        <div className="tilt card hero-card">
          <HeaderTiles />
          <div style={{ padding: 18 }}>
            <div className="hero-stats" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <MiniStat label="Throughput" value="18,900 TPS" tone="mint" />
              <MiniStat label="Latency (p95)" value="32 ms" tone="accent" />
              <MiniStat label="Uptime (90d)" value="99.98%" tone="brand" />
              <MiniStat label="Cost / Tx" value="$0.0007" tone="violet" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeaderTiles() {
  const items = ["BTC", "ETH", "SOL", "USDC", "MATIC", "LINK", "AVAX", "DOT"];
  return (
    <div
      className="marquee"
      style={{
        borderBottom: "1px solid var(--border)",
        background: "linear-gradient(90deg, rgba(0,230,230,.08), rgba(23,212,155,.08))",
      }}
    >
      <div className="marquee-track">
        {[...items, ...items].map((s, i) => (
          <div
            key={i}
            className="marquee-tile"
            style={{
              display: "grid",
              gridTemplateColumns: "80px 100px 80px",
              gap: 10,
              padding: "14px 18px",
              borderRight: "1px solid var(--border)",
            }}
            aria-label={`${s} ticker`}
          >
            <span style={{ fontWeight: 800, color: "#d7e6ff" }}>{s}</span>
            <span>${(1000 + i * 14.23).toFixed(2)}</span>
            <span
              style={{
                color: i % 2 ? "#ff6b6b" : "#20d67b",
                fontWeight: 700,
              }}
            >
              {i % 2 ? `-${(0.8 + (i % 9) / 10).toFixed(1)}%` : `+${(0.9 + (i % 7) / 10).toFixed(1)}%`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MiniStat({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "mint" | "accent" | "brand" | "violet";
}) {
  const color =
    {
      mint: "var(--mint)",
      accent: "var(--accent)",
      brand: "var(--brand)",
      violet: "var(--violet)",
    }[tone] || "var(--accent)";

  return (
    <div className="card" style={{ padding: 14, borderColor: "var(--border)" }}>
      <div style={{ fontSize: 12, color: "var(--muted)" }}>{label}</div>
      <div style={{ fontSize: 22, fontWeight: 800, lineHeight: 1.1 }}>{value}</div>
      <div
        style={{
          height: 6,
          marginTop: 10,
          borderRadius: 6,
          background: `linear-gradient(90deg, ${color}, transparent)`,
        }}
      />
    </div>
  );
}
