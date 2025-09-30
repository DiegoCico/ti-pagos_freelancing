import { useEffect, useRef, useState } from "react";

/**
 * SecureLedger
 * - Blockchain/crypto vibe using an animated node graph (no lock icon)
 * - Matches site: badge, h2 + underline-sweep, chips, subtle gradients
 * - Copy column is NOT boxed; visual sits in a light card for depth
 */
export default function SecureLedger() {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (e) => e[0].isIntersecting && setVisible(true),
      { threshold: 0.45 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section id="security" className="section" ref={ref}>
      <div className="container">
        <div className="badge" style={{ marginBottom: 14, borderColor: "var(--ring)", color: "var(--accent)" }}>
          Security • Blockchain
        </div>

        <h2 style={{ margin: "0 0 8px", fontSize: 36 }}>
          Your data is secure by <span className="underline-sweep">design</span>
        </h2>

        <p className="muted" style={{ maxWidth: 840 }}>
          We anchor changes to an immutable ledger and encrypt everything end-to-end. 
          That means tamper-evident records, least-privilege access, and a clear, auditable history.
        </p>

        <div className={`security-grid no-box ${visible ? "is-visible" : ""}`}>
          {/* Visual (subtle card for depth; matches your other charts) */}
          <div className="card-lite">
            <LedgerVisual active={visible} />
          </div>

          {/* Copy (no box) */}
          <div className="security-copy-plain">
            <h3 style={{ marginTop: 0 }}>Built for regulated workloads</h3>

            <ul className="security-list">
              <li>
                <span className="dot mint" />
                <div>
                  <div className="li-title">Immutable by default</div>
                  <div className="li-body">Each write is chained and timestamped — attempts to alter data are visible.</div>
                </div>
              </li>
              <li>
                <span className="dot accent" />
                <div>
                  <div className="li-title">Encrypted everywhere</div>
                  <div className="li-body">TLS in transit, KMS/HSM at rest, per-tenant envelope keys.</div>
                </div>
              </li>
              <li>
                <span className="dot violet" />
                <div>
                  <div className="li-title">Zero-trust, policy-driven</div>
                  <div className="li-body">Private VPC, mTLS service-to-service, fine-grained roles and audit.</div>
                </div>
              </li>
            </ul>

            <div className="security-tags">
              <span className="chip">SOC-friendly logs</span>
              <span className="chip">KMS/HSM</span>
              <span className="chip">mTLS</span>
              <span className="chip">Multi-region</span>
              <span className="chip">WAF</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** SVG “ledger” visual: lines draw in, nodes softly pulse */
function LedgerVisual({ active }: { active: boolean }) {
  // Simple fixed layout that scales to container; no external libs
  return (
    <svg
      className={`ledger-svg ${active ? "on" : ""}`}
      viewBox="0 0 720 360"
      role="img"
      aria-label="Blockchain ledger network"
    >
      <defs>
        <linearGradient id="edgeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--accent)" />
          <stop offset="100%" stopColor="var(--mint)" />
        </linearGradient>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="var(--mint)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* faint grid for crypto vibe */}
      <g opacity="0.12">
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`gx${i}`} x1={80 * (i + 1)} y1="30" x2={80 * (i + 1)} y2="330" stroke="rgba(255,255,255,.12)" />
        ))}
        {Array.from({ length: 5 }).map((_, i) => (
          <line key={`gy${i}`} x1="40" y1={60 * (i + 1)} x2="680" y2={60 * (i + 1)} stroke="rgba(255,255,255,.08)" />
        ))}
      </g>

      {/* edges (animated draw) */}
      <g className="edges" stroke="url(#edgeGrad)" strokeWidth="2.4" strokeLinecap="round" fill="none">
        {[
          [120, 240, 260, 180],
          [260, 180, 380, 120],
          [260, 180, 380, 240],
          [380, 120, 520, 160],
          [380, 240, 520, 200],
          [520, 160, 600, 110],
          [520, 200, 600, 250],
          [260, 180, 200, 100],
        ].map((e, i) => (
          <path
            key={i}
            className="edge"
            d={`M ${e[0]} ${e[1]} L ${e[2]} ${e[3]}`}
            pathLength={1}
            style={{ animationDelay: `${120 + i * 80}ms` }}
          />
        ))}
      </g>

      {/* nodes */}
      {[
        [120, 240],
        [200, 100],
        [260, 180],
        [380, 120],
        [380, 240],
        [520, 160],
        [520, 200],
        [600, 110],
        [600, 250],
      ].map(([x, y], i) => (
        <g key={i} className="node" transform={`translate(${x} ${y})`}>
          <circle r="18" fill="url(#nodeGlow)" opacity="0.0" className="glow" />
          <circle r="5.5" fill={i % 3 === 0 ? "var(--mint)" : i % 3 === 1 ? "var(--accent)" : "var(--violet)"} />
        </g>
      ))}
    </svg>
  );
}
