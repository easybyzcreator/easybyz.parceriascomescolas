import React from 'react';
import { ExternalLink, Sparkles, ShieldCheck, Instagram } from 'lucide-react';
import easybyzLogo from '../assets/images/easybyz_logo_official.png';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a1e29] text-white py-12 lg:py-16 border-t-2 border-[#00cfff]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          {/* Easy Byz Logo & Official Creator Link */}
          <div className="md:col-span-5 space-y-4">
            {/* Easy Byz Creator Official Logo Badge */}
            <div className="inline-flex items-center gap-3 bg-[#102b3b] p-2.5 pr-6 rounded-2xl border border-[#00cfff]/30 shadow-md">
              <img
                src={easybyzLogo}
                alt="Easy Byz Creator Logo Oficial"
                className="w-10 h-10 object-contain drop-shadow-[0_0_8px_rgba(0,207,255,0.4)] shrink-0"
              />
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white font-poppins leading-none">
                  Easy <span className="text-[#00cfff]">Byz</span>
                </span>
                <span className="text-[10px] font-bold text-[#00e6a8] tracking-widest uppercase mt-0.5">
                  CREATOR
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 max-w-sm leading-relaxed">
              O ecossistema digital definitivo para alunos de gastronomia e confeitaria venderem com tecnologia própria e a chancela oficial da sua instituição de ensino.
            </p>

            {/* Direct Official Website & Instagram Links */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="https://www.easybyzcreator.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-[#00cfff]/20 text-xs font-bold text-[#00cfff] border border-[#00cfff]/40 transition-all hover:scale-105 group"
              >
                <span>www.easybyzcreator.com</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="https://www.instagram.com/apps.easybyzcreator/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#833ab4]/30 via-[#fd1d1d]/30 to-[#fcb045]/30 hover:from-[#833ab4]/50 hover:via-[#fd1d1d]/50 hover:to-[#fcb045]/50 text-xs font-bold text-white border border-pink-500/40 transition-all hover:scale-105 group shadow-sm"
                title="Siga a Easy Byz Creator no Instagram"
              >
                <Instagram className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
                <span>@apps.easybyzcreator</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-2.5 text-xs text-gray-300">
            <h4 className="font-extrabold text-[#00cfff] uppercase tracking-wider text-xs mb-3 font-poppins">
              Navegação
            </h4>
            <p><a href="#inicio" className="hover:text-[#00e6a8] transition-colors">Início</a></p>
            <p><a href="#webapp" className="hover:text-[#00e6a8] transition-colors">O Que é o Web App</a></p>
            <p><a href="#diferencial" className="hover:text-[#00e6a8] transition-colors">O Grande Diferencial</a></p>
            <p><a href="#ecossistema" className="hover:text-[#00e6a8] transition-colors">Ecossistema Completo</a></p>
            <p><a href="#fundadora" className="hover:text-[#00e6a8] transition-colors">A Fundadora</a></p>
            <p><a href="#parceria" className="hover:text-[#00e6a8] transition-colors">Modelo de Parceria</a></p>
            <p><a href="#investimento" className="hover:text-[#00e6a8] transition-colors">Investimento Acessível</a></p>
          </div>

          {/* Technology & Operation Credits */}
          <div className="md:col-span-4 space-y-3 text-xs text-gray-300">
            <h4 className="font-extrabold text-[#00cfff] uppercase tracking-wider text-xs mb-3 font-poppins">
              Tecnologia & Gestão
            </h4>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <ShieldCheck className="w-4 h-4 text-[#00e6a8]" />
                <span>Desenvolvimento e Gestão por Conta da Easy Byz</span>
              </div>
              <p className="text-gray-400 leading-relaxed text-[11px]">
                Nós cuidamos de toda a infraestrutura em nuvem, atualizações contínuas, suporte técnico integral e relatórios transparentes dos repasses de comissão para a gestão da sua escola.
              </p>
            </div>
            <p className="text-[11px] text-gray-400">
              Plataforma oficial:{' '}
              <a
                href="https://www.easybyzcreator.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00cfff] hover:underline font-semibold"
              >
                easybyzcreator.com
              </a>
            </p>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-3">
          <p>© {new Date().getFullYear()} Easy Byz Creator · Parcerias com Escolas de Gastronomia e Confeitaria.</p>
          <div className="flex items-center gap-4">
            <p className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#00e6a8]" />
              <span>Tecnologia própria com chancela oficial da sua escola.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
