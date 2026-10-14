/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WebAppExplanation } from './components/WebAppExplanation';
import { TestimonialsSection } from './components/TestimonialsSection';
import { SchoolDifferential } from './components/SchoolDifferential';
import { EcosystemFeatures } from './components/EcosystemFeatures';
import { AboutPatiSection } from './components/AboutPatiSection';
import { PartnershipModel } from './components/PartnershipModel';
import { PricingSection } from './components/PricingSection';
import { ContactCtaSection } from './components/ContactCtaSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#0a1e29] font-sans selection:bg-[#00cfff] selection:text-[#0a1e29]">
      {/* 1. Header Oficial: #0a1e29 com links limpos (sem botões extras) */}
      <Header />

      <main>
        {/* 2. Topo da Página / Hero */}
        <Hero />

        {/* 3. O Que é um Web App de Vendas e Por Que Ele é Indispensável (com a imagem do PWA) */}
        <WebAppExplanation />

        {/* Depoimentos de alunas que já adquiriram o app (5 cards alinhados em linha) */}
        <TestimonialsSection />

        {/* 4. O Grande Diferencial: A Sua Escola no Comando da Inovação */}
        <SchoolDifferential />

        {/* 5. O Ecossistema Completo (com os 3 mockups de celular realistas com as imagens 1, 2 e 3) */}
        <EcosystemFeatures />

        {/* 6. Sobre a Pati que Desenvolveu o App (Fundadora da Easy Byz Creator) */}
        <AboutPatiSection />

        {/* 7. Como Funciona a Parceria para a Escola (Modelo de Negócio Lucrativo & Comissão 10%) */}
        <PartnershipModel />

        {/* 8. Investimento Acessível para os Alunos */}
        <PricingSection />

        {/* 9. Vamos Fechar Essa Parceria? (Formulário Oficial & WhatsApp) */}
        <ContactCtaSection />
      </main>

      {/* 10. Rodapé Profissional */}
      <Footer />
    </div>
  );
}
