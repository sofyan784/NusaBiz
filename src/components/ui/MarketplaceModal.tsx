import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Search, Filter, ShoppingBag, ArrowRight, Check, Star, Tag } from 'lucide-react';
import { ecosystemCategories, pricingPlans } from '../../data/mockData';

interface MarketplaceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (name: string) => void;
}

export const MarketplaceModal: React.FC<MarketplaceModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchWord, setSearchWord] = useState('');

  // Collect all marketplace products from ecosystem and pricing
  const allProducts = useMemo(() => {
    const list: Array<{
      id: string;
      title: string;
      category: string;
      sectorName: string;
      description: string;
      priceEstimate: string;
      badge: string;
      rating: number;
    }> = [];

    // From ecosystem
    ecosystemCategories.forEach((cat) => {
      cat.solutions.forEach((sol) => {
        list.push({
          id: sol.id,
          title: sol.title,
          category: sol.badge || 'Solusi Bisnis',
          sectorName: cat.name,
          description: sol.description,
          priceEstimate: 'Langganan Mulai Rp 150rb/bln',
          badge: sol.badge || 'Bisnis',
          rating: 4.8
        });
      });
    });

    // From pricing
    pricingPlans.forEach((plan) => {
      list.push({
        id: plan.id,
        title: plan.name,
        category: plan.category,
        sectorName: 'Bundling Khusus',
        description: plan.tagline,
        priceEstimate: `Mulai Rp ${plan.priceMonthly.toLocaleString('id-ID')}/bln`,
        badge: plan.isPopular ? 'Terpopuler' : 'Bundling Internet',
        rating: 4.9
      });
    });

    return list;
  }, []);

  const filteredProducts = useMemo(() => {
    return allProducts.filter((p) => {
      const matchSearch =
        p.title.toLowerCase().includes(searchWord.toLowerCase()) ||
        p.description.toLowerCase().includes(searchWord.toLowerCase()) ||
        p.sectorName.toLowerCase().includes(searchWord.toLowerCase());

      const matchCategory =
        activeFilter === 'all' ||
        (activeFilter === 'bundling' && p.sectorName === 'Bundling Khusus') ||
        (activeFilter === 'software' && (p.category.includes('ERP') || p.category.includes('Kasir') || p.category.includes('Produktivitas') || p.category.includes('Finansial'))) ||
        (activeFilter === 'iot' && (p.category.includes('IoT') || p.category.includes('Keamanan') || p.category.includes('Fleet')));

      return matchSearch && matchCategory;
    });
  }, [allProducts, searchWord, activeFilter]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ duration: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden border border-slate-100 my-8 flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white relative shrink-0">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-1">
              <ShoppingBag className="w-4 h-4 text-blue-300" />
              <span className="text-xs font-bold text-blue-200 uppercase tracking-wider">
                NusaBiz Digital Catalog
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black tracking-tight">
              Marketplace Produk & Layanan Digital
            </h3>
            <p className="text-xs sm:text-sm text-blue-100/90 mt-1">
              Jelajahi seluruh katalog resmi lisensi software, hardware bundling, dan sistem otomasi terintegrasi.
            </p>

            {/* Filter and Search Bar inside Header */}
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-12 gap-3">
              <div className="sm:col-span-8 relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  value={searchWord}
                  onChange={(e) => setSearchWord(e.target.value)}
                  placeholder="Cari solusi spesifik, lisensi, atau perangkat..."
                  className="w-full pl-10 pr-4 py-2 rounded-xl bg-white text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
                />
              </div>

              <div className="sm:col-span-4 flex gap-1 bg-white/10 p-1 rounded-xl backdrop-blur-md">
                <button
                  onClick={() => setActiveFilter('all')}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold transition-all ${
                    activeFilter === 'all' ? 'bg-white text-blue-900 shadow' : 'text-white/80 hover:text-white'
                  }`}
                >
                  Semua
                </button>
                <button
                  onClick={() => setActiveFilter('bundling')}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold transition-all ${
                    activeFilter === 'bundling' ? 'bg-white text-blue-900 shadow' : 'text-white/80 hover:text-white'
                  }`}
                >
                  Bundling
                </button>
                <button
                  onClick={() => setActiveFilter('software')}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold transition-all ${
                    activeFilter === 'software' ? 'bg-white text-blue-900 shadow' : 'text-white/80 hover:text-white'
                  }`}
                >
                  Software
                </button>
                <button
                  onClick={() => setActiveFilter('iot')}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold transition-all ${
                    activeFilter === 'iot' ? 'bg-white text-blue-900 shadow' : 'text-white/80 hover:text-white'
                  }`}
                >
                  IoT/CCTV
                </button>
              </div>
            </div>
          </div>

          {/* Product Grid Body (Scrollable) */}
          <div className="p-6 overflow-y-auto flex-1 space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-100">
              <span>Menampilkan {filteredProducts.length} solusi tersedia</span>
              <span className="font-semibold text-emerald-600">Garansi Layanan Resmi 100%</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="p-4 rounded-2xl border border-slate-200/90 hover:border-blue-400 hover:shadow-lg transition-all flex flex-col justify-between group bg-slate-50/40 hover:bg-white"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200/50">
                        {prod.category}
                      </span>
                      <div className="flex items-center gap-1 text-[11px] font-bold text-amber-500">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        <span>{prod.rating}</span>
                      </div>
                    </div>

                    <h4 className="text-xs sm:text-sm font-extrabold text-slate-800 leading-snug group-hover:text-blue-600 transition-colors">
                      {prod.title}
                    </h4>

                    <p className="text-[10px] font-semibold text-slate-400 mt-0.5">
                      {prod.sectorName}
                    </p>

                    <p className="text-[11px] text-slate-600 mt-2 leading-relaxed line-clamp-3">
                      {prod.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-800">
                      {prod.priceEstimate}
                    </span>
                    <button
                      onClick={() => {
                        onClose();
                        onSelectProduct(prod.title);
                      }}
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-[11px] font-bold shadow-2xs transition-colors"
                    >
                      <span>Ajukan</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
