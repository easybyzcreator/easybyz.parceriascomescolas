import React, { useState, useRef } from 'react';
import { Check, Sparkles, ChevronLeft, ChevronRight, Smartphone } from 'lucide-react';
import ecosystemPhonesImg from '../assets/images/ecosystem_phones_reel_trimmed.png';
import mockupPhone1 from '../assets/images/mockup_phone_1.jpg';
import mockupPhone2 from '../assets/images/mockup_phone_2.jpg';
import mockupPhone3 from '../assets/images/mockup_phone_3.jpg';

export const EcosystemFeatures: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'3d' | 'carousel'>('3d');
  const [activePhoneIndex, setActivePhoneIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const ecosystemItems = [
    {
      title: 'Vitrine & Cardápio Digital Personalizado:',
      desc: 'Ambiente exclusivo com logo própria, paleta de cores, fotos de produtos e opções personalizadas para o cliente montar seu pedido.',
    },
    {
      title: 'Gestão de Pedidos & Entregas:',
      desc: 'Controle de status em tempo real (Novo, Em Produção, Pronto, Entregue) com organização ágil da rotina de encomendas.',
    },
    {
      title: 'Domínio Próprio & QR Code Exclusivo:',
      desc: 'Link próprio e QR Code exclusivo para mesas, balcão e panfletos, abrindo em segundos sem precisar baixar nada nas lojas de aplicativos.',
    },
    {
      title: 'Venda Direta Sem Taxas de Intermediação:',
      desc: 'O aluno não perde de 15% a 30% para intermediários ou marketplaces tradicionais. O faturamento das vendas é 100% dele.',
    },
  ];

  const phonesData = [
    {
      id: 1,
      badge: '1. Vitrine & Cardápio Digital',
      subtitle: 'Apresentação profissional com catálogo e opções personalizadas',
      image: mockupPhone1,
      alt: 'Vitrine digital e cardápio de produtos gastronômicos',
    },
    {
      id: 2,
      badge: '2. Gestão de Pedidos & Organização',
      subtitle: 'Controle em tempo real de pedidos, produção e entregas',
      image: mockupPhone2,
      alt: 'Gestão de pedidos e fluxo de atendimento',
    },
    {
      id: 3,
      badge: '3. QR Code & Acesso Web App',
      subtitle: 'Acesso instantâneo sem download, instalado como app nativo',
      image: mockupPhone3,
      alt: 'QR Code e aplicativo instalado na tela inicial',
    },
  ];

  const marqueeEcosystem = [
    'Vitrine Digital com Marca Própria',
    'Controle de Pedidos em Tempo Real',
    'Domínio Próprio & QR Code Exclusivo',
    'Zero Taxas de Intermediação por Venda',
    'Instalação Direta na Tela Inicial (PWA)',
    'Ambiente 100% Customizado por Aluno',
    'Suporte Humanizado para Alunos e Escolas',
  ];

  const scrollToPhone = (index: number) => {
    setActivePhoneIndex(index);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const child = container.children[index] as HTMLElement;
      if (child) {
        child.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  };

  return (
    <section id="ecossistema" className="py-16 lg:py-24 bg-[#FAFAFA] border-t border-gray-200 overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading Centralized */}
        <div className="max-w-5xl mx-auto text-center mb-10 sm:mb-14">
          <span className="text-xs font-extrabold text-[#00cfff] bg-[#0a1e29] px-3.5 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
            Tecnologia de Ponta a Ponta
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1e29] tracking-tight font-poppins leading-tight text-center mx-auto max-w-3xl">
            O Ecossistema Completo que Seus Alunos Vão Usar
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
            O sistema atende desde o cliente final até a rotina pesada da cozinha:
          </p>

          {/* View Mode Toggle Pill */}
          <div className="mt-6 inline-flex p-1 bg-gray-200/80 rounded-full border border-gray-300 text-xs font-bold">
            <button
              onClick={() => setActiveTab('3d')}
              className={`px-4 py-2 rounded-full transition-all ${
                activeTab === '3d'
                  ? 'bg-[#0a1e29] text-[#00cfff] shadow-sm'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              Visão Geral em 3D
            </button>
            <button
              onClick={() => setActiveTab('carousel')}
              className={`px-4 py-2 rounded-full transition-all ${
                activeTab === 'carousel'
                  ? 'bg-[#0a1e29] text-[#00e6a8] shadow-sm'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              Navegar Celular por Celular
            </button>
          </div>
        </div>

        {/* View Mode: Official 3D Mockup Image provided by the user */}
        {activeTab === '3d' && (
          <div className="mb-14 sm:mb-18">
            <div className="relative max-w-4xl mx-auto flex justify-center items-center">
              {/* Subtle ambient light aura */}
              <div className="absolute inset-0 max-w-xl mx-auto bg-gradient-to-tr from-[#00cfff]/20 via-transparent to-[#00e6a8]/20 rounded-full blur-3xl pointer-events-none" />

              {/* 3D Mockup Stage with floating animation */}
              <div className="relative z-10 w-full flex justify-center items-center animate-float-hero">
                <img
                  src={ecosystemPhonesImg}
                  alt="Ecossistema Easy Byz - Vitrine de Vendas, Gestão de Pedidos e Ficha Técnica"
                  className="w-auto h-auto max-h-[580px] sm:max-h-[680px] lg:max-h-[780px] max-w-full object-contain drop-shadow-[0_25px_45px_rgba(10,30,41,0.25)] transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        )}

        {/* View Mode: Interactive High-Resolution Horizontal Scroll Carousel */}
        {activeTab === 'carousel' && (
          <div className="mb-14 sm:mb-18">
            {/* Quick selector tabs */}
            <div className="flex justify-center gap-2 mb-6">
              {phonesData.map((phone, idx) => (
                <button
                  key={phone.id}
                  onClick={() => scrollToPhone(idx)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                    activePhoneIndex === idx
                      ? 'bg-[#0a1e29] text-[#00e6a8] shadow-md scale-105'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {phone.badge}
                </button>
              ))}
            </div>

            {/* Smooth Horizontal Scroll Track */}
            <div className="relative">
              <div
                ref={scrollContainerRef}
                className="flex items-center gap-6 overflow-x-auto pb-6 pt-2 px-4 snap-x snap-mandatory scroll-smooth no-scrollbar justify-start md:justify-center"
              >
                {phonesData.map((phone, idx) => (
                  <div
                    key={phone.id}
                    onClick={() => setActivePhoneIndex(idx)}
                    className={`snap-center shrink-0 w-[280px] sm:w-[320px] transition-all duration-300 cursor-pointer ${
                      activePhoneIndex === idx
                        ? 'scale-100 opacity-100 z-10'
                        : 'scale-95 opacity-80 hover:opacity-100'
                    }`}
                  >
                    <div className="bg-white rounded-3xl p-4 shadow-xl border-2 border-gray-200 hover:border-[#00cfff]/60 transition-colors">
                      {/* Badge header */}
                      <div className="mb-3 text-center">
                        <span className="text-[11px] font-extrabold uppercase px-2.5 py-0.5 rounded-md bg-[#0a1e29] text-[#00cfff]">
                          {phone.badge}
                        </span>
                        <p className="text-xs text-gray-500 mt-1">{phone.subtitle}</p>
                      </div>

                      {/* Phone frame */}
                      <div className="relative bg-[#0a1e29] rounded-[36px] p-2 border-4 border-[#143547] shadow-inner overflow-hidden aspect-[9/19.5]">
                        {/* Dynamic Island */}
                        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-20" />
                        <img
                          src={phone.image}
                          alt={phone.alt}
                          className="w-full h-full object-cover rounded-[28px]"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Prev / Next controls */}
              <div className="flex justify-center items-center gap-3 mt-4">
                <button
                  onClick={() => scrollToPhone(Math.max(0, activePhoneIndex - 1))}
                  disabled={activePhoneIndex === 0}
                  className="w-9 h-9 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-[#0a1e29] hover:text-[#00cfff] disabled:opacity-40 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-bold text-gray-500">
                  {activePhoneIndex + 1} de {phonesData.length}
                </span>
                <button
                  onClick={() => scrollToPhone(Math.min(phonesData.length - 1, activePhoneIndex + 1))}
                  disabled={activePhoneIndex === phonesData.length - 1}
                  className="w-9 h-9 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-[#0a1e29] hover:text-[#00cfff] disabled:opacity-40 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Dynamic Continuous Marquee in Ecosystem Block */}
        <div className="mb-14 overflow-hidden rounded-2xl bg-[#0a1e29] py-3.5 shadow-md">
          <div className="animate-marquee items-center gap-8">
            {[...marqueeEcosystem, ...marqueeEcosystem].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-gray-300 shrink-0 px-2"
              >
                <span className="w-2 h-2 rounded-full bg-[#00e6a8]" />
                <Smartphone className="w-4 h-4 text-[#00cfff]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Ecosystem Modules in Structured Grid strictly according to user brief */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0a1e29] font-poppins">
              Tudo integrado na mesma ferramenta:
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ecosystemItems.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-start gap-4 hover:border-[#00cfff]/50 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#00e6a8] text-[#0a1e29] flex items-center justify-center shrink-0 mt-0.5 shadow-xs font-bold">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0a1e29] mb-1 font-poppins">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Concluding Emphasis Statement */}
          <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-[#0a1e29] to-[#143547] text-white shadow-md text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00e6a8] uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4 text-[#00cfff]" />
              <span>Oportunidade para Sua Instituição</span>
            </div>
            <p className="text-base sm:text-lg font-bold text-white/95 leading-relaxed">
              Esta é a chance da sua escola colocar nas mãos dos alunos uma poderosa ferramenta para simplificar a gestão e garantir o sucesso comercial de cada um deles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
