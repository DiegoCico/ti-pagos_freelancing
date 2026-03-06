function Outcomes() {
  return (
    <section className="section" id="about">
      <div className="sec-label r">Platform Outcomes</div>
      <div className="two-col">
        <div><h2 className="sec-h r">Launch in weeks,<br />not months</h2></div>
        <p className="sec-lead r">Trade volume, settlement speed, compliance pass-rates, and run-rate costs — with blockchain as the trust layer.</p>
      </div>
      <div className="outcome-panels">
        <div className="cpanel r">
          <div className="cp-t">Trade volume trend</div>
          <div className="cp-s">DAILY THROUGHPUT — SUPPORTED ASSETS &amp; FIAT</div>
          <div className="bars">
            {[42, 55, 38, 68, 61, 76, 52, 88, 64, 73, 57, 95].map((h, i) => (
              <div key={i} className="bar" style={{ height: `${h}%`, background: i === 3 ? '#c5cde0' : i === 7 ? '#1a4fa0' : i === 11 ? '#a81c23' : '#ddd' }}></div>
            ))}
          </div>
        </div>
        <div className="cpanel r">
          <div className="cp-t">Daily outcomes (last 12 days)</div>
          <div className="cp-s">SETTLED · KYC/AML REVIEW · FEES &amp; OVERHEAD</div>
          <div className="donut-row">
            <svg width="100" height="100" viewBox="0 0 100 100" style={{ flexShrink: 0 }}>
              <circle cx="50" cy="50" r="36" fill="none" stroke="#eee" strokeWidth="14" />
              <circle cx="50" cy="50" r="36" fill="none" stroke="#1a4fa0" strokeWidth="14" strokeDasharray="176 226" strokeDashoffset="0" transform="rotate(-90 50 50)" />
              <circle cx="50" cy="50" r="36" fill="none" stroke="#8a6500" strokeWidth="14" strokeDasharray="34 226" strokeDashoffset="-176" transform="rotate(-90 50 50)" />
              <circle cx="50" cy="50" r="36" fill="none" stroke="#a81c23" strokeWidth="14" strokeDasharray="16 226" strokeDashoffset="-210" transform="rotate(-90 50 50)" />
            </svg>
            <div className="leg-list">
              <div className="leg"><span className="leg-dot" style={{ background: '#1a4fa0' }}></span><span className="leg-l">Settled</span><span className="leg-v">78%</span></div>
              <div className="leg"><span className="leg-dot" style={{ background: '#8a6500' }}></span><span className="leg-l">KYC/AML review</span><span className="leg-v">15%</span></div>
              <div className="leg"><span className="leg-dot" style={{ background: '#a81c23' }}></span><span className="leg-l">Fees &amp; overhead</span><span className="leg-v">7%</span></div>
            </div>
          </div>
        </div>
      </div>
      <div className="kpi-row">
        <div className="kpi r"><div className="kpi-v">28 ms</div><div className="kpi-l">Median settlement</div><div className="kpi-sub">ORDER ACCEPT TO ON-CHAIN COMMIT</div></div>
        <div className="kpi r"><div className="kpi-v">97.6%</div><div className="kpi-l">KYC/AML pass rate</div><div className="kpi-sub">AUTOMATED + MANUAL WITHIN SLA</div></div>
        <div className="kpi r"><div className="kpi-v">99.98%</div><div className="kpi-l">Platform uptime (90d)</div><div className="kpi-sub">CORE APIS, CUSTODY &amp; WEBHOOKS</div></div>
        <div className="kpi r"><div className="kpi-v">$0.0006</div><div className="kpi-l">Avg fee per trade</div><div className="kpi-sub">NET PLATFORM + NETWORK FEES</div></div>
      </div>
      <div style={{ marginTop: '48px' }}>
        <div className="sec-label r">Secure &amp; Compliant by Design</div>
        <div className="trio">
          <div className="trio-card r"><div className="trio-t">Blockchain Protection</div><p className="trio-d">Immutable settlement with on-chain proofs and tamper-evident audit trails for every transaction across all jurisdictions.</p></div>
          <div className="trio-card r"><div className="trio-t">KYC/AML Orchestration</div><p className="trio-d">Identity, sanctions, and transaction-risk checks with policy controls and audit logs — built for global regulatory environments.</p></div>
          <div className="trio-card r"><div className="trio-t">Custody &amp; Controls</div><p className="trio-d">Segregated wallets, policy-based approvals, and hardware-backed key management via HSM/MPC for institutional-grade security.</p></div>
        </div>
      </div>
    </section>
  );
}

export default Outcomes;
