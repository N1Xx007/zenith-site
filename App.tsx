
import React, { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import DesignPortfolio from './components/DesignPortfolio';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';

const App: React.FC = () => {
  const [showToast, setShowToast] = useState(false);

  const handleCopyEmail = useCallback(() => {
    const email = "zenithdigital7@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    });
  }, []);

  return (
    <div className="relative">
      <Toast message="E-mail copiado com sucesso!" isVisible={showToast} />
      
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <DesignPortfolio />
      <Reviews />
      <Contact onCopyEmail={handleCopyEmail} />
      <Footer />
    </div>
  );
};

export default App;
