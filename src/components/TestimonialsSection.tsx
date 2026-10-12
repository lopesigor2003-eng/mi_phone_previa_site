import React from 'react';
import { Star, ExternalLink, CheckCircle2, Quote } from 'lucide-react';
import { TESTIMONIALS, STORE_CONTACTS } from '../data/storeData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="depoimentos"
      aria-labelledby="depoimentos-titulo"
      className="py-24 bg-[#090a0f] border-t border-zinc-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-orange-500 uppercase tracking-wider block mb-3">
            Avaliações Reais de Clientes
          </span>

          <h2
            id="depoimentos-titulo"
            className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4"
          >
            O Que Nossos Clientes Dizem: <span className="text-orange-500">Mais de 200 Avaliações Positivas</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 font-normal max-w-2xl mx-auto">
            A nota média de 4.9 estrelas no Google Maps reflete nossa obsessão por transparência, atendimento de confiança e aparelhos impecáveis.
          </p>

          {/* Google Score Badge */}
          <div className="mt-6 inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-sm">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-left border-l border-zinc-800 pl-4">
              <span className="font-heading font-bold text-white text-lg">4.9 / 5.0</span>
              <span className="text-xs text-zinc-400 block font-medium">+200 avaliações no Google Maps</span>
            </div>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {TESTIMONIALS.map((test) => (
            <article
              key={test.id}
              className="premium-card rounded-2xl p-6 flex flex-col justify-between"
              aria-label={`Depoimento de ${test.name}`}
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-zinc-600" />
                </div>

                {/* Review Text */}
                <p className="text-sm text-zinc-300 leading-relaxed italic mb-6">
                  &ldquo;{test.text}&rdquo;
                </p>
              </div>

              {/* Author Info: Apenas nome da pessoa com a foto */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center gap-3">
                <img
                  src={test.avatarUrl}
                  alt={`Foto de ${test.name}`}
                  loading="lazy"
                  decoding="async"
                  className="w-10 h-10 rounded-full object-cover border border-zinc-700"
                />
                <div className="min-w-0 flex-1">
                  <h3 className="font-heading font-bold text-sm text-white truncate">
                    {test.name}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA to Google Maps */}
        <div className="text-center">
          <a
            href={STORE_CONTACTS.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl text-sm font-semibold text-zinc-200 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 transition-colors shadow-sm"
            aria-label="Ver mais avaliações reais na página oficial do Google Maps"
          >
            <span>Ver Mais Avaliações no Google Maps</span>
            <ExternalLink className="w-4 h-4 text-orange-500" />
          </a>
        </div>
      </div>
    </section>
  );
};
