import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ArrowRight, ShieldCheck, Zap, HelpCircle } from 'lucide-react';
import { PricingPlan } from '../../types';

interface PackageDetailModalProps {
  plan: PricingPlan | null;
  onClose: () => void;
  onSelectPlan?: (plan: PricingPlan) => void;
  onOpenConsultation?: (planName: string) => void;
}

export const PackageDetailModal: React.FC<PackageDetailModalProps> = ({
  plan,
  onClose,
  onSelectPlan,
  onOpenConsultation
}) => {
  if (!plan) return null;

  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(plan.priceMonthly);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ duration: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-100 my-8"
        >
          {/* Header */}
          <div className="p-6 border-b border-slate-100 relative bg-gradient-to-br from-slate-50 to-blue-50/40">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-2 rounded-xl hover:bg-slate-100 transition-colors"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-blue-700 bg-blue-100 mb-2">
              <Zap className="w-3.5 h-3.5" />
              <span>{plan.category}</span>
            </div>
            <h3 className="text-xl font-extrabold text-slate-800 leading-snug">{plan.name}</h3>
            <p className="text-xs text-slate-500 mt-1">{plan.tagline}</p>

            <div className="mt-4 pt-3 border-t border-slate-200/70 flex items-baseline gap-1">
              <span className="text-xs text-slate-500">Mulai dari</span>
              <span className="text-2xl font-black text-blue-600 ml-1">{formattedPrice}</span>
              <span className="text-xs text-slate-500 font-medium">/ bulan</span>
            </div>
          </div>

          {/* Details list */}
          <div className="p-6 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Rincian Manfaat & Spesifikasi Layanan
            </h4>

            <div className="space-y-3">
              {(plan.features || []).map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className="text-xs text-slate-700 font-medium leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 text-xs text-blue-800 flex items-start gap-3">
              <HelpCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>
                Harga belum termasuk PPN 11%. Kontrak minimal berlangganan 12 bulan dengan jaminan pergantian perangkat cepat jika terjadi kendala teknis.
              </span>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-3 px-4 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors text-center"
              >
                Kembali
              </button>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  if (onSelectPlan) {
                    onSelectPlan(plan);
                  } else if (onOpenConsultation) {
                    onOpenConsultation(plan.name);
                  }
                }}
                className="flex-[2] py-3 px-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <span>Pilih Paket Ini</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
