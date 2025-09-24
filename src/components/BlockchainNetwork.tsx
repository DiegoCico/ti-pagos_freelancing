import { useEffect, useMemo, useRef, useState } from "react";

/**
 * BlockchainNetwork
 * Animated SVG network: when the section enters the viewport,
 * nodes light up and links draw in sequence to mimic “connecting chains”.
 */
export default function BlockchainNetwork() {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setActive(true);
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Node coordinates (responsive-ish in viewBox units)
  const nodes = useMemo(
    () => [
      { id: "A", x: 14,  y: 60 },
      { id: "B", x: 34,  y: 30 },
      { id: "C", x: 56,  y: 48 },
      { id: "D", x: 78,  y: 28 },
      { id: "E", x: 86,  y: 62 },
      { id: "F", x: 62,  y: 74 },
      { id: "G", x: 40,  y: 72 },
      { id: "H", x: 22,  y: 86 },
      { id: "I", x: 82,  y: 88 },
    ],
    []
  );

  // Chain links (in order of reveal)
  const links = useMemo(
    () => [
      ["A", "B"], ["B", "C"], ["C", "D"], ["D", "E"],
      ["E", "F"], ["F", "G"], ["G", "H"], ["F", "I"],
    ],
    []
  );

  const nodeMap = useMemo(() => {
    const m = new Map(nodes.map((n) => [n.id, n]));
    return m;
  }, [nodes]);

  return (
    <section ref={ref} id="blockchain" className="section" style={{ position: "relative", overflow: "hidden" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 36, alignItems: "center" }}>
        {/* Copy */}
        <div>
          <div className="badge" style={{ marginBottom: 14, borderColor: "var(--ring)", color: "var(--accent)" }}>
            Blockchain Connectivity
          </div>
          <h2 style={{ fontSize: 36, margin: "0 0 10px" }}>
            Chains that <span className="underline-sweep">actually</span> connect
          </h2>
          <p style={{ color: "var(--muted)", maxWidth: 640 }}>
            TIPagos orchestrates nodes, keys, and policies across networks. When you scale to new
            chains, our routing and settlement layers light up immediately: fewer moving parts,
            more predictable ops.
          </p>
          <ul style={{ marginTop: 14, color: "var(--muted)", lineHeight: 1.8 }}>
            <li>Multi-chain wallet orchestration (hot/warm/cold)</li>
            <li>Policy-based routing, approvals, and rate-limits</li>
            <li>Event streaming for confirmations and reorg handling</li>
          </ul>
        </div>

        {/* Animated network */}
        <div className="card" style={{ padding: 0, overflow: "hidden" }}>
          <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" style={{ width: "100%", height: "360px", background: "linear-gradient(180deg, rgba(0,230,230,.06), rgba(23,212,155,.04))" }}>
            {/* Grid */}
            <defs>
              <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="rgba(255,255,255,.06)" strokeWidth="0.4" />
              </pattern>
              <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.9" />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect x="0" y="0" width="100" height="100" fill="url(#grid)" />

            {/* Links */}
            {links.map((pair, i) => {
              const a = nodeMap.get(pair[0])!;
              const b = nodeMap.get(pair[1])!;
              const delay = 150 + i * 160;
              return (
                <g key={i}>
                  {/* glow stroke */}
                  <line
                    x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                    stroke="rgba(0,230,230,.35)" strokeWidth="1.6"
                    opacity={active ? 1 : 0}
                    style={{ transition: "opacity .3s ease", transitionDelay: `${delay}ms` }}
                  />
                  {/* draw-in stroke */}
                  <line
                    x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                    stroke="url(#gradLine)"
                    strokeWidth="0.9"
                    className={active ? "path-reveal" : ""}
                    style={{ animationDelay: `${delay}ms` }}
                  />
                </g>
              );
            })}

            <linearGradient id="gradLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--accent)" />
              <stop offset="100%" stopColor="var(--mint)" />
            </linearGradient>

            {/* Nodes */}
            {nodes.map((n, i) => {
              const delay = 100 + i * 90;
              return (
                <g key={n.id} style={{ transformOrigin: `${n.x}% ${n.y}%`, transform: active ? "scale(1)" : "scale(.6)", opacity: active ? 1 : 0, transition: "transform .45s ease, opacity .45s ease", transitionDelay: `${delay}ms` }}>
                  <circle cx={n.x} cy={n.y} r={2.8} fill="url(#nodeGlow)" opacity=".35" />
                  <circle cx={n.x} cy={n.y} r={1.7} fill="var(--accent)" className="node-dot" />
                  <circle cx={n.x} cy={n.y} r={0.9} fill="white" opacity=".9" />
                </g>
              );
            })}
          </svg>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, padding: 16 }}>
            <Pill label="Multi-chain ready" />
            <Pill label="Policy-driven flows" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Pill({ label }: { label: string }) {
  return (
    <div className="badge" style={{ borderColor: "var(--ring)", color: "var(--accent)", textAlign: "center" }}>
      {label}
    </div>
  );
}
