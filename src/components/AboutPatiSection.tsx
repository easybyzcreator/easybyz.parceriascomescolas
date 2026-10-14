import React from 'react';
import { Quote, Sparkles, BookOpen, Brain, Award } from 'lucide-react';
import patiImg from '../assets/images/pati_pg.png';

export const AboutPatiSection: React.FC = () => {
  return (
    <section id="fundadora" className="py-16 lg:py-24 bg-white border-t border-gray-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Centralized on Single Line */}
        <div className="w-full max-w-5xl mx-auto text-center mb-12 sm:mb-16 flex flex-col items-center justify-center">
          <span className="text-xs font-extrabold text-[#00cfff] bg-[#0a1e29] px-4 py-1.5 rounded-full uppercase tracking-wider inline-block mb-3.5 shadow-xs">
            Quem Desenvolveu a Tecnologia
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1e29] font-poppins text-center tracking-tight leading-tight max-w-3xl mx-auto">
            Conheça Patrícia (Pati), Fundadora da Easy Byz Creator
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
          {/* Left Column: Photo & Credentials */}
          <div className="lg:col-span-4 flex flex-col items-center text-center space-y-5 lg:sticky lg:top-24">
            <div className="relative w-full max-w-xs sm:max-w-sm rounded-3xl overflow-hidden shadow-xl border-4 border-[#0a1e29] bg-[#0a1e29] mx-auto">
              <img
                src={patiImg}
                alt="Patrícia (Pati), fundadora da Easy Byz"
                className="w-full h-auto object-cover object-center block"
              />

              {/* Founder Tag Overlay */}
              <div className="w-full p-4 bg-gradient-to-t from-[#0a1e29] via-[#0a1e29]/95 to-transparent text-white text-center">
                <h3 className="text-lg font-extrabold text-white font-poppins">
                  Patrícia (Pati)
                </h3>
                <p className="text-xs text-[#00e6a8] font-bold">
                  Fundadora da Easy Byz Creator
                </p>
              </div>
            </div>

            {/* Founder Quote */}
            <div className="p-4 rounded-2xl bg-[#FAFAFA] border border-gray-200 max-w-xs sm:max-w-sm text-xs sm:text-sm italic text-gray-700 flex items-start gap-2.5 text-left shadow-xs">
              <Quote className="w-4 h-4 text-[#00cfff] shrink-0 mt-0.5" />
              <span>
                "A união entre a compreensão da mente humana e a automação de processos inteligentes gera uma fluidez comercial insuperável."
              </span>
            </div>

            {/* Quick Badges */}
            <div className="w-full max-w-xs sm:max-w-sm space-y-2 text-left">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-gray-50 border border-gray-100 text-xs font-semibold text-[#0a1e29]">
                <Award className="w-4 h-4 text-[#00e6a8] shrink-0" />
                <span>+20 anos de gestão estratégica</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-gray-50 border border-gray-100 text-xs font-semibold text-[#0a1e29]">
                <BookOpen className="w-4 h-4 text-[#00cfff] shrink-0" />
                <span>Autora Best-seller na Amazon</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-gray-50 border border-gray-100 text-xs font-semibold text-[#0a1e29]">
                <Brain className="w-4 h-4 text-[#00e6a8] shrink-0" />
                <span>Psicanálise aplicada a negócios</span>
              </div>
            </div>
          </div>

          {/* Right Column: Exact Story & Narrative provided by user with refined ~10pt font size */}
          <div className="lg:col-span-8 space-y-4 text-gray-700 leading-relaxed font-normal text-[13.5px] sm:text-[14.5px]">
            <p>
              Há mais de 20 anos, transformo ideias em estruturas de sucesso. Minha trajetória é guiada por uma paixão incomum: decifrar o comportamento humano para criar soluções práticas, organizadas e altamente lucrativas.
            </p>

            <p>
              Minha jornada como empreendedora começou a se consolidar no mercado de turismo pedagógico e educação, onde atuo como diretora da Patitour. Coordenar viagens técnicas e pedagógicas de alta complexidade me lapidou na gestão de processos milimétricos, segurança e comunicação de alta responsabilidade com grandes instituições, professores e famílias.
            </p>

            <p>
              Essa visão de conectar pessoas e propósitos me levou a fundar o projeto Geração Literária — uma iniciativa que nasceu da paixão pela escrita, ganhou corpo e se estruturou como uma empresa sólida de fomento cultural. Essa veia literária e estratégica também me consagrou como autora best-seller na Amazon, traduzindo conceitos complexos de negócios e comportamento em caminhos simples para o leitor.
            </p>

            {/* Subheading: A intersecção entre a Psique e os Negócios (Centered) */}
            <div className="pt-3 pb-1 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#0a1e29] text-white text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#00cfff]" />
                <span>Comportamento & Estratégia</span>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#0a1e29] font-poppins tracking-tight text-center">
                A intersecção entre a Psique e os Negócios
              </h3>
            </div>

            <p>
              Acredito que nenhuma estratégia de vendas ou tecnologia prospera sem uma comunicação profundamente humana. Por isso, busquei na Psicanálise o embasamento científico para compreender o consumo, as relações e as dores reais por trás da rotina de um negócio.
            </p>

            <p>
              Hoje, utilizo essa bagagem de duas décadas para desenhar estratégias de vendas, estruturar processos organizacionais e desenvolver ecossistemas inteligentes (através da Easy Byz) que devolvem tempo e faturamento para pequenos e médios empresários.
            </p>

            <p className="font-medium text-[#0a1e29] bg-[#FAFAFA] p-4 rounded-2xl border-l-4 border-[#00cfff] text-[13.5px] sm:text-[14.5px]">
              Não entrego apenas sistemas; entrego clareza comercial, design estratégico e processos desenhados sob medida para que empresas cresçam com padrão de excelência internacional e fluidez operacional.
            </p>

            {/* Subheading: Visão de Negócios & Psique (Centered) */}
            <div className="pt-3 pb-1 text-center">
              <h3 className="text-lg sm:text-xl font-extrabold text-[#0a1e29] font-poppins tracking-tight text-center">
                Visão de Negócios & Psique
              </h3>
            </div>

            <p className="text-[14px] sm:text-[15px] font-semibold text-gray-900 text-center">
              A união entre a compreensão da mente humana e a automação de processos inteligentes gera uma fluidez comercial insuperável no mercado de pequenas e médias empresas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
