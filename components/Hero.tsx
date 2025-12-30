
import React from 'react';

const Hero: React.FC = () => {
  const handleStartProject = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          className="w-full h-full object-cover opacity-20 grayscale" 
          alt="Fundo Zenith" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/50 via-brand-dark to-brand-dark"></div>
      </div>
      
      {/* Added pt-24 to ensure content starts below the large navbar/logo */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-24 md:pt-32">
        <div className="mb-6">
          <p className="text-brand-cyan font-bold tracking-[0.4em] uppercase text-sm md:text-base animate-subtitle-fade">
            Zenith Digital
          </p>
        </div>

        <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-6 leading-tight animate-title-fade">
          Visão que <br />Transforma.
        </h1>

        <p 
          className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-8 animate-subtitle-fade leading-relaxed font-light tracking-wide opacity-0"
          style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}
        >
          Especialista em capturar a essência através da fotografia de alto impacto e design estratégico, elevando marcas e momentos a um novo patamar visual.
        </p>
        <div 
          className="mt-4 animate-subtitle-fade opacity-0" 
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
        >
          <a 
            href="#contact" 
            onClick={handleStartProject}
            className="bg-brand-cyan text-brand-dark px-10 py-4 font-bold text-sm uppercase tracking-widest hover:bg-white transition-all inline-block shadow-lg shadow-brand-cyan/20 cursor-pointer"
          >
            Iniciar Projeto
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
