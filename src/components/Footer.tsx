import React from 'react';
import { Smartphone, MessageCircle, Instagram, MapPin, ShieldCheck } from 'lucide-react';
import { STORE_CONTACTS } from '../data/storeData';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  return (
    <footer className="bg-[#07080c] border-t border-zinc-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <a
              href="#home"
              className="inline-flex items-center gap-2.5"
              aria-label="Miphone - Voltar para o início"
            >
              <div className="w-9 h-9 rounded-xl bg-orange-600 flex items-center justify-center text-white">
                <Smartphone className="w-5 h-5" />
              </div>
              <span className="font-heading font-extrabold text-xl text-white">
                Miphone
              </span>
            </a>

            <p className="text-xs text-zinc-400 leading-relaxed">
              Referência em tecnologia móvel, celulares seminovos e novos com 6 meses de garantia, e assistência técnica certificada em Santa Maria e Cachoeira do Sul.
            </p>

            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={STORE_CONTACTS.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-orange-500 hover:text-orange-400 text-zinc-300 flex items-center justify-center transition-colors"
                aria-label="Instagram da Miphone"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={STORE_CONTACTS.santaMaria.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-orange-500 hover:text-orange-400 text-zinc-300 flex items-center justify-center transition-colors"
                aria-label="WhatsApp da Miphone Santa Maria"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <a href="#home" className="hover:text-orange-400 transition-colors" aria-label="Ir para Home">
                  Home
                </a>
              </li>
              <li>
                <a href="#sobre-nos" className="hover:text-orange-400 transition-colors" aria-label="Ir para Sobre Nós">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-orange-400 transition-colors" aria-label="Ir para Serviços">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-orange-400 transition-colors" aria-label="Ir para Produtos">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-orange-400 transition-colors" aria-label="Ir para Depoimentos">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#lojas-contato" className="hover:text-orange-400 transition-colors" aria-label="Ir para Contato">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Institutional & Legal */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white mb-4">
              Institucional
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="hover:text-orange-400 transition-colors text-left"
                  aria-label="Ver Política de Privacidade"
                >
                  Política de Privacidade
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenTerms}
                  className="hover:text-orange-400 transition-colors text-left"
                  aria-label="Ver Termos de Uso"
                >
                  Termos de Uso
                </button>
              </li>
              <li className="pt-2 text-zinc-500 text-[11px] flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-orange-500" />
                Garantia de 6 Meses nos Seminovos
              </li>
            </ul>
          </div>

          {/* Col 4: Store Address */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white mb-4">
              Endereço Principal
            </h4>
            <div className="space-y-3 text-xs text-zinc-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>{STORE_CONTACTS.santaMaria.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-orange-500 shrink-0" />
                <span>WhatsApp SM: 055991785062</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-orange-500 shrink-0" />
                <span>WhatsApp Cachoeira: +55 51 98029-6924</span>
              </div>
              <div className="pt-1 text-[11px] text-zinc-500">
                Horário SM: Seg a Sáb: 09:00 - 12:00, 13:30 - 18:30
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Mandatory Copyright */}
        <div className="pt-8 border-t border-zinc-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 Miphone. Todos os direitos reservados.</p>
          <p>
            Miphone Santa Maria & Cachoeira do Sul · Transparência e Qualidade
          </p>
        </div>
      </div>
    </footer>
  );
};
