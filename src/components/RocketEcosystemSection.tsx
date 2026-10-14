import React from 'react';
import { Check, Rocket, Camera } from 'lucide-react';
import { ImageSlot } from '../types';

interface RocketEcosystemSectionProps {
  kitchenSlot: ImageSlot;
  onOpenImageManager: (slotId: string) => void;
}

export const RocketEcosystemSection: React.FC<RocketEcosystemSectionProps> = ({
  kitchenSlot,
  onOpenImageManager,
}) => {
  const ecosystemItems = [
    'Gestão de Clientes e Histórico de Preferências',
    'Gestão de Pedidos e Comandas (Novo, Produção, Pronto, Entregue)',
    'Contas a Pagar, Receber e Fechamento de Caixa',
    'Fluxo de Caixa em Tempo Real',
    'Gestão de Estoque e Alerta de Validades',
    'Ficha Técnica Completa e Gramaturas',
    'Precificação Exata baseada no Lucro Desejado',
    'Vitrine & Custom Builders de Bolos e Brigadeiros',
    'Controle de Sinais de 50% via Pix contra Calotes',
    'Relatórios Inteligentes de Desempenho',
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FAFAFA] border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Brand Logo + Subtitle + Purple Checkmarks matching Screenshot 7 */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-4xl sm:text-5xl font-extrabold text-[#6D28D9] font-poppins lowercase block">
                crili
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">
                Sistema de Gestão & Vendas para Confeiteiras
              </h3>
              <p className="text-xs font-semibold text-[#82C91E] uppercase tracking-wider mt-1">
                O Ecossistema Completo com a Chancela da Sua Escola
              </p>
            </div>

            {/* List with Signature Purple Checks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {ecosystemItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#6D28D9] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-800 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs text-gray-600 pt-2 border-t border-gray-200">
              O sistema atende desde o cliente final (montador de pedidos e carrinho) até a rotina pesada da cozinha e fechamento financeiro.
            </p>
          </div>

          {/* Right Column: Smartphone 3D Mockup with Rocket Illustration matching Screenshot 7 */}
          <div className="lg:col-span-6 flex justify-center relative">
            <div className="relative w-full max-w-sm flex items-center justify-center">
              {/* Smartphone Frame */}
              <div className="w-52 sm:w-60 bg-[#1A1A1A] rounded-[2.8rem] p-3 shadow-2xl border-4 border-gray-800 relative z-10">
                <div className="w-16 h-3 bg-black rounded-full mx-auto mb-2" />
                <div className="bg-[#82C91E] rounded-[2.2rem] p-5 text-center min-h-[320px] flex flex-col items-center justify-center text-white relative overflow-hidden">
                  <span className="text-3xl font-extrabold font-poppins lowercase mb-4">
                    crili
                  </span>
                  <div className="w-full space-y-2">
                    <div className="h-6 bg-white/90 rounded-md" />
                    <div className="h-6 bg-white/90 rounded-md" />
                    <div className="h-7 bg-[#6D28D9] rounded-md flex items-center justify-center text-xs font-bold uppercase">
                      Acessar
                    </div>
                  </div>
                  <span className="text-[10px] text-white/90 mt-4 font-semibold">
                    Tecnologia em Alta Performance
                  </span>
                </div>
              </div>

              {/* 3D Rocket Element overlapping phone */}
              <div className="absolute -top-6 -right-2 sm:right-4 z-20 animate-bounce duration-1000">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-white shadow-2xl border-2 border-purple-200 flex flex-col items-center justify-center p-3 text-center">
                  <Rocket className="w-12 h-12 text-[#6D28D9] fill-[#6D28D9]/20" />
                  <span className="text-[10px] font-extrabold text-[#82C91E] mt-1 uppercase">
                    Decole as Vendas
                  </span>
                </div>
              </div>

              {/* Kitchen Image Slot wrapper button */}
              <div className="absolute -bottom-6 inset-x-0 text-center z-30">
                <button
                  type="button"
                  onClick={() => onOpenImageManager(kitchenSlot.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6D28D9] bg-white border border-[#6D28D9]/30 hover:bg-[#6D28D9]/5 px-3 py-1.5 rounded-lg shadow-md cursor-pointer"
                >
                  <Camera className="w-3.5 h-3.5 text-[#82C91E]" />
                  <span>Espaço 4 · Foto da Cozinha / Produção</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
