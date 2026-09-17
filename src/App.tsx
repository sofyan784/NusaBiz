import React, { useState } from 'react';
import { TopBar } from './components/layout/TopBar';
import { Navbar } from './components/layout/Navbar';
import { MobileDrawer } from './components/layout/MobileDrawer';
import { Footer } from './components/layout/Footer';

import { HeroSection } from './components/sections/HeroSection';
import { EcosystemSection } from './components/sections/EcosystemSection';
import { MarketplaceBanner } from './components/sections/MarketplaceBanner';
import { PricingSection } from './components/sections/PricingSection';
import { ReasonsSection } from './components/sections/ReasonsSection';
import { TrainingSection } from './components/sections/TrainingSection';
import { InsightSection } from './components/sections/InsightSection';
import { FinalCTA } from './components/sections/FinalCTA';

import { AuthModal } from './components/ui/AuthModal';
import { ConsultationModal } from './components/ui/ConsultationModal';
import { PackageDetailModal } from './components/ui/PackageDetailModal';
import { TrainingModal } from './components/ui/TrainingModal';
import { ArticleModal } from './components/ui/ArticleModal';
import { MarketplaceModal } from './components/ui/MarketplaceModal';
import { AboutModal } from './components/ui/AboutModal';
import { ToastNotification } from './components/ui/ToastNotification';

import { BusinessSector, PricingPlan, TrainingItem, ArticleItem } from './types';
import { ecosystemCategories } from './data/mockData';

export default function App() {
  // Navigation & Category state
  const [selectedCategory, setSelectedCategory] = useState<BusinessSector>('sekolah');
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  // Modals state
  const [authModalState, setAuthModalState] = useState<{
    isOpen: boolean;
    initialMode: 'login' | 'register';
  }>({
    isOpen: false,
    initialMode: 'login'
  });

  const [consultationModalState, setConsultationModalState] = useState<{
    isOpen: boolean;
    initialSector?: string;
    productInterest?: string;
  }>({
    isOpen: false
  });

  const [selectedPlanForDetail, setSelectedPlanForDetail] = useState<PricingPlan | null>(null);
  const [selectedTraining, setSelectedTraining] = useState<TrainingItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [isMarketplaceOpen, setIsMarketplaceOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  // Toast state
  const [toast, setToast] = useState<{
    isOpen: boolean;
    message: string;
    type?: 'success' | 'info';
  }>({
    isOpen: false,
    message: ''
  });

  const showToast = (message: string, type: 'success' | 'info' = 'success') => {
    setToast({
      isOpen: true,
      message,
      type
    });
  };

  const handleOpenAuth = (mode: 'login' | 'register') => {
    setAuthModalState({ isOpen: true, initialMode: mode });
  };

  const handleOpenConsultation = (sector?: string, product?: string) => {
    setConsultationModalState({
      isOpen: true,
      initialSector: sector,
      productInterest: product
    });
  };

  const handleSelectPlan = (plan: PricingPlan) => {
    setSelectedPlanForDetail(plan);
  };

  const handleExploreSolutions = () => {
    const el = document.getElementById('ekosistem-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f7fb] text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white flex flex-col">
      {/* 1. Global Top Notification / Info Bar */}
      <TopBar
        onOpenMarketplace={() => setIsMarketplaceOpen(true)}
        onOpenAbout={() => setIsAboutOpen(true)}
      />

      {/* 2. Main Navigation Bar */}
      <Navbar
        onOpenAuth={handleOpenAuth}
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenMobileDrawer={() => setIsMobileDrawerOpen(true)}
        onSelectCategory={(id) => {
          setSelectedCategory(id);
          handleExploreSolutions();
        }}
      />

      {/* 3. Mobile Navigation Drawer */}
      <MobileDrawer
        isOpen={isMobileDrawerOpen}
        onClose={() => setIsMobileDrawerOpen(false)}
        onOpenAuth={handleOpenAuth}
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenMarketplace={() => setIsMarketplaceOpen(true)}
        onSelectCategory={(id) => {
          setSelectedCategory(id);
          handleExploreSolutions();
        }}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section with Left Content & Right Showcase Collage */}
        <HeroSection
          onExploreSolutions={handleExploreSolutions}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Ekosistem Digital NusaBiz with Solution Finder, Tabs, and Cards */}
        <EcosystemSection
          selectedCategory={selectedCategory}
          onSelectCategory={(catId) => setSelectedCategory(catId)}
          onOpenConsultation={(sector) => handleOpenConsultation(sector)}
        />

        {/* Marketplace Banner with gradient, floating badges, and CTA */}
        <MarketplaceBanner onOpenMarketplace={() => setIsMarketplaceOpen(true)} />

        {/* Penawaran Terbaik / Bundling Pricing Section (4 Cards) */}
        <PricingSection
          onSelectPlan={handleSelectPlan}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Mulai Digitalisasi Bisnis / Alasan Memilih Kami & Logo Cloud */}
        <ReasonsSection onOpenConsultation={() => handleOpenConsultation()} />

        {/* Pelatihan Bisnis & Webinar Series */}
        <TrainingSection
          onRegisterTraining={(item) => setSelectedTraining(item)}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Artikel & Insight / Tingkatkan Kompetensi */}
        <InsightSection
          onSelectArticle={(art) => setSelectedArticle(art)}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Final Call to Action Box */}
        <FinalCTA onOpenConsultation={() => handleOpenConsultation()} />
      </main>

      {/* Footer */}
      <Footer
        onSelectCategory={(id) => setSelectedCategory(id as BusinessSector)}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Modals Layer */}
      <AuthModal
        isOpen={authModalState.isOpen}
        initialMode={authModalState.initialMode}
        onClose={() => setAuthModalState({ ...authModalState, isOpen: false })}
        onSuccessToast={showToast}
      />

      <ConsultationModal
        isOpen={consultationModalState.isOpen}
        initialSector={consultationModalState.initialSector}
        productInterest={consultationModalState.productInterest}
        onClose={() => setConsultationModalState({ isOpen: false })}
        onSuccessToast={showToast}
      />

      <PackageDetailModal
        plan={selectedPlanForDetail}
        onClose={() => setSelectedPlanForDetail(null)}
        onOpenConsultation={(planName) => handleOpenConsultation(undefined, planName)}
      />

      <TrainingModal
        training={selectedTraining}
        onClose={() => setSelectedTraining(null)}
        onSuccessToast={showToast}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      <MarketplaceModal
        isOpen={isMarketplaceOpen}
        onClose={() => setIsMarketplaceOpen(false)}
        onSelectProduct={(name) => handleOpenConsultation(undefined, name)}
      />

      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Toast Notification */}
      <ToastNotification
        isOpen={toast.isOpen}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ ...toast, isOpen: false })}
      />
    </div>
  );
}
