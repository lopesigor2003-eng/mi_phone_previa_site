import React, { useState } from 'react';
import { MessageCircle, X, MapPin, ChevronRight } from 'lucide-react';
import { STORE_CONTACTS } from '../data/storeData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popover Card */}
      {isOpen && (
        <div
          className="mb-3 w-80 rounded-2xl bg-zinc-900 border border-zinc-700/80 p-4 shadow-2xl animate-fade-in"
          role="dialog"
          aria-label="Opções de contato WhatsApp"
        >
          <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="font-heading font-bold text-sm text-white">Atendimento Miphone</span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="Fechar popover do WhatsApp"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-zinc-300 my-3">
            Escolha com qual unidade você deseja falar agora:
          </p>

          <div className="space-y-2">
            <a
              href={STORE_CONTACTS.santaMaria.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 hover:border-orange-500/50 transition-all group"
              aria-label="Falar com Loja Santa Maria via WhatsApp"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white group-hover:text-orange-400">
                    Santa Maria (Matriz)
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    (55) 99178-5062
                  </div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-orange-400 transition-transform" />
            </a>

            <a
              href={STORE_CONTACTS.cachoeiraDoSul.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 hover:border-orange-500/50 transition-all group"
              aria-label="Falar com Loja Cachoeira do Sul via WhatsApp"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white group-hover:text-orange-400">
                    Cachoeira do Sul
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    (51) 98029-6924
                  </div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-orange-400 transition-transform" />
            </a>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl transition-transform active:scale-95 flex items-center justify-center"
        aria-label={isOpen ? 'Fechar opções de WhatsApp' : 'Abrir atendimento WhatsApp Miphone'}
      >
        <MessageCircle className="w-6 h-6 fill-white text-transparent" />
      </button>
    </div>
  );
};
