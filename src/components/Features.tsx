export default function Features() {
  const items = [
    { title:"Crypto Payments Rail", color:"var(--accent)", body:"On/Off-ramps, wallet orchestration, settlement workflows that plug into your stack." },
    { title:"Blockchain Data Pipelines", color:"var(--mint)", body:"On-chain ETL, lakehouse modeling, and real-time analytics with durable SLAs." },
    { title:"Compliance & Security", color:"var(--brand)", body:"KYC/KYT hooks, policy engines, HSM/KMS, audit trails and clean separation of duties." },
    { title:"Exchanges & Custody", color:"var(--violet)", body:"Order routing, hot/cold wallet logic, withdrawal queues, alerting & approvals." },
  ];
  return (
    <section id="features" className="section">
      <div className="container">
        <h2 style={{ fontSize:36, margin:'0 0 10px' }}>
          Solutions that <span className="underline-sweep">ship to production</span>
        </h2>
        <p style={{ color:'var(--muted)', marginTop:0, maxWidth:760 }}>
          We build the boring, critical infrastructure — secure by default and ready to scale.
        </p>
        <div style={{ marginTop:28, display:'grid', gap:18, gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))' }}>
          {items.map((it, i)=>(
            <article key={i} className="card tilt" style={{ borderColor:'var(--border)' }}>
              <div className="badge" style={{ marginBottom:10, borderColor:it.color, color:it.color }}>{String(i+1).padStart(2,'0')}</div>
              <h3 style={{ margin:'4px 0 8px' }}>{it.title}</h3>
              <p style={{ color:'var(--muted)' }}>{it.body}</p>
              <div style={{ height:4, marginTop:12, borderRadius:4, background:`linear-gradient(90deg, ${it.color}, transparent)` }} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
