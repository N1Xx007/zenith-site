
import React, { useState, useCallback } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import Gallery from './components/Gallery.tsx';
import DesignPortfolio from './components/DesignPortfolio.tsx';
import Reviews from './components/Reviews.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import Toast from './components/Toast.tsx';

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
