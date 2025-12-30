
import React from 'react';

const Services: React.FC = () => {
  const servicesList = [
    {
      icon: 'fa-building',
      title: 'Fotografia Corporativa',
      description: 'Retratos e ambientes que transmitem a autoridade da sua marca.'
    },
    {
      icon: 'fa-running',
      title: 'Fotografia Esportiva',
      description: 'Captura de ação e emoção com alta precisão técnica.'
    },
    {
      icon: 'fa-user-circle',
      title: 'Fotografia de Retrato',
      description: 'Ensaios que revelam a essência e personalidade de cada pessoa.'
    },
    {
      icon: 'fa-pen-nib',
      title: 'Design Gráfico',
      description: 'Identidade visual e branding criados para marcar presença.'
    }
  ];

  return (
    <section id="services" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Nossas Especialidades</h2>
          <div className="w-16 h-1 bg-brand-cyan mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service, idx) => (
            <div 
              key={idx}
              className="bg-brand-gray p-8 border border-white/5 hover:border-brand-cyan/50 transition-colors group"
            >
              <i className={`fas ${service.icon} text-brand-cyan text-3xl mb-6 group-hover:scale-110 transition-transform`}></i>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
