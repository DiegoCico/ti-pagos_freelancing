export default function CTA() {
  return (
    <section id="cta" className="section">
      <div
        className="container card tilt"
        style={{ textAlign: "center", padding: "40px 28px" }}
      >
        <h2 className="grad-text" style={{ fontSize: 34, marginTop: 0 }}>
          Ready to launch with <span style={{ fontWeight: 800 }}>TIPagos</span>?
        </h2>
        <p style={{ color: "var(--muted)", marginTop: 8, maxWidth: 640, marginInline: "auto" }}>
          Partner with us to add secure crypto payments, custody, and cards to your product.
          Start with a 2-week discovery sprint — from scope to a working pilot you can demo.
        </p>

        <div
          style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: 20,
          }}
        >
          <a href="#contact" className="btn">
            Book a Call
          </a>
          <a href="mailto:hello@tipagos.io" className="btn btn--ghost">
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}
