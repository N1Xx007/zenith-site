
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

  // Nova URL da logo com codificação para caracteres especiais (Sem Título-1.png)
  const logoUrl = "https://delicious-salmon-3eelclwb40.edgeone.app/Sem%20T%C3%ADtulo-1.png";

  return (
    <nav className="fixed w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo Container - Mantendo estabilidade máxima */}
          <div className="flex-shrink-0 flex items-center h-full">
            <div 
              className="cursor-pointer relative z-50 flex items-center" 
              onClick={scrollToTop}
            >
              <img 
                src={logoUrl} 
                alt="Zenith Digital" 
                loading="eager"
                className="h-12 md:h-20 w-auto object-contain transition-transform hover:scale-105 duration-300 drop-shadow-[0_0_12px_rgba(6,182,212,0.4)]"
                onError={(e) => {
                  const target = e.currentTarget;
                  console.warn("Falha ao carregar a nova logo, tentando recarregar...");
                  // Tentativa de reload com cache bust se houver falha na rede
                  setTimeout(() => {
                    target.src = logoUrl + "?t=" + new Date().getTime();
                  }, 2000);
                }}
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
                className="text-white/90 hover:text-brand-cyan transition-colors text-xs uppercase tracking-widest font-semibold drop-shadow-sm"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')}
              className="bg-brand-cyan text-brand-dark px-6 py-2 text-xs font-bold hover:bg-white transition-all uppercase tracking-widest shadow-lg"
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
        className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-zinc-950/98 backdrop-blur-3xl border-b border-white/10 absolute w-full text-center py-8 space-y-6 shadow-2xl z-40 transition-all`}
      >
        {navLinks.map((link) => (
          <a 
            key={link.name}
            href={link.href} 
            className="block text-base font-medium text-white hover:text-brand-cyan transition-colors"
            onClick={(e) => handleNavClick(e, link.href)}
          >
            {link.name}
          </a>
        ))}
        <a 
          href="#contact" 
          className="inline-block text-sm font-bold text-brand-dark bg-brand-cyan px-8 py-3 uppercase tracking-widest rounded-sm"
          onClick={(e) => handleNavClick(e, '#contact')}
        >
          Contato
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
