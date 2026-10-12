import React from 'react';
import { DollarSign, Package, CreditCard, FileText, ShieldCheck, Check } from 'lucide-react';
import { ADVANTAGES } from '../data/storeData';

export const ServicesAdvantagesSection: React.FC = () => {
  const getAdvantageIcon = (iconName: string) => {
    switch (iconName) {
      case 'dollar-sign':
        return <DollarSign className="w-5 h-5 text-orange-500" />;
      case 'package':
        return <Package className="w-5 h-5 text-orange-500" />;
      case 'credit-card':
        return <CreditCard className="w-5 h-5 text-orange-500" />;
      case 'file-text':
        return <FileText className="w-5 h-5 text-orange-500" />;
      case 'shield-check':
        return <ShieldCheck className="w-5 h-5 text-orange-500" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-orange-500" />;
    }
  };

  return (
    <section
      id="servicos"
      aria-labelledby="servicos-titulo"
      className="py-24 bg-[#090a0f] border-t border-zinc-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-orange-500 uppercase tracking-wider block mb-3">
            Facilidades de Pagamento & Pós-Venda
          </span>

          <h2
            id="servicos-titulo"
            className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4"
          >
            Nossos Diferenciais: <span className="text-orange-500">Qualidade e Condições</span> que Você Merece
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 font-normal max-w-2xl mx-auto">
            Facilidades de pagamento incomparáveis, atendimento sob demanda e o suporte técnico mais confiável de Santa Maria e Cachoeira do Sul.
          </p>
        </div>

        {/* 5 Core Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {ADVANTAGES.map((adv, idx) => (
            <div
              key={adv.id}
              className={`premium-card rounded-2xl p-6 flex flex-col justify-between ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                    {getAdvantageIcon(adv.iconName)}
                  </div>
                  <span className="text-xs font-medium px-2.5 py-1 rounded bg-zinc-800/80 text-zinc-300">
                    {adv.badge}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-white mb-2 leading-snug">
                  {adv.title}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  {adv.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
                <span className="flex items-center gap-1.5 font-medium">
                  <Check className="w-3.5 h-3.5 text-orange-500" /> Válido nas duas lojas
                </span>
                <span className="font-semibold text-zinc-400">0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
