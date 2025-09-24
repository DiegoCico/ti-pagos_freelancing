export default function CTA() {
  return (
    <section id="cta" className="section">
      <div className="container card tilt" style={{ textAlign:'center', padding:'36px 24px' }}>
        <h2 className="grad-text" style={{ fontSize:34, marginTop:0 }}>Ready to build with TIPagos?</h2>
        <p style={{ color:'var(--muted)', marginTop:6 }}>
          Start a 2-week discovery sprint. Scope → Design → Pilot you can demo.
        </p>
        <div style={{ display:'flex', gap:12, justifyContent:'center', marginTop:16 }}>
          <a href="#contact" className="btn">Book a Call</a>
          <a href="mailto:hello@tipagos.io" className="btn btn--ghost">Email Us</a>
        </div>
      </div>
    </section>
  );
}
