function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-col">
          <img src="/ti-pagos_freelancing/logo.png" alt="TIPagos" className="footer-logo" />
          <p className="footer-tagline">Crypto infrastructure for financial institutions worldwide. US-headquartered, globally deployed.</p>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Products</div>
          <ul>
            <li><a href="#">Payments Rail</a></li>
            <li><a href="#">Crypto Exchange</a></li>
            <li><a href="#">Custody</a></li>
            <li><a href="#">Crypto Cards</a></li>
            <li><a href="#">Data Pipelines</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Company</div>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Legal</div>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Licenses</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 TIPagos LLC. All rights reserved.</span>
        <span>US-headquartered · Worldwide reach · FinCEN registered</span>
      </div>
    </footer>
  );
}

export default Footer;
