import React from 'react';
import { Camera, Sparkles, Award } from 'lucide-react';
import { ImageSlot } from '../types';

interface AuthorityStoryProps {
  schoolSlot: ImageSlot;
  onOpenImageManager: (slotId: string) => void;
}

export const AuthorityStory: React.FC<AuthorityStoryProps> = ({
  schoolSlot,
  onOpenImageManager,
}) => {
  return (
    <section id="diferencial" className="py-16 lg:py-24 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading in Crili Lime Green + Story Narrative */}
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#82C91E] tracking-tight font-poppins">
              A Sua Escola no Comando da Inovação
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-gray-800 leading-relaxed font-normal">
              <p>
                <strong>Este não é um aplicativo genérico de mercado.</strong> É uma solução de tecnologia de ponta desenvolvida sob medida pela <strong>Easy Byz</strong>, mas comercializada e entregue como um <strong>produto exclusivo da sua escola</strong>.
              </p>

              <p>
                <strong className="text-[#6D28D9]">A Tag da Sua Escola no App:</strong> Cada aplicativo gerado carrega o selo de validação e a autoridade da sua instituição, fortalecendo a sua marca a cada venda que o seu aluno faz para os clientes finais.
              </p>

              <p>
                <strong className="text-[#6D28D9]">Metodologia Prática Embutida:</strong> Você pode estruturar o app alinhado ao que você ensina em sala de aula. É possível embutir a sua lógica de precificação, padrões de fichas técnicas, tabelas nutricionais e fluxos operacionais que garantem o lucro do aluno. O que sua escola ensina sobre gestão e vendas ganha vida e é aplicado na prática dentro da ferramenta.
              </p>

              <p>
                <strong className="text-[#6D28D9]">Personalização Total por Aluna:</strong> Cada aluna ganha um ambiente 100% customizado com a logo dela, paleta de cores própria, fotos dos produtos e regras de entrega da região onde atua.
              </p>

              <p className="font-extrabold text-gray-900 pt-2 text-base">
                Pensando nisso... criamos o ecossistema definitivo que une autoridade educacional e autonomia comercial.
              </p>
            </div>
          </div>

          {/* Right Column: Purple Backdrop + Chef Portrait Photo Slot exactly matching Screenshot 3 */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Purple Backdrop Box behind the photo */}
              <div className="absolute inset-y-4 right-0 w-4/5 bg-[#6D28D9] rounded-3xl -z-10 shadow-2xl" />

              {/* Chef Photo / School Portrait Slot with Crili styling */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#82C91E]/10 z-10">
                {schoolSlot.currentUrl ? (
                  <img
                    src={schoolSlot.currentUrl}
                    alt={schoolSlot.name}
                    className="w-full h-auto object-cover max-h-[480px]"
                  />
                ) : (
                  <div className="p-12 text-center bg-[#6D28D9] text-white min-h-[380px] flex flex-col items-center justify-center">
                    <Award className="w-16 h-16 text-[#82C91E] mb-3" />
                    <p className="font-extrabold text-lg">Espaço 3 · Foto do Chef / Turma</p>
                    <p className="text-xs text-white/80 mt-1 max-w-xs">
                      Foto do professor, instrutor ou laboratório da sua escola no padrão Crili.
                    </p>
                  </div>
                )}

                {/* Tag on photo */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-extrabold text-[#6D28D9] uppercase block">
                      Autoridade & Chancela
                    </span>
                    <span className="text-xs font-bold text-gray-900">
                      Sua Escola Reconhecida em Cada Venda
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onOpenImageManager(schoolSlot.id)}
                    className="bg-[#82C91E] hover:bg-[#74B31A] text-white p-2 rounded-lg cursor-pointer"
                    title="Substituir foto do instrutor/escola"
                  >
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
