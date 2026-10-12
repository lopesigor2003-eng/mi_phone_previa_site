import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, Instagram, Send, CheckCircle2 } from 'lucide-react';
import { STORE_CONTACTS } from '../data/storeData';

export const StoresContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    storeUnit: 'santaMaria',
    subject: 'Comprar Celular',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);

      const selectedPhone =
        formData.storeUnit === 'santaMaria'
          ? STORE_CONTACTS.santaMaria.whatsappNumber
          : STORE_CONTACTS.cachoeiraDoSul.whatsappNumber;

      const formattedText = encodeURIComponent(
        `Olá Miphone! Me chamo *${formData.name}*.\nAssunto: *${formData.subject}*\nEmail: ${formData.email || 'Não informado'}\nMensagem: ${formData.message || 'Gostaria de atendimento rápido.'}`
      );

      window.open(`https://wa.me/${selectedPhone}?text=${formattedText}`, '_blank');
    }, 500);
  };

  return (
    <section
      id="lojas-contato"
      aria-labelledby="lojas-contato-titulo"
      className="py-24 bg-[#0c0e14] border-t border-zinc-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-orange-500 uppercase tracking-wider block mb-3">
            Onde Estamos & Como Falar Conosco
          </span>

          <h2
            id="lojas-contato-titulo"
            className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4"
          >
            Nossas Lojas e <span className="text-orange-500">Canais de Atendimento</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 font-normal max-w-2xl mx-auto">
            Visite nossa loja em Santa Maria ou converse diretamente com os consultores das unidades de Santa Maria e Cachoeira do Sul.
          </p>
        </div>

        {/* Units Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Loja Santa Maria */}
          <div className="rounded-3xl bg-zinc-900 border border-zinc-800 p-6 sm:p-8 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                      Miphone Santa Maria
                    </h3>
                    <span className="text-xs text-zinc-400">Centro de Santa Maria - RS</span>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-xs bg-zinc-800 text-zinc-300 font-semibold">
                  Matriz
                </span>
              </div>

              {/* Information list */}
              <div className="space-y-4 my-6 text-sm text-zinc-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Endereço:</span>
                    <span>R. Floriano Peixoto, 1000 - Centro, Santa Maria - RS, 97015-370</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Horários de Funcionamento:</span>
                    <span>Seg a Sáb: 09:00 - 12:00, 13:30 - 18:30</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">WhatsApp & Contato:</span>
                    <div className="flex flex-wrap items-center gap-3 mt-1">
                      <a
                        href={`https://wa.me/${STORE_CONTACTS.santaMaria.whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-orange-400 hover:text-orange-300 font-semibold transition-colors"
                        aria-label="Abrir WhatsApp da Miphone Santa Maria"
                      >
                        <MessageCircle className="w-4 h-4" />
                        055991785062
                      </a>
                      <span className="text-zinc-600">·</span>
                      <a
                        href={`tel:${STORE_CONTACTS.santaMaria.phoneRaw}`}
                        className="text-zinc-300 hover:text-white transition-colors"
                        aria-label="Ligar para Miphone Santa Maria"
                      >
                        (55) 99178-5062
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed for Santa Maria */}
            <div className="mt-6 pt-6 border-t border-zinc-800">
              <span className="text-xs font-semibold text-zinc-400 block mb-2 uppercase tracking-wider">
                Localização no Mapa
              </span>
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950">
                <iframe
                  src={STORE_CONTACTS.santaMaria.mapEmbedUrl}
                  title="Mapa de localização Miphone Santa Maria"
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href={STORE_CONTACTS.santaMaria.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-1"
                  aria-label="Como chegar na loja Santa Maria via Google Maps"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Traçar Rota no Google Maps</span>
                </a>

                <a
                  href={STORE_CONTACTS.santaMaria.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 transition-colors"
                  aria-label="Falar agora com o time de Santa Maria"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chamar Santa Maria</span>
                </a>
              </div>
            </div>
          </div>

          {/* Loja Cachoeira do Sul & Redes */}
          <div className="flex flex-col gap-8">
            {/* Cachoeira do Sul Card */}
            <div className="rounded-3xl bg-zinc-900 border border-zinc-800 p-6 sm:p-8 flex-1 flex flex-col justify-between shadow-lg">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                        Miphone Cachoeira do Sul
                      </h3>
                      <span className="text-xs text-zinc-400">Atendimento & Consultoria</span>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs bg-zinc-800 text-zinc-300 font-semibold">
                    Unidade Regional
                  </span>
                </div>

                <div className="space-y-4 my-6 text-sm text-zinc-300">
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white block">WhatsApp Dedicado Cachoeira do Sul:</span>
                      <div className="mt-1">
                        <a
                          href={`https://wa.me/${STORE_CONTACTS.cachoeiraDoSul.whatsappNumber}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-orange-400 hover:text-orange-300 font-bold text-base transition-colors"
                          aria-label="Abrir WhatsApp da Miphone Cachoeira do Sul"
                        >
                          <MessageCircle className="w-4 h-4" />
                          +55 51 98029-6924
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white block">Ligação Direta:</span>
                      <a
                        href={`tel:${STORE_CONTACTS.cachoeiraDoSul.phoneRaw}`}
                        className="text-zinc-300 hover:text-white transition-colors"
                        aria-label="Ligar para Miphone Cachoeira do Sul"
                      >
                        (51) 98029-6924
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800">
                <a
                  href={STORE_CONTACTS.cachoeiraDoSul.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white bg-orange-600 hover:bg-orange-500 transition-colors shadow-sm"
                  aria-label="Iniciar conversa com WhatsApp de Cachoeira do Sul"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chamar Cachoeira do Sul no WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Instagram Social Banner */}
            <div className="rounded-3xl bg-zinc-900 border border-zinc-800 p-6 sm:p-8 flex items-center justify-between gap-4 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-600 flex items-center justify-center text-white shrink-0 shadow-sm">
                  <Instagram className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-white">
                    Siga no Instagram
                  </h4>
                  <p className="text-xs text-zinc-400">
                    Novidades, vídeos de unboxings e reposição de estoque
                  </p>
                </div>
              </div>

              <a
                href={STORE_CONTACTS.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-zinc-800 hover:bg-zinc-700 transition-colors shrink-0 border border-zinc-700"
                aria-label="Abrir Instagram oficial @miphoners"
              >
                @miphoners
              </a>
            </div>
          </div>
        </div>

        {/* Formulário de Contato Limpo e Moderno */}
        <div className="max-w-3xl mx-auto rounded-3xl bg-zinc-900 border border-zinc-800 p-6 sm:p-10 shadow-xl">
          <div className="text-center mb-8">
            <h3 className="font-heading font-bold text-2xl text-white mb-2">
              Envie uma Mensagem Rápida
            </h3>
            <p className="text-sm text-zinc-400">
              Preencha os campos abaixo e entraremos em contato direto pelo WhatsApp ou e-mail.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 text-center">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
              <h4 className="font-heading font-bold text-lg text-white mb-1">
                Mensagem Preparada com Sucesso!
              </h4>
              <p className="text-sm text-zinc-300 mb-4">
                Redirecionamos você para o WhatsApp oficial para atendimento imediato. Se a janela não abriu automaticamente, clique no botão abaixo:
              </p>
              <a
                href={
                  formData.storeUnit === 'santaMaria'
                    ? STORE_CONTACTS.santaMaria.whatsappUrl
                    : STORE_CONTACTS.cachoeiraDoSul.whatsappUrl
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-orange-600 hover:bg-orange-500"
                aria-label="Continuar conversa no WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Continuar no WhatsApp</span>
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" aria-label="Formulário de contato">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                    Seu Nome *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ex: João Silva"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-white placeholder-zinc-500 text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                    Celular / WhatsApp *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Ex: (55) 99999-9999"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-white placeholder-zinc-500 text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                    E-mail
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seuemail@exemplo.com"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-white placeholder-zinc-500 text-sm outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-store" className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                    Unidade de Preferência
                  </label>
                  <select
                    id="contact-store"
                    value={formData.storeUnit}
                    onChange={(e) => setFormData({ ...formData, storeUnit: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-white text-sm outline-none transition-colors"
                  >
                    <option value="santaMaria">Miphone Santa Maria (Matriz)</option>
                    <option value="cachoeiraDoSul">Miphone Cachoeira do Sul</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                  Assunto / Interesse
                </label>
                <select
                  id="contact-subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-white text-sm outline-none transition-colors"
                >
                  <option value="Comprar iPhone ou Android">Comprar iPhone ou Android</option>
                  <option value="Assistência Técnica (Conserto de Celular)">Assistência Técnica (Conserto de Celular)</option>
                  <option value="Avaliação para Troca de Usado">Avaliação para Troca de Usado</option>
                  <option value="Encomenda Especial com Desconto">Encomenda Especial com Desconto</option>
                  <option value="Condições de Financiamento / Boleto">Condições de Financiamento / Boleto</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wider">
                  Mensagem Adicional
                </label>
                <textarea
                  id="contact-message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Conte um pouco do que você precisa..."
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-white placeholder-zinc-500 text-sm outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 rounded-xl text-sm font-semibold text-white bg-orange-600 hover:bg-orange-500 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
                aria-label="Enviar Mensagem para Miphone"
              >
                <Send className="w-4 h-4" />
                <span>{submitting ? 'Enviando...' : 'Enviar Mensagem'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
