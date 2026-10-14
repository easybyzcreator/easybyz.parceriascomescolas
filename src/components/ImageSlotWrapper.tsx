import React, { useState } from 'react';
import { Camera, Image as ImageIcon } from 'lucide-react';
import { ImageSlot } from '../types';

interface ImageSlotWrapperProps {
  slot: ImageSlot;
  className?: string;
  imageClassName?: string;
  aspectClass?: string;
  onOpenManager?: (slotId: string) => void;
  showSlotIndicator?: boolean;
}

export const ImageSlotWrapper: React.FC<ImageSlotWrapperProps> = ({
  slot,
  className = '',
  imageClassName = 'w-full h-full object-cover',
  aspectClass = 'aspect-[16/9]',
  onOpenManager,
  showSlotIndicator = true,
}) => {
  const [imgError, setImgError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const hasImage = Boolean(slot.currentUrl) && !imgError && !slot.isPlaceholder;

  return (
    <div
      className={`relative group overflow-hidden rounded-2xl border border-[#2D231E]/10 bg-[#F5EFE6] ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`w-full ${aspectClass} relative overflow-hidden`}>
        {hasImage ? (
          <img
            src={slot.currentUrl}
            alt={slot.name}
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className={`transition-transform duration-500 group-hover:scale-105 ${imageClassName}`}
          />
        ) : (
          /* Elegant Styled CSS/SVG Fallback Container for Placeholders or Missing Images */
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#F5EFE6] via-[#EFE7DC] to-[#E3D6C5]">
            <div className="w-14 h-14 rounded-2xl bg-[#B86B35]/10 border border-[#B86B35]/20 flex items-center justify-center text-[#B86B35] mb-3 shadow-inner">
              <ImageIcon className="w-7 h-7" />
            </div>
            <span className="text-xs font-semibold tracking-wider uppercase text-[#B86B35] mb-1">
              Espaço Reservado para Imagem
            </span>
            <p className="text-sm font-serif font-bold text-[#2D231E] max-w-xs mb-1">
              {slot.name}
            </p>
            <p className="text-xs text-[#2D231E]/70 max-w-sm mb-3">
              {slot.description}
            </p>
            <div className="text-[11px] text-[#2D231E]/60 bg-white/70 px-3 py-1 rounded-full border border-[#2D231E]/10">
              Dimensões recomendadas: {slot.recommendedDimensions} ({slot.recommendedAspect})
            </div>
          </div>
        )}

        {/* Floating slot indicator & replacement button for the user */}
        {showSlotIndicator && (
          <div
            className={`absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-85'
            }`}
          >
            <span className="px-2.5 py-1 text-[11px] font-medium bg-[#2D231E]/85 backdrop-blur-sm text-[#FAF7F2] rounded-md shadow-sm border border-white/10 pointer-events-auto">
              {slot.name.split('·')[0].trim()}
            </span>

            {onOpenManager && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenManager(slot.id);
                }}
                className="pointer-events-auto flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium text-white bg-[#B86B35] hover:bg-[#9E5725] rounded-md shadow transition-colors cursor-pointer"
                title="Substituir ou testar imagem para este espaço"
              >
                <Camera className="w-3.5 h-3.5" />
                <span>Substituir Foto</span>
              </button>
            )}
          </div>
        )}

        {/* Bottom indicator info on hover */}
        {isHovered && onOpenManager && (
          <div
            onClick={() => onOpenManager(slot.id)}
            className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-[#2D231E]/90 via-[#2D231E]/60 to-transparent text-white text-xs flex items-center justify-between cursor-pointer"
          >
            <span className="truncate pr-2 text-white/90">
              Recomendado: {slot.recommendedDimensions} ({slot.recommendedAspect})
            </span>
            <span className="text-[#E8CDB5] underline underline-offset-2 shrink-0">
              Gerenciar
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
