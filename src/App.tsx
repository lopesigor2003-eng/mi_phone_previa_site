import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesAdvantagesSection } from './components/ServicesAdvantagesSection';
import { ProductShowcaseSection } from './components/ProductShowcaseSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { StoresContactSection } from './components/StoresContactSection';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { LegalModal } from './components/LegalModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ProductVideoItem } from './types';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<ProductVideoItem | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <div className="min-h-screen bg-[#090a0f] text-white flex flex-col selection:bg-orange-600 selection:text-white">
      {/* Semantic Header */}
      <Header
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      {/* Semantic Main Content */}
      <main id="main-content" className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesAdvantagesSection />
        <ProductShowcaseSection onSelectProduct={setSelectedProduct} />
        <TestimonialsSection />
        <StoresContactSection />
      </main>

      {/* Semantic Footer */}
      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      {/* Floating Speed-Dial WhatsApp Widget */}
      <FloatingWhatsApp />

      {/* Video Fullscreen Player Modal */}
      <VideoModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      {/* Institutional Legal Modal (Privacy / Terms) */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
