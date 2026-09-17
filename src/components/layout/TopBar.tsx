import React from 'react';
import { Smartphone, Sparkles, ShoppingBag, Info } from 'lucide-react';

interface TopBarProps {
  onOpenMarketplace: () => void;
  onOpenAbout: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenMarketplace, onOpenAbout }) => {
  return (
    <div className="bg-[#f1f5f9] border-b border-slate-200/80 text-[12px] text-slate-600 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-8 flex items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="#download-app"
            onClick={(e) => {
              e.preventDefault();
              alert('Aplikasi NusaBiz Mobile kini tersedia di Google Play Store & Apple App Store.');
            }}
            className="inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors font-medium"
          >
            <Smartphone className="w-3.5 h-3.5 text-blue-600" />
            <span>Download App</span>
          </a>

          <div className="h-3.5 w-px bg-slate-300 hidden sm:block" />

          <button
            onClick={onOpenAbout}
            className="hover:text-blue-600 transition-colors font-medium hidden sm:inline-flex items-center gap-1"
          >
            <Info className="w-3.5 h-3.5 text-slate-400" />
            <span>Tentang NusaBiz</span>
          </button>

          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-semibold border border-blue-200/60">
            <Sparkles className="w-3 h-3 text-blue-600" />
            <span>Promo Bulan Ini: Diskon 70% Biaya Pasang Baru Internet Bisnis</span>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenMarketplace}
            className="inline-flex items-center gap-1.5 text-blue-600 font-bold hover:text-blue-700 transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Marketplace</span>
          </button>
        </div>
      </div>
    </div>
  );
};
