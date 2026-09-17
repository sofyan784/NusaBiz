import React, { useState } from 'react';
import { 
  Facebook, 
  Youtube, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Smartphone, 
  ChevronDown, 
  ArrowUp, 
  ShieldCheck, 
  Headphones 
} from 'lucide-react';
import { ecosystemCategories } from '../../data/mockData';

interface FooterProps {
  onSelectCategory: (id: string) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onOpenConsultation }) => {
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const currentYear = new Date().getFullYear();

  const toggleMobileSection = (key: string) => {
    setOpenMobileSection(openMobileSection === key ? null : key);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 text-xs">
      {/* Top Footer Link Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Brand Info (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white font-extrabold text-sm shadow-sm">
                NB
              </div>
              <span className="text-xl font-extrabold text-slate-900 tracking-tight">
                Nusa<span className="text-blue-600">Biz</span>
              </span>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              Solusi digital untuk setiap kebutuhan bisnis. Mitra terpercaya dalam menghadirkan konektivitas andal, aplikasi bisnis pintar, dan pendampingan teknologi untuk percepatan ekonomi digital Indonesia.
            </p>

            <div className="pt-2 flex items-center gap-2.5 text-slate-500">
              <a
                href="#facebook"
                onClick={(e) => e.preventDefault()}
                aria-label="Facebook NusaBiz"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-blue-600 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#youtube"
                onClick={(e) => e.preventDefault()}
                aria-label="YouTube NusaBiz"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-red-50 hover:text-red-600 flex items-center justify-center transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#instagram"
                onClick={(e) => e.preventDefault()}
                aria-label="Instagram NusaBiz"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-pink-50 hover:text-pink-600 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#twitter"
                onClick={(e) => e.preventDefault()}
                aria-label="X Twitter NusaBiz"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 hover:text-slate-900 flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#linkedin"
                onClick={(e) => e.preventDefault()}
                aria-label="LinkedIn NusaBiz"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-blue-700 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Kolom Solusi Bisnis (3 cols on lg) */}
          <div className="lg:col-span-3">
            <div className="hidden md:block">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
                Solusi Bisnis
              </h4>
              <ul className="space-y-2.5">
                {ecosystemCategories.map((c) => (
                  <li key={c.id}>
                    <button
                      onClick={() => {
                        onSelectCategory(c.id);
                        const el = document.getElementById('ekosistem-section');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-slate-500 hover:text-blue-600 transition-colors text-left"
                    >
                      {c.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Accordion */}
            <div className="md:hidden border border-slate-200 rounded-2xl overflow-hidden mb-2">
              <button
                onClick={() => toggleMobileSection('solusi')}
                className="w-full p-3.5 bg-slate-50 flex items-center justify-between font-bold text-slate-800 text-left"
              >
                <span>Solusi Bisnis</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    openMobileSection === 'solusi' ? 'rotate-180 text-blue-600' : ''
                  }`}
                />
              </button>
              {openMobileSection === 'solusi' && (
                <div className="p-3 space-y-2 bg-white">
                  {ecosystemCategories.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => {
                        onSelectCategory(c.id);
                        const el = document.getElementById('ekosistem-section');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="block w-full text-left text-slate-600 hover:text-blue-600 py-1"
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Kolom Bantuan & Layanan (3 cols on lg) */}
          <div className="lg:col-span-2">
            <div className="hidden md:block">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
                Bantuan
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <button onClick={onOpenConsultation} className="text-slate-500 hover:text-blue-600 transition-colors">
                    Customer Service 24/7
                  </button>
                </li>
                <li>
                  <button onClick={onOpenConsultation} className="text-slate-500 hover:text-blue-600 transition-colors">
                    Chat NusaBiz Assistant
                  </button>
                </li>
                <li>
                  <button onClick={onOpenConsultation} className="text-slate-500 hover:text-blue-600 transition-colors">
                    Pusat Bantuan & FAQ
                  </button>
                </li>
                <li>
                  <a href="#training-section" className="text-slate-500 hover:text-blue-600 transition-colors">
                    Pelatihan Pengguna
                  </a>
                </li>
              </ul>

              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mt-6 mb-3">
                Lainnya
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <button onClick={() => alert('Syarat & Ketentuan berlaku untuk seluruh produk NusaBiz.')} className="text-slate-500 hover:text-blue-600 transition-colors">
                    Syarat dan Ketentuan
                  </button>
                </li>
                <li>
                  <button onClick={() => alert('Kebijakan Privasi menjamin kerahasiaan data pengguna.')} className="text-slate-500 hover:text-blue-600 transition-colors">
                    Kebijakan Privasi
                  </button>
                </li>
              </ul>
            </div>

            {/* Mobile Accordion */}
            <div className="md:hidden border border-slate-200 rounded-2xl overflow-hidden mb-2">
              <button
                onClick={() => toggleMobileSection('bantuan')}
                className="w-full p-3.5 bg-slate-50 flex items-center justify-between font-bold text-slate-800 text-left"
              >
                <span>Bantuan & Kebijakan</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    openMobileSection === 'bantuan' ? 'rotate-180 text-blue-600' : ''
                  }`}
                />
              </button>
              {openMobileSection === 'bantuan' && (
                <div className="p-3 space-y-2 bg-white">
                  <button onClick={onOpenConsultation} className="block w-full text-left text-slate-600 py-1">Customer Service 24/7</button>
                  <button onClick={onOpenConsultation} className="block w-full text-left text-slate-600 py-1">Chat NusaBiz</button>
                  <button onClick={() => alert('Kebijakan Privasi')} className="block w-full text-left text-slate-600 py-1">Kebijakan Privasi</button>
                  <button onClick={() => alert('Syarat dan Ketentuan')} className="block w-full text-left text-slate-600 py-1">Syarat dan Ketentuan</button>
                </div>
              )}
            </div>
          </div>

          {/* Unduh Aplikasi Mobile (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
              Unduh Aplikasi NusaBiz
            </h4>
            <p className="text-xs text-slate-500">
              Kelola akun, bayar tagihan, dan pantau keamanan usaha dalam satu genggaman.
            </p>

            <div className="space-y-2 pt-1">
              <a
                href="#google-play"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Membuka Google Play Store...');
                }}
                className="flex items-center gap-3 p-2.5 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/40 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">GET IT ON</div>
                  <div className="text-xs font-extrabold text-slate-800 leading-none group-hover:text-blue-600">Google Play</div>
                </div>
              </a>

              <a
                href="#app-store"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Membuka Apple App Store...');
                }}
                className="flex items-center gap-3 p-2.5 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/40 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center shrink-0">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">Download on the</div>
                  <div className="text-xs font-extrabold text-slate-800 leading-none group-hover:text-blue-600">App Store</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Row */}
      <div className="border-t border-slate-100 bg-slate-50/70 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            © {currentYear} PT Nusa Solusi Digital Indonesia Tbk. All right reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-white hover:bg-slate-100 text-slate-600 text-xs font-semibold shadow-2xs transition-colors"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
