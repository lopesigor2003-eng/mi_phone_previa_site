import React from 'react';
import { Star, ShieldCheck, ArrowRight, Smartphone, CheckCircle2 } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      aria-label="Apresentação Miphone"
      className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#090a0f] via-[#0d0f17] to-[#090a0f]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines, Trust, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Store presence pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="font-medium">Lojas Físicas em Santa Maria & Cachoeira do Sul</span>
              <span className="text-zinc-600">·</span>
              <span className="text-orange-400 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> 6 Meses de Garantia
              </span>
            </div>

            {/* ONLY ONE <h1> ON THE ENTIRE PAGE */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white tracking-tight leading-[1.15] mb-6">
              Miphone: <span className="text-white">Tecnologia de Ponta</span>{' '}
              e <span className="text-orange-500">Confiança Inovadora</span> em Celulares
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed mb-8 max-w-2xl">
              Sua loja de celulares em Santa Maria e Cachoeira do Sul. Avaliado 4.9 estrelas por mais de 200 clientes satisfeitos.
            </p>

            {/* Real Google Rating Card */}
            <div className="w-full max-w-lg p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800 mb-8 flex flex-wrap items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex flex-col">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-zinc-400 mt-1 font-medium">Google Maps Reviews</span>
                </div>
                <div className="pl-3 border-l border-zinc-800">
                  <span className="font-heading font-bold text-2xl text-white">4.9</span>
                  <span className="text-xs text-zinc-400 font-medium"> / 5.0</span>
                </div>
              </div>

              <div className="flex flex-col sm:items-end">
                <span className="text-sm font-bold text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> +200 avaliações positivas
                </span>
                <span className="text-xs text-zinc-400">Excelência comprovada na região</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#produtos"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-base font-semibold text-white bg-orange-600 hover:bg-orange-500 transition-colors shadow-md group"
                aria-label="Ver Celulares na seção de produtos"
              >
                <Smartphone className="w-5 h-5" />
                <span>Ver Celulares</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-base font-semibold text-zinc-200 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 transition-colors"
                aria-label="Conhecer nossos diferenciais e facilidades de pagamento"
              >
                <span>Nossos Diferenciais</span>
              </a>
            </div>

            {/* Benefit Checkmarks */}
            <div className="mt-8 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-zinc-400 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-orange-500" /> Até 12x no cartão
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-orange-500" /> Até 24x no boleto
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-orange-500" /> Aceitamos seu usado na troca
              </span>
            </div>
          </div>

          {/* Right Column: Clean Premium Product Image */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-md lg:max-w-none rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl">
              <div className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] w-full overflow-hidden">
                <img
                  src="https://i.postimg.cc/KvfCqxj3/images-(1).jpg"
                  alt="Smartphones em destaque na Miphone"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Clean Bottom Overlay Card */}
              <div className="p-5 bg-zinc-950 border-t border-zinc-800 flex items-center justify-between">
                <div>
                  <h3 className="font-heading font-bold text-white text-base">
                    Seminovos Selecionados
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Mais de 30 testes e garantia de 6 meses
                  </p>
                </div>
                <a
                  href="#produtos"
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 transition-colors"
                  aria-label="Conferir estoque de celulares na Miphone"
                >
                  Conferir
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
