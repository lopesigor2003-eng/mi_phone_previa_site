import React, { useState, useEffect } from 'react';
import { Menu, X, Smartphone, MessageCircle, MapPin } from 'lucide-react';
import { STORE_CONTACTS } from '../data/storeData';

interface HeaderProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre Nós', href: '#sobre-nos' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Produtos', href: '#produtos' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Lojas e Contato', href: '#lojas-contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090a0f]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3.5'
          : 'bg-[#090a0f]/80 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316]"
            aria-label="Miphone Santa Maria - Página inicial"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white shadow-md">
              <Smartphone className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                  Miphone
                </span>
                <span className="w-2 h-2 rounded-full bg-orange-500" />
              </div>
              <span className="text-[11px] font-medium text-zinc-400">
                Santa Maria & Cachoeira
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-2"
            aria-label="Navegação principal"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                aria-label={`Ir para a seção ${link.name}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={STORE_CONTACTS.santaMaria.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fale Conosco pelo WhatsApp Santa Maria"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-orange-600 hover:bg-orange-500 transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white text-transparent" />
              <span>Fale Conosco</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={STORE_CONTACTS.santaMaria.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fale Conosco pelo WhatsApp"
              className="p-2.5 rounded-lg bg-orange-500/10 text-orange-400 hover:bg-orange-500/20 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className="md:hidden border-b border-white/10 bg-[#0c0e14] px-5 py-6 space-y-4"
          role="dialog"
          aria-label="Menu móvel"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-zinc-200 hover:text-white hover:bg-white/5 transition-colors"
                aria-label={`Ir para a seção ${link.name}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-zinc-800 flex flex-col gap-2.5">
            <a
              href={STORE_CONTACTS.santaMaria.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white bg-orange-600 hover:bg-orange-500"
              aria-label="WhatsApp Santa Maria no menu móvel"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Santa Maria</span>
            </a>
            <a
              href={STORE_CONTACTS.cachoeiraDoSul.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium text-zinc-300 bg-zinc-900 border border-zinc-700"
              aria-label="WhatsApp Cachoeira do Sul no menu móvel"
            >
              <MapPin className="w-4 h-4 text-orange-400" />
              <span>WhatsApp Cachoeira do Sul</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
