import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  ArrowRight, 
  Search, 
  Monitor, 
  CreditCard, 
  School, 
  Wifi, 
  Store, 
  Video, 
  Volume2, 
  ShieldCheck, 
  Database, 
  FileText, 
  Cpu, 
  Activity, 
  Radio, 
  Truck, 
  Eye, 
  Tv, 
  Home, 
  Key, 
  FileSpreadsheet, 
  Users, 
  PackageCheck, 
  Boxes, 
  Navigation, 
  Fuel, 
  QrCode, 
  Droplets, 
  Waves, 
  CloudSun, 
  BadgeCheck 
} from 'lucide-react';
import { ecosystemCategories } from '../../data/mockData';
import { BusinessSector, CategorySolution } from '../../types';

interface EcosystemSectionProps {
  selectedCategory: BusinessSector;
  onSelectCategory: (id: BusinessSector) => void;
  onOpenConsultation: (sector: string) => void;
}

// Icon mapper for solution mini-cards
const renderSolutionIcon = (iconName: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    Monitor: <Monitor className="w-4 h-4 text-blue-600" />,
    CreditCard: <CreditCard className="w-4 h-4 text-emerald-600" />,
    School: <School className="w-4 h-4 text-indigo-600" />,
    Wifi: <Wifi className="w-4 h-4 text-cyan-600" />,
    Store: <Store className="w-4 h-4 text-amber-600" />,
    Video: <Video className="w-4 h-4 text-rose-600" />,
    Volume2: <Volume2 className="w-4 h-4 text-purple-600" />,
    ShieldCheck: <ShieldCheck className="w-4 h-4 text-emerald-600" />,
    Database: <Database className="w-4 h-4 text-blue-600" />,
    FileText: <FileText className="w-4 h-4 text-indigo-600" />,
    Cpu: <Cpu className="w-4 h-4 text-violet-600" />,
    Activity: <Activity className="w-4 h-4 text-red-600" />,
    Radio: <Radio className="w-4 h-4 text-sky-600" />,
    Truck: <Truck className="w-4 h-4 text-amber-600" />,
    Eye: <Eye className="w-4 h-4 text-emerald-600" />,
    Tv: <Tv className="w-4 h-4 text-blue-600" />,
    Home: <Home className="w-4 h-4 text-teal-600" />,
    Key: <Key className="w-4 h-4 text-amber-600" />,
    FileSpreadsheet: <FileSpreadsheet className="w-4 h-4 text-emerald-600" />,
    Users: <Users className="w-4 h-4 text-blue-600" />,
    PackageCheck: <PackageCheck className="w-4 h-4 text-indigo-600" />,
    Boxes: <Boxes className="w-4 h-4 text-orange-600" />,
    Navigation: <Navigation className="w-4 h-4 text-blue-600" />,
    Fuel: <Fuel className="w-4 h-4 text-rose-600" />,
    QrCode: <QrCode className="w-4 h-4 text-emerald-600" />,
    Droplets: <Droplets className="w-4 h-4 text-blue-600" />,
    Waves: <Waves className="w-4 h-4 text-cyan-600" />,
    CloudSun: <CloudSun className="w-4 h-4 text-amber-600" />,
    BadgeCheck: <BadgeCheck className="w-4 h-4 text-emerald-600" />
  };

  return iconMap[iconName] || <Wifi className="w-4 h-4 text-blue-600" />;
};

