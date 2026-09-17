import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, ArrowRight, Sparkles, Tag, ShieldCheck } from 'lucide-react';

interface MarketplaceBannerProps {
  onOpenMarketplace: () => void;
}

export const MarketplaceBanner: React.FC<MarketplaceBannerProps> = ({ onOpenMarketplace }) => {
  return (
    <section className="py-10 lg:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-800 via-indigo-800 to-purple-900 text-white shadow-2xl p-6 sm:p-10 lg:p-14">
        {/* Abstract decorative geometric curves & circles */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full border border-white/10 pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-28 w-96 h-96 rounded-full border border-white/5 pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column Text & CTA */}
          <div className="lg:col-span-7 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-bold border border-white/20">
              <ShoppingBag className="w-3.5 h-3.5 text-blue-300" />
              <span>NusaBiz Marketplace</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-snug">
              Temukan Solusi Digital Pilihan <br className="hidden sm:inline" />
              untuk Bisnis Anda
            </h2>

            <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed max-w-xl">
              Optimalkan seluruh aspek bisnis Anda dengan ragam produk digital pilihan di Marketplace NusaBiz.
              Mulai dari software akuntansi, integrasi kasir, lisensi cloud, hingga layanan IT terkelola.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={onOpenMarketplace}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-blue-50 text-blue-900 text-xs sm:text-sm font-extrabold shadow-lg transition-all group"
              >
                <span>Buka Marketplace</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Professional Visual with Floating Labels */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Professional image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=700&q=80"
                  alt="Marketplace NusaBiz Specialist"
                  className="w-full h-64 sm:h-72 object-cover"
                />
              </div>

              {/* Floating Label 1: Berbagai Macam Produk Digital */}
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute -top-4 -left-4 sm:-left-6 bg-white/90 backdrop-blur-md text-slate-800 px-3.5 py-2 rounded-2xl shadow-xl border border-white/40 flex items-center gap-2 text-xs font-bold"
              >
                <div className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <span>Berbagai Macam Produk Digital</span>
              </motion.div>

              {/* Floating Label 2: Berbagai Macam Jasa untuk Bisnis */}
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="absolute -bottom-4 -right-2 sm:-right-4 bg-white/90 backdrop-blur-md text-slate-800 px-3.5 py-2 rounded-2xl shadow-xl border border-white/40 flex items-center gap-2 text-xs font-bold"
              >
                <div className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Tag className="w-3.5 h-3.5" />
                </div>
                <span>Jasa Terintegrasi Bisnis</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
