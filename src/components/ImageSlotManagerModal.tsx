import React, { useState } from 'react';
import { X, Image as ImageIcon, Upload, Check, Link, RefreshCw, Info } from 'lucide-react';
import { ImageSlot } from '../types';

interface ImageSlotManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  slots: ImageSlot[];
  onUpdateSlotImage: (slotId: string, newUrl: string) => void;
  initialSelectedSlotId?: string;
}

export const ImageSlotManagerModal: React.FC<ImageSlotManagerModalProps> = ({
  isOpen,
  onClose,
  slots,
  onUpdateSlotImage,
  initialSelectedSlotId,
}) => {
  const [selectedSlotId, setSelectedSlotId] = useState<string>(
    initialSelectedSlotId || slots[0]?.id || ''
  );
  const [inputUrl, setInputUrl] = useState<string>('');
  const [feedback, setFeedback] = useState<string | null>(null);

  if (!isOpen) return null;

  const currentSlot = slots.find((s) => s.id === selectedSlotId) || slots[0];

  const handleApplyUrl = () => {
    if (!inputUrl.trim()) return;
    onUpdateSlotImage(currentSlot.id, inputUrl.trim());
    setFeedback('Imagem atualizada com sucesso para este espaço!');
    setTimeout(() => setFeedback(null), 3000);
    setInputUrl('');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          onUpdateSlotImage(currentSlot.id, reader.result);
          setFeedback('Imagem local carregada com sucesso neste espaço!');
          setTimeout(() => setFeedback(null), 3000);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRestoreDefault = () => {
    // Look up original default from INITIAL_IMAGE_SLOTS or clear
    onUpdateSlotImage(currentSlot.id, currentSlot.currentUrl);
    setFeedback('Espaço restaurado.');
    setTimeout(() => setFeedback(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2D231E]/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden bg-[#FAF7F2] rounded-2xl shadow-2xl border border-[#B86B35]/20 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#2D231E]/10 bg-[#F5EFE6]">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-[#B86B35]/10 text-[#B86B35]">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-serif font-bold text-[#2D231E]">
                Gerenciador de Espaços de Imagens
              </h2>
              <p className="text-xs text-[#2D231E]/70">
                Visualize todos os espaços fotográficos da página e substitua aos poucos pelas fotos reais da sua escola.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-[#2D231E]/60 hover:text-[#2D231E] rounded-lg hover:bg-black/5 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-[#2D231E]/10">
          {/* Slot selector sidebar */}
          <div className="md:col-span-5 p-4 space-y-2 bg-[#F9F6F0]">
            <span className="text-xs font-semibold tracking-wider text-[#2D231E]/60 uppercase block px-2 pb-1">
              Lista de Espaços na Página
            </span>
            {slots.map((slot) => {
              const isSelected = slot.id === currentSlot.id;
              const hasCustom = Boolean(slot.currentUrl);

              return (
                <button
                  key={slot.id}
                  type="button"
                  onClick={() => {
                    setSelectedSlotId(slot.id);
                    setInputUrl('');
                  }}
                  className={`w-full text-left p-3 rounded-xl transition-all cursor-pointer flex items-start gap-3 border ${
                    isSelected
                      ? 'bg-white border-[#B86B35] shadow-sm ring-1 ring-[#B86B35]/20'
                      : 'bg-white/60 hover:bg-white border-transparent text-[#2D231E]/80'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg shrink-0 flex items-center justify-center overflow-hidden border ${
                      isSelected ? 'border-[#B86B35]' : 'border-[#2D231E]/10'
                    }`}
                  >
                    {hasCustom ? (
                      <img
                        src={slot.currentUrl}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <ImageIcon className="w-5 h-5 text-[#B86B35]/70" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p
                      className={`text-xs font-bold truncate ${
                        isSelected ? 'text-[#B86B35]' : 'text-[#2D231E]'
                      }`}
                    >
                      {slot.name}
                    </p>
                    <p className="text-[11px] text-[#2D231E]/60 truncate">
                      {slot.section}
                    </p>
                    <span className="inline-block mt-1 text-[10px] text-[#2D231E]/50">
                      {slot.recommendedDimensions} ({slot.recommendedAspect})
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Details & live replacement preview */}
          <div className="md:col-span-7 p-6 space-y-5 bg-[#FAF7F2]">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-semibold text-[#B86B35] uppercase tracking-wider">
                  {currentSlot.section}
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#B86B35]/10 text-[#B86B35] font-medium border border-[#B86B35]/20">
                  {currentSlot.recommendedAspect} · {currentSlot.recommendedDimensions}
                </span>
              </div>
              <h3 className="text-xl font-serif font-bold text-[#2D231E]">
                {currentSlot.name}
              </h3>
              <p className="text-xs text-[#2D231E]/75 mt-1 leading-relaxed">
                {currentSlot.description}
              </p>
            </div>

            {/* Current Image Preview */}
            <div className="border border-[#2D231E]/15 rounded-xl p-2 bg-white shadow-inner">
              <span className="text-[11px] font-medium text-[#2D231E]/60 px-1 block mb-1.5">
                Pré-visualização Atual:
              </span>
              <div className="aspect-[16/9] w-full rounded-lg overflow-hidden bg-[#EFE7DC] flex items-center justify-center relative">
                {currentSlot.currentUrl ? (
                  <img
                    src={currentSlot.currentUrl}
                    alt={currentSlot.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center p-4">
                    <ImageIcon className="w-8 h-8 text-[#B86B35] mx-auto mb-2 opacity-60" />
                    <span className="text-xs text-[#2D231E]/60">
                      Espaço atualmente aguardando foto final
                    </span>
                  </div>
                )}
              </div>
            </div>

            {feedback && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{feedback}</span>
              </div>
            )}

            {/* Replacement Options */}
            <div className="space-y-3 pt-2">
              <label className="block text-xs font-bold text-[#2D231E]">
                Opção A: Testar ou Substituir via URL Direta
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#2D231E]/40">
                    <Link className="w-4 h-4" />
                  </div>
                  <input
                    type="url"
                    value={inputUrl}
                    onChange={(e) => setInputUrl(e.target.value)}
                    placeholder="Cole a URL da sua foto (ex: https://...)"
                    className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-[#2D231E]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B86B35]/40"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleApplyUrl}
                  disabled={!inputUrl.trim()}
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#B86B35] hover:bg-[#9E5725] disabled:opacity-50 rounded-lg transition-colors cursor-pointer"
                >
                  Aplicar URL
                </button>
              </div>

              <div className="pt-2">
                <label className="block text-xs font-bold text-[#2D231E] mb-1.5">
                  Opção B: Testar Subindo Foto do Seu Computador
                </label>
                <label className="flex items-center justify-center gap-2 p-3 border-2 border-dashed border-[#B86B35]/40 rounded-xl bg-[#FAF7F2] hover:bg-white transition-colors cursor-pointer text-xs text-[#2D231E]/80">
                  <Upload className="w-4 h-4 text-[#B86B35]" />
                  <span>Escolher arquivo JPG ou PNG para pré-visualizar</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Informative note */}
              <div className="p-3 rounded-lg bg-[#B86B35]/8 border border-[#B86B35]/15 text-[11px] text-[#2D231E]/80 flex items-start gap-2">
                <Info className="w-4 h-4 text-[#B86B35] shrink-0 mt-0.5" />
                <span>
                  <strong>Dica de Produção:</strong> Conforme combinamos, todos os espaços estão preparados! Você pode ir me enviando as fotos que deseja em cada posição ou me indicar onde salvar para substituirmos gradualmente.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="px-6 py-3 border-t border-[#2D231E]/10 bg-[#F5EFE6] flex items-center justify-between">
          <button
            type="button"
            onClick={handleRestoreDefault}
            className="flex items-center gap-1.5 text-xs text-[#2D231E]/70 hover:text-[#2D231E] transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Recarregar este espaço</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-[#2D231E] hover:bg-[#1E1714] rounded-lg transition-colors cursor-pointer"
          >
            Concluir & Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
