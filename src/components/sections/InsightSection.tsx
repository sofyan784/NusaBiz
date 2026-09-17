import React from 'react';
import { motion } from 'motion/react';
import { Clock, Calendar, ArrowRight, BookOpen } from 'lucide-react';
import { featuredArticle, sideArticles } from '../../data/mockData';
import { ArticleItem } from '../../types';

interface InsightSectionProps {
  onSelectArticle: (article: ArticleItem) => void;
  onOpenConsultation: () => void;
}

export const InsightSection: React.FC<InsightSectionProps> = ({
  onSelectArticle,
  onOpenConsultation
}) => {
  return (
    <section id="insight-section" className="py-12 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-16">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200/80">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Tingkatkan Kompetensi
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Wawasan teknologi, tips efisiensi operasional, dan tren bisnis terkini untuk akselerasi pertumbuhan Anda.
          </p>
        </div>

        <button
          onClick={onOpenConsultation}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 hover:underline shrink-0"
        >
          <span>Lihat Semua</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Editorial Portal Grid: 1 Featured Large on Left, 4 Compact on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Featured Large Article */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          onClick={() => onSelectArticle(featuredArticle)}
          className="lg:col-span-6 bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between group"
        >
          <div>
            <div className="relative h-64 sm:h-72 w-full overflow-hidden">
              <img
                src={featuredArticle.thumbnail}
                alt={featuredArticle.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold shadow-sm">
                  {featuredArticle.category}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-3 text-xs text-slate-400 mb-2.5">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{featuredArticle.publishTime}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{featuredArticle.readTime}</span>
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                {featuredArticle.title}
              </h3>

              {featuredArticle.excerpt && (
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed line-clamp-3">
                  {featuredArticle.excerpt}
                </p>
              )}
            </div>
          </div>

          <div className="px-6 pb-6 pt-0 flex items-center justify-between text-xs font-bold text-blue-600">
            <span>Baca Selengkapnya</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.div>

        {/* Right 4 Smaller Compact Articles (2x2 Grid) */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {sideArticles.map((art) => (
            <motion.div
              key={art.id}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              onClick={() => onSelectArticle(art)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-32 w-full overflow-hidden">
                  <img
                    src={art.thumbnail}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-900/70 backdrop-blur-md text-white text-[10px] font-bold">
                      {art.category}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-1.5">
                    <span>{art.publishTime}</span>
                    <span>•</span>
                    <span>{art.readTime}</span>
                  </div>

                  <h4 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2">
                    {art.title}
                  </h4>
                </div>
              </div>

              <div className="px-4 pb-4 text-[11px] font-bold text-blue-600 flex items-center gap-1">
                <span>Lihat Panduan</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
