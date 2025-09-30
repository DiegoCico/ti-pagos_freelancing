import { useEffect, useMemo, useState } from "react";

/**
 * Insights (plain-language version)
 * Same charts and KPIs, just simpler wording for non-technical readers.
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
          Results at a glance
        </div>

        <h2 style={{ fontSize: 36, margin: "0 0 10px" }}>
          See results in <span className="underline-sweep">weeks</span>, not months
        </h2>

        <p style={{ color: "var(--muted)", marginTop: 0, maxWidth: 780 }}>
          Simple, clear numbers: how much we process, how fast it feels, how reliable it is, and what it costs.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 20, marginTop: 24 }}>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Activity over time</h3>
            <p style={{ color: "var(--muted)", marginTop: -6 }}>
              Daily volume trend — higher line means we handled more.
            </p>
            <Sparkline data={data} mounted={mounted} />
          </div>

          <div className="card">
            <h3 style={{ marginTop: 0 }}>Daily outcomes (last 12 days)</h3>
            <p style={{ color: "var(--muted)", marginTop: -6 }}>
              What each day looked like: done, in progress, and system overhead.
            </p>
            <StackedBars bars={bars} mounted={mounted} />
            <div style={{ display: "flex", gap: 12, marginTop: 10, color: "var(--muted)", fontSize: 12 }}>
              <Legend sw="var(--mint)" label="Completed" />
              <Legend sw="var(--accent)" label="In progress" />
              <Legend sw="var(--violet)" label="Overhead cost" />
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0,1fr))", gap: 14, marginTop: 20 }}>
          <KPI label="Average speed" value="18,900 / sec" hint="How many we handle per second on average." />
          <KPI label="95% finish under" value="32 ms" hint="How fast it feels for almost everyone." />
          <KPI label="Uptime (90 days)" value="99.98%" hint="How often the system was available." />
          <KPI label="Cost per action" value="$0.0007" hint="What one processed item costs on average." />
        </div>
      </div>
    </section>
  );
}

function KPI({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="card" style={{ padding: 16 }}>
      <div style={{ fontSize: 12, color: "var(--muted)" }}>{label}</div>
      <div style={{ fontSize: 26, fontWeight: 800 }}>{value}</div>
      {hint && <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 6 }}>{hint}</div>}
      <div style={{ height: 6, marginTop: 8, borderRadius: 6, background: "linear-gradient(90deg, var(--brand), transparent)" }} />
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

/** Minimal animated sparkline */
function Sparkline({ data, mounted }: { data: number[]; mounted: boolean }) {
  const w = 720, h = 180, pad = 10;
  const min = Math.min(...data), max = Math.max(...data);

  const X = (i: number) => pad + (i / (data.length - 1)) * (w - pad * 2);
  const Y = (v: number) => pad + (1 - (v - min) / (max - min)) * (h - pad * 2);

  // Line path (M + L commands)
  const dLine = data
    .map((v, i) => `${i === 0 ? "M" : "L"} ${X(i)} ${Y(v)}`)
    .join(" ");

  // Area path down to the baseline
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
      <path d={dArea} fill="url(#sparkFill)" opacity={mounted ? 1 : 0} style={{ transition: "opacity 500ms ease" }} />

      {/* Solid under-stroke to guarantee continuity */}
      <path d={dLine} stroke="rgba(255,255,255,.08)" strokeWidth="4" fill="none" />

      {/* Gradient stroke with safe reveal (no mid-gap) */}
      <path
        d={dLine}
        pathLength={1}                    // normalize length
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


/** Minimal stacked bars */
function StackedBars({ bars, mounted }: { bars: { success: number; pending: number; cost: number }[]; mounted: boolean }) {
  const w = 360, h = 180, gap = 6, bw = (w - gap * (bars.length + 1)) / bars.length;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: "100%", height: 180 }} role="img" aria-label="Daily outcomes for the last 12 days">
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
