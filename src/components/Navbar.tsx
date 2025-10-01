"use client";

import { useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((v) => !v);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 76 }}>
        {/* Brand */}
          <a
    href="#top"
    aria-label="TIPagos home"
    className="logo"
    onClick={close}
    style={{ marginTop: 30 }} // push logo lower
  >
          <Logo />
        </a>

        {/* Desktop nav */}
        <nav className="hide-mobile" style={{ display: "flex", gap: 22, alignItems: "center" }}>
          <a href="#features" className="badge">Solutions</a>
          <a href="#secure-data" className="badge">Security</a>
          <a href="#about" className="badge">About</a>
          <a href="#cta" className="btn">Get Started</a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="show-mobile nav-hamburger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={toggle}
        >
          <span className={`line ${open ? "open" : ""}`} />
          <span className={`line ${open ? "open" : ""}`} />
          <span className={`line ${open ? "open" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="container show-mobile" id="mobile-menu" style={{ paddingBottom: 16 }}>
          <div className="card mobile-panel">
            <a href="#features" onClick={close}>Solutions</a>
            <a href="#secure-data" onClick={close}>Security</a>
            <a href="#about" onClick={close}>About</a>
            <a href="#cta" className="btn" style={{ justifyContent: "center" }} onClick={close}>
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
