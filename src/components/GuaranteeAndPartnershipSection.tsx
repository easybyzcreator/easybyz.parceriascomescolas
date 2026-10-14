import React, { useState } from 'react';
import { ArrowUpRight, ShieldCheck, DollarSign, Camera } from 'lucide-react';
import { ImageSlot } from '../types';

interface GuaranteeAndPartnershipSectionProps {
  dashboardSlot: ImageSlot;
  onOpenImageManager: (slotId: string) => void;
}

export const GuaranteeAndPartnershipSection: React.FC<GuaranteeAndPartnershipSectionProps> = ({
  dashboardSlot,
  onOpenImageManager,
}) => {
  const [students, setStudents] = useState(50);

  // Math: 10% of setup R$654 = R$65.40; 10% of monthly R$81 = R$8.10/month
  const setupCommission = students * 65.4;
  const monthlyCommission = students * 8.1;
  const annualTotal = setupCommission + monthlyCommission * 12;

  return (
    <section className="py-16 lg:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Signature Purple Seal with Stars matching Screenshot 6 */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full seal-crili p-3 flex flex-col items-center justify-center text-white text-center shadow-2xl">
              <div className="flex items-center gap-1 text-amber-300 text-sm mb-1">
                {'★★★★★'}
              </div>
              <span className="text-6xl sm:text-7xl font-extrabold font-poppins tracking-tighter leading-none text-white drop-shadow-md">
                10%
              </span>
              <span className="text-sm font-extrabold tracking-wider uppercase mt-1 text-[#82C91E]">
                Comissão Recorrente
              </span>
              <span className="text-[10px] text-white/80 max-w-[150px] mt-1 font-medium">
                Na adesão e em todas as mensalidades mês a mês
              </span>
            </div>
          </div>

          {/* Right Column: Purple Heading + Partnership Explanation matching Screenshot 6 */}
          <div className="lg:col-span-7 space-y-5">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#6D28D9] tracking-tight font-poppins leading-tight">
              Como Funciona a Parceria para a Escola? (Modelo de Negócio Lucrativo)
            </h2>

            <p className="text-base text-gray-800 leading-relaxed font-normal">
              Esta é a oportunidade da sua instituição criar uma <strong>nova fonte de receita recorrente e de alta alavancagem</strong>, agregando valor gigante aos seus cursos sem precisar investir um único centavo em equipe de tecnologia.
            </p>

            <ul className="space-y-2.5 text-sm text-gray-800">
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#82C91E]">✓</span>
                <span>
                  <strong>A Sua Escola Vende:</strong> O app é oferecido aos seus alunos como um produto oficial da sua escola de gastronomia/confeitaria.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#82C91E]">✓</span>
                <span>
                  <strong>Desenvolvimento e Gestão por Conta da Easy Byz:</strong> Nós cuidamos de toda a infraestrutura, atualizações, suporte técnico e hospedagem.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#82C91E]">✓</span>
                <span>
                  <strong>Comissão Recorrente e Garantida (10%):</strong> 10% sobre a taxa de configuração inicial e 10% sobre todas as mensalidades pagas pelos alunos.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#82C91E]">✓</span>
                <span>
                  <strong>Painel Exclusivo de Acompanhamento para a Gestão:</strong> Acesso a um sistema próprio para acompanhar em tempo real todos os apps vendidos e repasses.
                </span>
              </li>
            </ul>

            {/* Signature Crili Purple + Green Arrow Button */}
            <div className="pt-2">
              <a
                href="#contato"
                className="btn-crili-purple group text-xs sm:text-sm uppercase tracking-wide inline-flex items-center"
              >
                <span className="py-4 px-6 sm:px-8 font-extrabold">
                  Quero Fechar a Parceria
                </span>
                <span className="arrow-box py-4">
                  <ArrowUpRight className="w-5 h-5 text-white stroke-[2.5] group-hover:scale-110 transition-transform" />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Commission Revenue Simulator for the School */}
        <div className="mt-14 p-6 sm:p-8 bg-[#FAFAFA] rounded-3xl border border-gray-200">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-bold text-[#82C91E] uppercase tracking-wider block">
              Simulador Financeiro para a Escola
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#6D28D9] font-poppins">
              Calcule quanto a sua escola vai faturar a cada turma formada:
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-6 space-y-3">
              <div className="flex justify-between items-center text-sm font-bold text-gray-900">
                <span>Alunos com Web App Ativo:</span>
                <span className="text-xl font-extrabold text-[#6D28D9]">{students} alunos</span>
              </div>
              <input
                type="range"
                min="10"
                max="200"
                step="5"
                value={students}
                onChange={(e) => setStudents(Number(e.target.value))}
                className="w-full accent-[#82C91E] cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 font-mono">
                <span>10 alunos</span>
                <span>100 alunos</span>
                <span>200 alunos</span>
              </div>
            </div>

            <div className="md:col-span-6 grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs">
                <span className="text-xs font-semibold text-gray-600 block">Comissão Mensal (10%)</span>
                <span className="text-2xl font-extrabold text-[#82C91E] font-poppins tabular-nums block">
                  R$ {monthlyCommission.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
                <span className="text-[10px] text-gray-500">Mês a mês recorrente</span>
              </div>

              <div className="bg-[#6D28D9] text-white p-4 rounded-xl shadow-xs">
                <span className="text-xs font-semibold text-white/80 block">Total Ano 1 (Taxa + Mensal)</span>
                <span className="text-2xl font-extrabold text-white font-poppins tabular-nums block">
                  R$ {annualTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
                <span className="text-[10px] text-white/80">Receita passiva da escola</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-gray-200 flex justify-between items-center text-xs text-gray-600">
            <span>Espaço 5 · Painel de Controle de Repasses da Escola</span>
            <button
              type="button"
              onClick={() => onOpenImageManager(dashboardSlot.id)}
              className="text-[#6D28D9] font-bold hover:underline cursor-pointer flex items-center gap-1"
            >
              <Camera className="w-3.5 h-3.5" />
              <span>Personalizar Imagem do Painel</span>
            </button>
          </div>
        </div>

        {/* Centered Fire Banner exactly matching Screenshot 6 */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#6D28D9] font-poppins uppercase tracking-tight flex items-center justify-center gap-2">
            <span>PREPARAMOS UMA CONDIÇÃO ESPECIAL</span>
            <span>🔥</span>
          </h3>
          <p className="text-base sm:text-lg text-gray-900 font-bold mt-1">
            para você começar a usar o Crili agora mesmo
          </p>
        </div>
      </div>
    </section>
  );
};
