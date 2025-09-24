import { useEffect, useMemo, useState } from "react";

/**
 * Insights
 * KPI cards and two tiny charts (sparkline + stacked bars).
 * Data is deterministic for consistent visuals; animates on mount.
 */
export default function Insights() {
  // Deterministic “random” for repeatable demo
  const data = useMemo(() => {
    const arr: number[] = [];
    let v = 42;
    for (let i = 0; i < 28; i++) {
      v = (v * 9301 + 49297) % 233280;
      arr.push(60 + (v / 233280) * 40);
    }
    return arr;
  }, []);

  // Animate mount
  const [mounted, setMounted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setMounted(true), 60); return () => clearTimeout(t); }, []);

  // Bars: split into success/cost
  const bars = useMemo(() => data.slice(-12).map((n, i) => {
    const success = Math.max(45, n);
    const cost = Math.max(10, 100 - success - (i % 8));
    const pending = Math.max(0, 100 - success - cost);
    return { success, pending, cost };
  }), [data]);

  return (
    <section id="insights" className="section">
      <div className="container">
        <div className="badge" style={{ marginBottom: 14, borderColor: "var(--ring)", color: "var(--accent)" }}>
          Insights & Metrics
        </div>
        <h2 style={{ fontSize: 36, margin: "0 0 10px" }}>
          See impact in <span className="underline-sweep">weeks</span>, not quarters
        </h2>
        <p style={{ color: "var(--muted)", marginTop: 0, maxWidth: 780 }}>
          Transparent performance from day one: throughput, latency, reliability, and cost per transaction.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 20, marginTop: 24 }}>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Throughput Trend</h3>
            <Sparkline data={data} mounted={mounted} />
          </div>

          <div className="card">
            <h3 style={{ marginTop: 0 }}>Outcome Breakdown (last 12 days)</h3>
            <StackedBars bars={bars} mounted={mounted} />
            <div style={{ display: "flex", gap: 12, marginTop: 10, color: "var(--muted)", fontSize: 12 }}>
              <Legend sw="var(--mint)" label="Successful" />
              <Legend sw="var(--accent)" label="Pending" />
              <Legend sw="var(--violet)" label="Cost overhead" />
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))", gap: 14, marginTop: 20 }}>
          <KPI label="Avg TPS" value="18,900" />
          <KPI label="p95 Latency" value="32 ms" />
          <KPI label="Uptime (90d)" value="99.98%" />
          <KPI label="Cost / Tx" value="$0.0007" />
        </div>
      </div>
    </section>
  );
}

function KPI({ label, value }: { label: string; value: string }) {
  return (
    <div className="card" style={{ padding: 16 }}>
      <div style={{ fontSize: 12, color: "var(--muted)" }}>{label}</div>
      <div style={{ fontSize: 26, fontWeight: 800 }}>{value}</div>
      <div style={{ height: 6, marginTop: 8, borderRadius: 6, background: "linear-gradient(90deg, var(--brand), transparent)" }} />
    </div>
  );
}

function Legend({ sw, label }: { sw: string; label: string }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
      <span style={{ width: 14, height: 8, borderRadius: 4, background: sw }} />
      <span>{label}</span>
    </div>
  );
}

/** Minimal animated sparkline */
function Sparkline({ data, mounted }: { data: number[]; mounted: boolean }) {
  const w = 720, h = 180, pad = 10;
  const min = Math.min(...data), max = Math.max(...data);
  const pts = data.map((v, i) => {
    const x = pad + (i / (data.length - 1)) * (w - pad * 2);
    const y = pad + (1 - (v - min) / (max - min)) * (h - pad * 2);
    return `${x},${y}`;
  }).join(" ");

  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: "100%", height: 180 }}>
      <polyline
        fill="none"
        stroke="url(#sparkGrad)"
        strokeWidth="2.5"
        points={pts}
        className={mounted ? "draw-x" : ""}
      />
      <defs>
        <linearGradient id="sparkGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--accent)" />
          <stop offset="100%" stopColor="var(--mint)" />
        </linearGradient>
      </defs>
      {/* baseline */}
      <line x1={pad} y1={h - pad} x2={w - pad} y2={h - pad} stroke="rgba(255,255,255,.08)" />
    </svg>
  );
}

/** Minimal stacked bars */
function StackedBars({ bars, mounted }: { bars: { success: number; pending: number; cost: number }[]; mounted: boolean }) {
  const w = 360, h = 180, gap = 6, bw = (w - gap * (bars.length + 1)) / bars.length;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: "100%", height: 180 }}>
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
            <rect x={0} y={yS} width={bw} height={sH} fill="var(--mint)" className={mounted ? "grow-y" : ""} style={{ animationDelay: `${delay}ms` }} />
            <rect x={0} y={yP} width={bw} height={pH} fill="var(--accent)" className={mounted ? "grow-y" : ""} style={{ animationDelay: `${delay + 80}ms` }} />
            <rect x={0} y={yC} width={bw} height={cH} fill="var(--violet)" className={mounted ? "grow-y" : ""} style={{ animationDelay: `${delay + 160}ms` }} />
          </g>
        );
      })}
      {/* baseline */}
      <line x1={0} y1={h - 1} x2={w} y2={h - 1} stroke="rgba(255,255,255,.08)" />
    </svg>
  );
}
