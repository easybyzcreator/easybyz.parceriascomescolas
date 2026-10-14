import React, { useState } from 'react';
import { Play, Settings, Volume2, Maximize, Camera } from 'lucide-react';
import { ImageSlot } from '../types';

interface InsideVideoShowcaseProps {
  showcaseSlot: ImageSlot;
  onOpenImageManager: (slotId: string) => void;
}

export const InsideVideoShowcase: React.FC<InsideVideoShowcaseProps> = ({
  showcaseSlot,
  onOpenImageManager,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const features = [
    {
      id: 'estoque',
      title: 'Gestão de estoque & Fichas Técnicas',
      time: '00:26',
      description:
        'Acabe com a dificuldade de controlar quais produtos estão em falta ou vencendo na sua confeitaria. Com a gestão de estoque do Crili, seus alunos vão evitar muitos prejuízos e desperdícios de insumos caros como chocolate nobre e manteiga.',
      action: 'Inserir novo insumo',
      previewDetails: ['Categoria: Laticínios', 'Item: Manteiga Extra sem Sal 5kg', 'Unidade: Gramas (g)'],
    },
    {
      id: 'caixa',
      title: 'Fluxo de caixa & Controle de Sinais',
      time: '00:27',
      description:
        'Você não precisa gastar tempo folheando o caderno de pedidos para fazer a organização do seu negócio. Também não precisa calcular manualmente quanto faturou no mês ou sua margem de lucro. O sistema faz tudo automaticamente para a aluna.',
      action: 'Registrar entrada de sinal (50%)',
      previewDetails: ['Cliente: Juliana Ribeiro', 'Valor Total: R$ 220,00', 'Sinal Pix: R$ 110,00'],
    },
    {
      id: 'vitrine',
      title: 'Vitrine & Custom Builders de Bolos',
      time: '00:30',
      description:
        'Montador passo a passo de bolos, caixas de brigadeiros personalizadas, seleção de tamanhos e retirada de ingredientes. O cliente final escolhe direto pelo link ou QR Code com a marca da confeitaria.',
      action: 'Montar bolo personalizado',
      previewDetails: ['Massa: Baunilha Fina', 'Recheio: Brigadeiro Belga', 'Tamanho: 1.5kg'],
    },
  ];

  const currentFeature = features[activeSlide];

  return (
    <section id="recursos" className="py-16 lg:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Purple Section Heading & Subtitle exactly matching Crili Screenshot 2 */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#6D28D9] tracking-tight font-poppins">
            Veja o que você vai ser capaz de fazer com o CRILI
          </h2>
          <p className="text-lg font-bold text-gray-900 mt-2">
            Conheça <span className="font-extrabold text-black">por dentro:</span>
          </p>
        </div>

        {/* Video Player Style Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FAFAFA] p-6 sm:p-10 rounded-3xl border border-gray-200 shadow-sm">
          {/* Left / Video Mockup Frame */}
          <div className="lg:col-span-7">
            {/* If user uploaded a screenshot, show it; else show the Crili interactive video player frame */}
            {showcaseSlot.currentUrl && !showcaseSlot.isPlaceholder ? (
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-gray-800 bg-black">
                <img
                  src={showcaseSlot.currentUrl}
                  alt={showcaseSlot.name}
                  className="w-full h-auto object-cover max-h-[380px]"
                />
                <button
                  type="button"
                  onClick={() => onOpenImageManager(showcaseSlot.id)}
                  className="absolute top-3 right-3 bg-[#82C91E] text-white text-[11px] font-bold px-3 py-1 rounded shadow flex items-center gap-1 cursor-pointer"
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>Substituir</span>
                </button>
              </div>
            ) : (
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-800 bg-[#1A1A1A] text-white">
                {/* Video Top Bar */}
                <div className="bg-[#2D2D2D] px-4 py-2 flex items-center justify-between text-xs text-gray-300 border-b border-gray-700">
                  <span className="font-semibold text-white">{currentFeature.action}</span>
                  <span className="text-[10px] bg-black/40 px-2 py-0.5 rounded">Easy Byz · Crili</span>
                </div>

                {/* Simulated Screen Body with interactive data */}
                <div className="p-6 sm:p-8 bg-white text-gray-900 min-h-[260px] flex flex-col justify-center">
                  <div className="max-w-md mx-auto w-full space-y-4">
                    <div className="text-center pb-2 border-b border-gray-200">
                      <span className="text-xs uppercase font-extrabold text-[#6D28D9] tracking-wider">
                        Tela do Sistema
                      </span>
                      <h4 className="text-lg font-bold text-gray-900 mt-0.5">
                        {currentFeature.title}
                      </h4>
                    </div>

                    <div className="space-y-2 bg-gray-50 p-4 rounded-xl border border-gray-200 text-xs">
                      {currentFeature.previewDetails.map((detail, idx) => (
                        <div key={idx} className="flex justify-between items-center py-1 border-b border-gray-200/60 last:border-0">
                          <span className="font-semibold text-gray-700">{detail.split(':')[0]}:</span>
                          <span className="font-bold text-[#6D28D9]">{detail.split(':')[1]}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      type="button"
                      className="w-full py-2 bg-[#6D28D9] text-white text-xs font-bold rounded-lg shadow-xs"
                    >
                      Confirmar no Sistema
                    </button>
                  </div>
                </div>

                {/* Video Player Bottom Controls Bar matching Crili Screenshot 2 */}
                <div className="bg-[#111111] px-4 py-2.5 flex items-center justify-between text-xs border-t border-gray-800">
                  <div className="flex items-center gap-3">
                    <button type="button" className="p-1 text-white hover:text-[#82C91E] transition-colors">
                      <Play className="w-4 h-4 fill-current" />
                    </button>
                    <span className="font-mono text-[11px] text-gray-400">
                      {currentFeature.time}
                    </span>
                  </div>

                  {/* Scrubber Progress Bar */}
                  <div className="flex-1 mx-4 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-[#82C91E] w-2/5" />
                  </div>

                  <div className="flex items-center gap-2 text-gray-400">
                    <Volume2 className="w-4 h-4 cursor-pointer hover:text-white" />
                    <Settings className="w-4 h-4 cursor-pointer hover:text-white" />
                    <Maximize className="w-4 h-4 cursor-pointer hover:text-white" />
                  </div>
                </div>
              </div>
            )}

            <div className="mt-3 flex justify-between items-center text-xs text-gray-500">
              <span>Espaço 2 · Telas Internas do Sistema</span>
              <button
                type="button"
                onClick={() => onOpenImageManager(showcaseSlot.id)}
                className="text-[#6D28D9] font-bold hover:underline cursor-pointer flex items-center gap-1"
              >
                <Camera className="w-3.5 h-3.5" />
                <span>Trocar por Captura Real</span>
              </button>
            </div>
          </div>

          {/* Right / Description Text matching Screenshot 2 */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <h3 className="text-2xl font-bold text-[#6D28D9] font-poppins">
                {currentFeature.title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mt-3 font-normal">
                {currentFeature.description}
              </p>
            </div>

            {/* Slide Navigation Buttons */}
            <div className="pt-2 flex items-center gap-2">
              {features.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveSlide(idx)}
                  className={`h-3 rounded-full transition-all cursor-pointer ${
                    activeSlide === idx
                      ? 'w-8 bg-[#6D28D9]'
                      : 'w-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ver recurso ${idx + 1}`}
                />
              ))}
            </div>

            <div className="pt-3">
              <a
                href="#planos"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#82C91E] hover:text-[#6fa81a] uppercase tracking-wider"
              >
                <span>Ver condições para a sua escola</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
