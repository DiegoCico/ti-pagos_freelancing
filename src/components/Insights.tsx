import React from 'react';

export default function Insights() {
  return (
    <section className="section s-border" id="about">
      <div className="two-col">
        <div>
          <div className="eyebrow r">Platform Outcomes</div>
          <h2 className="sh r">Launch in weeks,<br />not months</h2>
        </div>
        <p className="slead r">Trade volume, settlement speed, compliance pass-rates, and run-rate costs — with blockchain as the trust layer.</p>
      </div>
      <div className="outcome-panels">
        <div className="cpanel r">
          <div className="cp-t">Trade volume trend</div>
          <div className="cp-s">DAILY THROUGHPUT — SUPPORTED ASSETS &amp; FIAT ON/OFF-RAMPS</div>
          <div className="bars">
            <div className="bar" style={{ height: '42%', background: 'var(--panel)' }}></div>
            <div className="bar" style={{ height: '55%', background: 'var(--panel)' }}></div>
            <div className="bar" style={{ height: '38%', background: 'var(--panel)' }}></div>
            <div className="bar" style={{ height: '68%', background: '#2a3a5a' }}></div>
            <div className="bar" style={{ height: '61%', background: 'var(--panel)' }}></div>
            <div className="bar" style={{ height: '76%', background: 'var(--panel)' }}></div>
            <div className="bar" style={{ height: '52%', background: 'var(--panel)' }}></div>
            <div className="bar" style={{ height: '88%', background: 'var(--blue)' }}></div>
            <div className="bar" style={{ height: '64%', background: 'var(--panel)' }}></div>
            <div className="bar" style={{ height: '73%', background: 'var(--panel)' }}></div>
            <div className="bar" style={{ height: '57%', background: 'var(--panel)' }}></div>
            <div className="bar" style={{ height: '95%', background: 'var(--red)' }}></div>
          </div>
        </div>
        <div className="cpanel r">
          <div className="cp-t">Daily outcomes (last 12 days)</div>
          <div className="cp-s">SETTLED · KYC/AML REVIEW · FEES &amp; OVERHEAD</div>
          <div className="donut-row">
            <svg width="110" height="110" viewBox="0 0 110 110" style={{ flexShrink: 0 }}>
              <circle cx="55" cy="55" r="40" fill="none" stroke="var(--panel)" strokeWidth="16"/>
              <circle cx="55" cy="55" r="40" fill="none" stroke="var(--blue)" strokeWidth="16" strokeDasharray="196 251" strokeDashoffset="0" transform="rotate(-90 55 55)"/>
              <circle cx="55" cy="55" r="40" fill="none" stroke="#7a5c00" strokeWidth="16" strokeDasharray="38 251" strokeDashoffset="-196" transform="rotate(-90 55 55)"/>
              <circle cx="55" cy="55" r="40" fill="none" stroke="var(--red)" strokeWidth="16" strokeDasharray="17 251" strokeDashoffset="-234" transform="rotate(-90 55 55)"/>
            </svg>
            <div className="leg-list">
              <div className="leg">
                <span className="leg-dot" style={{ background: 'var(--blue)' }}></span>
                <span className="leg-l">Settled</span>
                <span className="leg-v">78%</span>
              </div>
              <div className="leg">
                <span className="leg-dot" style={{ background: '#7a5c00' }}></span>
                <span className="leg-l">KYC/AML review</span>
                <span className="leg-v">15%</span>
              </div>
              <div className="leg">
                <span className="leg-dot" style={{ background: 'var(--red)' }}></span>
                <span className="leg-l">Fees &amp; overhead</span>
                <span className="leg-v">7%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="kpi-row">
        <div className="kpi r">
          <div className="kpi-v">28 ms</div>
          <div className="kpi-l">Median settlement</div>
          <div className="kpi-sub">ORDER ACCEPT TO ON-CHAIN COMMIT</div>
        </div>
        <div className="kpi r">
          <div className="kpi-v">97.6%</div>
          <div className="kpi-l">KYC/AML pass rate</div>
          <div className="kpi-sub">AUTOMATED + MANUAL WITHIN SLA</div>
        </div>
        <div className="kpi r">
          <div className="kpi-v">99.98%</div>
          <div className="kpi-l">Platform uptime (90d)</div>
          <div className="kpi-sub">CORE APIS, CUSTODY &amp; WEBHOOKS</div>
        </div>
        <div className="kpi r">
          <div className="kpi-v">$0.0006</div>
          <div className="kpi-l">Avg fee per trade</div>
          <div className="kpi-sub">NET PLATFORM + NETWORK FEES</div>
        </div>
      </div>
      <div style={{ marginTop: '52px' }}>
        <div className="eyebrow r">Secure &amp; Compliant by Design</div>
        <div className="trio">
          <div className="trio-card r">
            <div className="trio-t">Blockchain Protection</div>
            <p className="trio-d">Immutable settlement with on-chain proofs and tamper-evident audit trails for every transaction across all jurisdictions.</p>
          </div>
          <div className="trio-card r">
            <div className="trio-t">KYC/AML Orchestration</div>
            <p className="trio-d">Identity verification, sanctions screening, and transaction monitoring with configurable risk thresholds and manual review workflows.</p>
          </div>
          <div className="trio-card r">
            <div className="trio-t">Custody &amp; Controls</div>
            <p className="trio-d">Segregated wallets, policy-based approvals, and hardware-backed key management via HSM/MPC for institutional-grade security.</p>
          </div>
        </div>
      </div>
    </section>
  );
}