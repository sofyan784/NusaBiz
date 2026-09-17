import React from 'react';
import { PhoneCall, ArrowRight, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onOpenConsultation: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-200/90 shadow-xl overflow-hidden text-center">
        {/* Subtle abstract geometric decorations & orbital paths */}
        <div className="absolute -top-16 -left-16 w-56 h-56 rounded-full border border-slate-200 pointer-events-none" />
        <div className="absolute top-1/2 -left-8 w-24 h-24 rounded-full border border-slate-100 pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full border border-slate-200 pointer-events-none" />
        <div className="absolute bottom-6 right-16 w-6 h-6 rounded-full bg-slate-300 pointer-events-none" />
        <div className="absolute top-8 left-1/4 w-3 h-3 rounded-full bg-blue-400/40 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-100">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Konsultasi & Penawaran Khusus</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tertarik Dengan Produk <span className="text-blue-600">NusaBiz</span>?
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg mx-auto">
            Kami siap sedia mendengarkan dan membantu Anda. Dapatkan rekomendasi paket terbaik yang disesuaikan dengan anggaran dan skala usaha Anda.
          </p>

          <div className="pt-3">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-extrabold text-sm shadow-lg shadow-blue-500/25 hover:shadow-xl transition-all"
            >
              <span>Saya Tertarik</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
