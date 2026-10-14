import React from 'react';
import { Images } from 'lucide-react';

interface CriliFooterProps {
  onOpenImageManager: () => void;
}

export const CriliFooter: React.FC<CriliFooterProps> = ({ onOpenImageManager }) => {
  return (
    <footer className="bg-[#1A1A1A] text-white py-14 border-t-4 border-[#82C91E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-gray-800">
          <div className="md:col-span-5 space-y-3">
            <span className="text-3xl font-extrabold text-[#82C91E] font-poppins lowercase block">
              crili <span className="text-white text-xs uppercase font-bold bg-[#6D28D9] px-2 py-0.5 rounded ml-1">Escolas</span>
            </span>
            <p className="text-xs sm:text-sm text-gray-400 max-w-sm leading-relaxed">
              O ecossistema digital para seus alunos venderem com tecnologia própria e a chancela oficial da sua instituição de confeitaria e gastronomia.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenImageManager}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-white/10 hover:bg-white/20 rounded-lg transition-colors cursor-pointer"
              >
                <Images className="w-3.5 h-3.5 text-[#82C91E]" />
                <span>Gerenciar Espaços de Imagem</span>
              </button>
            </div>
          </div>

          <div className="md:col-span-3 space-y-2 text-xs text-gray-300">
            <h5 className="font-extrabold text-white uppercase tracking-wider text-xs mb-3">
              Navegação
            </h5>
            <p><a href="#inicio" className="hover:text-[#82C91E] transition-colors">Início</a></p>
            <p><a href="#recursos" className="hover:text-[#82C91E] transition-colors">Recursos do Sistema</a></p>
            <p><a href="#diferencial" className="hover:text-[#82C91E] transition-colors">Chancela da Escola</a></p>
            <p><a href="#planos" className="hover:text-[#82C91E] transition-colors">Planos e Preços</a></p>
            <p><a href="#duvidas" className="hover:text-[#82C91E] transition-colors">Dúvidas Frequentes</a></p>
          </div>

          <div className="md:col-span-4 space-y-2 text-xs text-gray-400">
            <h5 className="font-extrabold text-white uppercase tracking-wider text-xs mb-3">
              Suporte & Tecnologia
            </h5>
            <p>Desenvolvido e operado sob medida por <strong>Easy Byz</strong>.</p>
            <p>Infraestrutura em nuvem de alta disponibilidade para confeitarias e ateliês.</p>
            <p className="pt-2 text-gray-500">São Paulo, Brasil · Todos os direitos reservados.</p>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-2">
          <p>© {new Date().getFullYear()} Crili Escolas · Easy Byz.</p>
          <p>Layout reconstruído com base na referência visual oficial.</p>
        </div>
      </div>
    </footer>
  );
};
