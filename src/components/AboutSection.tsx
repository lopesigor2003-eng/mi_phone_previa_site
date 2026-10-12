import React from 'react';
import { MapPin, Smartphone, Wrench, ShieldCheck, RefreshCw, Award, Check } from 'lucide-react';
import { DIFFERENTIALS } from '../data/storeData';

export const AboutSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'map-pin':
        return <MapPin className="w-6 h-6 text-orange-500" />;
      case 'smartphone-wrench':
        return (
          <div className="relative">
            <Smartphone className="w-6 h-6 text-orange-500" />
            <Wrench className="w-3.5 h-3.5 text-zinc-300 absolute -bottom-1 -right-1" />
          </div>
        );
      case 'shield-check':
        return <ShieldCheck className="w-6 h-6 text-orange-500" />;
      case 'refresh-cw':
        return <RefreshCw className="w-6 h-6 text-orange-500" />;
      default:
        return <Award className="w-6 h-6 text-orange-500" />;
    }
  };

  return (
    <section
      id="sobre-nos"
      aria-labelledby="sobre-nos-titulo"
      className="py-24 bg-[#0c0e14] border-t border-zinc-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-orange-500 uppercase tracking-wider block mb-3">
            Nossa História e Credibilidade
          </span>

          <h2
            id="sobre-nos-titulo"
            className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-6"
          >
            Quem Somos: A <span className="text-orange-500">Miphone</span> Inovando no Mercado de Celulares
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed text-center">
            A Miphone é sua referência em tecnologia móvel nas regiões de Santa Maria e Cachoeira do Sul. Oferecemos uma vasta gama de celulares novos e seminovos, assistência técnica especializada e um atendimento que você confia. Com uma reputação de 4.9 estrelas e mais de 200 avaliações positivas, nossa missão é conectar você à tecnologia com o melhor custo-benefício e garantia exclusiva, sempre com um toque de inovação.
          </p>
        </div>

        {/* 4 Differential Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIFFERENTIALS.map((diff) => (
            <div
              key={diff.id}
              className="premium-card rounded-2xl p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                    {getIcon(diff.iconName)}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-300">
                    {diff.highlight}
                  </span>
                </div>

                <span className="text-xs text-orange-400 font-medium block mb-1">
                  {diff.subtitle}
                </span>

                <h3 className="font-heading font-bold text-lg text-white leading-snug mb-3">
                  {diff.title}
                </h3>

                <p className="text-sm text-zinc-300 leading-relaxed">
                  {diff.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
                <span className="flex items-center gap-1.5 font-medium">
                  <Check className="w-3.5 h-3.5 text-orange-500" /> Padrão Miphone
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-orange-500/15 flex items-center justify-center text-orange-500 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-white text-base sm:text-lg">
                Garantia e Procedência Inegociáveis
              </h4>
              <p className="text-sm text-zinc-400 mt-0.5">
                Cada aparelho passa por checklist minucioso com mais de 30 testes antes de ir para a vitrine.
              </p>
            </div>
          </div>

          <a
            href="#produtos"
            className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-orange-600 hover:bg-orange-500 transition-colors shrink-0"
            aria-label="Explorar estoque de celulares na Miphone"
          >
            Explorar Estoque
          </a>
        </div>
      </div>
    </section>
  );
};
