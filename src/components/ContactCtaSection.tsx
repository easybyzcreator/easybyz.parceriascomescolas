import React from 'react';
import { MessageSquare, ArrowUpRight, Sparkles } from 'lucide-react';

export const ContactCtaSection: React.FC = () => {
  const whatsappMessage = encodeURIComponent(
    'Oi Pati! Estava navegando pela página de parcerias de escolas com os apps da Easy byz e tenho interesse em fechar uma parceria.'
  );
  const whatsappUrl = `https://wa.me/18038889018?text=${whatsappMessage}`;

  return (
    <section id="contato" className="py-20 lg:py-28 bg-[#0a1e29] text-white border-t border-[#00cfff]/20 relative overflow-hidden scroll-mt-24">
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00cfff]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#00e6a8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-xs font-bold text-[#00e6a8] uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#00cfff]" />
          <span>Próximo Passo Estratégico</span>
        </div>

        {/* Heading strictly from user brief */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-poppins leading-tight max-w-3xl mx-auto text-balance">
          Vamos Fechar Essa Parceria?
        </h2>

        {/* Text strictly as requested by user */}
        <p className="text-base sm:text-xl text-gray-300 leading-relaxed font-normal max-w-2xl mx-auto">
          Leve essa inovação digital para os seus cursos e sua escola, aumente o índice de sucesso e profissionalização dos seus alunos e crie uma nova linha de receita recorrente para a sua instituição.
        </p>

        {/* Direct Action Button to WhatsApp (Without form fields) */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-extrabold text-[#0a1e29] bg-gradient-to-r from-[#00cfff] to-[#00e6a8] hover:opacity-95 rounded-2xl shadow-xl transition-all hover:scale-105 uppercase tracking-wider cursor-pointer"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
            <span>Falar Diretamente pelo WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 stroke-[3]" />
          </a>
        </div>

        {/* Direct institutional contact information */}
        <div className="pt-6 border-t border-white/10 max-w-lg mx-auto text-xs text-gray-400">
          <p className="font-semibold text-gray-300">
            Easy Byz Creator · Parcerias com Mentores(as) e Escolas de Gastronomia e Confeitaria
          </p>
        </div>
      </div>
    </section>
  );
};
