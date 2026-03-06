function Security() {
  return (
    <section className="section section-gray" id="security">
      <div className="sec-label r">Security · Blockchain</div>
      <h2 className="sec-h r" style={{ marginBottom: '40px' }}>Data security you can trust</h2>
      <div className="sec-two">
        <div className="sec-panel r">
          <div className="sp-label">Security Level</div>
          <div className="sp-track"><div className="sp-fill"></div></div>
          <div className="sp-scale"><span>Low</span><span>Medium</span><span>High</span><span>Highest</span></div>
          <div className="sp-anchor">⛓&nbsp; anchored by blockchain</div>
          <div className="sp-row"><span className="sp-rl">Encryption</span><span className="sp-rv">AES-256 · TLS 1.3</span></div>
          <div className="sp-row"><span className="sp-rl">Compliance</span><span className="sp-rv">SOC 2 · PCI-DSS · KYC/AML</span></div>
          <div className="sp-row"><span className="sp-rl">Access</span><span className="sp-rv">RBAC · Dual control · Logs</span></div>
          <div className="sp-row"><span className="sp-rl">Key management</span><span className="sp-rv">HSM / MPC</span></div>
        </div>
        <div className="sec-feats r">
          <div className="sf"><div className="sf-title">Defense-in-depth</div><p className="sf-desc">From network firewalls to application-level monitoring, every layer is hardened against both external and insider threats.</p></div>
          <div className="sf"><div className="sf-title">Immutable audit trail</div><p className="sf-desc">Key events are chained on-blockchain for tamper-proof traceability. No record can be altered after commit — regulator-ready by design.</p></div>
          <div className="sf"><div className="sf-title">Keys &amp; approvals</div><p className="sf-desc">HSM/MPC custody, dual approval workflows, and least-privilege access ensure no single point of compromise at any stage.</p></div>
          <div className="tags">
            <span className="tag red">PCI-DSS ready</span>
            <span className="tag blue">SOC 2 Type II</span>
            <span className="tag green">KYT / TRM</span>
            <span className="tag">Travel Rule</span>
            <span className="tag">Audit API</span>
            <span className="tag">ISO-27001</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Security;
