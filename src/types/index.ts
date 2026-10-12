export interface ProductVideoItem {
  id: string;
  driveId: string;
  driveUrl: string;
  videoSrc: string;
  posterSrc: string;
  title: string;
  model: string;
  condition: 'Seminovo Selecionado' | 'Novo Lacrado' | 'Oportunidade VIP';
  storage: string;
  price: string;
  installmentCard: string;
  installmentBoleto: string;
  batteryHealth?: string;
  warranty: string;
  features: string[];
  thumbnailGradient: string;
  badge?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  city: string;
  date: string;
  rating: number;
  text: string;
  avatarUrl: string;
  deviceBoughtOrRepaired: string;
  verifiedReview: boolean;
}

export interface DifferentialItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: 'map-pin' | 'smartphone-wrench' | 'shield-check' | 'refresh-cw';
  highlight: string;
}

export interface AdvantageItem {
  id: string;
  title: string;
  description: string;
  iconName: 'dollar-sign' | 'package' | 'credit-card' | 'file-text' | 'shield-check';
  badge: string;
}

export interface RepairServiceItem {
  name: string;
  timeEstimate: string;
  description: string;
  warranty: string;
}
