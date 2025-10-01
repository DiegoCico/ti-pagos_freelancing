"use client";

type Feature = {
  title: string;
  color: string; // CSS color token (e.g., var(--accent))
  body: string;
};

const ITEMS: Feature[] = [
  {
    title: "Crypto Payments Rail",
    color: "var(--accent)",
    body:
      "Buy, sell, and settle digital assets with on/off-ramps, wallet orchestration, and instant FX — all integrated into your stack.",
  },
  {
    title: "Blockchain Data Pipelines",
    color: "var(--mint)",
    body:
      "On-chain ETL into your warehouse, real-time analytics, and SLAs for risk, compliance, and finance teams.",
  },
  {
    title: "Compliance & Security",
    color: "var(--brand)",
    body:
      "KYC/AML/KYT modules, policy engines, hardware key custody, audit logs, and enterprise access controls.",
  },
  {
    title: "Exchanges & Custody",
    color: "var(--violet)",
    body:
      "Order routing, cold/hot wallet logic, withdrawal approvals, and automated alerts for operations teams.",
  },
];

export default function Features() {
  return (
    <section id="features" className="section" aria-label="Features">
      <div className="container">
        <h2 style={{ fontSize: 36, margin: "0 0 10px" }}>
          Enterprise rails <span className="underline-cyan">ready to deploy</span>
        </h2>
        <p style={{ color: "var(--muted)", marginTop: 0, maxWidth: 760 }}>
          Core infrastructure for banks and fintechs: payments, custody, compliance, and data —
          secure by default, built to scale.
        </p>

        {/* Grid on desktop; swipeable slider on mobile (CSS handles) */}
        <div className="features-track" role="list">
          {ITEMS.map((it, i) => (
            <article key={i} className="card" role="listitem">
              <div
                className="badge"
                style={{
                  marginBottom: 10,
                  borderColor: it.color,
                  color: it.color,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              <h3 style={{ margin: "4px 0 8px" }}>{it.title}</h3>
              <p style={{ color: "var(--muted)" }}>{it.body}</p>

              <div
                style={{
                  height: 4,
                  marginTop: 12,
                  borderRadius: 4,
                  background: `linear-gradient(90deg, ${it.color}, transparent)`,
                }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
