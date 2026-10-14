import React, { useState } from 'react';
import { AlertTriangle, ChevronDown, ChevronUp, MessageSquare, ArrowUpRight, Camera, CheckCircle2 } from 'lucide-react';
import { ImageSlot, PartnerFormState } from '../types';

interface CriliFaqAndContactSectionProps {
  studentShowcaseSlot: ImageSlot;
  onOpenImageManager: (slotId: string) => void;
}

export const CriliFaqAndContactSection: React.FC<CriliFaqAndContactSectionProps> = ({
  studentShowcaseSlot,
  onOpenImageManager,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [form, setForm] = useState<PartnerFormState>({
    schoolName: '',
    contactName: '',
    email: '',
    phone: '',
    cityState: '',
    studentsPerSemester: '30 a 60 alunos',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const faqs = [
    {
      q: 'O que é o CRILI / Web App e por que ele é indispensável para o aluno?',
      a: 'É a vitrine profissional moderna do aluno. Roda direto no navegador do celular ou computador do cliente final sem precisar baixar nada nas lojas. Possui domínio próprio, QR Code exclusivo e ícone na tela inicial. Elimina as taxas de 15% a 30% cobradas por marketplaces tradicionais.',
    },
    {
      q: 'De onde consigo acessar?',
      a: 'O sistema é 100% online na nuvem. Pode ser acessado de qualquer smartphone, tablet ou computador com conexão com a internet, sem ocupar espaço na memória.',
    },
    {
      q: 'Quais funcionalidades estão disponíveis atualmente?',
      a: 'Vitrine digital com custom builder de bolos (passo a passo), gestão de comandas e pedidos com status em tempo real (Novo, Em Produção, Pronto, Entregue), ficha técnica e precificação exata baseada em insumos, controle de sinais de 50% via Pix e relatórios de vendas.',
    },
    {
      q: 'Como funciona o repasse de 10% de comissão para a escola?',
      a: 'Sua escola recebe 10% sobre todas as taxas de configuração inicial (R$ 65,40 por aluno) e 10% sobre todas as mensalidades pagas (R$ 8,10/mês por aluno ativo). A gestão acompanha tudo em tempo real através do Painel Exclusivo de Gestão com repasses transparentes.',
    },
    {
      q: 'Quem cuida do desenvolvimento e do suporte técnico aos alunos?',
      a: 'Toda a infraestrutura, atualizações de segurança, hospedagem em nuvem e suporte técnico aos alunos ficam 100% por conta da equipe da Easy Byz. Sua instituição não precisa contratar programadores nem investir em suporte.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.schoolName || !form.contactName || !form.phone || !form.email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const whatsappMessage = encodeURIComponent(
    `Olá! Sou responsável pela escola "${form.schoolName || 'de Confeitaria/Gastronomia'}" e gostaria de agendar a demonstração oficial do CRILI / Web App para nossas turmas.`
  );
  const whatsappUrl = `https://wa.me/5511999999999?text=${whatsappMessage}`;

  return (
    <section id="duvidas" className="py-16 lg:py-24 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Warning Alert Banner exactly matching Screenshot 9 */}
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center gap-3 text-center max-w-3xl mx-auto shadow-xs">
          <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0" />
          <p className="text-sm sm:text-base font-bold text-gray-900">
            Esse valor especial não estará disponível por muito tempo, aproveite!
          </p>
        </div>

        {/* Purple Title matching Screenshot 9 */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#6D28D9] tracking-tight font-poppins">
            Não consegue encontrar a resposta que procura?
          </h2>
        </div>

        {/* Solid Purple Accordion Bars matching Screenshot 9 */}
        <div className="space-y-3 max-w-3xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={index} className="overflow-hidden rounded-xl shadow-xs">
                {/* Purple Accordion Bar */}
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full py-4 px-6 bg-[#6D28D9] hover:bg-[#5B21B6] text-white flex items-center justify-between transition-colors text-left font-bold text-sm sm:text-base cursor-pointer"
                >
                  <span className="pr-4">{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 shrink-0 text-[#82C91E]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 shrink-0 text-white" />
                  )}
                </button>

                {/* Dropdown Body */}
                {isOpen && (
                  <div className="p-6 bg-gray-50 border-x border-b border-gray-200 text-sm text-gray-800 leading-relaxed font-normal animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Section: "Vamos Fechar Essa Parceria?" + Form */}
        <div id="contato" className="pt-12 border-t border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Heading and Motivation */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold text-[#82C91E] uppercase tracking-wider block">
                Próximos Passos
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#6D28D9] font-poppins leading-tight">
                Vamos Fechar Essa Parceria?
              </h3>
              <p className="text-base text-gray-700 leading-relaxed font-normal">
                Leve essa revolução digital para os seus cursos, aumente o índice de sucesso e profissionalização dos seus alunos e crie uma nova linha de receita recorrente para a sua instituição.
              </p>

              {/* WhatsApp direct card */}
              <div className="p-5 rounded-2xl bg-[#FAFAFA] border border-gray-200 space-y-3">
                <span className="text-xs font-bold text-gray-900 block">
                  Atendimento direto para diretores e coordenadores:
                </span>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-3 rounded-xl shadow transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Conversar pelo WhatsApp de Parcerias</span>
                </a>
              </div>

              {/* Slot 6: Caso de Sucesso da Escola */}
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-gray-800">
                    Espaço 6 · Aluna de Sucesso / Formanda
                  </span>
                  <button
                    type="button"
                    onClick={() => onOpenImageManager(studentShowcaseSlot.id)}
                    className="text-xs font-bold text-[#6D28D9] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Camera className="w-3.5 h-3.5 text-[#82C91E]" />
                    <span>Substituir</span>
                  </button>
                </div>
                {studentShowcaseSlot.currentUrl ? (
                  <img
                    src={studentShowcaseSlot.currentUrl}
                    alt={studentShowcaseSlot.name}
                    className="w-full h-44 object-cover rounded-xl"
                  />
                ) : (
                  <div className="w-full h-32 rounded-xl bg-purple-50 border border-purple-200 flex flex-col items-center justify-center text-center p-3 text-xs text-[#6D28D9]">
                    <span className="font-bold">Espaço reservado para foto de aluna formada</span>
                    <span className="text-[10px] text-gray-500 mt-1">Recomendado: 800x600 (4:3)</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Lead Form in Crili Aesthetic */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-purple-200 shadow-2xl">
                {submitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#82C91E] text-white mx-auto flex items-center justify-center shadow-lg">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-extrabold text-[#6D28D9] font-poppins">
                      Solicitação Enviada com Sucesso!
                    </h4>
                    <p className="text-sm text-gray-700 max-w-md mx-auto leading-relaxed">
                      Obrigado, <strong>{form.contactName}</strong>! Entraremos em contato com a <strong>{form.schoolName}</strong> nas próximas horas para apresentar a minuta da parceria e a demonstração completa do sistema.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 bg-[#82C91E] text-white font-bold text-xs rounded-xl shadow cursor-pointer uppercase"
                    >
                      Novo Cadastro
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="border-b border-gray-100 pb-3 mb-2">
                      <h4 className="text-xl font-extrabold text-[#6D28D9] font-poppins">
                        Agendar Demonstração VIP para Sua Instituição
                      </h4>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Preencha os campos para receber o plano de parceria e a projeção de receita.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="block text-xs font-bold text-gray-800">
                          Nome da Escola / Instituição *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.schoolName}
                          onChange={(e) => setForm({ ...form, schoolName: e.target.value })}
                          placeholder="Ex: Escola de Confeitaria Sabor & Arte"
                          className="w-full px-3.5 py-2.5 text-xs bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#82C91E]"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="block text-xs font-bold text-gray-800">
                          Nome do Diretor / Coordenador *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.contactName}
                          onChange={(e) => setForm({ ...form, contactName: e.target.value })}
                          placeholder="Ex: Chef Juliana Mendes"
                          className="w-full px-3.5 py-2.5 text-xs bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#82C91E]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="block text-xs font-bold text-gray-800">
                          WhatsApp com DDD *
                        </label>
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="Ex: (11) 99999-8888"
                          className="w-full px-3.5 py-2.5 text-xs bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#82C91E]"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="block text-xs font-bold text-gray-800">
                          E-mail Corporativo *
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="Ex: contato@escola.com.br"
                          className="w-full px-3.5 py-2.5 text-xs bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#82C91E]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="block text-xs font-bold text-gray-800">
                          Cidade / Estado
                        </label>
                        <input
                          type="text"
                          value={form.cityState}
                          onChange={(e) => setForm({ ...form, cityState: e.target.value })}
                          placeholder="Ex: Curitiba / PR"
                          className="w-full px-3.5 py-2.5 text-xs bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#82C91E]"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="block text-xs font-bold text-gray-800">
                          Alunos Formados por Semestre
                        </label>
                        <select
                          value={form.studentsPerSemester}
                          onChange={(e) => setForm({ ...form, studentsPerSemester: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#82C91E] cursor-pointer"
                        >
                          <option value="Até 25 alunos">Até 25 alunos</option>
                          <option value="26 a 60 alunos">26 a 60 alunos</option>
                          <option value="61 a 120 alunos">61 a 120 alunos</option>
                          <option value="Mais de 120 alunos">Mais de 120 alunos</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-gray-800">
                        Observações ou Cursos Ofertados (Opcional)
                      </label>
                      <textarea
                        rows={2}
                        value={form.notes}
                        onChange={(e) => setForm({ ...form, notes: e.target.value })}
                        placeholder="Cursos de confeitaria clássica, bolos decorados, panificação..."
                        className="w-full px-3.5 py-2.5 text-xs bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#82C91E]"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 px-6 bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-extrabold text-sm rounded-xl uppercase tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>{loading ? 'Enviando proposta...' : 'Quero Ser Escola Parceira'}</span>
                      <ArrowUpRight className="w-5 h-5 text-[#82C91E]" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
