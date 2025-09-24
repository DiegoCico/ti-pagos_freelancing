import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="section--tight" style={{ borderTop:'1px solid var(--border)', marginTop:24 }}>
      <div className="container" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:16, flexWrap:'wrap' }}>
        <Logo size={22}/>
        <div style={{ color:'var(--muted)', fontSize:12 }}>
          © {new Date().getFullYear()} TIPagos. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
