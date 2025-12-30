
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Serviços', href: '#services' },
    { name: 'Fotografia', href: '#gallery' },
    { name: 'Design', href: '#design' },
    { name: 'Depoimentos', href: '#reviews' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-zinc-600/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo Container - High position maintained, glow remains removed */}
          <div className="flex-shrink-0 relative w-32 md:w-48 h-full">
            <div 
              className="cursor-pointer absolute -top-2 md:-top-5 left-0 z-50" 
              onClick={scrollToTop}
            >
              <img 
                src="https://curious-pink-0vuack0gqf-n1v18jz7e6.edgeone.app/IMG_20251229_231556-removebg-preview.png" 
                alt="Zenith Digital Logo" 
                className="h-20 md:h-32 w-auto object-contain transition-transform hover:scale-105 duration-300"
              />
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-white hover:text-brand-cyan transition-colors text-xs uppercase tracking-widest font-semibold"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="bg-brand-cyan text-brand-dark px-6 py-2 text-xs font-bold hover:bg-white transition-all uppercase tracking-widest"
            >
              Contato
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-white hover:text-brand-cyan p-2"
              aria-label="Toggle menu"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <div 
        className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-zinc-700/95 backdrop-blur-xl border-b border-gray-800 absolute w-full text-center py-6 space-y-4 shadow-xl z-40`}
      >
        {navLinks.map((link) => (
          <a 
            key={link.name}
            href={link.href} 
            className="block text-sm font-medium text-white hover:text-brand-cyan transition-colors"
            onClick={(e) => handleNavClick(e, link.href)}
          >
            {link.name}
          </a>
        ))}
        <a 
          href="#contact" 
          className="block text-sm font-bold text-brand-cyan uppercase pt-2"
          onClick={(e) => handleNavClick(e, '#contact')}
        >
          Contato
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
