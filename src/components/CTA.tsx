import React from 'react';

export default function CTA() {
  return (
    <section className="cta" id="contact">
      <div className="cta-logo-row">
        <img src="/ti-pagos_freelancing/logo.png" alt="TIPagos" style={{ height: '45px' }} />
      </div>
      <h2 className="r">Ready to launch<br />with <em>TIPagos</em>?</h2>
      <p className="r">Partner with us to add secure crypto payments, custody, and cards to your product. Start with a 2-week discovery sprint — from scope to a working pilot you can demo.</p>
      <div className="cta-btns r">
        <a href="https://calendly.com/anderson-tipagos/30min" className="btn-primary" target="_blank" rel="noopener noreferrer">Book a Call</a>
        <a href="mailto:hello@tipagos.com" className="btn-secondary">Email Us</a>
      </div>
    </section>
  );
}