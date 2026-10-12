import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Maximize2, MessageCircle, ShieldCheck, BatteryCharging, Check } from 'lucide-react';
import { PRODUCTS, STORE_CONTACTS } from '../data/storeData';
import { ProductVideoItem } from '../types';

interface ProductShowcaseSectionProps {
  onSelectProduct: (product: ProductVideoItem) => void;
}

interface ProductCardProps {
  product: ProductVideoItem;
  onSelect: (product: ProductVideoItem) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay policy fallback
        });
      }
    }
  }, []);

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const whatsappBuyUrl = `https://wa.me/${STORE_CONTACTS.santaMaria.whatsappNumber}?text=Ol%C3%A1!%20Gostei%20do%20${encodeURIComponent(product.model)}%20(${encodeURIComponent(product.price)})%20no%20site%20da%20Miphone%20e%20gostaria%20de%20fechar%20neg%C3%B3cio.`;

  return (
    <article
      className="premium-card rounded-3xl p-4 sm:p-5 flex flex-col justify-between overflow-hidden shadow-xl border border-zinc-800 hover:border-zinc-700 transition-all group"
      aria-label={`Aparelho ${product.title}`}
    >
      {/* Video Container in Original 9:16 Vertical Format */}
      <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden bg-black shadow-inner border border-zinc-800/80 mb-5">
        <video
          ref={videoRef}
          src={product.videoSrc}
          poster={product.posterSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onClick={togglePlayPause}
          className="w-full h-full object-cover cursor-pointer"
        >
          <source src={product.videoSrc} type="video/mp4" />
          <source src={`https://drive.usercontent.google.com/download?id=${product.driveId}&export=download`} type="video/mp4" />
          Seu navegador não suporta a tag de vídeo.
        </video>

        {/* Ambient Dark Gradients for Text Contrast */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/80 via-black/30 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

        {/* Top Badges: Condition and Audio Control */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-zinc-900/90 backdrop-blur-md text-white border border-white/10 shadow-sm">
            {product.badge || product.condition}
          </span>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={toggleSound}
              className="p-2 rounded-full bg-zinc-900/85 backdrop-blur-md text-white hover:bg-orange-600 transition-colors shadow-md border border-white/10"
              aria-label={isMuted ? 'Ativar som do vídeo' : 'Desativar som do vídeo'}
              title={isMuted ? 'Ativar som' : 'Desativar som'}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-zinc-300" /> : <Volume2 className="w-4 h-4 text-white" />}
            </button>

            <button
              type="button"
              onClick={() => onSelect(product)}
              className="p-2 rounded-full bg-zinc-900/85 backdrop-blur-md text-white hover:bg-orange-600 transition-colors shadow-md border border-white/10"
              aria-label={`Abrir vídeo de ${product.title} em tela cheia`}
              title="Expandir vídeo"
            >
              <Maximize2 className="w-4 h-4 text-zinc-300" />
            </button>
          </div>
        </div>

        {/* Bottom indicators inside video overlay */}
        <div className="absolute bottom-3 inset-x-3 flex items-center justify-between z-10 text-xs">
          <span className="px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-md text-zinc-200 font-medium">
            {product.storage}
          </span>
          {product.batteryHealth && (
            <span className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-md text-emerald-400 font-medium">
              <BatteryCharging className="w-3.5 h-3.5" />
              {product.batteryHealth}
            </span>
          )}
        </div>
      </div>

      {/* Card Content & Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          {/* H3 Title */}
          <h3 className="font-heading font-bold text-lg sm:text-xl text-white group-hover:text-orange-400 transition-colors leading-snug mb-1">
            {product.title}
          </h3>

          <p className="text-xs text-zinc-400 mb-3">
            {product.model}
          </p>

          {/* Key Features */}
          <ul className="space-y-1.5 my-3 text-xs text-zinc-300">
            {product.features.map((feat, i) => (
              <li key={i} className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <span className="truncate">{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing, Warranty & CTAs */}
        <div className="mt-4 pt-4 border-t border-zinc-800">
          <div className="flex items-baseline justify-between mb-1">
            <div>
              <span className="text-[10px] text-zinc-400 uppercase tracking-wider block font-semibold">
                À vista no Pix
              </span>
              <div className="font-heading font-extrabold text-2xl text-white">
                {product.price}
              </div>
            </div>

            <div className="text-right">
              <span className="text-xs text-orange-400 font-semibold block">
                {product.installmentCard}
              </span>
              <span className="text-[11px] text-zinc-400">
                {product.installmentBoleto}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-zinc-400 mt-1 mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-orange-500" />
            <span>{product.warranty}</span>
          </div>

          {/* Action CTAs */}
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => onSelect(product)}
              className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 transition-colors"
              aria-label={`Ver detalhes de ${product.title}`}
            >
              <Maximize2 className="w-3.5 h-3.5 text-orange-400" />
              <span>Ver Detalhes</span>
            </button>

            <a
              href={whatsappBuyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold text-white bg-orange-600 hover:bg-orange-500 transition-colors shadow-sm"
              aria-label={`Fale Conosco sobre ${product.title} no WhatsApp`}
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Fale Conosco</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export const ProductShowcaseSection: React.FC<ProductShowcaseSectionProps> = ({ onSelectProduct }) => {
  const [filter, setFilter] = useState<'all' | 'promax' | 'battery100' | 'under4k'>('all');

  const filteredProducts = PRODUCTS.filter((prod) => {
    if (filter === 'promax') return prod.model.includes('Pro');
    if (filter === 'battery100') return !!prod.batteryHealth?.includes('100%');
    if (filter === 'under4k') {
      const priceNum = parseFloat(prod.price.replace('R$', '').replace('.', '').replace(',', '.').trim());
      return priceNum < 4000;
    }
    return true;
  });

  return (
    <section
      id="produtos"
      aria-labelledby="produtos-titulo"
      className="py-24 bg-[#0c0e14] border-t border-zinc-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold text-orange-500 uppercase tracking-wider block mb-3">
            Vídeos Reais Gravados na Loja
          </span>

          <h2
            id="produtos-titulo"
            className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4"
          >
            Explore Nossos <span className="text-orange-500">Celulares em Destaque</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 font-normal max-w-2xl mx-auto">
            Aparelhos gravados ao vivo em nossa loja em formato vertical original, com transparência total sobre preços reais (à vista e em até 18x nos cartões), saúde de bateria e condição na caixa.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'Todos os Destaques' },
              { id: 'promax', label: 'Linha Pro & Pro Max' },
              { id: 'battery100', label: 'Bateria 100% / Novos' },
              { id: 'under4k', label: 'Até R$ 3.700' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  filter === tab.id
                    ? 'bg-orange-600 text-white shadow-sm'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700'
                }`}
                aria-label={`Filtrar por ${tab.label}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Video Cards Grid in Native 9:16 Vertical Format */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              onSelect={onSelectProduct}
            />
          ))}
        </div>

        {/* Custom Order Box */}
        <div className="mt-16 text-center p-8 rounded-3xl bg-zinc-900 border border-zinc-800 max-w-3xl mx-auto shadow-lg">
          <h3 className="font-heading font-bold text-lg sm:text-xl text-white mb-2">
            Não encontrou a cor ou capacidade que estava procurando?
          </h3>
          <p className="text-sm text-zinc-400 mb-6 max-w-xl mx-auto">
            Trabalhamos sob encomenda com descontos exclusivos. Solicite qualquer iPhone ou Android novo ou seminovo diretamente com nosso consultor em Santa Maria ou Cachoeira do Sul.
          </p>
          <a
            href={`${STORE_CONTACTS.santaMaria.whatsappUrl}&text=Ol%C3%A1!%20Gostaria%20de%20fazer%20uma%20encomenda%20personalizada%20de%20aparelho.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-orange-600 hover:bg-orange-500 transition-colors shadow-md"
            aria-label="Pedir aparelho sob encomenda no WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Fazer Encomenda com Desconto</span>
          </a>
        </div>
      </div>
    </section>
  );
};
