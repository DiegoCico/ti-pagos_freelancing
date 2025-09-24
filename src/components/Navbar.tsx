import { useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header style={{ position:'sticky', top:0, zIndex:50, background:'rgba(8,18,29,.72)', backdropFilter:'saturate(160%) blur(10px)' }}>
      <div className="container" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', height:72 }}>
        <Logo />
        <nav className="hide-mobile" style={{ display:'flex', gap:22, alignItems:'center' }}>
          <a href="#features" className="badge">Solutions</a>
          <a href="#security" className="badge">Security</a>
          <a href="#about" className="badge">About</a>
          <a href="#cta" className="btn">Get Started</a>
        </nav>
        <button aria-label="menu" onClick={()=>setOpen(v=>!v)} className="badge show-mobile" style={{ borderRadius:12 }}>Menu</button>
      </div>
      {open && (
        <div className="container show-mobile" style={{ paddingBottom:16 }}>
          <div className="card" style={{ display:'grid', gap:10 }}>
            <a href="#features">Solutions</a>
            <a href="#security">Security</a>
            <a href="#about">About</a>
            <a href="#cta" className="btn" style={{ justifyContent:'center' }}>Get Started</a>
          </div>
        </div>
      )}
      <style>{`
        @media (max-width: 840px){
          .hide-mobile{ display:none !important; }
          .show-mobile{ display:inline-flex !important; }
        }
        @media (min-width: 841px){
          .show-mobile{ display:none !important; }
        }
      `}</style>
    </header>
  );
}
