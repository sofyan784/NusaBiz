import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Globe, 
  Sparkles, 
  Sliders, 
  Headphones, 
  ArrowRight, 
  Wifi, 
  ShieldCheck, 
  CheckCircle2,
  Building2
} from 'lucide-react';
import { partnerLogos } from '../../data/mockData';

interface ReasonsSectionProps {
  onOpenConsultation: () => void;
}

export const ReasonsSection: React.FC<ReasonsSectionProps> = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState(0);

  const reasons = [
    {
      id: 1,
      title: 'Jaringan Internet Luas Se-Indonesia',
      subtitle: 'Infrastruktur fiber optik dan satelit berkecepatan tinggi menjangkau lebih dari 500 kota dan kabupaten hingga pelosok nusantara.',
      icon: <Globe className="w-5 h-5 text-blue-600" />
    },
    {
      id: 2,
      title: 'Bundling Produk Digital Terbaik dan Termurah',
      subtitle: 'Kombinasi layanan internet dengan software aplikasi bisnis menghemat biaya operasional bulanan hingga 40% dibanding membeli terpisah.',
      icon: <Sparkles className="w-5 h-5 text-emerald-600" />
    },
    {
      id: 3,
      title: 'Kelola Layanan dan Tagihan dengan Mudah',
      subtitle: 'Satu portal aplikasi untuk memantau performa jaringan, melihat pemakaian data, download invoice, dan aktivasi fitur tambahan kapan saja.',
      icon: <Sliders className="w-5 h-5 text-indigo-600" />
    },
    {
      id: 4,
      title: 'Dukungan Berkelanjutan untuk Bisnis Anda',
      subtitle: 'Dedicated Account Manager dan Customer Care 24/7 siap mendampingi eskalasi teknis dengan garansi Service Level Agreement (SLA) terjamin.',
      icon: <Headphones className="w-5 h-5 text-purple-600" />
    }
  ];

  return (
    <section id="reasons-section" className="py-12 lg:py-16 bg-white border-y border-slate-200/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Visual with floating specs */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
                alt="Pengusaha Berkolaborasi Menggunakan NusaBiz"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Solusi Teruji di 10.000+ Pelaku Usaha</span>
                </div>
                <p className="text-xs text-slate-200">
                  Didukung teknisi bersertifikasi dan jaringan pusat data lokal berstandar internasional.
                </p>
              </div>
            </div>

            {/* Floating Top Badge */}
            <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-sm border border-slate-200 rounded-2xl p-3 shadow-lg flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                <Wifi className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800">Fiber Optic 100%</div>
                <div className="text-[10px] text-slate-500">Latency Rendah & Simetris</div>
              </div>
            </div>

            {/* Floating Bottom Badge */}
            <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-sm border border-slate-200 rounded-2xl p-3 shadow-lg flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800">Keamanan Enkripsi</div>
                <div className="text-[10px] text-slate-500">ISO 27001 Certified</div>
              </div>
            </div>
          </div>

          {/* Right Column: Title and 4 Structured Benefits */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold text-blue-600 tracking-wider uppercase block mb-1">
                Kenapa Memilih Kami
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Mulai <span className="text-blue-600">Digitalisasi Bisnis</span> dengan NusaBiz
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Kami memahami kebutuhan unik setiap sektor. NusaBiz menghadirkan ekosistem digital terintegrasi
                yang siap pakai, terjangkau, dan didukung purna jual profesional.
              </p>
            </div>

            {/* Structured Benefit Accordion / List */}
            <div className="space-y-3">
              {reasons.map((reason, idx) => {
                const isActive = activeTab === idx;
                return (
                  <div
                    key={reason.id}
                    onClick={() => setActiveTab(idx)}
                    className={`p-4 rounded-2xl cursor-pointer border transition-all ${
                      isActive
                        ? 'bg-blue-50/50 border-blue-300 shadow-sm'
                        : 'bg-slate-50/60 border-slate-200/80 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="p-2 rounded-xl bg-white shadow-2xs shrink-0">
                        {reason.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs sm:text-sm font-bold text-slate-800">
                            {reason.title}
                          </h4>
                          <span className="text-xs font-mono font-bold text-slate-400">
                            0{reason.id}
                          </span>
                        </div>
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="text-xs text-slate-600 mt-1.5 leading-relaxed"
                          >
                            {reason.subtitle}
                          </motion.p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Customer Logo Cloud */}
        <div className="mt-14 pt-8 border-t border-slate-100">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div className="text-center sm:text-left">
              <h3 className="text-sm sm:text-base font-extrabold text-slate-800">
                Dipercaya oleh Mereka yang Tumbuh Bersama NusaBiz
              </h3>
              <p className="text-xs text-slate-500">
                Lebih dari ribuan institusi pendidikan, ritel, perhotelan, dan kesehatan telah terhubung.
              </p>
            </div>
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-sm transition-all shrink-0"
            >
              <span>Lihat Kisah Sukses</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Neutral Client Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {partnerLogos.map((logo, idx) => (
              <div
                key={idx}
                className="bg-slate-50 hover:bg-slate-100 border border-slate-200/80 rounded-2xl p-3 flex flex-col items-center justify-center text-center transition-colors min-h-16 group"
              >
                <div className="flex items-center gap-1.5 mb-1 text-slate-400 group-hover:text-blue-600 transition-colors">
                  <Building2 className="w-3.5 h-3.5" />
                  <span className="text-xs font-bold text-slate-700 tracking-tight line-clamp-1">
                    {logo.name}
                  </span>
                </div>
                <span className="text-[9px] text-slate-400 uppercase tracking-wider font-semibold">
                  {logo.sector}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
