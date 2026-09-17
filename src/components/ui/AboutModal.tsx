import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, Award, Users, Globe2, Sparkles, Building2 } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose, onOpenConsultation }) => {
  if (!isOpen) return null;

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
          {/* Header */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white relative">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-bold mb-2 backdrop-blur-md">
              <Building2 className="w-3.5 h-3.5" />
              <span>Profil Perusahaan</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Tentang Nusa<span className="text-emerald-400">Biz</span>
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 mt-1 max-w-lg">
              Solusi Digital untuk Setiap Kebutuhan Bisnis Indonesia
            </p>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 space-y-5 text-xs sm:text-sm text-slate-700 leading-relaxed max-h-[60vh] overflow-y-auto">
            <p>
              <strong>NusaBiz</strong> adalah marketplace solusi digital B2B dan B2G terdepan di Indonesia yang berdedikasi menjembatani kesenjangan adopsi teknologi bagi UMKM, sekolah, institusi kesehatan, perhotelan, hingga industri besar di seluruh pelosok nusantara.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-2">
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 text-center">
                <Globe2 className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <div className="text-xl font-black text-blue-900">500+</div>
                <div className="text-[11px] text-slate-500 font-semibold mt-0.5">Kota & Kabupaten Terjangkau</div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 text-center">
                <Award className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                <div className="text-xl font-black text-emerald-900">99.5%</div>
                <div className="text-[11px] text-slate-500 font-semibold mt-0.5">Garansi Service Level Uptime</div>
              </div>

              <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 text-center">
                <Users className="w-6 h-6 text-indigo-600 mx-auto mb-2" />
                <div className="text-xl font-black text-indigo-900">10.000+</div>
                <div className="text-[11px] text-slate-500 font-semibold mt-0.5">Pelaku Usaha Aktif</div>
              </div>
            </div>

            <div>
              <h4 className="font-extrabold text-slate-900 text-sm mb-1.5">Visi & Misi Kami</h4>
              <ul className="space-y-2 list-disc list-inside text-slate-600 text-xs">
                <li>Menghadirkan akses internet bisnis stabil dan terjangkau ke seluruh pelosok tanah air.</li>
                <li>Menyediakan ekosistem aplikasi software siap pakai yang memudahkan operasional sehari-hari.</li>
                <li>Mendampingi UMKM dan lembaga pendidikan melalui pelatihan digital gratis dan konsultasi berkelanjutan.</li>
              </ul>
            </div>
          </div>

          {/* Footer */}
          <div className="p-5 border-t border-slate-100 bg-slate-50 flex items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-200 rounded-xl transition-colors"
            >
              Tutup
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow transition-colors"
            >
              Mulai Konsultasi
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
