import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Video, ArrowRight, Sparkles, CheckCircle2, UserCheck } from 'lucide-react';
import { trainingItems } from '../../data/mockData';
import { TrainingItem } from '../../types';

interface TrainingSectionProps {
  onRegisterTraining: (item: TrainingItem) => void;
  onOpenConsultation: () => void;
}

export const TrainingSection: React.FC<TrainingSectionProps> = ({
  onRegisterTraining,
  onOpenConsultation
}) => {
  return (
    <section id="training-section" className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-16">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200/80">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Pelatihan Bisnis
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Tingkatkan keahlian digital tim Anda dengan webinar & workshop eksklusif bersama praktisi industri.
          </p>
        </div>

        <button
          onClick={onOpenConsultation}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 hover:underline shrink-0"
        >
          <span>Lihat Semua</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Cards: 3 on Desktop, horizontal scroll/grid on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trainingItems.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
          >
            <div>
              {/* Thumbnail Container */}
              <div className="relative h-44 sm:h-48 w-full overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

                {/* Badge Kategori */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-[11px] font-bold shadow-sm">
                    {item.category}
                  </span>
                </div>

                {/* Status Gratis/Berbayar */}
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/90 backdrop-blur-md text-white text-[10px] font-extrabold tracking-wide uppercase">
                    {item.isFree ? 'Gratis' : 'Berbayar'}
                  </span>
                </div>

                {/* Speaker info at bottom of image if available */}
                {item.speaker && (
                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-white text-xs font-semibold">
                    <UserCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="line-clamp-1">{item.speaker}</span>
                  </div>
                )}
              </div>

              {/* Body Content */}
              <div className="p-5">
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                  {item.title}
                </h3>

                {/* Meta details: Tanggal, Jam, Format */}
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{item.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Video className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span className="font-semibold text-slate-700">{item.format}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Register Button */}
            <div className="p-5 pt-0">
              <button
                onClick={() => onRegisterTraining(item)}
                className="w-full py-2.5 px-4 bg-slate-50 hover:bg-blue-600 text-slate-700 hover:text-white border border-slate-200 hover:border-blue-600 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-2xs"
              >
                <span>Daftar Pelatihan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
