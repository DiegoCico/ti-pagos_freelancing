"use client";
import { useEffect, useRef, useState } from "react";

/**
 * SecureData
 * Full section:
 * - Badge + heading + intro
 * - Semicircle gauge with Low/Medium/High labels
 * - Copy column with bullets + chips
 */
export default function SecureData() {
  const ref = useRef<HTMLElement | null>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (e) => e[0].isIntersecting && setOn(true),
      { threshold: 0.45 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section id="secure-data" className="section" ref={ref}>
      <div className="container">
        <div
          className="badge"
          style={{
            marginBottom: 14,
            borderColor: "var(--ring)",
            color: "var(--accent)",
          }}
        >
          Security • Blockchain
        </div>

        <h2 style={{ margin: "0 0 8px", fontSize: 36 }}>
          Highest <span className="underline-sweep">security</span> at every level
        </h2>

        <p className="muted" style={{ maxWidth: 780 }}>
          From low-risk workloads to mission-critical financial data, we give you full spectrum
          protection. Anchored to blockchain, encrypted everywhere, and auditable by design.
        </p>

        <div className="secure-data-grid">
          {/* Visual (gauge) */}
          <div className="card-lite">
            <DialSVG on={on} />
          </div>

          {/* Copy column */}
          <div className="secure-data-copy">
            <h3 style={{ marginTop: 0 }}>Why it matters</h3>

            <ul className="security-list">
              <li>
                <span className="dot low" />
                <div>
                  <div className="li-title">Defense in depth</div>
                  <div className="li-body">
                    Layered protection from network to application, mapped to risk levels.
                  </div>
                </div>
              </li>
              <li>
                <span className="dot med" />
                <div>
                  <div className="li-title">Immutable records</div>
                  <div className="li-body">
                    Every write chained, timestamped, and verifiable on a blockchain ledger.
                  </div>
                </div>
              </li>
              <li>
                <span className="dot high" />
                <div>
                  <div className="li-title">Built for critical workloads</div>
                  <div className="li-body">
                    End-to-end encryption, fine-grained roles, and multi-region durability.
                  </div>
                </div>
              </li>
            </ul>

            <div className="security-tags">
              <span className="chip">SOC 2</span>
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

function DialSVG({ on }: { on: boolean }) {
  return (
    <svg
      className={`security-dial ${on ? "on" : ""}`}
      viewBox="0 0 720 420"
      role="img"
      aria-label="Security gauge Low → High"
    >
      <defs>
        <linearGradient id="dialGrad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#f97316" />   {/* orange */}
          <stop offset="50%" stopColor="var(--accent)" /> {/* cyan */}
          <stop offset="100%" stopColor="#3b82f6" /> {/* blue */}
        </linearGradient>
        <radialGradient id="shieldGlow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* arc */}
      <path
        className="dial-arc"
        d="M 140 270 A 220 220 0 0 1 580 270"
        stroke="url(#dialGrad)"
        strokeWidth="20"
        fill="none"
        strokeLinecap="round"
      />

      {/* labels outside arc */}
      <text x="120" y="140" className="rim-label low" textAnchor="middle">
        Low
      </text>
      <text x="360" y="20" className="rim-label med" textAnchor="middle">
        Medium
      </text>
      <text x="600" y="140" className="rim-label high" textAnchor="middle">
        High
      </text>

      {/* center */}
      <g className="dial-center" transform="translate(360 220)">
        <circle r="90" fill="url(#shieldGlow)" opacity="0.15" />
        <path
          d="M -25 -20 L 0 -35 L 25 -20 V 10 C 25 30 0 45 0 45 C 0 45 -25 30 -25 10 Z"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        <text x="0" y="80" textAnchor="middle" className="dial-main-text">
          Highest Security
        </text>
        <text x="0" y="110" textAnchor="middle" className="dial-sub-text">
          with blockchain
        </text>
      </g>
    </svg>
  );
}
