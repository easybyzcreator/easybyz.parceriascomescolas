import React from 'react';
import { Check } from 'lucide-react';

export const FeaturesChecklist: React.FC = () => {
  const painPoints = [
    'Tem dificuldade em organizar os seus pedidos de bolos e doces;',
    'Tem dificuldade na precificação correta dos seus produtos culinários;',
    'Não consegue administrar as finanças e controlar o fluxo de caixa;',
    'Acaba se atrapalhando com a produção pesada e prazos de entrega;',
    'Não sabe para onde vai o dinheiro no final do mês;',
    'Quer organizar melhor a gestão da sua confeitaria e ter o controle de forma mais fácil;',
    'Não consegue vender para o mesmo cliente mais de uma vez e perde o contato no WhatsApp.',
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FAFAFA] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Purple Heading matching Crili Screenshot 4 */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#6D28D9] tracking-tight font-poppins text-balance">
            Nós desenvolvemos um sistema pensando em você e no dia a dia da Confeitaria
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: 2 Smartphones in 3D perspective with lime green screens */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-xs sm:max-w-sm flex items-center justify-center">
              {/* Phone 1 (Back angled) */}
              <div className="w-44 sm:w-52 bg-[#1A1A1A] rounded-[2.2rem] p-3 shadow-2xl border-2 border-gray-800 rotate-[-8deg] transform translate-y-3">
                <div className="w-14 h-3.5 bg-black rounded-full mx-auto mb-2" />
                <div className="bg-[#6D28D9] rounded-[1.8rem] p-4 text-center min-h-[260px] flex flex-col items-center justify-center text-white">
                  <span className="text-2xl font-extrabold font-poppins lowercase mb-4">
                    crili
                  </span>
                  <div className="w-full space-y-2">
                    <div className="h-6 bg-white/20 rounded-md" />
                    <div className="h-6 bg-white/20 rounded-md" />
                    <button
                      type="button"
                      className="w-full py-2 bg-[#82C91E] text-white text-[10px] font-bold rounded-md uppercase"
                    >
                      Acessar
                    </button>
                  </div>
                </div>
              </div>

              {/* Phone 2 (Front angled overlapping) */}
              <div className="w-48 sm:w-56 bg-[#1A1A1A] rounded-[2.2rem] p-3 shadow-2xl border-2 border-gray-800 rotate-[6deg] transform -translate-x-12 -translate-y-4 z-10">
                <div className="w-16 h-3.5 bg-black rounded-full mx-auto mb-2" />
                <div className="bg-[#82C91E] rounded-[1.8rem] p-4 text-center min-h-[290px] flex flex-col items-center justify-center text-white">
                  <span className="text-3xl font-extrabold font-poppins lowercase mb-4 drop-shadow-xs">
                    crili
                  </span>
                  <div className="w-full space-y-2">
                    <button
                      type="button"
                      className="w-full py-2 bg-[#6D28D9] text-white text-xs font-bold rounded-md"
                    >
                      Cadastrar
                    </button>
                    <button
                      type="button"
                      className="w-full py-2 bg-white text-[#6D28D9] text-xs font-bold rounded-md"
                    >
                      Entrar
                    </button>
                  </div>
                  <span className="text-[9px] text-white/90 mt-4 font-medium">
                    Chancela Oficial da Escola
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: "Para você que:" + Green Checkmarks List */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 font-poppins">
              Para quem é a solução:
            </h3>

            <div className="space-y-3.5">
              {painPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#82C91E] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-800 font-medium leading-snug">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-base font-extrabold text-gray-900 leading-relaxed">
                Esta é a chance da sua escola colocar nas mãos dos alunos uma poderosa ferramenta para simplificar a gestão e garantir o sucesso comercial de cada um deles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
