
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    { src: 'https://liquid-jade-dy8u9nktvg-g5lxahrhjx.edgeone.app/17856335034516957.webp', alt: 'Retrato' },
    { src: 'https://liquid-jade-dy8u9nktvg-g5lxahrhjx.edgeone.app/17856743805533434.webp', alt: 'Esporte' },
    { src: 'https://liquid-jade-dy8u9nktvg-g5lxahrhjx.edgeone.app/17892377610388747.webp', alt: 'Corporativo' },
    { src: 'https://liquid-jade-dy8u9nktvg-g5lxahrhjx.edgeone.app/17997523130666484.webp', alt: 'Detalhe' },
    { src: 'https://liquid-jade-dy8u9nktvg-g5lxahrhjx.edgeone.app/18023893565721600.webp', alt: 'Esporte 2' },
    { src: 'https://liquid-jade-dy8u9nktvg-g5lxahrhjx.edgeone.app/18054857558272834.jpg', alt: 'Retrato 2' },
    { src: 'https://liquid-jade-dy8u9nktvg-g5lxahrhjx.edgeone.app/18065687315587492.webp', alt: 'Corporativo 2' },
    { src: 'https://liquid-jade-dy8u9nktvg-g5lxahrhjx.edgeone.app/18129652963469979.jpg', alt: 'Social' }
  ];

  return (
    <section id="gallery" className="py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">Galeria Selecionada</h2>
          <p className="text-brand-cyan mt-2 text-sm uppercase tracking-wider">Trabalhos em Fotografia</p>
          <div className="w-16 h-1 bg-brand-cyan mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <div 
              key={idx}
              className="gallery-item aspect-square cursor-pointer rounded-sm bg-gray-800"
            >
              <img 
                src={img.src} 
                className="gallery-img w-full h-full object-cover" 
                alt={img.alt} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
