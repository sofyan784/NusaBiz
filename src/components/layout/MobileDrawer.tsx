import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronDown, ChevronRight, LogIn, UserPlus, Search, PhoneCall } from 'lucide-react';
import { ecosystemCategories } from '../../data/mockData';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAuth: (mode: 'login' | 'register') => void;
  onOpenConsultation: () => void;
  onSelectCategory: (id: string) => void;
  currentUser: string | null;
  onLogout: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  onOpenAuth,
  onOpenConsultation,
  onSelectCategory,
  currentUser,
  onLogout
}) => {
  const [openAccordion, setOpenAccordion] = useState<string | null>('solusi');

  const toggleAccordion = (key: string) => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Drawer Body */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 280 }}
            className="relative w-4/5 max-w-sm bg-white h-full shadow-2xl flex flex-col z-10 overflow-y-auto"
          >
            {/* Drawer Header */}
            <div className="p-5 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white font-extrabold text-sm shadow-sm">
                  NB
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold text-lg text-slate-800 tracking-tight leading-tight">
                    Nusa<span className="text-blue-600">Biz</span>
                  </span>
                  <span className="text-[10px] text-emerald-600 font-semibold tracking-wide">
                    Solusi Bisnis Terintegrasi
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100"
                aria-label="Tutup menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* User Session Banner if logged in */}
            {currentUser ? (
              <div className="p-4 bg-blue-50/70 border-b border-blue-100 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500 font-medium">Masuk sebagai:</p>
                  <p className="text-sm font-bold text-blue-700">{currentUser}</p>
                </div>
                <button
                  onClick={() => {
                    onLogout();
                    onClose();
                  }}
                  className="text-xs text-rose-600 font-semibold hover:underline"
                >
                  Keluar
                </button>
              </div>
            ) : null}

            {/* Navigation Accordions */}
            <div className="flex-1 p-4 space-y-3">
              {/* Solusi Bisnis Section */}
              <div className="border border-slate-100 rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleAccordion('solusi')}
                  className="w-full p-3.5 bg-slate-50 flex items-center justify-between text-left font-bold text-sm text-slate-800"
                >
                  <span>Solusi Berdasarkan Sektor</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      openAccordion === 'solusi' ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>
                {openAccordion === 'solusi' && (
                  <div className="p-2 space-y-1 bg-white">
                    {ecosystemCategories.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => {
                          onSelectCategory(c.id);
                          onClose();
                        }}
                        className="w-full text-left px-3 py-2 text-xs font-semibold text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl flex items-center justify-between"
                      >
                        <span>{c.name}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Dukungan Bisnis Section */}
              <div className="border border-slate-100 rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleAccordion('dukungan')}
                  className="w-full p-3.5 bg-slate-50 flex items-center justify-between text-left font-bold text-sm text-slate-800"
                >
                  <span>Dukungan Bisnis</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      openAccordion === 'dukungan' ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>
                {openAccordion === 'dukungan' && (
                  <div className="p-2 space-y-1 bg-white text-xs">
                    <a
                      href="#training-section"
                      onClick={() => onClose()}
                      className="block px-3 py-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl font-medium"
                    >
                      Pelatihan & Webinar Bisnis
                    </a>
                    <a
                      href="#insight-section"
                      onClick={() => onClose()}
                      className="block px-3 py-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl font-medium"
                    >
                      Artikel & Panduan Digital
                    </a>
                    <a
                      href="#reasons-section"
                      onClick={() => onClose()}
                      className="block px-3 py-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl font-medium"
                    >
                      Kisah Sukses Klien
                    </a>
                  </div>
                )}
              </div>

              {/* Pusat Bantuan */}
              <div className="border border-slate-100 rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleAccordion('bantuan')}
                  className="w-full p-3.5 bg-slate-50 flex items-center justify-between text-left font-bold text-sm text-slate-800"
                >
                  <span>Pusat Bantuan</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      openAccordion === 'bantuan' ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>
                {openAccordion === 'bantuan' && (
                  <div className="p-2 space-y-1 bg-white text-xs">
                    <button
                      onClick={() => {
                        alert('Customer Care 24/7 kami siap di nomor 1500-888 atau WhatsApp 0811-2345-6789.');
                        onClose();
                      }}
                      className="w-full text-left px-3 py-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl font-medium"
                    >
                      Hubungi Customer Service
                    </button>
                    <button
                      onClick={() => {
                        alert('FAQ: Layanan pemasangan internet bisnis membutuhkan 2-3 hari kerja setelah survei lokasi.');
                        onClose();
                      }}
                      className="w-full text-left px-3 py-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl font-medium"
                    >
                      Pertanyaan Umum (FAQ)
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="p-4 border-t border-slate-100 space-y-2 bg-slate-50/50">
              <button
                onClick={() => {
                  onClose();
                  onOpenConsultation();
                }}
                className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Konsultasi Gratis</span>
              </button>

              {!currentUser ? (
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={() => {
                      onClose();
                      onOpenAuth('register');
                    }}
                    className="py-2.5 px-3 border border-slate-300 text-slate-700 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-slate-100 transition-colors"
                  >
                    <UserPlus className="w-3.5 h-3.5" />
                    <span>Daftar</span>
                  </button>
                  <button
                    onClick={() => {
                      onClose();
                      onOpenAuth('login');
                    }}
                    className="py-2.5 px-3 bg-blue-600 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-blue-700 transition-colors shadow-sm"
                  >
                    <LogIn className="w-3.5 h-3.5" />
                    <span>Masuk</span>
                  </button>
                </div>
              ) : null}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
