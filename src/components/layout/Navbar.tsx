import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Search, ChevronDown, Menu, X, UserCheck, Sparkles, Building, BookOpen, HelpCircle, ArrowUpRight } from 'lucide-react';
import debounce from 'lodash/debounce';
import { ecosystemCategories, pricingPlans, trainingItems, sideArticles, featuredArticle } from '../../data/mockData';
import { MobileDrawer } from './MobileDrawer';

interface NavbarProps {
  onOpenAuth: (mode: 'login' | 'register') => void;
  onOpenConsultation: (sector?: string) => void;
  onSelectCategory: (id: string) => void;
  currentUser: string | null;
  onLogout: () => void;
}

interface SearchResultItem {
  type: 'Solusi' | 'Paket' | 'Pelatihan' | 'Artikel';
  title: string;
  subtitle: string;
  category: string;
  actionId?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAuth,
  onOpenConsultation,
  onSelectCategory,
  currentUser,
  onLogout
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'solusi' | 'dukungan' | 'bantuan' | null>(null);

  // Search States
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResultItem[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [mobileSearchActive, setMobileSearchActive] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Sticky scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close search dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setShowSearchDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Debounced search logic using Lodash
  const performSearch = useMemo(
    () =>
      debounce((query: string) => {
        if (!query.trim()) {
          setSearchResults([]);
          setIsSearching(false);
          return;
        }

        const q = query.toLowerCase();
        const results: SearchResultItem[] = [];

        // Search in ecosystem solutions
        ecosystemCategories.forEach((cat) => {
          if (cat.name.toLowerCase().includes(q) || cat.description.toLowerCase().includes(q)) {
            results.push({
              type: 'Solusi',
              title: cat.name,
              subtitle: cat.description.slice(0, 75) + '...',
              category: cat.shortLabel,
              actionId: cat.id
            });
          }
          cat.solutions.forEach((sol) => {
            if (sol.title.toLowerCase().includes(q) || sol.description.toLowerCase().includes(q)) {
              results.push({
                type: 'Solusi',
                title: sol.title,
                subtitle: sol.description.slice(0, 70) + '...',
                category: cat.shortLabel,
                actionId: cat.id
              });
            }
          });
        });

        // Search in pricing plans
        pricingPlans.forEach((plan) => {
          if (plan.name.toLowerCase().includes(q) || plan.category.toLowerCase().includes(q)) {
            results.push({
              type: 'Paket',
              title: plan.name,
              subtitle: plan.tagline,
              category: plan.category
            });
          }
        });

        // Search in training items
        trainingItems.forEach((t) => {
          if (t.title.toLowerCase().includes(q) || t.category.toLowerCase().includes(q)) {
            results.push({
              type: 'Pelatihan',
              title: t.title,
              subtitle: `${t.date} • ${t.format}`,
              category: t.category
            });
          }
        });

        // Search in articles
        [featuredArticle, ...sideArticles].forEach((art) => {
          if (art.title.toLowerCase().includes(q) || art.category.toLowerCase().includes(q)) {
            results.push({
              type: 'Artikel',
              title: art.title,
              subtitle: art.publishTime,
              category: art.category
            });
          }
        });

        setSearchResults(results.slice(0, 6));
        setIsSearching(false);
      }, 250),
    []
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchQuery(val);
    if (val.trim()) {
      setIsSearching(true);
      setShowSearchDropdown(true);
      performSearch(val);
    } else {
      setSearchResults([]);
      setShowSearchDropdown(false);
    }
  };

  const handleResultClick = (item: SearchResultItem) => {
    setShowSearchDropdown(false);
    setSearchQuery('');
    setMobileSearchActive(false);

    if (item.actionId) {
      onSelectCategory(item.actionId);
      const el = document.getElementById('ekosistem-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (item.type === 'Paket') {
      const el = document.getElementById('pricing-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (item.type === 'Pelatihan') {
      const el = document.getElementById('training-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (item.type === 'Artikel') {
      const el = document.getElementById('insight-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5'
            : 'bg-white border-b border-slate-100 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 sm:gap-6">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2 shrink-0 group"
              aria-label="Halaman Beranda NusaBiz"
            >
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-600 flex items-center justify-center text-white font-black text-base shadow-sm group-hover:shadow transition-shadow">
                NB
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-slate-800 leading-none">
                  Nusa<span className="text-blue-600">Biz</span>
                </span>
                <span className="text-[10px] font-semibold text-emerald-600 tracking-wider">
                  SOLUSI DIGITAL
                </span>
              </div>
            </a>

            {/* Desktop Search Bar with Live Debounce dropdown */}
            <div ref={searchContainerRef} className="relative hidden md:block flex-1 max-w-md lg:max-w-lg">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() => {
                    if (searchQuery.trim() && searchResults.length > 0) setShowSearchDropdown(true);
                  }}
                  placeholder="Cari produk, artikel, event, dan video pembelajaran"
                  className="w-full pl-10 pr-9 py-2 rounded-full border border-slate-200 bg-slate-50/70 text-xs sm:text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all focus:bg-white"
                />
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSearchResults([]);
                      setShowSearchDropdown(false);
                    }}
                    className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600"
                    aria-label="Hapus pencarian"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Search dropdown results */}
              {showSearchDropdown && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-200 p-2 z-50 overflow-hidden">
                  {isSearching ? (
                    <div className="p-4 text-center text-xs text-slate-500">Mencari solusi...</div>
                  ) : searchResults.length > 0 ? (
                    <div className="divide-y divide-slate-100">
                      <div className="px-3 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Hasil Pencarian Solusi ({searchResults.length})
                      </div>
                      {searchResults.map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleResultClick(item)}
                          className="w-full text-left p-2.5 hover:bg-blue-50/70 rounded-xl transition-colors flex items-start justify-between gap-3 group"
                        >
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                                {item.title}
                              </span>
                              <span
                                className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                                  item.type === 'Solusi'
                                    ? 'bg-blue-100 text-blue-700'
                                    : item.type === 'Paket'
                                    ? 'bg-emerald-100 text-emerald-700'
                                    : item.type === 'Pelatihan'
                                    ? 'bg-purple-100 text-purple-700'
                                    : 'bg-amber-100 text-amber-700'
                                }`}
                              >
                                {item.type}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">{item.subtitle}</p>
                          </div>
                          <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 shrink-0 mt-0.5" />
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="p-4 text-center">
                      <p className="text-xs font-semibold text-slate-700">Tidak ada hasil ditemukan</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Coba kata kunci lain seperti &quot;Sekolah&quot;, &quot;CCTV&quot;, atau &quot;Internet&quot;
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Desktop Nav Dropdown Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {/* Solusi Bisnis Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('solusi')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 flex items-center gap-1 rounded-xl transition-colors">
                  <span>Solusi Bisnis</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      activeDropdown === 'solusi' ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                {activeDropdown === 'solusi' && (
                  <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50 animate-in fade-in-50 slide-in-from-top-1">
                    <div className="px-3 py-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5" />
                      <span>Sektor Bisnis Pilihan</span>
                    </div>
                    <div className="grid grid-cols-1 gap-1">
                      {ecosystemCategories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => {
                            setActiveDropdown(null);
                            onSelectCategory(cat.id);
                            const el = document.getElementById('ekosistem-section');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/60 transition-colors flex items-center justify-between"
                        >
                          <span>{cat.name}</span>
                          <span className="text-[10px] text-slate-400">{cat.shortLabel}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Dukungan Bisnis Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('dukungan')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 flex items-center gap-1 rounded-xl transition-colors">
                  <span>Dukungan Bisnis</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      activeDropdown === 'dukungan' ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                {activeDropdown === 'dukungan' && (
                  <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50 animate-in fade-in-50 slide-in-from-top-1">
                    <div className="px-3 py-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Pertumbuhan & Edukasi</span>
                    </div>
                    <a
                      href="#training-section"
                      onClick={() => setActiveDropdown(null)}
                      className="block px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/60"
                    >
                      Pelatihan Bisnis & Webinar
                    </a>
                    <a
                      href="#insight-section"
                      onClick={() => setActiveDropdown(null)}
                      className="block px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/60"
                    >
                      Artikel, Panduan & Insight
                    </a>
                    <a
                      href="#reasons-section"
                      onClick={() => setActiveDropdown(null)}
                      className="block px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/60"
                    >
                      Kisah Sukses Transformasi
                    </a>
                  </div>
                )}
              </div>

              {/* Pusat Bantuan Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('bantuan')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-blue-600 flex items-center gap-1 rounded-xl transition-colors">
                  <span>Pusat Bantuan</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      activeDropdown === 'bantuan' ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                {activeDropdown === 'bantuan' && (
                  <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50 animate-in fade-in-50 slide-in-from-top-1">
                    <div className="px-3 py-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5" />
                      <span>Layanan Pelanggan</span>
                    </div>
                    <button
                      onClick={() => {
                        setActiveDropdown(null);
                        onOpenConsultation();
                      }}
                      className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/60"
                    >
                      Hubungi Tim Penjualan
                    </button>
                    <button
                      onClick={() => {
                        setActiveDropdown(null);
                        alert('Customer Service Hotline 24 Jam: 1500-888');
                      }}
                      className="w-full text-left px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/60"
                    >
                      Live Chat & Helpdesk 24/7
                    </button>
                  </div>
                )}
              </div>
            </nav>

            {/* Right Buttons: Daftar & Masuk */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Mobile Search Toggle Icon */}
              <button
                onClick={() => setMobileSearchActive(!mobileSearchActive)}
                className="md:hidden p-2 text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-xl"
                aria-label="Cari di NusaBiz"
              >
                <Search className="w-5 h-5" />
              </button>

              {currentUser ? (
                <div className="flex items-center gap-2">
                  <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-bold text-blue-800">
                    <UserCheck className="w-3.5 h-3.5 text-blue-600" />
                    <span>{currentUser}</span>
                  </div>
                  <button
                    onClick={onLogout}
                    className="text-xs font-bold text-slate-500 hover:text-rose-600 px-2 py-1 rounded-lg"
                  >
                    Keluar
                  </button>
                </div>
              ) : (
                <>
                  <button
                    onClick={() => onOpenAuth('register')}
                    className="hidden sm:inline-flex px-4 py-2 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 hover:bg-blue-50/80 rounded-full transition-all"
                  >
                    Daftar
                  </button>
                  <button
                    onClick={() => onOpenAuth('login')}
                    className="px-4 sm:px-6 py-2 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-full shadow-sm hover:shadow transition-all"
                  >
                    Masuk
                  </button>
                </>
              )}

              {/* Hamburger Button on Mobile */}
              <button
                onClick={() => setMobileDrawerOpen(true)}
                className="lg:hidden p-2 text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-xl transition-colors ml-1"
                aria-label="Buka menu navigasi"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Mobile Search Input Row when toggled */}
          {mobileSearchActive && (
            <div className="mt-3 pt-3 border-t border-slate-100 md:hidden animate-in fade-in-50">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  autoFocus
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Cari produk, artikel, event..."
                  className="w-full pl-10 pr-9 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSearchResults([]);
                    }}
                    className="absolute right-3 top-2.5 text-slate-400"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Mobile search results preview */}
              {searchResults.length > 0 && (
                <div className="mt-2 bg-white rounded-xl shadow-lg border border-slate-200 p-2 space-y-1">
                  {searchResults.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleResultClick(item)}
                      className="w-full text-left p-2 hover:bg-blue-50 rounded-lg text-xs"
                    >
                      <div className="font-bold text-slate-800">{item.title}</div>
                      <div className="text-[10px] text-slate-500">{item.category}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer
        isOpen={mobileDrawerOpen}
        onClose={() => setMobileDrawerOpen(false)}
        onOpenAuth={onOpenAuth}
        onOpenConsultation={onOpenConsultation}
        onSelectCategory={onSelectCategory}
        currentUser={currentUser}
        onLogout={onLogout}
      />
    </>
  );
};
