function Hero() {
  return (
    <section className="hero">
      <div className="hero-main">
        <div>
          <div className="hero-kicker">Banks · Crypto · Payments Infrastructure</div>
          <h1 className="hero-h1">Crypto rails &amp; cards<br />for financial<br />institutions</h1>
          <p className="hero-sub">TIPagos powers compliant buy/sell, custody, and branded debit/credit cards — blockchain-anchored, encrypted end-to-end, and ready to scale globally.</p>
          <div className="hero-actions">
            <a href="https://calendly.com/anderson-tipagos/30min" className="btn-primary" target="_blank">Book a Call</a>
            <a href="mailto:hello@tipagos.com" className="btn-secondary" target="_blank">Email Us</a>
          </div>
        </div>
        <p className="hero-cert">ISO-27001 aligned &nbsp;·&nbsp; PCI-DSS scope ready &nbsp;·&nbsp; SOC-friendly audit logs</p>
      </div>
      <div className="hero-sidebar">
        <div className="hs-header">
          <div className="hs-title">TIPagos Live</div>
          <div className="hs-live">Operational</div>
        </div>
        <div className="hs-row"><span className="hs-label">Throughput</span><span className="hs-val">18,900 TPS</span></div>
        <div className="hs-row"><span className="hs-label">Latency (p95)</span><span className="hs-val">32 ms</span></div>
        <div className="hs-row"><span className="hs-label">Uptime (90d)</span><span className="hs-val up">99.98%</span></div>
        <div className="hs-row"><span className="hs-label">Cost / Tx</span><span className="hs-val">$0.0007</span></div>
        <div className="hs-row"><span className="hs-label">KYC/AML pass rate</span><span className="hs-val up">97.6%</span></div>
        <div className="hs-row"><span className="hs-label">Settlements today</span><span className="hs-val">14,287</span></div>
        <div className="hs-row"><span className="hs-label">Countries served</span><span className="hs-val">30+</span></div>
        <div className="hs-row"><span className="hs-label">Compliance</span><span className="hs-val dim">SOC 2 · PCI-DSS · KYT</span></div>
        <div className="hs-footer">
          Data updates every 30s.<br />
          All values indicative. © 2026 TIPagos.
        </div>
      </div>
    </section>
  );
}

export default Hero;
