import React, { useEffect, useRef } from 'react';
import { X, ExternalLink, MessageCircle, ShieldCheck, Check, BatteryCharging } from 'lucide-react';
import { ProductVideoItem } from '../types';
import { STORE_CONTACTS } from '../data/storeData';

interface VideoModalProps {
  product: ProductVideoItem | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ product, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      if (videoRef.current) {
        videoRef.current.play().catch(() => {});
      }
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const whatsappProductUrl = `https://wa.me/${STORE_CONTACTS.santaMaria.whatsappNumber}?text=Ol%C3%A1!%20Tenho%20interesse%20no%20${encodeURIComponent(product.model)}%20(${encodeURIComponent(product.price)})%20que%20vi%20no%20site%20da%20Miphone.`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label={`Vídeo demonstrativo de ${product.title}`}
    >
      <div className="relative w-full max-w-3xl bg-zinc-900 rounded-3xl border border-zinc-800 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-zinc-800 bg-zinc-950">
          <div>
            <h3 className="font-heading font-bold text-lg sm:text-xl text-white">
              {product.title}
            </h3>
            <p className="text-xs text-zinc-400 mt-0.5">
              {product.condition} · {product.storage} · {product.price}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            aria-label="Fechar player de vídeo"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content: Vertical Video + Details Side-by-Side on Desktop */}
        <div className="p-4 sm:p-6 overflow-y-auto flex flex-col md:flex-row gap-6 items-center md:items-start justify-center bg-zinc-950/70">
          {/* Native 9:16 Vertical Video Player */}
          <div className="w-full max-w-[280px] sm:max-w-[320px] aspect-[9/16] rounded-2xl overflow-hidden bg-black shadow-2xl border border-zinc-800 relative shrink-0">
            <video
              ref={videoRef}
              src={product.videoSrc}
              poster={product.posterSrc}
              autoPlay
              loop
              controls
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={product.videoSrc} type="video/mp4" />
              <source src={`https://drive.usercontent.google.com/download?id=${product.driveId}&export=download`} type="video/mp4" />
              Seu navegador não suporta a tag de vídeo.
            </video>
          </div>

          {/* Device Details & Financing Info */}
          <div className="flex-1 w-full flex flex-col justify-between self-stretch">
            <div className="space-y-4">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-400 border border-orange-500/20 mb-2">
                  {product.badge || product.condition}
                </span>
                <h4 className="font-heading font-bold text-xl sm:text-2xl text-white">
                  {product.model}
                </h4>
              </div>

              {/* Price Block */}
              <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800">
                <span className="text-[11px] text-zinc-400 uppercase tracking-wider block font-medium">
                  Preço à Vista no Pix
                </span>
                <div className="font-heading font-extrabold text-3xl text-white mt-0.5">
                  {product.price}
                </div>
                <div className="mt-2 pt-2 border-t border-zinc-800 flex flex-wrap items-center justify-between text-xs">
                  <span className="text-orange-400 font-semibold">{product.installmentCard}</span>
                  <span className="text-emerald-400 font-medium">{product.installmentBoleto}</span>
                </div>
              </div>

              {/* Specs */}
              <div className="space-y-2 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-orange-500 shrink-0" />
                  <span className="font-semibold text-white">{product.warranty}</span>
                </div>
                {product.batteryHealth && (
                  <div className="flex items-center gap-2">
                    <BatteryCharging className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Saúde da Bateria: <strong className="text-white">{product.batteryHealth}</strong></span>
                  </div>
                )}
              </div>

              {/* Checklist */}
              <div>
                <span className="text-xs font-semibold text-zinc-400 block mb-2 uppercase tracking-wider">
                  Destaques do Aparelho
                </span>
                <ul className="space-y-2 text-xs text-zinc-300">
                  {product.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-6 pt-5 border-t border-zinc-800 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={whatsappProductUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-semibold text-white bg-orange-600 hover:bg-orange-500 transition-colors shadow-md"
                aria-label={`Negociar ${product.title} pelo WhatsApp`}
              >
                <MessageCircle className="w-4 h-4" />
                <span>Negociar no WhatsApp</span>
              </a>

              <a
                href={product.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 border border-zinc-700 hover:border-zinc-500 transition-colors"
                aria-label="Abrir link original no Google Drive"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Google Drive</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
