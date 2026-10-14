import React, { useRef } from 'react';
import { Star, Quote, CheckCircle2, ChevronRight } from 'lucide-react';

interface TestimonialItem {
  id: number;
  quote: string;
}

export const TestimonialsSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 290, behavior: 'smooth' });
    }
  };

  const testimonials: TestimonialItem[] = [
    {
      id: 1,
      quote:
        '"Minha maior dificuldade quando comecei a vender era exatamente não ter um cardápio, eu não sabia nem como mandar as opções de sobremesas pro cliente escolher. Eu acredito que isso é o melhor investimento, e sei que isso vai me ajudar e muito"',
    },
    {
      id: 2,
      quote:
        '"Superou as minhas expectativas, já vendo doces e bolos há muitos anos, e meu sonho sempre foi ter um aplicativo para realizar as minhas vendas, e agora eu consegui realizar esse sonho através de você, parece que você entrou na minha cabeça e conseguiu pegar todos os pensamentos da maneira como deveria ser feito, muito obrigada!"',
    },
    {
      id: 3,
      quote:
        '"Eu tô encantada com o serviço de vocês, vocês estão de parabéns, eu tô apaixonada pelo aplicativo. É um trabalho muito bem feito, é muito capricho e realmente é tudo que a gente precisa, a falta de tempo e por a gente ser sozinha e não ter uma assessoria, ele vai ajudar muito. Tô encantada mesmo!"',
    },
    {
      id: 4,
      quote:
        '"Um agradecimento especial para Pati que foi super competente no desenvolvimento da solução (aplicativo)."',
    },
    {
      id: 5,
      quote:
        '"Quero dizer que estou gostando muito da proposta do aplicativo, eu estou encantadíssima com o seu trabalho e achei muito legal a parceria que vocês fizeram com a escola. Inclusive, sou muito grata pela condição diferenciada que conseguimos por meio dessa parceria com a Escola de Gastronomia e negócios. 🥰 Uma grande oportunidade para quem está expandindo agora."',
    },
  ];

  return (
    <section id="depoimentos" className="py-14 lg:py-20 bg-[#FAFAFA] border-t border-b border-gray-200 scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Section Header: Centralized on page */}
        <div className="max-w-4xl mx-auto text-center mb-10 lg:mb-14 flex flex-col items-center justify-center">
          {/* Top Tag Badge using page identity */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a1e29] border border-[#00cfff]/30 text-xs font-semibold text-[#00cfff] backdrop-blur-sm">
            <Quote className="w-3.5 h-3.5 text-[#00e6a8] fill-current" />
            <span>Histórias Reais</span>
          </div>

          {/* Title: 100% complete, centralized, and strictly on a SINGLE LINE across all devices without ellipsis */}
          <h2 className="text-[11px] min-[340px]:text-[12px] min-[370px]:text-[13.5px] min-[410px]:text-[15px] sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0a1e29] tracking-tight font-poppins mt-3 sm:mt-4 leading-none text-center whitespace-nowrap px-1 mx-auto max-w-full">
            Depoimentos de alunas que já adquiriram o app
          </h2>

          {/* Underline bar with signature cyan-emerald gradient */}
          <div className="w-16 h-1.5 bg-gradient-to-r from-[#00cfff] to-[#00e6a8] rounded-full mx-auto mt-3 sm:mt-4" />
        </div>

        {/* Carousel Container with discreet swipe arrow */}
        <div className="relative">
          {/* 5 Testimonial Cards: square boxes, in a single row on desktop, swipeable row on mobile */}
          <div
            ref={scrollContainerRef}
            className="flex lg:grid lg:grid-cols-5 gap-3.5 sm:gap-4 overflow-x-auto pb-4 pt-1 px-1 snap-x snap-mandatory scrollbar-none items-stretch scroll-smooth"
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="w-[270px] sm:w-[320px] lg:w-auto shrink-0 snap-center bg-white rounded-2xl border border-gray-200 hover:border-[#00cfff] p-4.5 sm:p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Header with 5 stars without any partner tag */}
                  <div className="flex items-center justify-between pb-3.5 border-b border-gray-100">
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current stroke-none" />
                      ))}
                    </div>
                    <span className="text-[10px] font-semibold text-gray-400">5.0 ★</span>
                  </div>

                  {/* Quote text */}
                  <p className="mt-3.5 text-xs sm:text-[13px] text-gray-700 leading-relaxed font-normal italic">
                    {item.quote}
                  </p>
                </div>

                {/* Verified badge footer */}
                <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#0a1e29]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00e6a8] shrink-0" />
                    <span>Depoimento Verificado</span>
                  </div>
                  <span className="text-[9px] font-bold text-[#0a1e29] bg-[#00cfff]/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Easy Byz
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Discreet Right Arrow Indicator / Button for mobile */}
          <button
            onClick={scrollNext}
            aria-label="Ver próximo depoimento"
            className="lg:hidden absolute -right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/95 border border-gray-200 shadow-md text-gray-700 flex items-center justify-center transition-all hover:bg-white active:scale-95 cursor-pointer backdrop-blur-xs opacity-90 hover:opacity-100"
          >
            <ChevronRight className="w-4 h-4 stroke-[2.5] text-[#0a1e29]" />
          </button>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex lg:hidden items-center justify-center gap-1.5 text-[11px] text-gray-500 font-medium pt-2">
          <span>Deslize para ver todos os 5 depoimentos</span>
          <span className="text-sm">👉</span>
        </div>

      </div>
    </section>
  );
};
