import { useEffect } from 'react';
import './App.css';
import { initializeAnimations } from './utils/animations';
import Nav from './components/Nav';
import Ticker from './components/Ticker';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import Solutions from './components/Solutions';
import ProductLines from './components/ProductLines';
import Security from './components/Security';
import Outcomes from './components/Outcomes';
import CryptoCards from './components/CryptoCards';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const cleanup = initializeAnimations();
    return cleanup;
  }, []);

  return (
    <>
      <Nav />
      <Ticker />
      <Hero />
      <Metrics />
      <Solutions />
      <ProductLines />
      <Security />
      <Outcomes />
      <CryptoCards />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
