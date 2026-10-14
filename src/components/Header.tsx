import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import easybyzLogo from '../assets/images/easybyz_logo_official.png';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0a1e29] border-b border-white/10 backdrop-blur-md bg-opacity-95 shadow-md">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo with Official Transparent EBC Bulb Icon */}
          <a href="#inicio" className="flex items-center gap-2.5 group shrink-0">
            <img
              src={easybyzLogo}
              alt="Easy Byz Creator Logo"
              className="w-8 h-8 sm:w-9 sm:h-9 object-contain drop-shadow-[0_0_10px_rgba(0,207,255,0.4)] group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col text-left">
              <span className="text-lg sm:text-xl xl:text-2xl font-black tracking-tight text-white font-poppins leading-none">
                Easy <span className="text-[#00cfff]">Byz</span>
              </span>
              <span className="text-[8px] sm:text-[9px] font-extrabold tracking-widest text-[#00e6a8] uppercase leading-tight mt-0.5">
                CREATOR
              </span>
            </div>
            <span className="hidden min-[1100px]:inline-block text-[9px] xl:text-[10px] font-bold text-[#0a1e29] bg-[#00e6a8] px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0 ml-1">
              Parceria Escolas
            </span>
          </a>

          {/* Clean Navigation Links - Well spaced across viewports */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-6 text-xs xl:text-sm font-medium text-gray-200">
            <a href="#inicio" className="hover:text-[#00cfff] transition-colors whitespace-nowrap">
              Início
            </a>
            <a href="#webapp" className="hover:text-[#00cfff] transition-colors whitespace-nowrap">
              O Web App
            </a>
            <a href="#depoimentos" className="hover:text-[#00cfff] transition-colors whitespace-nowrap">
              Depoimentos
            </a>
            <a href="#diferencial" className="hover:text-[#00cfff] transition-colors whitespace-nowrap">
              Diferenciais
            </a>
            <a href="#ecossistema" className="hover:text-[#00cfff] transition-colors whitespace-nowrap">
              Ecossistema
            </a>
            <a href="#fundadora" className="hover:text-[#00cfff] transition-colors whitespace-nowrap">
              A Fundadora
            </a>
            <a href="#parceria" className="hover:text-[#00cfff] transition-colors whitespace-nowrap">
              Parceria
            </a>
            <a href="#investimento" className="hover:text-[#00cfff] transition-colors whitespace-nowrap">
              Investimento
            </a>
          </nav>

          {/* Primary CTA Button */}
          <div className="hidden sm:flex items-center shrink-0">
            <a
              href="#contato"
              className="inline-flex items-center gap-1.5 xl:gap-2 px-3.5 py-2 xl:px-5 xl:py-2.5 text-[11px] xl:text-xs font-bold text-[#0a1e29] bg-gradient-to-r from-[#00cfff] to-[#00e6a8] hover:opacity-95 rounded-full shadow-md transition-all hover:scale-105 uppercase tracking-wide cursor-pointer whitespace-nowrap"
            >
              <span>Quero Ser Escola Parceira</span>
              <ArrowUpRight className="w-3.5 h-3.5 xl:w-4 xl:h-4 stroke-[2.5]" />
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#00cfff] rounded-lg transition-colors cursor-pointer"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a1e29] border-t border-white/10 px-6 py-5 space-y-4 shadow-2xl animate-fade-in">
          <div className="flex flex-col space-y-3 text-base font-medium text-white">
            <a
              href="#inicio"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#00cfff]"
            >
              Início
            </a>
            <a
              href="#webapp"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#00cfff]"
            >
              O Web App
            </a>
            <a
              href="#depoimentos"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#00cfff]"
            >
              Depoimentos
            </a>
            <a
              href="#diferencial"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#00cfff]"
            >
              Diferenciais
            </a>
            <a
              href="#ecossistema"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#00cfff]"
            >
              Ecossistema
            </a>
            <a
              href="#fundadora"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#00cfff]"
            >
              A Fundadora
            </a>
            <a
              href="#parceria"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#00cfff]"
            >
              Parceria
            </a>
            <a
              href="#investimento"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#00cfff]"
            >
              Investimento
            </a>
          </div>
          <div className="pt-3 border-t border-white/10">
            <a
              href="#contato"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-center text-xs font-bold text-[#0a1e29] bg-gradient-to-r from-[#00cfff] to-[#00e6a8] rounded-full shadow block uppercase tracking-wide"
            >
              Quero Ser Escola Parceira
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
