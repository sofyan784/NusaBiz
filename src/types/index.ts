export type BusinessSector = 
  | 'sekolah'
  | 'ruko'
  | 'multifinance'
  | 'energi'
  | 'hotel'
  | 'health'
  | 'ekspedisi'
  | 'agriculture';

export interface CategorySolution {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge?: string;
}

export interface EcosystemCategory {
  id: BusinessSector;
  name: string;
  shortLabel: string;
  image: string;
  description: string;
  targetAudience: string[];
  solutions: CategorySolution[];
}

export interface PricingPlan {
  id: string;
  name: string;
  category: string;
  priceMonthly: number;
  isPopular?: boolean;
  features: string[];
  tagline: string;
}

export interface TrainingItem {
  id: string;
  title: string;
  thumbnail: string;
  date: string;
  time: string;
  format: 'Pelatihan Online' | 'Pelatihan Offline';
  isFree: boolean;
  category: string;
  speaker?: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  thumbnail: string;
  publishTime: string;
  readTime: string;
  category: string;
  excerpt?: string;
  isFeatured?: boolean;
}

export interface PartnerLogo {
  name: string;
  sector: string;
}
