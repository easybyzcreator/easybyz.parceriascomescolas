import React from 'react';
import { Award, BookOpen, Palette, CheckCircle2 } from 'lucide-react';

export const SchoolDifferential: React.FC = () => {
  return (
    <section id="diferencial" className="py-16 lg:py-24 bg-white border-t border-gray-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading Centralized */}
        <div className="max-w-5xl mx-auto text-center mb-14">
          <span className="text-xs font-extrabold text-[#00e6a8] bg-[#0a1e29] px-3.5 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
            Exclusividade & Liderança
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1e29] tracking-tight font-poppins leading-tight text-center max-w-3xl mx-auto">
            O Grande Diferencial: A Sua Escola no Comando da Inovação
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed font-normal max-w-3xl mx-auto">
            Este não é um aplicativo genérico de mercado. É uma solução de tecnologia de ponta desenvolvida sob medida pela Easy Byz, mas comercializada e entregue como um produto exclusivo da sua escola.
          </p>
        </div>

        {/* 3 Pillars strictly from user brief */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pilar 1: A Tag da Sua Escola no App */}
          <div className="p-8 rounded-3xl bg-[#FAFAFA] border border-gray-200 shadow-sm space-y-4 hover:border-[#00cfff] transition-colors flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0a1e29] text-[#00cfff] flex items-center justify-center shadow-md">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-[#0a1e29] font-poppins">
                A Tag da Sua Escola no App
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed font-normal">
                Cada aplicativo gerado carrega o selo de validação e a autoridade da sua instituição, fortalecendo a sua marca a cada venda que o seu aluno faz.
              </p>
            </div>
            <div className="pt-4 border-t border-gray-200 flex items-center gap-2 text-xs font-bold text-[#0a1e29]">
              <CheckCircle2 className="w-4 h-4 text-[#00e6a8]" />
              <span>Autoridade institucional em cada venda</span>
            </div>
          </div>

          {/* Pilar 2: Metodologia Prática Embutida */}
          <div className="p-8 rounded-3xl bg-[#FAFAFA] border border-gray-200 shadow-sm space-y-4 hover:border-[#00e6a8] transition-colors flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0a1e29] text-[#00e6a8] flex items-center justify-center shadow-md">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-[#0a1e29] font-poppins">
                Metodologia Prática Embutida
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed font-normal">
                Você pode estruturar o app alinhado ao que você ensina em sala de aula. É possível embutir as boas práticas, organização de produtos e fluxos operacionais que garantem a autonomia e o lucro do aluno. O que sua escola ensina sobre gestão e vendas ganha vida e é aplicado na prática dentro da ferramenta.
              </p>
            </div>
            <div className="pt-4 border-t border-gray-200 flex items-center gap-2 text-xs font-bold text-[#0a1e29]">
              <CheckCircle2 className="w-4 h-4 text-[#00e6a8]" />
              <span>O ensino de sala de aula vivo no app</span>
            </div>
          </div>

          {/* Pilar 3: Personalização Total por Aluno (updated to 'por Aluno') */}
          <div className="p-8 rounded-3xl bg-[#FAFAFA] border border-gray-200 shadow-sm space-y-4 hover:border-[#00cfff] transition-colors flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0a1e29] text-[#00cfff] flex items-center justify-center shadow-md">
                <Palette className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-[#0a1e29] font-poppins">
                Personalização Total por Aluno
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed font-normal">
                Cada aluno ganha um ambiente 100% customizado com a logo dele, paleta de cores própria, campos para inserir as fotos dos produtos e suporte humanizado.
              </p>
            </div>
            <div className="pt-4 border-t border-gray-200 flex items-center gap-2 text-xs font-bold text-[#0a1e29]">
              <CheckCircle2 className="w-4 h-4 text-[#00e6a8]" />
              <span>Identidade única para cada aluno</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
