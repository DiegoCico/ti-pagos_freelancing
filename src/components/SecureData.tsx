export default function SecureData() {
  return (
    <section className="section s-border s-tint" id="security">
      <div className="eyebrow r">Security · Blockchain</div>
      <h2 className="sh r" style={{ marginBottom: '48px' }}>Data security you can trust</h2>
      <div className="sec-two">
        <div className="sec-vis r">
          <div className="sv-lbl">Security Level</div>
          <div className="sv-track">
            <div className="sv-fill"></div>
          </div>
          <div className="sv-scale">
            <span>Low</span>
            <span>Medium</span>
            <span>High</span>
            <span>Highest</span>
          </div>
          <div className="sv-anchor">⛓&nbsp; anchored by blockchain</div>
          <div className="sv-row">
            <span className="sv-rl">Encryption</span>
            <span className="sv-rv">AES-256 · TLS 1.3</span>
          </div>
          <div className="sv-row">
            <span className="sv-rl">Compliance</span>
            <span className="sv-rv">SOC 2 · PCI-DSS · KYC/AML</span>
          </div>
          <div className="sv-row">
            <span className="sv-rl">Access</span>
            <span className="sv-rv">RBAC · Dual control · Logs</span>
          </div>
          <div className="sv-row">
            <span className="sv-rl">Key management</span>
            <span className="sv-rv">HSM / MPC</span>
          </div>
        </div>
        <div className="sec-feats r">
          <div className="sf">
            <div className="sf-title">Defense-in-depth</div>
            <p className="sf-desc">From network firewalls to application-level monitoring, every layer is hardened against both external and insider threats.</p>
          </div>
          <div className="sf">
            <div className="sf-title">Immutable audit trail</div>
            <p className="sf-desc">Key events are chained on-blockchain for tamper-proof traceability. No record can be altered after commit — regulator-ready by design.</p>
          </div>
          <div className="sf">
            <div className="sf-title">Keys &amp; approvals</div>
            <p className="sf-desc">HSM/MPC custody, dual approval workflows, and least-privilege access ensure no single point of compromise at any stage.</p>
          </div>
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