import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Sparkles, PhoneCall } from 'lucide-react';
import { HeroShowcase } from './HeroShowcase';

interface HeroSectionProps {
  onExploreSolutions: () => void;
  onOpenConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreSolutions,
  onOpenConsultation
}) => {
  const benefits = [
    { title: 'Transformasi Digital', desc: 'Modernisasi proses operasional cepat & terukur' },
    { title: 'Dukungan Berkelanjutan', desc: 'Pendampingan tim teknis 24/7 di seluruh Indonesia' },
    { title: 'Pertumbuhan Bisnis', desc: 'Solusi terbukti meningkatkan efisiensi dan laba' },
    { title: 'Kemudahan Mengelola Layanan', desc: 'Satu portal terpusat untuk kelola seluruh produk' }
  ];

  return (
    <section className="relative overflow-hidden pt-8 pb-14 lg:pt-14 lg:pb-20 bg-gradient-to-b from-white via-slate-50/50 to-[#f4f7fb]">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700 text-xs font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Pusat Solusi Bisnis Digital Indonesia</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Temukan{' '}
              <span className="text-emerald-500 underline decoration-emerald-300 decoration-wavy decoration-2">
                Produk Digital
              </span>{' '}
              untuk Semua Kebutuhan Bisnis Anda
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
              Platform marketplace terpadu yang memadukan konektivitas internet super cepat,
              aplikasi SaaS cerdas, perangkat keamanan, dan pendampingan ahli untuk mendorong UMKM,
              sekolah, hingga korporasi naik kelas.
            </p>

            {/* 4 Benefits with Checkmark Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 fill-blue-600 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                      {benefit.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3.5">
              <button
                onClick={onExploreSolutions}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-bold shadow-lg shadow-blue-500/25 hover:shadow-xl transition-all group"
              >
                <span>Selengkapnya</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-700 border border-slate-300 text-sm font-bold shadow-sm hover:border-blue-400 transition-all"
              >
                <PhoneCall className="w-4 h-4 text-emerald-600" />
                <span>Saya Tertarik</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: HeroShowcase Collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-6"
          >
            <HeroShowcase onExploreClick={onExploreSolutions} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
