import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, BookOpen, Share2, ArrowRight } from 'lucide-react';
import { ArticleItem } from '../../types';

interface ArticleModalProps {
  article: ArticleItem | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onOpenConsultation
}) => {
  if (!article) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ duration: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-100 my-8"
        >
          {/* Header Image */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden">
            <img
              src={article.thumbnail}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full backdrop-blur-sm transition-colors"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-4 left-5 right-5 text-white">
              <span className="px-3 py-1 rounded-full bg-blue-600 text-[11px] font-bold inline-block mb-2">
                {article.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold leading-snug">
                {article.title}
              </h3>
              <div className="flex items-center gap-3 text-xs text-slate-300 mt-2">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{article.publishTime}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{article.readTime}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Article Full Body Content */}
          <div className="p-6 sm:p-8 space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed max-h-[50vh] overflow-y-auto">
            <p className="font-semibold text-slate-900">
              Dalam era digital saat ini, ketersediaan konektivitas yang stabil dan adaptif bukan lagi sekadar fasilitas penunjang, melainkan tulang punggung kelangsungan operasional usaha.
            </p>
            <p>
              Berdasarkan studi kami terhadap lebih dari 500 pelaku UMKM dan instansi perkantoran, kendala utama penurunan produktivitas kerja sering kali berakar pada pemilihan paket bandwidth yang tidak proporsional dengan jumlah pengguna aktif di jam sibuk.
            </p>
            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 text-blue-900 space-y-1">
              <div className="font-bold flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span>Rekomendasi Utama:</span>
              </div>
              <p className="text-xs">
                Gunakan rasio minimal 10 Mbps per karyawan jika pekerjaan banyak melibatkan video call HD harian, dan pilih penyedia internet dengan SLA Uptime minimal 99.5% serta IP Statis untuk server lokal.
              </p>
            </div>
            <p>
              Dengan mengadopsi platform monitoring jaringan seperti yang disediakan dalam bundling NusaBiz, admin IT atau pemilik usaha dapat memantau utilisasi data real-time, mendeteksi perangkat liar, serta mengoptimalkan anggaran bulanan tanpa kompromi performa.
            </p>
          </div>

          {/* Modal Footer */}
          <div className="p-5 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
            <button
              onClick={() => {
                alert('Tautan artikel disalin ke clipboard!');
              }}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600"
            >
              <Share2 className="w-4 h-4" />
              <span>Bagikan Artikel</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow transition-colors"
            >
              <span>Konsultasi Kebutuhan IT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
