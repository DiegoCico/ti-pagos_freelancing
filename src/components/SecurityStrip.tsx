export default function SecurityStrip() {
  const items = ["Zero-trust", "KMS/HSM", "WAF", "Private VPC", "SOC-ready", "Audit Logs"];
  return (
    <section id="security" className="section--tight" style={{ borderTop:'1px solid var(--border)', borderBottom:'1px solid var(--border)' }}>
      <div className="container" style={{ display:'flex', flexWrap:'wrap', gap:10, justifyContent:'center' }}>
        {items.map((x, i)=>(
          <span key={i} className="badge" style={{ borderColor:'var(--ring)', color:'var(--accent)' }}>{x}</span>
        ))}
      </div>
    </section>
  );
}
