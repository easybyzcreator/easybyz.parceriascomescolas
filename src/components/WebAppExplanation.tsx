import React from 'react';
import { 
  Globe, 
  HardDrive, 
  TrendingUp, 
  Sparkles, 
  Smartphone, 
  Check, 
  Wifi, 
  Battery, 
  MessageCircle, 
  Camera, 
  Compass, 
  Phone, 
  Sliders, 
  FileText, 
  Calculator, 
  Image as ImageIcon 
} from 'lucide-react';

export const WebAppExplanation: React.FC = () => {
  return (
    <section id="webapp" className="py-16 lg:py-24 bg-[#FAFAFA] border-t border-gray-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading Centralized in the Middle of the Screen */}
        <div className="w-full max-w-4xl mx-auto text-center mb-14 flex flex-col items-center justify-center">
          <span className="text-xs font-extrabold text-[#00cfff] bg-[#0a1e29] px-3.5 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
            Tecnologia Web App
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1e29] tracking-tight font-poppins leading-tight text-center mx-auto max-w-3xl">
            O Que é um Web App de Vendas e Por Que Ele é Indispensável para o Seu Aluno?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed font-normal text-center max-w-2xl mx-auto">
            Hoje, depender exclusivamente do WhatsApp ou de marketplaces tradicionais (que cobram de 15% a 30% por venda) esmaga a margem de lucro de quem está começando na confeitaria e na gastronomia.
          </p>
          <div className="mt-5 p-4 rounded-xl bg-white border border-[#00cfff]/30 shadow-xs inline-block text-center">
            <p className="text-base font-bold text-[#0a1e29]">
              O Cardápio Digital / Web App Personalizado é a vitrine profissional moderna do aluno.
            </p>
          </div>
        </div>

        {/* 2-Column Split: Detailed Points + Hyper-Realistic Smartphone UI */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Key Features strictly from the user's brief */}
          <div className="lg:col-span-6 space-y-6">
            {/* Onde Funciona */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0a1e29] text-[#00cfff] flex items-center justify-center font-bold">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0a1e29] font-poppins">
                  Onde funciona:
                </h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed pt-1">
                Ele roda direto no navegador do celular ou computador do cliente final. <strong>Não precisa baixar nada na Play Store ou Apple Store.</strong>
              </p>
            </div>

            {/* A Experiência */}
            <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0a1e29] text-[#00e6a8] flex items-center justify-center font-bold">
                  <HardDrive className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0a1e29] font-poppins">
                  A experiência:
                </h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed pt-1">
                Ocupa espaço zero na memória do celular, abre em segundos, possui domínio próprio, QR Code exclusivo para mesas ou panfletos, e ganha um ícone próprio com a marca da confeitaria/escola de gastronomia instalado diretamente na tela inicial do cliente (como se fosse um aplicativo de loja).
              </p>
            </div>

            {/* Posicionamento de Alto Padrão */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0a1e29] to-[#143547] text-white shadow-md space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#00e6a8] uppercase tracking-wider">
                <TrendingUp className="w-4 h-4" />
                <span>Posicionamento de Mercado</span>
              </div>
              <p className="text-sm sm:text-base leading-relaxed font-semibold text-white/95">
                Com ele, o aluno deixa de ser visto como um "amador que vende pelo WhatsApp" e se posiciona no mercado como uma marca de alto padrão.
              </p>
            </div>
          </div>

          {/* Right Column: Hyper-Realistic Flagship Smartphone Screen */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[370px]">
              
              {/* External Smartphone Chassis (Titanium Frame with subtle side buttons) */}
              <div className="relative rounded-[54px] bg-[#1a232b] p-3 shadow-[0_30px_70px_rgba(10,30,41,0.35),0_0_0_1px_rgba(255,255,255,0.15),inset_0_1px_2px_rgba(255,255,255,0.25)] border-[5px] border-[#2d3944]">
                
                {/* Side Volume Buttons on chassis */}
                <div className="absolute -left-[9px] top-28 w-[4px] h-11 bg-[#232d36] rounded-l-md" />
                <div className="absolute -left-[9px] top-42 w-[4px] h-11 bg-[#232d36] rounded-l-md" />
                {/* Power button */}
                <div className="absolute -right-[9px] top-32 w-[4px] h-14 bg-[#232d36] rounded-r-md" />

                {/* Inner Screen Bezel with OLED Black Base */}
                <div className="relative rounded-[44px] overflow-hidden bg-[#07131b] shadow-inner select-none">
                  
                  {/* Subtle Diagonal Glass Glare Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.12] pointer-events-none z-30" />

                  {/* Dynamic Island Capsule */}
                  <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-[100px] h-[26px] bg-black rounded-full z-40 flex items-center justify-between px-2.5 shadow-md border border-white/5">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#0a1017] border border-white/10 flex items-center justify-center">
                        <div className="w-1 h-1 rounded-full bg-[#1b2b3a]" />
                      </div>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-[#081820] flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-[#00e6a8]/80 animate-pulse" />
                    </div>
                  </div>

                  {/* Wallpaper Canvas with High-End Dark Palette */}
                  <div className="relative px-5 pt-12 pb-6 min-h-[580px] flex flex-col justify-between bg-gradient-to-b from-[#0a1e29] via-[#0d2a3a] to-[#07141d]">
                    
                    {/* Status Bar */}
                    <div className="flex justify-between items-center text-[12px] font-semibold text-white px-2 mb-4 z-20">
                      <span className="font-sans tracking-tight">09:41</span>
                      <div className="flex items-center gap-2">
                        {/* Cellular signal bars */}
                        <div className="flex items-end gap-[2px] h-3">
                          <div className="w-[3px] h-1 bg-white rounded-xs" />
                          <div className="w-[3px] h-1.5 bg-white rounded-xs" />
                          <div className="w-[3px] h-2 bg-white rounded-xs" />
                          <div className="w-[3px] h-2.5 bg-white rounded-xs" />
                        </div>
                        {/* 5G badge */}
                        <span className="text-[10px] font-bold text-gray-200">5G</span>
                        {/* Battery */}
                        <div className="flex items-center gap-0.5">
                          <div className="w-5 h-2.5 rounded-[4px] border border-white/70 p-[1.5px] flex items-center">
                            <div className="w-full h-full bg-[#00e6a8] rounded-[2px]" />
                          </div>
                          <div className="w-0.5 h-1 bg-white/70 rounded-r-xs" />
                        </div>
                      </div>
                    </div>

                    {/* Home Screen Content */}
                    <div className="space-y-5 z-20">
                      
                      {/* Realistic Date & Weather Widget (Glassmorphic) */}
                      <div className="rounded-2xl bg-white/[0.08] backdrop-blur-xl border border-white/15 p-3.5 shadow-sm text-white">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-[10px] font-bold text-[#00cfff] uppercase tracking-wider">
                              Quarta-feira, 15 de Outubro
                            </p>
                            <p className="text-sm font-extrabold text-white mt-0.5 font-poppins">
                              Confeitaria & Negócios
                            </p>
                          </div>
                          <div className="text-right">
                            <span className="text-sm font-extrabold text-[#00e6a8]">24°C</span>
                            <p className="text-[9px] text-gray-300">Ensolarado</p>
                          </div>
                        </div>
                      </div>

                      {/* App Grid: Row 1 (System & Social Apps with Realistic High-Res Icons) */}
                      <div className="grid grid-cols-4 gap-3 text-center">
                        {/* WhatsApp */}
                        <div className="flex flex-col items-center gap-1.5 group cursor-pointer">
                          <div className="w-13 h-13 rounded-[16px] bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-105">
                            <MessageCircle className="w-6 h-6 fill-current text-white" />
                          </div>
                          <span className="text-[10px] text-gray-200 font-medium">WhatsApp</span>
                        </div>

                        {/* Fotos / Portfólio */}
                        <div className="flex flex-col items-center gap-1.5 group cursor-pointer">
                          <div className="w-13 h-13 rounded-[16px] bg-gradient-to-br from-[#FF2D55] via-[#FF9500] to-[#5856D6] flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-105">
                            <ImageIcon className="w-6 h-6 text-white" />
                          </div>
                          <span className="text-[10px] text-gray-200 font-medium">Fotos</span>
                        </div>

                        {/* Calculadora */}
                        <div className="flex flex-col items-center gap-1.5 group cursor-pointer">
                          <div className="w-13 h-13 rounded-[16px] bg-gradient-to-br from-[#3A3A3C] to-[#1C1C1E] flex items-center justify-center text-[#FF9500] shadow-md transition-transform group-hover:scale-105 border border-white/10">
                            <Calculator className="w-6 h-6" />
                          </div>
                          <span className="text-[10px] text-gray-200 font-medium">Calculadora</span>
                        </div>

                        {/* Notas & Fichas */}
                        <div className="flex flex-col items-center gap-1.5 group cursor-pointer">
                          <div className="w-13 h-13 rounded-[16px] bg-gradient-to-br from-[#FFCC00] to-[#FF9500] flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-105">
                            <FileText className="w-6 h-6 text-white" />
                          </div>
                          <span className="text-[10px] text-gray-200 font-medium">Receitas</span>
                        </div>
                      </div>

                      {/* Spotlight Feature: The PWA App Icon "SEU LOGO AQUI" */}
                      <div className="relative pt-2">
                        {/* Callout Tag */}
                        <div className="flex items-center gap-1.5 mb-2 px-2">
                          <span className="inline-flex items-center gap-1 text-[9px] font-extrabold uppercase tracking-wider text-[#00e6a8] bg-[#00e6a8]/10 px-2 py-0.5 rounded-full border border-[#00e6a8]/30">
                            <Sparkles className="w-3 h-3" />
                            Aplicativo Instalado (PWA)
                          </span>
                        </div>

                        {/* App Icon Container */}
                        <div className="p-3.5 rounded-2xl bg-gradient-to-br from-white/[0.12] to-white/[0.04] border border-[#00cfff]/50 backdrop-blur-xl shadow-lg flex items-center gap-3.5">
                          
                          {/* The Real Installed PWA Icon */}
                          <div className="relative shrink-0">
                            <div className="w-16 h-16 rounded-[18px] bg-gradient-to-br from-[#0a1e29] via-[#0d3448] to-[#00cfff] p-1.5 flex flex-col items-center justify-center text-center shadow-[0_8px_20px_rgba(0,207,255,0.35)] border border-[#00cfff]/60 transition-transform hover:scale-105">
                              {/* Pastry Hat & Crown Icon */}
                              <svg className="w-6 h-6 text-[#00e6a8] mb-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
                                <line x1="6" y1="17" x2="18" y2="17" />
                              </svg>
                              <span className="text-[8px] font-black tracking-tight text-white uppercase leading-none font-poppins">
                                SEU LOGO
                              </span>
                              <span className="text-[7.5px] font-black tracking-wider text-[#00cfff] uppercase leading-none font-poppins mt-0.5">
                                AQUI
                              </span>
                            </div>
                            
                            {/* Notification / Installed Badge */}
                            <div className="absolute -top-1.5 -right-1.5 w-4.5 h-4.5 rounded-full bg-[#00e6a8] text-[#0a1e29] flex items-center justify-center text-[9px] font-black shadow-sm border-2 border-[#0a1e29]">
                              ✓
                            </div>
                          </div>

                          {/* App Info beside the icon */}
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1.5">
                              <h4 className="text-xs font-bold text-white truncate font-poppins">
                                Confeitaria da Aluna
                              </h4>
                              <span className="text-[8px] font-extrabold bg-[#00cfff]/20 text-[#00cfff] px-1.5 py-0.2 rounded uppercase">
                                PWA
                              </span>
                            </div>
                            <p className="text-[11px] text-gray-300 leading-snug mt-0.5">
                              Salvo na tela inicial como um app nativo, com a <strong>logo e identidade visual da aluna</strong>.
                            </p>
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* Realistic Frosted Glass Dock at the Bottom */}
                    <div className="mt-6 z-20">
                      <div className="rounded-[28px] bg-white/[0.14] backdrop-blur-2xl border border-white/20 p-2.5 px-4 flex justify-between items-center shadow-xl">
                        {/* Phone */}
                        <div className="w-11 h-11 rounded-[14px] bg-[#34C759] flex items-center justify-center text-white shadow-md">
                          <Phone className="w-5 h-5 fill-current text-white" />
                        </div>
                        {/* Safari */}
                        <div className="w-11 h-11 rounded-[14px] bg-[#007AFF] flex items-center justify-center text-white shadow-md">
                          <Compass className="w-5 h-5 text-white" />
                        </div>
                        {/* Messages */}
                        <div className="w-11 h-11 rounded-[14px] bg-[#30D158] flex items-center justify-center text-white shadow-md">
                          <MessageCircle className="w-5 h-5 fill-current text-white" />
                        </div>
                        {/* Camera */}
                        <div className="w-11 h-11 rounded-[14px] bg-[#8E8E93] flex items-center justify-center text-white shadow-md">
                          <Camera className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      {/* Home Indicator Swipe Bar */}
                      <div className="w-28 h-1 bg-white/70 rounded-full mx-auto mt-4" />
                    </div>

                  </div>
                </div>
              </div>

              {/* Floating Feature Tag Beside Phone */}
              <div className="hidden sm:flex absolute -bottom-4 -right-6 items-center gap-2 px-3.5 py-2 rounded-2xl bg-white border border-gray-200 shadow-xl text-xs font-bold text-[#0a1e29] z-30 animate-float-gentle">
                <Check className="w-4 h-4 text-[#00e6a8]" />
                <span>Zero download nas lojas oficiais</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
