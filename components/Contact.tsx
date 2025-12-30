
import React from 'react';

interface ContactProps {
  onCopyEmail: () => void;
}

const Contact: React.FC<ContactProps> = ({ onCopyEmail }) => {
  return (
    <section id="contact" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Vamos Criar?</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            O seu projeto merece uma visão profissional. Entre em contacto através dos nossos canais oficiais.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-16">
          {/* WhatsApp */}
          <a 
            href="https://wa.me/5562993228217" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex flex-col items-center"
          >
            <div className="w-16 h-16 bg-brand-card border border-gray-800 rounded-full flex items-center justify-center text-brand-cyan group-hover:bg-brand-cyan group-hover:text-brand-dark transition-all duration-300 mb-3 shadow-lg shadow-cyan-500/10">
              <i className="fab fa-whatsapp text-3xl"></i>
            </div>
            <span className="text-white font-bold text-sm tracking-widest uppercase group-hover:text-brand-cyan transition-colors">
              WhatsApp
            </span>
          </a>

          {/* Instagram */}
          <a 
            href="https://instagram.com/zenithh.dg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex flex-col items-center"
          >
            <div className="w-16 h-16 bg-brand-card border border-gray-800 rounded-full flex items-center justify-center text-brand-cyan group-hover:bg-brand-cyan group-hover:text-brand-dark transition-all duration-300 mb-3 shadow-lg shadow-cyan-500/10">
              <i className="fab fa-instagram text-3xl"></i>
            </div>
            <span className="text-white font-bold text-sm tracking-widest uppercase group-hover:text-brand-cyan transition-colors">
              Instagram
            </span>
          </a>

          {/* Gmail */}
          <div 
            className="flex flex-col items-center cursor-pointer group" 
            onClick={onCopyEmail}
          >
            <div className="w-16 h-16 bg-brand-card border border-gray-800 rounded-full flex items-center justify-center text-brand-cyan group-hover:bg-brand-cyan group-hover:text-brand-dark transition-all duration-300 mb-3 shadow-lg shadow-cyan-500/10">
              <i className="far fa-envelope text-3xl"></i>
            </div>
            <span className="text-white font-bold text-sm tracking-widest uppercase mb-1 group-hover:text-brand-cyan transition-colors">
              Gmail
            </span>
            <span className="text-brand-cyan text-xs font-semibold tracking-wider opacity-80 group-hover:opacity-100 transition-opacity">
              zenithdigital7@gmail.com
            </span>
            <span className="text-gray-600 text-[9px] mt-1 uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-all transform translate-y-1 group-hover:translate-y-0">
              Clique para copiar
            </span>
          </div>
        </div>

        <div className="max-w-xs mx-auto">
          <a 
            href="https://wa.me/5562993228217" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full bg-brand-cyan text-brand-dark font-bold py-5 rounded-sm uppercase tracking-[0.2em] hover:bg-white transition-all transform active:scale-95 shadow-xl shadow-brand-cyan/20"
          >
            Faça seu Orçamento
          </a>
          <p className="text-gray-600 text-[10px] mt-4 uppercase tracking-widest">
            Atendimento imediato via WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
