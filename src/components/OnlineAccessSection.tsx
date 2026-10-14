import React from 'react';
import { ArrowUpRight, Globe, Smartphone, Tablet } from 'lucide-react';

export const OnlineAccessSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Purple Headline + PWA Cloud Explanation matching Screenshot 5 */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#6D28D9] tracking-tight font-poppins leading-tight">
              É só acessar a sua conta e usar o sistema
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-gray-800 leading-relaxed">
              <p>
                O sistema é <strong>totalmente online</strong>. Você e seus alunos podem acessar de qualquer lugar que tenha conexão com a internet. E mais...
              </p>

              <p className="font-bold text-gray-900">
                Você está livre para usar no computador, tablet ou celular.
              </p>

              <p>
                Com o Web App <strong>você não precisa instalar nada no seu computador ou celular</strong>. Não consome memória, abre em segundos e não depende de aprovação da Apple ou Google Store. Por isso, se precisar usar um aparelho diferente do que você usa no dia a dia, basta acessar a internet, entrar no site e todas as informações estarão disponíveis para você.
              </p>
            </div>

            {/* Signature Crili Purple + Green Arrow Button */}
            <div className="pt-3">
              <a
                href="#contato"
                className="btn-crili-purple group text-xs sm:text-sm uppercase tracking-wide inline-flex items-center"
              >
                <span className="py-4 px-6 sm:px-8 font-extrabold">
                  Quero Acessar o Sistema Agora
                </span>
                <span className="arrow-box py-4">
                  <ArrowUpRight className="w-5 h-5 text-white stroke-[2.5] group-hover:scale-110 transition-transform" />
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Tablet + Smartphone Mockups matching Screenshot 5 */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md flex items-center justify-center">
              {/* Tablet Mockup */}
              <div className="w-64 sm:w-72 bg-[#1A1A1A] rounded-[2.5rem] p-3 shadow-2xl border-4 border-gray-800">
                <div className="w-2.5 h-2.5 bg-gray-600 rounded-full mx-auto mb-2" />
                <div className="bg-[#82C91E] rounded-[2rem] p-5 text-center min-h-[220px] flex flex-col items-center justify-center text-white">
                  <span className="text-3xl font-extrabold font-poppins lowercase mb-3">
                    crili
                  </span>
                  <div className="w-full max-w-[150px] space-y-1.5">
                    <div className="h-5 bg-white/80 rounded" />
                    <div className="h-5 bg-white/80 rounded" />
                    <div className="h-6 bg-[#6D28D9] rounded flex items-center justify-center text-[10px] font-bold">
                      Acessar
                    </div>
                  </div>
                </div>
              </div>

              {/* Overlapping Mobile Phone Mockup */}
              <div className="absolute -bottom-4 -left-2 w-32 sm:w-36 bg-[#1A1A1A] rounded-[2rem] p-2 shadow-2xl border-2 border-gray-800 z-10">
                <div className="w-8 h-2 bg-black rounded-full mx-auto mb-1" />
                <div className="bg-[#82C91E] rounded-[1.5rem] p-3 text-center min-h-[170px] flex flex-col items-center justify-center text-white">
                  <span className="text-lg font-extrabold font-poppins lowercase mb-2">
                    crili
                  </span>
                  <div className="w-full space-y-1">
                    <div className="h-4 bg-white/80 rounded" />
                    <div className="h-4 bg-white/80 rounded" />
                    <div className="h-5 bg-[#6D28D9] rounded flex items-center justify-center text-[8px] font-bold">
                      Acessar
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
