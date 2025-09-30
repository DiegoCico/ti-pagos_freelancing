import './index.css';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
// import BlockchainNetwork from './components/BlockchainNetwork';
// import RadialLedger from './components/RadialLedger';
import SecureData from './components/SecureData';
import Insights from './components/Insights';
import SecurityStrip from './components/SecurityStrip';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <SecureData />
        <Insights />
        <SecurityStrip />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
