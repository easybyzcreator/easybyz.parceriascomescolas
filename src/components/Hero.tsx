import React from 'react';
import { ArrowUpRight, TrendingUp, CheckCircle2, Sparkles, Smartphone, ShieldCheck, DollarSign, QrCode } from 'lucide-react';
import heroWomanPhoneImg from '../assets/images/hero_woman_phone_official.png';

export const Hero: React.FC = () => {
  const marqueeItems = [
    { text: 'Tecnologia Própria com a Marca da Sua Escola', icon: Sparkles },
    { text: '10% de Comissão Recorrente Mensal', icon: DollarSign },
    { text: 'Web App PWA Direto no Celular do Cliente', icon: Smartphone },
    { text: 'Chancela Oficial da Sua Instituição', icon: ShieldCheck },
    { text: 'Montador Interativo & Vitrine de Bolos', icon: Sparkles },
    { text: 'Domínio Próprio & QR Code Exclusivo', icon: QrCode },
    { text: 'Sem Taxas Extras e com Mensalidade Fixa', icon: CheckCircle2 },
  ];

  return (
    <section id="inicio" className="relative pt-10 pb-12 lg:pt-16 lg:pb-24 bg-[#0a1e29] text-white overflow-hidden border-b border-white/10 scroll-mt-24">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-5 w-[450px] h-[450px] bg-[#00cfff]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-5 w-[500px] h-[500px] bg-[#00e6a8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 2-Column Hero: Headline & CTAs on Left, Image strictly on the Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center py-4 sm:py-6">
          
          {/* Left Column on Desktop / Bottom Column on Mobile: Headline, Subtitle, CTAs */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 pt-2 lg:pt-0">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#00cfff]/30 text-xs font-semibold text-[#00cfff] backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#00e6a8] animate-pulse" />
              <span>Tecnologia Própria para Gastronomia & Confeitaria</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.16] font-poppins">
              O Próximo Passo da Sua Escola de Gastronomia ou Confeitaria:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00cfff] to-[#00e6a8]">
                Seus Alunos Vendendo com Tecnologia Própria
              </span>{' '}
              e a Marca da Sua Instituição
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal max-w-2xl">
              Transforme o aprendizado dos seus alunos em um negócio real, profissional e lucrativo. Ofereça aos seus alunos o ecossistema digital definitivo para gerenciar pedidos, produção e finanças — tudo com a identidade visual deles e a chancela oficial da sua escola.
            </p>

            {/* CTA and Trust indicators */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-5">
              <a
                href="#parceria"
                className="inline-flex items-center bg-gradient-to-r from-[#00cfff] to-[#00e6a8] text-[#0a1e29] rounded-full p-1.5 pr-6 hover:opacity-95 transition-all shadow-lg hover:scale-105 group cursor-pointer"
              >
                <span className="w-10 h-10 rounded-full bg-[#0a1e29] text-[#00cfff] flex items-center justify-center font-bold mr-3 group-hover:bg-[#143547] transition-colors">
                  <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                </span>
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wide">
                  Conhecer a Parceria
                </span>
              </a>

              {/* Social Proof indicator */}
              <div className="flex items-center gap-2 pl-2 text-xs font-semibold text-gray-300">
                <div className="flex -space-x-2">
                  <div className="w-7 h-7 rounded-full bg-amber-400 border-2 border-[#0a1e29] flex items-center justify-center text-[10px] font-bold text-[#0a1e29]">
                    EG
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#00cfff] border-2 border-[#0a1e29] flex items-center justify-center text-[10px] font-bold text-[#0a1e29]">
                    AC
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#00e6a8] border-2 border-[#0a1e29] flex items-center justify-center text-[10px] font-bold text-[#0a1e29]">
                    MP
                  </div>
                </div>
                <span>Validado por escolas e alunos</span>
              </div>
            </div>
          </div>

          {/* Right Column on Desktop / Top Column on Mobile: Hero Image (Woman with Phone) shown first on mobile */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end items-center relative w-full pt-1 pb-6 lg:py-0">
            <div className="relative w-full max-w-md lg:max-w-lg flex justify-center items-center">
              {/* Soft ambient aura behind image */}
              <div className="absolute inset-0 max-w-sm mx-auto bg-gradient-to-tr from-[#00cfff]/20 via-transparent to-[#00e6a8]/20 rounded-full blur-3xl pointer-events-none" />

              {/* Central Hero Image: Complete woman & smartphone (NEWS-40) */}
              <div className="relative z-10 animate-float-hero flex justify-center items-center px-2">
                <img
                  src="https://i.ibb.co/ch2Z2Z0z/NEWS-40.png"
                  onError={(e) => {
                    e.currentTarget.src = heroWomanPhoneImg;
                  }}
                  alt="Aluna e aplicativo Web App Easy Byz de confeitaria e gastronomia no celular"
                  className="w-auto h-auto max-h-[480px] sm:max-h-[550px] lg:max-h-[620px] max-w-full object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.75)] pointer-events-none"
                />
              </div>

              {/* Floating Card 1: 10% Comissão Recorrente (Top-Right) */}
              <div className="absolute top-2 sm:top-6 -right-1 sm:-right-4 z-20 animate-float-gentle">
                <div className="bg-[#07161f]/95 backdrop-blur-md border border-white/15 p-2 sm:p-2.5 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.6)] flex items-center gap-2 sm:gap-2.5 max-w-[150px] sm:max-w-[210px] hover:border-[#00e6a8]/50 transition-all">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#00e6a8]/20 text-[#00e6a8] flex items-center justify-center shrink-0 border border-[#00e6a8]/30">
                    <DollarSign className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs font-extrabold text-white leading-tight block">
                      10% Comissão
                    </span>
                    <p className="text-[8px] sm:text-[10px] text-gray-300 leading-tight mt-0.5">
                      Recorrente para sua escola
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Card 2: Web App PWA (Upper-Left - visible on mobile & desktop) */}
              <div className="flex absolute top-16 sm:top-24 -left-1 sm:-left-6 z-20 animate-float-gentle animation-delay-1000">
                <div className="bg-[#07161f]/95 backdrop-blur-md border border-white/15 p-2 sm:p-2.5 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.6)] flex items-center gap-2 sm:gap-2.5 max-w-[150px] sm:max-w-[220px] hover:border-[#00cfff]/50 transition-all">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#00cfff]/20 text-[#00cfff] flex items-center justify-center shrink-0 border border-[#00cfff]/30">
                    <Smartphone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs font-extrabold text-white leading-tight block">
                      Web App PWA
                    </span>
                    <p className="text-[8px] sm:text-[10px] text-gray-300 leading-tight mt-0.5">
                      Direto no celular do cliente
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Card 3: Chancela Oficial (Lower-Left - separated cleanly from Card 2 and Card 4) */}
              <div className="absolute bottom-28 sm:bottom-32 -left-1 sm:-left-4 z-20 animate-float-gentle animation-delay-2000">
                <div className="bg-[#07161f]/95 backdrop-blur-md border border-white/15 p-2 sm:p-2.5 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.6)] flex items-center gap-2 sm:gap-2.5 max-w-[150px] sm:max-w-[210px] hover:border-amber-400/50 transition-all">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0 border border-amber-400/30">
                    <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs font-extrabold text-white leading-tight block">
                      Chancela Oficial
                    </span>
                    <p className="text-[8px] sm:text-[10px] text-gray-300 leading-tight mt-0.5">
                      A autoridade da sua escola
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Card 4: 0% Taxa Abusiva (Bottom-Right - opposite side from Card 3 with zero overlap) */}
              <div className="absolute -bottom-1 sm:bottom-2 -right-1 sm:-right-4 z-20 animate-float-gentle animation-delay-1500">
                <div className="bg-[#07161f]/95 backdrop-blur-md border border-white/15 p-2 sm:p-2.5 rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.6)] flex items-center gap-2 sm:gap-2.5 max-w-[185px] sm:max-w-[260px] hover:border-[#00e6a8]/50 transition-all">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#004d40]/80 border border-[#00e6a8]/40 text-[#00e6a8] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] sm:text-xs font-extrabold text-white leading-tight block">
                      0% Taxa Abusiva
                    </span>
                    <p className="text-[8px] sm:text-[10px] text-gray-200 leading-tight mt-0.5 font-medium">
                      Lucro integral para o aluno
                    </p>
                    <p className="text-[7.5px] sm:text-[9.5px] text-[#00e6a8] font-bold leading-tight mt-0.5">
                      sem taxas extras e com mensalidade fixa
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Dynamic Animated Scroll Marquee (Ticker) in Header */}
      <div className="mt-12 pt-6 border-t border-white/10 bg-[#07161f]/80 backdrop-blur-sm overflow-hidden py-3.5">
        <div className="animate-marquee items-center gap-8">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-gray-300 hover:text-white transition-colors shrink-0 px-2"
              >
                <span className="w-2 h-2 rounded-full bg-[#00e6a8]" />
                <Icon className="w-4 h-4 text-[#00cfff]" />
                <span>{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
