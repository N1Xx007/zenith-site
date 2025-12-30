
import React from 'react';

const DesignPortfolio: React.FC = () => {
  const designs = [
    { src: 'https://fiscal-purple-g1mkc9anrx-ke6198xvtv.edgeone.app/17848749678508759.jpeg', alt: 'Branding' },
    { src: 'https://ministerial-maroon-tl6uhgson5-o99gvslab8.edgeone.app/18020517692711127.jpeg', alt: 'Social Media' },
    { src: 'https://arrogant-cyan-jyempuuafy-vmuta2cd4k.edgeone.app/18152188468345972.jpeg', alt: 'Packaging' },
    { src: 'https://arrogant-cyan-jyempuuafy-vmuta2cd4k.edgeone.app/18263753350281610.jpeg', alt: 'Editorial' }
  ];

  return (
    <section id="design" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">Projetos de Design</h2>
          <p className="text-brand-cyan mt-2 text-sm uppercase tracking-wider">Identidade & Criatividade</p>
          <div className="w-16 h-1 bg-brand-cyan mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {designs.map((design, idx) => (
            <div 
              key={idx}
              className="design-card h-[500px] rounded-lg border border-white/5 cursor-pointer group p-4"
            >
              <img 
                src={design.src} 
                className="design-img group-hover:scale-[1.02]" 
                alt={design.alt} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignPortfolio;
