import React from 'react';

export const CriliPricingSection: React.FC = () => {
  return (
    <section id="planos" className="py-16 lg:py-24 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Disclaimer matching Screenshot 8 */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <p className="text-xs sm:text-sm font-bold text-gray-700">
            Para o seu aluno, ter uma ferramenta de nível corporativo custa muito pouco perto do retorno financeiro que ela gera.
          </p>
          <p className="text-base sm:text-lg font-extrabold text-black">
            Porém não é um valor exorbitante que ele vai pagar neste momento.
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#6D28D9] tracking-tight font-poppins pt-2">
            Escolha a melhor condição para seus alunos...
          </h2>
        </div>

        {/* Two-Card Crili Pricing Table exactly matching Screenshot 8 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1: Taxa de Configuração (com fita MAIS POPULAR) */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between border-2 border-[#82C91E]">
            {/* Red / Orange Angled Ribbon "MAIS POPULAR" */}
            <div className="absolute top-6 right-[-34px] transform rotate-45 bg-gradient-to-r from-red-600 to-amber-500 text-white font-extrabold text-[10px] py-1 px-12 shadow-md uppercase tracking-wider z-20">
              Mais Popular
            </div>

            {/* Top Bar: Solid Lime Green */}
            <div className="bg-[#82C91E] py-4 px-6 text-center text-white">
              <span className="text-lg font-extrabold font-poppins uppercase tracking-wider">
                Taxa de Configuração
              </span>
            </div>

            {/* Card Body: Solid Purple */}
            <div className="bg-[#6D28D9] p-8 text-white text-center flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-xs text-white/90 font-medium block">
                  Implantação & Personalização Visual Completa
                </span>

                <div className="py-2">
                  <span className="text-base font-semibold block text-white/90">Apenas</span>
                  <span className="text-4xl sm:text-5xl font-extrabold font-poppins tracking-tight block">
                    6x de R$ 109,00
                  </span>
                  <span className="text-xs text-white/80 mt-1 block">
                    Ou R$ 654,00 a vista
                  </span>
                </div>

                <p className="text-xs text-white/85 leading-relaxed pt-2 max-w-xs mx-auto">
                  Toque no botão abaixo e garanta o acesso com logotipo próprio da aluna, paleta de cores, fotos e a <strong>chancela oficial da sua escola</strong>.
                </p>
              </div>

              {/* Lime Green Button matching Screenshot 8 */}
              <div className="pt-4">
                <a
                  href="#contato"
                  className="w-full py-4 px-6 bg-[#82C91E] hover:bg-[#74B31A] text-white font-extrabold text-xs sm:text-sm rounded-xl uppercase tracking-wider shadow-lg transition-all inline-block hover:scale-[1.02]"
                >
                  Contratar Configuração
                </a>
                <span className="text-[10px] text-white/70 block mt-2">
                  10% de comissão (R$ 65,40) garantida para a escola
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Mensalidade de Manutenção & Hospedagem */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between border-2 border-purple-300">
            {/* Top Bar: Solid Lime Green */}
            <div className="bg-[#82C91E] py-4 px-6 text-center text-white">
              <span className="text-lg font-extrabold font-poppins uppercase tracking-wider">
                Plano Mensal (Manutenção)
              </span>
            </div>

            {/* Card Body: Solid Purple */}
            <div className="bg-[#6D28D9] p-8 text-white text-center flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <span className="text-xs text-white/90 font-medium block">
                  Hospedagem em Nuvem, Suporte Técnico & Atualizações
                </span>

                <div className="py-2">
                  <span className="text-base font-semibold block text-white/90">Apenas</span>
                  <span className="text-4xl sm:text-5xl font-extrabold font-poppins tracking-tight block">
                    R$ 81,00
                  </span>
                  <span className="text-xs text-white/80 mt-1 block">
                    / mês por confeiteira
                  </span>
                </div>

                <p className="text-xs text-white/85 leading-relaxed pt-2 max-w-xs mx-auto">
                  Toque no botão abaixo e garanta a sustentação do app 24 horas no ar com zero comissão cobrada por venda e suporte Easy Byz integral.
                </p>
              </div>

              {/* Lime Green Button matching Screenshot 8 */}
              <div className="pt-4">
                <a
                  href="#contato"
                  className="w-full py-4 px-6 bg-[#82C91E] hover:bg-[#74B31A] text-white font-extrabold text-xs sm:text-sm rounded-xl uppercase tracking-wider shadow-lg transition-all inline-block hover:scale-[1.02]"
                >
                  Assinar Plano Mensal
                </a>
                <span className="text-[10px] text-white/70 block mt-2">
                  10% de comissão (R$ 8,10/mês) recorrente para a escola
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footnote assurance from user's brief */}
        <p className="text-center text-xs text-gray-600 mt-8 max-w-xl mx-auto">
          Valores altamente competitivos que cabem no bolso do microempreendedor da gastronomia e confeitaria, garantindo alta conversão de vendas para a sua escola e comissão garantida para vocês.
        </p>
      </div>
    </section>
  );
};
