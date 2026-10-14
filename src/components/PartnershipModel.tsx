import React from 'react';
import { Handshake, Cpu, TrendingUp, LayoutDashboard } from 'lucide-react';

export const PartnershipModel: React.FC = () => {
  return (
    <section id="parceria" className="py-16 lg:py-24 bg-[#FAFAFA] border-t border-gray-200 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading Centralized in the Middle of the Screen */}
        <div className="w-full max-w-4xl mx-auto text-center mb-14 flex flex-col items-center justify-center">
          <span className="text-xs font-extrabold text-[#00e6a8] bg-[#0a1e29] px-3.5 py-1 rounded-full uppercase tracking-wider inline-block mb-3">
            Modelo de Negócio Lucrativo
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a1e29] tracking-tight font-poppins leading-tight text-center mx-auto max-w-3xl">
            Como Funciona a Parceria para a Escola? (Modelo de Negócio Lucrativo)
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed font-normal text-center max-w-2xl mx-auto">
            Esta é a oportunidade da sua instituição criar uma nova fonte de receita recorrente e de alta alavancagem, agregando valor gigante aos seus cursos sem precisar investir em equipe de tecnologia.
          </p>
        </div>

        {/* 4 Pillars strictly from user brief */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: A Sua Escola Vende */}
          <div className="p-7 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-3 flex flex-col justify-between hover:border-[#00cfff]/40 transition-colors">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#0a1e29] text-[#00cfff] flex items-center justify-center font-bold">
                <Handshake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-[#0a1e29] font-poppins">
                A Sua Escola Vende
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                O app é oferecido aos seus alunos como um produto oficial da sua escola de gastronomia/confeitaria.
              </p>
            </div>
            <span className="text-[11px] font-bold text-gray-400 block pt-3 border-t border-gray-100">
              Produto oficial da sua marca
            </span>
          </div>

          {/* Card 2: Desenvolvimento e Gestão */}
          <div className="p-7 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-3 flex flex-col justify-between hover:border-[#00e6a8]/40 transition-colors">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#0a1e29] text-[#00e6a8] flex items-center justify-center font-bold">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-[#0a1e29] font-poppins">
                Gestão por Conta da Easy Byz
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                Nós cuidamos de toda a infraestrutura, atualizações, suporte técnico e hospedagem.
              </p>
            </div>
            <span className="text-[11px] font-bold text-gray-400 block pt-3 border-t border-gray-100">
              Zero dor de cabeça técnica
            </span>
          </div>

          {/* Card 3: Comissão Recorrente e Garantida (10%) with Bank Fee Note */}
          <div className="p-7 rounded-3xl bg-white border-2 border-[#00cfff] shadow-md space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#00cfff] text-[#0a1e29] flex items-center justify-center font-bold">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-[#0a1e29] font-poppins">
                Comissão Recorrente (10%)
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                10% de comissão sobre a taxa de configuração inicial e 10% sobre todas as mensalidades pagas pelos alunos. É receita recorrente pingando mês a mês para a sua escola!
              </p>
            </div>
            <div className="pt-3 border-t border-[#00cfff]/20 text-[11px] text-gray-600 font-medium">
              *Comissão de 10% paga sobre o lucro líquido recebido de cada parcela.
            </div>
          </div>

          {/* Card 4: Painel Exclusivo de Acompanhamento */}
          <div className="p-7 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-3 flex flex-col justify-between hover:border-[#00e6a8]/40 transition-colors">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#0a1e29] text-[#00e6a8] flex items-center justify-center font-bold">
                <LayoutDashboard className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-extrabold text-[#0a1e29] font-poppins">
                Painel para a Gestão
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                Sua escola recebe acesso a um sistema próprio para acompanhar em tempo real todos os aplicativos vendidos, contratos assinados, valores recebidos e relatórios transparentes dos repasses de comissão.
              </p>
            </div>
            <span className="text-[11px] font-bold text-gray-400 block pt-3 border-t border-gray-100">
              Transparência em tempo real
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
