import { FaUniversity, FaLock, FaCreditCard, FaChartLine, FaCog, FaLink, FaSync, FaBolt } from 'react-icons/fa';

function ProductLines() {
  return (
    <section className="section product-lines" id="product-lines">
      <div className="sec-label r">Product Lines</div>
      <h2 className="sec-h r" style={{ marginBottom: '48px', textAlign: 'center' }}>Two platforms, one infrastructure</h2>
      
      <div className="product-grid">
        <div className="product-card r">
          <div className="product-header">
            <img src="/TIpagosBANK-v1.png" alt="TIPagos Bank" className="product-logo" />
          </div>
          <div className="product-body">
            <h3 className="product-title">Banking Infrastructure</h3>
            <p className="product-desc">Enterprise-grade crypto infrastructure designed specifically for traditional financial institutions, banks, and regulated entities.</p>
            
            <div className="product-features">
              <div className="pf-item">
                <div className="pf-icon"><FaUniversity /></div>
                <div className="pf-content">
                  <div className="pf-title">Regulatory Compliance</div>
                  <div className="pf-text">Full KYC/AML/KYT integration with audit trails and reporting for banking regulators</div>
                </div>
              </div>
              <div className="pf-item">
                <div className="pf-icon"><FaLock /></div>
                <div className="pf-content">
                  <div className="pf-title">Institutional Custody</div>
                  <div className="pf-text">Multi-signature wallets, HSM integration, and insurance-backed cold storage solutions</div>
                </div>
              </div>
              <div className="pf-item">
                <div className="pf-icon"><FaCreditCard /></div>
                <div className="pf-content">
                  <div className="pf-title">Card Programs</div>
                  <div className="pf-text">White-label crypto debit/credit cards with instant fiat conversion and spend controls</div>
                </div>
              </div>
              <div className="pf-item">
                <div className="pf-icon"><FaChartLine /></div>
                <div className="pf-content">
                  <div className="pf-title">Treasury Management</div>
                  <div className="pf-text">Real-time portfolio tracking, risk analytics, and automated reconciliation for finance teams</div>
                </div>
              </div>
            </div>
            
            <div className="product-tags">
              <span className="tag blue">SOC 2 Type II</span>
              <span className="tag blue">PCI-DSS</span>
              <span className="tag blue">ISO-27001</span>
              <span className="tag">FDIC Partner Ready</span>
            </div>
          </div>
        </div>

        <div className="product-card r">
          <div className="product-header">
            <img src="/TIpagosCRYPTO-v1.png" alt="TIPagos Crypto" className="product-logo" />
          </div>
          <div className="product-body">
            <h3 className="product-title">Crypto-Native Platform</h3>
            <p className="product-desc">High-performance infrastructure built for crypto exchanges, DeFi protocols, and blockchain-native businesses requiring speed and scale.</p>
            
            <div className="product-features">
              <div className="pf-item">
                <div className="pf-icon"><FaBolt /></div>
                <div className="pf-content">
                  <div className="pf-title">Lightning Fast</div>
                  <div className="pf-text">Sub-50ms latency with 20,000+ TPS capacity for high-frequency trading operations</div>
                </div>
              </div>
              <div className="pf-item">
                <div className="pf-icon"><FaLink /></div>
                <div className="pf-content">
                  <div className="pf-title">Multi-Chain Support</div>
                  <div className="pf-text">Native integration with 15+ blockchains including Bitcoin, Ethereum, Solana, and L2s</div>
                </div>
              </div>
              <div className="pf-item">
                <div className="pf-icon"><FaSync /></div>
                <div className="pf-content">
                  <div className="pf-title">DeFi Integration</div>
                  <div className="pf-text">Direct connectivity to DEXs, liquidity pools, and yield protocols with smart routing</div>
                </div>
              </div>
              <div className="pf-item">
                <div className="pf-icon"><FaCog /></div>
                <div className="pf-content">
                  <div className="pf-title">Developer APIs</div>
                  <div className="pf-text">RESTful and WebSocket APIs with SDKs in 8 languages for rapid integration</div>
                </div>
              </div>
            </div>
            
            <div className="product-tags">
              <span className="tag green">Web3 Native</span>
              <span className="tag green">Open Source SDKs</span>
              <span className="tag">99.99% Uptime</span>
              <span className="tag">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductLines;
