import React from 'react';

export const PricingSection: React.FC = () => {
  return (
    <section id="investimento" className="py-16 lg:py-20 bg-white border-t border-gray-200 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Heading with Title and Subtitle */}
        <div className="text-center">
          <span className="text-xs font-bold text-[#0a1e29] bg-gray-100 px-3.5 py-1 rounded-full uppercase tracking-wider inline-block mb-3 border border-gray-200">
            Viabilidade para o Aluno
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1e29] tracking-tight font-poppins">
            Investimento Acessível para os Alunos
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed font-normal max-w-2xl mx-auto">
            Para o seu aluno, ter uma ferramenta de nível corporativo custa muito pouco perto do retorno financeiro que ela gera.
          </p>
        </div>
      </div>
    </section>
  );
};
