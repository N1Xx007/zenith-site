
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

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('services');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Container da Imagem de Fundo com Visibilidade Aumentada */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          className="w-full h-full object-cover opacity-70 brightness-90 grayscale-[20%]" 
          alt="Fundo Fotografia Profissional" 
        />
        {/* Gradiente que faz a imagem sumir até a setinha */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/10 via-brand-dark/60 to-brand-dark"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-24 md:pt-32 flex flex-col items-center">
        <div className="mb-6">
          <p className="text-brand-cyan font-bold tracking-[0.4em] uppercase text-sm md:text-base animate-subtitle-fade drop-shadow-lg">
            Zenith Digital
          </p>
        </div>

        <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-6 leading-tight animate-title-fade drop-shadow-2xl">
          Visão que <br />Transforma.
        </h1>

        <p 
          className="text-white/90 text-base md:text-lg max-w-2xl mx-auto mb-10 animate-subtitle-fade leading-relaxed font-medium tracking-wide drop-shadow-md"
          style={{ animationDelay: '0.3s' }}
        >
          Especialista em capturar a essência através da fotografia de alto impacto e design estratégico, elevando marcas e momentos a um novo patamar visual.
        </p>
        
        <div 
          className="animate-subtitle-fade flex flex-col items-center gap-16" 
          style={{ animationDelay: '0.6s' }}
        >
          <a 
            href="#contact" 
            onClick={handleStartProject}
            className="bg-brand-cyan text-brand-dark px-10 py-4 font-bold text-sm uppercase tracking-widest hover:bg-white transition-all inline-block shadow-2xl shadow-brand-cyan/40 cursor-pointer active:scale-95"
          >
            Solicitar Orçamento
          </a>

          {/* Seta animada para baixo - Posicionada na zona escura onde a imagem já sumiu */}
          <a 
            href="#services" 
            onClick={scrollToServices}
            className="text-brand-cyan hover:text-white transition-colors animate-float-slow cursor-pointer mt-4"
            aria-label="Rolar para baixo"
          >
            <i className="fas fa-chevron-down text-3xl md:text-4xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
