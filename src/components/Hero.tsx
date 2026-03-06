import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div>
          <div className="hero-eyebrow">Banks · Crypto · Payments Infrastructure</div>
          <h1 className="hero-h1">Crypto rails &amp; cards<br />for <em>financial institutions</em></h1>
          <p className="hero-sub">TIPagos powers compliant buy/sell, custody, and branded debit/credit cards — blockchain-anchored, encrypted end-to-end, and ready to scale globally.</p>
          <div className="hero-actions">
            <a href="https://calendly.com/anderson-tipagos/30min" className="btn-primary" target="_blank" rel="noopener noreferrer">Book a Call</a>
            <a href="mailto:hello@tipagos.com" className="btn-secondary">Email Us</a>
          </div>
          <p className="hero-cert">ISO-27001 aligned &nbsp;·&nbsp; PCI-DSS scope ready &nbsp;·&nbsp; SOC-friendly audit logs</p>
        </div>
        <div className="hero-card">
          <div className="hc-head">
            <div className="hc-logo">
              <img src="/ti-pagos_freelancing/logo.png" alt="TIPagos" style={{ height: '18px', marginRight: '8px' }} />
              — Live
            </div>
            <div className="hc-status">Operational</div>
          </div>
          <div className="hcm"><span className="hcm-l">Throughput</span><span className="hcm-v">18,900 TPS</span></div>
          <div className="hcm"><span className="hcm-l">Latency (p95)</span><span className="hcm-v">32 ms</span></div>
          <div className="hcm"><span className="hcm-l">Uptime (90d)</span><span className="hcm-v up">99.98%</span></div>
          <div className="hcm"><span className="hcm-l">Cost / Tx</span><span className="hcm-v">$0.0007</span></div>
          <div className="hcm"><span className="hcm-l">KYC/AML pass rate</span><span className="hcm-v up">97.6%</span></div>
          <div className="hcm"><span className="hcm-l">Settlements today</span><span className="hcm-v">14,287</span></div>
          <div className="hcm"><span className="hcm-l">Compliance</span><span className="hcm-v dim">SOC 2 · PCI-DSS · KYT</span></div>
        </div>
      </div>
    </section>
  );
}