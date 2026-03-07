import { useState } from 'react';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={menuOpen ? 'nav-open' : ''}>
      <a href="#" className="nav-logo">
        <img src="/ti-pagos_freelancing/logo.png" alt="TIPagos" />
      </a>
      <ul className="nav-links">
        <li><a href="#solutions">Solutions</a></li>
        <li><a href="#product-lines">Product Lines</a></li>
        <li><a href="#security">Security</a></li>
        <li><a href="#about">About</a></li>
      </ul>
      <div className="nav-right">
        <a href="#contact" className="btn-nav-ghost">Contact</a>
        <a href="#contact" className="btn-nav-fill">Get Started</a>
      </div>

      <button
        type="button"
        className="nav-toggle"
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className="mobile-menu">
        <ul className="mobile-nav-links">
          <li><a href="#solutions" onClick={closeMenu}>Solutions</a></li>
          <li><a href="#product-lines" onClick={closeMenu}>Product Lines</a></li>
          <li><a href="#security" onClick={closeMenu}>Security</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
        </ul>
        <div className="mobile-nav-actions">
          <a href="#contact" className="btn-nav-ghost" onClick={closeMenu}>Contact</a>
          <a href="#contact" className="btn-nav-fill" onClick={closeMenu}>Get Started</a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
