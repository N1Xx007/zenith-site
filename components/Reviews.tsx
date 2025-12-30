
import React from 'react';

const Reviews: React.FC = () => {
  const testimonials = [
    {
      text: '"Eu gostei muito do teu trabalho, seus clicks são muito bons. Tua edição também é boa, tua arte em design então nem se fala, impecável. Fora que vc entrega um trabalho incrível."',
      author: 'Lauany Andrade'
    },
    {
      text: '"Melhor fotógrafo q já encontrei, nota 10/10, momentos inesquecíveis: semifinal, amistoso, rodadas de campeonato, comemoração, tudo, vc faz parte da nossa família \\"bad boys green\\", só tenho a agradecer mmlk tá no coração 🤍."',
      author: 'Phablo Henrique'
    },
    {
      text: '"Gostaria de compartilhar minha satisfação com o trabalho do meu fotógrafo de confiança. Sou cliente fiel há muito tempo e o motivo é simples a qualidade é impecável. Sempre gostei e continuo recomendando de olhos fechados para quem busca um registro profissional de verdade!"',
      author: 'João Pedro'
    },
    {
      text: '"Com o tempo que estou com o zenith, venho acompanhando o trabalho e a evolução dele, desde o início sempre foi bom, desde as fotos até os vídeos editados que ele faz."',
      author: 'Igor Medeiros'
    },
    {
      text: '"Matheus quero te agradecer e parabenizar pelo excelente trabalho. A cobertura do evento foi feita com muito profissionalismo, atenção e compromisso. Dá pra ver o cuidado e a dedicação em tudo. Parabéns mesmo, e sucesso sempre!"',
      author: 'Márcia Vaz'
    },
    {
      text: '"Valeu nego pelo seu profissionalismo com suas fotos, sempre que eu preciso de vc, você sempre tá disposto a fazer o seu melhor e entregar o melhor, além de amigo vc é um fotógrafo ótimo e sempre vai ser meu 00"',
      author: 'Kauan Rodrigues'
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-brand-gray border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">Feedback dos Clientes</h2>
          <div className="w-16 h-1 bg-brand-cyan mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div 
              key={idx}
              className="bg-brand-card p-6 rounded-lg border-l-4 border-brand-cyan text-left hover:bg-zinc-800 transition-colors"
            >
              <div className="flex text-brand-cyan mb-3 text-xs">
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
              </div>
              <p className="text-gray-300 text-sm italic mb-4">{t.text}</p>
              <h4 className="text-white font-bold text-xs uppercase tracking-widest">{t.author}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
