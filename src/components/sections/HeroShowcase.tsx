import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Sparkles, Wifi, ShieldCheck, Layers, ArrowRight } from 'lucide-react';
import { heroSlideData } from '../../data/mockData';

interface HeroShowcaseProps {
  onExploreClick: () => void;
}

export const HeroShowcase: React.FC<HeroShowcaseProps> = ({ onExploreClick }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Auto slide rotation every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % heroSlideData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = heroSlideData[currentSlideIndex];

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? heroSlideData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % heroSlideData.length);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Background ambient glow */}
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main Collage Container */}
      <div className="relative bg-white/60 backdrop-blur-sm p-4 sm:p-5 rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden">
        {/* Top Floating Grid of Visual Tiles */}
        <div className="grid grid-cols-12 gap-3 mb-4">
          {/* Tile 1: 3D Sphere / Tech badge */}
          <div className="col-span-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-2.5 sm:p-3 text-white flex flex-col items-center justify-center shadow-md transform hover:scale-105 transition-transform">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-1">
              <Layers className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-center leading-tight">IoT & AI</span>
          </div>

          {/* Tile 2: Primary Professional Worker Photo */}
          <div className="col-span-6 relative rounded-2xl overflow-hidden shadow-md group">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
              alt="Professional Businesswoman"
              className="w-full h-28 sm:h-32 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex items-end p-2.5">
              <span className="text-[11px] font-bold text-white flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Kolaborasi Tim Aktif
              </span>
            </div>
          </div>

          {/* Tile 3: Cloud Solution Tile */}
          <div className="col-span-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-2.5 sm:p-3 text-white flex flex-col items-center justify-center shadow-md transform hover:scale-105 transition-transform">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-1">
              <Wifi className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold text-center leading-tight">Fiber Optik</span>
          </div>
        </div>

        {/* Middle Section: Side-by-side with secondary images and Active Showcase Card */}
        <div className="grid grid-cols-12 gap-3 items-stretch">
          {/* Left Avatar Thumbnail */}
          <div className="col-span-4 flex flex-col justify-between gap-2.5">
            <div className="rounded-2xl overflow-hidden shadow border border-slate-100 flex-1 min-h-[90px]">
              <img
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400&q=80"
                alt="Pengusaha Bahagia"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-slate-50 p-2.5 rounded-2xl border border-slate-200/70 text-center shrink-0">
              <span className="text-[11px] font-bold text-slate-700 block">Uptime 99.9%</span>
              <span className="text-[10px] text-slate-500">SLA Perusahaan</span>
            </div>
          </div>

          {/* Right Featured Active Card (Bundling Menarik Banner) */}
          <div className="col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.slideNumber}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-blue-100 shadow-lg relative overflow-hidden flex flex-col justify-between min-h-[180px] sm:min-h-[195px] h-full"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/70 rounded-bl-full pointer-events-none z-0" />

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] sm:text-xs font-bold mb-2 border border-blue-200/50">
                    <Sparkles className="w-3 h-3 text-blue-600 shrink-0" />
                    <span>{currentSlide.badge}</span>
                  </div>

                  <h4 className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug tracking-tight">
                    {currentSlide.title}
                  </h4>

                  <p className="text-xs sm:text-[13px] text-slate-600 mt-2 leading-relaxed">
                    {currentSlide.subtitle}
                  </p>
                </div>

                <div className="relative z-10 mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-100">
                    {currentSlide.highlight}
                  </span>
                  <button
                    type="button"
                    onClick={onExploreClick}
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 active:text-blue-800 flex items-center gap-1 group py-0.5 px-1.5 rounded transition-colors"
                  >
                    <span>Cek Promo</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Carousel Controls: Slide Number, Progress Bar, and Arrow Buttons */}
        <div className="mt-5 pt-3 border-t border-slate-200/70 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-slate-700">
              {currentSlide.slideNumber}
            </span>
            <div className="w-24 sm:w-36 h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-blue-600 rounded-full"
                animate={{
                  width: `${((currentSlideIndex + 1) / heroSlideData.length) * 100}%`
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <span className="text-xs font-mono text-slate-400">
              0{heroSlideData.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="w-8 h-8 rounded-full border border-slate-300 hover:border-blue-600 hover:bg-blue-50 text-slate-600 hover:text-blue-600 flex items-center justify-center transition-colors shadow-sm"
              aria-label="Slide sebelumnya"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="w-8 h-8 rounded-full border border-slate-300 hover:border-blue-600 hover:bg-blue-50 text-slate-600 hover:text-blue-600 flex items-center justify-center transition-colors shadow-sm"
              aria-label="Slide selanjutnya"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
