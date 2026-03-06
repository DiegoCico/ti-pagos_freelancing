function Nav() {
  return (
    <nav>
      <a href="#" className="nav-logo">
        <img src="/logo.png" alt="TIPagos" />
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
    </nav>
  );
}

export default Nav;
