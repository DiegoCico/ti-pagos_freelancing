function CTA() {
  return (
    <section className="cta" id="contact">
      <div className="cta-left">
        <div className="cta-eyebrow">Ready to launch</div>
        <h2>Partner with <em>TIPagos</em><br />and go live in 2 weeks</h2>
        <p>Add secure crypto payments, custody, and cards to your product. Start with a discovery sprint — from scope to a working pilot you can demo to your board.</p>
        <div className="cta-certs">
          <span className="cta-cert">ISO-27001</span>
          <span className="cta-cert">PCI-DSS</span>
          <span className="cta-cert">SOC 2</span>
          <span className="cta-cert">KYT/TRM</span>
        </div>
      </div>
      <div className="cta-right">
        <a href="#" className="btn-cta-white">Book a Call</a>
        <a href="mailto:hello@tipagos.com" className="btn-cta-outline">Email Us</a>
      </div>
    </section>
  );
}

export default CTA;
