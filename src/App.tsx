import { useEffect } from 'react';
import './index.css';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import MetricsBar from './components/MetricsBar';
import Features from './components/Features';
import SecureData from './components/SecureData';
import Insights from './components/Insights';
import CryptoCards from './components/CryptoCards';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { initializeAnimations } from './utils/animations';

function App() {
  useEffect(() => {
    const cleanup = initializeAnimations();
    return cleanup;
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <MetricsBar />
        <Features />
        <SecureData />
        <Insights />
        <CryptoCards />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
