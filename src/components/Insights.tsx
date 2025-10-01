import { useEffect, useMemo, useState } from "react";

/**
 * Insights (Bank/Enterprise-tailored)
 * Clear business outcomes for buyers evaluating:
 * - Crypto buy/sell rails
 * - Blockchain-grade security/compliance
 * - Branded debit/credit cards backed by customer crypto
 */
export default function Insights() {
  // Deterministic pseudo-random so visuals are stable in demos
  const data = useMemo(() => {
    const arr: number[] = [];
    let v = 42;
    for (let i = 0; i < 28; i++) {
      v = (v * 9301 + 49297) % 233280;
      arr.push(60 + (v / 233280) * 40);
    }
    return arr;
  }, []);

  // Reveal animations
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  // Bars: map to enterprise-friendly outcomes
  // success  -> Settled trades
  // pending  -> In KYC/AML review
  // cost     -> Network fees & overhead
  const bars = useMemo(
    () =>
      data.slice(-12).map((n, i) => {
        const settled = Math.max(45, n);
        const cost = Math.max(10, 100 - settled - (i % 8));
        const review = Math.max(0, 100 - settled - cost);
        return { success: settled, pending: review, cost };
      }),
    [data]
  );

  return (
    <section id="insights" className="section">
      <div className="container">
        <div
          className="badge"
          style={{
            marginBottom: 14,
            borderColor: "var(--ring)",
            color: "var(--accent)",
          }}
        >
          Platform outcomes for banks & fintechs
        </div>

        <h2 style={{ fontSize: 36, margin: "0 0 10px" }}>
          Launch crypto rails & cards in{" "}
          <span className="underline-sweep">weeks</span>, not months
        </h2>

        <p style={{ color: "var(--muted)", marginTop: 0, maxWidth: 820 }}>
          What decision-makers care about: trade volume, settlement speed,
          compliance pass-rates, and run-rate costs — with blockchain as the
          trust layer.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: 20,
            marginTop: 24,
          }}
        >
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Trade volume trend</h3>
            <p style={{ color: "var(--muted)", marginTop: -6 }}>
              Daily throughput across supported assets and fiat on/off-ramps.
            </p>
            <Sparkline data={data} mounted={mounted} />
          </div>

          <div className="card">
            <h3 style={{ marginTop: 0 }}>Daily outcomes (last 12 days)</h3>
            <p style={{ color: "var(--muted)", marginTop: -6 }}>
              Mix of same-day settlements, items in KYC/AML, and network
              overhead.
            </p>
            <StackedBars bars={bars} mounted={mounted} />
            <div
              style={{
                display: "flex",
                gap: 12,
                marginTop: 10,
                color: "var(--muted)",
                fontSize: 12,
              }}
            >
              <Legend sw="var(--mint)" label="Settled" />
              <Legend sw="var(--accent)" label="KYC/AML review" />
              <Legend sw="var(--violet)" label="Fees & overhead" />
            </div>
          </div>
        </div>

        {/* Enterprise KPIs */}
        <div
          className="hero-stats"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0,1fr))",
            gap: 14,
            marginTop: 20,
          }}
        >
          <KPI
            label="Median settlement"
            value="28 ms"
            hint="From order accept to on-chain/ledger commit (median)."
          />
          <KPI
            label="KYC/AML pass rate"
            value="97.6%"
            hint="Automated + manual review completion within SLA."
          />
          <KPI
            label="Platform uptime (90d)"
            value="99.98%"
            hint="Core APIs, custody, and webhooks availability."
          />
          <KPI
            label="Avg fee per trade"
            value="$0.0006"
            hint="Net platform + network fees after optimizations."
          />
        </div>

        {/* Trust & Cards row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 1fr",
            gap: 20,
            marginTop: 24,
          }}
        >
          <div className="card card-lite">
            <h3 style={{ marginTop: 0 }}>Secure & compliant by design</h3>
            <ul className="security-list">
              <li>
                <span className="dot low" />
                <div>
                  <div className="li-title">Blockchain protection</div>
                  <div className="li-body">
                    Immutable settlement with on-chain proofs and tamper-evident
                    audit trails.
                  </div>
                </div>
              </li>
              <li>
                <span className="dot med" />
                <div>
                  <div className="li-title">KYC/AML orchestration</div>
                  <div className="li-body">
                    Identity, sanctions, and transaction-risk checks with policy
                    controls and audit logs.
                  </div>
                </div>
              </li>
              <li>
                <span className="dot high" />
                <div>
                  <div className="li-title">Custody & controls</div>
                  <div className="li-body">
                    Segregated wallets, policy-based approvals, and hardware-backed
                    key management.
                  </div>
                </div>
              </li>
            </ul>

            <div className="security-tags" style={{ marginTop: 6 }}>
              <span className="chip">PCI-DSS ready</span>
              <span className="chip">SOC 2 Type II</span>
              <span className="chip">KYT / TRM</span>
              <span className="chip">Travel Rule</span>
              <span className="chip">Audit API</span>
            </div>
          </div>

          <div className="card">
            <h3 style={{ marginTop: 0 }}>Crypto cards: issue & spend</h3>
            <p style={{ color: "var(--muted)", marginTop: -6 }}>
              Offer branded debit/credit cards funded by customer crypto with
              instant FX and program controls.
            </p>
            <div className="features-track" style={{ marginTop: 10 }}>
              <FeatureItem title="Branded issuance" body="Visa/Mastercard program enablement with BIN sponsorship partners." />
              <FeatureItem title="Real-time conversion" body="Auto-convert crypto to fiat at tap with rule-based routing." />
              <FeatureItem title="Controls & limits" body="Per-merchant, MCC, geography, spend caps, and freeze/unfreeze." />
              <FeatureItem title="Rewards" body="Crypto cash-back and tiered benefits configurable per product." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* === Atoms === */

function KPI({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="card" style={{ padding: 16 }}>
      <div style={{ fontSize: 12, color: "var(--muted)" }}>{label}</div>
      <div style={{ fontSize: 26, fontWeight: 800 }}>{value}</div>
      {hint && (
        <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 6 }}>
          {hint}
        </div>
      )}
      <div
        style={{
          height: 6,
          marginTop: 8,
          borderRadius: 6,
          background: "linear-gradient(90deg, var(--brand), transparent)",
        }}
      />
    </div>
  );
}