export const EcosystemSection: React.FC<EcosystemSectionProps> = ({
  selectedCategory,
  onSelectCategory,
  onOpenConsultation
}) => {
  const [filterSector, setFilterSector] = useState<BusinessSector>(selectedCategory);
  const [filterCategoryNeed, setFilterCategoryNeed] = useState('Semua Kategori Kebutuhan');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const activeCategory =
    ecosystemCategories.find((c) => c.id === selectedCategory) || ecosystemCategories[0];

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleFindSolution = (e: React.FormEvent) => {
    e.preventDefault();
    onSelectCategory(filterSector);
  };

  return (
    <section id="ekosistem-section" className="py-12 lg:py-16 bg-[#f4f7fb] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large White Container as in the Reference Image */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200/80 p-6 sm:p-8 lg:p-10">
          {/* Header & Solution Finder Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center pb-8 border-b border-slate-100">
            {/* Title & Description */}
            <div className="lg:col-span-6 space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Ekosistem Digital <span className="text-blue-600">NusaBiz</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg">
                Temukan banyak solusi digital yang dirancang khusus untuk memenuhi kebutuhan berbagai jenis bisnis Anda di setiap sektor.
              </p>
            </div>

            {/* Solution Finder Form (Right Box) */}
            <div className="lg:col-span-6 bg-slate-50/80 p-4 sm:p-5 rounded-2xl border border-slate-200/70">
              <div className="text-xs font-bold text-slate-700 mb-3 flex items-center gap-1.5">
                <Search className="w-3.5 h-3.5 text-blue-600" />
                <span>Cari solusi tepat untuk bisnis Anda</span>
              </div>

              <form onSubmit={handleFindSolution} className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                <div className="sm:col-span-6">
                  <label htmlFor="sector-select" className="sr-only">Pilih Sektor Bisnis</label>
                  <select
                    id="sector-select"
                    value={filterSector}
                    onChange={(e) => setFilterSector(e.target.value as BusinessSector)}
                    className="w-full px-3 py-2 text-xs font-medium bg-white rounded-xl border border-slate-200 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {ecosystemCategories.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-6">
                  <label htmlFor="need-select" className="sr-only">Pilih Kategori Kebutuhan</label>
                  <select
                    id="need-select"
                    value={filterCategoryNeed}
                    onChange={(e) => setFilterCategoryNeed(e.target.value)}
                    className="w-full px-3 py-2 text-xs font-medium bg-white rounded-xl border border-slate-200 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Semua Kategori Kebutuhan">Semua Kategori Kebutuhan</option>
                    <option value="Konektivitas Internet">Konektivitas Internet</option>
                    <option value="Aplikasi SaaS & Kasir">Aplikasi SaaS & Kasir</option>
                    <option value="Keamanan & CCTV">Keamanan & CCTV</option>
                    <option value="IoT & Otomasi">IoT & Otomasi</option>
                  </select>
                </div>

                <div className="sm:col-span-12">
                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all"
                  >
                    <span>Temukan Solusi</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Horizontal Category Cards Scroll Row */}
          <div className="py-6 relative">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Pilih Sektor Industri ({ecosystemCategories.length})
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => handleScroll('left')}
                  className="p-1.5 rounded-full border border-slate-200 hover:bg-blue-50 hover:border-blue-400 text-slate-600 hover:text-blue-600 transition-colors"
                  aria-label="Geser kiri"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleScroll('right')}
                  className="p-1.5 rounded-full border border-slate-200 hover:bg-blue-50 hover:border-blue-400 text-slate-600 hover:text-blue-600 transition-colors"
                  aria-label="Geser kanan"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Scrollable list */}
            <div
              ref={scrollContainerRef}
              className="flex items-center gap-3.5 overflow-x-auto pb-3 pt-1 scrollbar-none no-scrollbar snap-x"
            >
              {ecosystemCategories.map((cat) => {
                const isSelected = cat.id === selectedCategory;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      onSelectCategory(cat.id);
                      setFilterSector(cat.id);
                    }}
                    className={`relative shrink-0 w-36 sm:w-44 rounded-2xl overflow-hidden text-left transition-all snap-start ${
                      isSelected
                        ? 'ring-3 ring-blue-600 shadow-lg scale-102 border-transparent'
                        : 'border border-slate-200/90 hover:border-blue-300 hover:shadow-md'
                    }`}
                  >
                    <div className="h-24 sm:h-28 w-full relative">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent" />
                      <div className="absolute bottom-2 left-2 right-2">
                        <span className="text-[11px] sm:text-xs font-bold text-white block leading-tight">
                          {cat.name}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Category Detail Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-50/70 border border-slate-200/80 rounded-3xl p-5 sm:p-7 lg:p-8 mt-2"
            >
              {/* Category Top Overview */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Main Category Image Thumbnail */}
                <div className="lg:col-span-4 rounded-2xl overflow-hidden shadow-md max-h-56">
                  <img
                    src={activeCategory.image}
                    alt={activeCategory.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details & Target Audiences */}
                <div className="lg:col-span-8 space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                      {activeCategory.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {activeCategory.description}
                    </p>
                  </div>

                  {/* Target Users with Green Badges */}
                  <div>
                    <span className="text-xs font-bold text-slate-700 block mb-2">
                      Target & Sasaran Pengguna:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {(activeCategory?.targetAudience || []).map((audience, idx) => (
                        <div
                          key={idx}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs text-slate-700 font-medium shadow-2xs"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{audience}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => onOpenConsultation(activeCategory?.id)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow transition-all"
                    >
                      <span>Selengkapnya</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => onOpenConsultation(activeCategory?.id)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 text-xs font-bold rounded-xl transition-all"
                    >
                      <span>Konsultasi Sektor Ini</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Solution Choice Mini-Cards Row */}
              <div className="mt-8 pt-6 border-t border-slate-200/80">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-extrabold text-slate-800">
                    Solusi Pilihan untuk {activeCategory?.name || 'Sektor'}
                  </h4>
                  <span className="text-xs text-blue-600 font-semibold hidden sm:inline">
                    Paket siap implementasi
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {(activeCategory?.solutions || []).map((sol: CategorySolution) => (
                    <div
                      key={sol.id}
                      className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2.5">
                          <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-blue-50 transition-colors">
                            {renderSolutionIcon(sol.icon)}
                          </div>
                          {sol.badge && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                              {sol.badge}
                            </span>
                          )}
                        </div>
                        <h5 className="text-xs font-bold text-slate-800 leading-snug group-hover:text-blue-600 transition-colors">
                          {sol.title}
                        </h5>
                        <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed line-clamp-3">
                          {sol.description}
                        </p>
                      </div>

                      <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                        <button
                          onClick={() => onOpenConsultation(activeCategory.id)}
                          className="font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 group-hover:underline"
                        >
                          <span>Pelajari</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
