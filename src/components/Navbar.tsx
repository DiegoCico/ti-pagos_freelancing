import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav>
      <a href="#" className="logo">
        <img src="/ti-pagos_freelancing/logo.png" alt="TIPagos" style={{ height: '40px' }} />
      </a>
      
      {/* Desktop Navigation */}
      <ul className="nav-links desktop-nav">
        <li><a href="#solutions">Solutions</a></li>
        <li><a href="#security">Security</a></li>
        <li><a href="#about">About</a></li>
      </ul>
      <a href="#contact" className="nav-cta desktop-nav">Get Started</a>

      {/* Mobile Hamburger */}
      <button 
        className="mobile-menu-btn"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-content">
            <a href="#solutions" onClick={closeMenu}>Solutions</a>
            <a href="#security" onClick={closeMenu}>Security</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#contact" onClick={closeMenu}>Get Started</a>
          </div>
        </div>
      )}
    </nav>
  );
}