function Legend({ sw, label }: { sw: string; label: string }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
      <span aria-hidden style={{ width: 14, height: 8, borderRadius: 4, background: sw }} />
      <span>{label}</span>
    </div>
  );
}

function FeatureItem({ title, body }: { title: string; body: string }) {
  return (
    <div className="card" style={{ padding: 14 }}>
      <div style={{ fontWeight: 800, marginBottom: 4 }}>{title}</div>
      <div style={{ color: "var(--muted)", fontSize: 14 }}>{body}</div>
    </div>
  );
}

/** Minimal animated sparkline (volume trend) */
function Sparkline({ data, mounted }: { data: number[]; mounted: boolean }) {
  const w = 720,
    h = 180,
    pad = 10;
  const min = Math.min(...data),
    max = Math.max(...data);

  const X = (i: number) => pad + (i / (data.length - 1)) * (w - pad * 2);
  const Y = (v: number) => pad + (1 - (v - min) / (max - min)) * (h - pad * 2);

  const dLine = data
    .map((v, i) => `${i === 0 ? "M" : "L"} ${X(i)} ${Y(v)}`)
    .join(" ");

  const baseY = h - pad;
  const dArea = `${dLine} L ${X(data.length - 1)} ${baseY} L ${X(0)} ${baseY} Z`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: "100%", height: 180 }}>
      <defs>
        <linearGradient id="sparkGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--accent)" />
          <stop offset="100%" stopColor="var(--mint)" />
        </linearGradient>
        <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--mint)" stopOpacity="0.18" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Soft area fill */}
      <path
        d={dArea}
        fill="url(#sparkFill)"
        opacity={mounted ? 1 : 0}
        style={{ transition: "opacity 500ms ease" }}
      />

      {/* Under-stroke for continuity on dark bg */}
      <path d={dLine} stroke="rgba(255,255,255,.08)" strokeWidth="4" fill="none" />

      {/* Gradient stroke with reveal */}
      <path
        d={dLine}
        pathLength={1}
        fill="none"
        stroke="url(#sparkGrad)"
        strokeWidth="2.5"
        style={{
          strokeDasharray: 1,
          strokeDashoffset: mounted ? 0 : 1,
          transition: "stroke-dashoffset 900ms ease 120ms",
        }}
      />

      {/* baseline */}
      <line x1={pad} y1={baseY} x2={w - pad} y2={baseY} stroke="rgba(255,255,255,.08)" />
    </svg>
  );
}

/** Minimal stacked bars (settled / KYC review / fees) */
function StackedBars({
  bars,
  mounted,
}: {
  bars: { success: number; pending: number; cost: number }[];
  mounted: boolean;
}) {
  const w = 360,
    h = 180,
    gap = 6,
    bw = (w - gap * (bars.length + 1)) / bars.length;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      style={{ width: "100%", height: 180 }}
      role="img"
      aria-label="Daily settled, KYC review, and fees for the last 12 days"
    >
      {bars.map((b, i) => {
        const x = gap + i * (bw + gap);
        const sH = (b.success / 100) * (h - 10);
        const pH = (b.pending / 100) * (h - 10);
        const cH = (b.cost / 100) * (h - 10);
        const yS = h - sH;
        const yP = yS - pH;
        const yC = yP - cH;

        const delay = 60 + i * 50;

        return (
          <g key={i} transform={`translate(${x} 0)`}>
            <rect
              x={0}
              y={yS}
              width={bw}
              height={sH}
              fill="var(--mint)"
              className={mounted ? "grow-y" : ""}
              style={{ animationDelay: `${delay}ms` }}
            />
            <rect
              x={0}
              y={yP}
              width={bw}
              height={pH}
              fill="var(--accent)"
              className={mounted ? "grow-y" : ""}
              style={{ animationDelay: `${delay + 80}ms` }}
            />
            <rect
              x={0}
              y={yC}
              width={bw}
              height={cH}
              fill="var(--violet)"
              className={mounted ? "grow-y" : ""}
              style={{ animationDelay: `${delay + 160}ms` }}
            />
          </g>
        );
      })}
      {/* baseline */}
      <line x1={0} y1={h - 1} x2={w} y2={h - 1} stroke="rgba(255,255,255,.08)" />
    </svg>
  );
}
