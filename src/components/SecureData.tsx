"use client";
import { useEffect, useRef, useState } from "react";

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
          Data security <span className="underline-sweep">you can trust</span>
        </h2>

        <p className="muted" style={{ maxWidth: 780 }}>
          We protect every transaction and card program with blockchain-anchored audit,
          strong encryption, and enterprise controls designed for banks and fintechs.
        </p>

        <div className="secure-data-grid">
          {/* Gauge visual */}
          <div className="card-lite">
            <DialSVG on={on} />
          </div>

          {/* Copy */}
          <div className="secure-data-copy">
            <h3 style={{ marginTop: 0 }}>Layers of protection</h3>
            <ul className="security-list">
              <li>
                <span className="dot low" />
                <div>
                  <div className="li-title">Defense-in-depth</div>
                  <div className="li-body">
                    From network firewalls to app-level monitoring, every layer is hardened.
                  </div>
                </div>
              </li>
              <li>
                <span className="dot med" />
                <div>
                  <div className="li-title">Immutable audit</div>
                  <div className="li-body">
                    Key events chained on blockchain for tamper-proof traceability.
                  </div>
                </div>
              </li>
              <li>
                <span className="dot high" />
                <div>
                  <div className="li-title">Keys & approvals</div>
                  <div className="li-body">
                    HSM/MPC custody, dual approvals, and least-privilege access.
                  </div>
                </div>
              </li>
            </ul>

            {/* Compact assurance row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0,1fr))",
                gap: 14,
                marginTop: 16,
              }}
            >
              <Mini title="Encryption" desc="AES-256 at rest, TLS 1.3 in transit" />
              <Mini title="Compliance" desc="SOC 2 • PCI-DSS • KYC/AML" />
              <Mini title="Access" desc="RBAC • Dual control • Audit logs" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- Small card row item --- */
function Mini({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="card" style={{ padding: 14 }}>
      <div style={{ fontWeight: 700, fontSize: 14 }}>{title}</div>
      <div style={{ color: "var(--muted)", fontSize: 12 }}>{desc}</div>
    </div>
  );
}

/* --- Dial --- */
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
          <stop offset="0%" stopColor="#f97316" />           {/* Low: orange */}
          <stop offset="50%" stopColor="var(--accent)" />     {/* Medium: cyan */}
          <stop offset="100%" stopColor="#3b82f6" />         {/* High: blue */}
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
      <text x="120" y="140" className="rim-label low" textAnchor="middle">Low</text>
      <text x="360" y="20" className="rim-label med" textAnchor="middle">Medium</text>
      <text x="600" y="140" className="rim-label high" textAnchor="middle">High</text>

      {/* center */}
      <g className="dial-center" transform="translate(360 220)">
        <circle r="90" fill="url(#shieldGlow)" opacity="0.15" />
        <path
          d="M -25 -20 L 0 -35 L 25 -20 V 10 C 25 30 0 45 0 45 C 0 45 -25 30 -25 10 Z"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        <text x="0" y="80" textAnchor="middle" className="dial-main-text">Highest Security</text>
        <text x="0" y="110" textAnchor="middle" className="dial-sub-text">anchored by blockchain</text>
      </g>
    </svg>
  );
}
