import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="footer-row">
        <a href="#" className="logo">
          <img src="/ti-pagos_freelancing/logo.png" alt="TIPagos" style={{ height: '35px' }} />
        </a>
        <div className="footer-links">
          <a href="#solutions">Features</a>
          <a href="#security">Security</a>
          <a href="#about">Insights</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      <div className="footer-btm">© 2026 TIPagos. All rights reserved. &nbsp;·&nbsp; US-headquartered, worldwide reach.</div>
    </footer>
  );
}