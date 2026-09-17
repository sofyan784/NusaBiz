import React from 'react';
import { motion } from 'motion/react';
import { Check, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { pricingPlans } from '../../data/mockData';
import { PricingPlan } from '../../types';

interface PricingSectionProps {
  onSelectPlan: (plan: PricingPlan) => void;
  onOpenConsultation: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onSelectPlan,
  onOpenConsultation
}) => {
  return (
    <section id="pricing-section" className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-16">
      {/* Header with leafy/spark icon & link */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200/80 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-2 border border-emerald-200/60">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Paket Bundling Hemat</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Penawaran Terbaik Penuhi{' '}
            <span className="text-blue-600">Kebutuhan Bisnis Anda</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Bundling Internet Super Cepat dan Produk Digital Terpilih dengan Skema Berlangganan Fleksibel
          </p>
        </div>

        <button
          onClick={onOpenConsultation}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 hover:underline shrink-0"
        >
          <span>Lihat Semua Paket Bundling</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* 4 Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pricingPlans.map((plan) => {
          const isPopular = plan.isPopular;
          const formattedPrice = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            maximumFractionDigits: 0
          }).format(plan.priceMonthly);

          return (
            <motion.div
              key={plan.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className={`relative rounded-3xl p-6 flex flex-col justify-between transition-all bg-white border ${
                isPopular
                  ? 'border-blue-500 shadow-xl shadow-blue-500/10 ring-2 ring-blue-500/20'
                  : 'border-slate-200/90 shadow-md hover:shadow-xl hover:border-slate-300'
              }`}
            >
              {/* Popular Pill Badge */}
              {isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-extrabold px-3 py-0.5 rounded-full shadow-md uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Terpopuler</span>
                </div>
              )}

              <div>
                {/* Category & Title */}
                <div className="mb-3">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    {plan.category}
                  </span>
                  <h3 className="text-base font-extrabold text-slate-800 leading-snug">
                    {plan.name}
                  </h3>
                </div>

                {/* Price Display */}
                <div className="my-4 pt-3 border-t border-slate-100">
                  <span className="text-[11px] text-slate-400 block font-medium">Mulai dari</span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      {formattedPrice}
                    </span>
                    <span className="text-[11px] text-slate-500 font-semibold">/Bulan</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2.5 pt-2 mb-6">
                  {(plan.features || []).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => onSelectPlan(plan)}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                    isPopular
                      ? 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white shadow-md'
                      : 'bg-slate-100 hover:bg-blue-50 text-slate-800 hover:text-blue-700'
                  }`}
                >
                  <span>Lihat Paket</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
