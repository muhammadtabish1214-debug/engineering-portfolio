import React, { useState } from 'react';
import { WorkProof, Language } from '../types/portfolio.ts';
import { WORK_PROOFS } from '../data/portfolioData.ts';
import { TRANSLATIONS } from '../data/translations.ts';
import { Maximize2, X, ZoomIn, ZoomOut, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

interface Props {
  lang?: Language;
}

export const WorkProofGallery: React.FC<Props> = ({ lang = 'en' }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProof, setActiveProof] = useState<WorkProof | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const t = TRANSLATIONS[lang].deliverables;

  const categories = [
    { id: 'All', label: lang === 'fr' ? 'Tous' : 'All' },
    { id: 'P&ID', label: 'P&ID' },
    { id: 'Simulation', label: 'Simulation' },
    { id: 'Equipment Sizing', label: lang === 'fr' ? 'Dimensionnement' : 'Equipment Sizing' },
    { id: 'Safety & Relief', label: lang === 'fr' ? 'Sécurité & Torche' : 'Safety & Relief' },
  ];

  const filteredProofs =
    selectedCategory === 'All'
      ? WORK_PROOFS
      : WORK_PROOFS.filter((p) => p.category === selectedCategory);

  const openLightbox = (proof: WorkProof) => {
    setActiveProof(proof);
    setZoomLevel(1);
  };

  const closeLightbox = () => {
    setActiveProof(null);
    setZoomLevel(1);
  };

  return (
    <section id="deliverables" className="py-16 border-t border-slate-800 bg-[#0b0f17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold text-sky-400 uppercase tracking-wider font-mono mb-2">
              {t.badge}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.heading}
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-2xl">
              {t.subheading}
            </p>
          </div>

          {/* Category Filter Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 rounded-xl border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-slate-800 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProofs.map((proof) => (
            <div
              key={proof.id}
              onClick={() => openLightbox(proof)}
              className="group relative flex flex-col bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-sky-500/60 transition-all shadow-sm hover:shadow-xl cursor-pointer"
            >
              {/* Image Preview Header */}
              <div className="relative h-56 w-full bg-slate-950 overflow-hidden flex items-center justify-center p-2">
                <img
                  src={proof.imageSrc}
                  alt={lang === 'fr' ? proof.titleFr : proof.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                {/* Inspect Overlay Trigger */}
                <div className="absolute bottom-3 right-3 bg-slate-900/90 border border-slate-700/80 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-lg flex items-center gap-1.5 text-xs font-medium">
                  <Maximize2 className="w-3.5 h-3.5 text-sky-400" />
                  <span>{t.inspectSheet}</span>
                </div>

                {/* Category & Tag unboxed metadata */}
                <div className="absolute top-3 left-3 flex items-center gap-2 text-[11px] font-mono text-white/90 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-700/60 backdrop-blur-sm">
                  <span className="text-sky-400 font-semibold">
                    {lang === 'fr' ? proof.categoryFr : proof.category}
                  </span>
                  <span className="text-slate-500">·</span>
                  <span className="text-slate-300">{proof.tag}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-slate-400 mb-1">
                    <span>{proof.client}</span>
                    <span className="mx-1.5">·</span>
                    <span>{proof.software}</span>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-sky-400 transition-colors line-clamp-2">
                    {lang === 'fr' ? proof.titleFr : proof.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-400 line-clamp-3">
                    {lang === 'fr' ? proof.descriptionFr : proof.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono">
                    {proof.keyParameters.length} {t.verifiedParams}
                  </span>
                  <span className="font-semibold text-sky-400 flex items-center gap-1">
                    {t.viewSpecs} <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeProof && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6"
            onClick={closeLightbox}
          >
            <div
              className="relative w-full max-w-5xl max-h-[92vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-white"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-800 bg-slate-950/60">
                <div className="flex flex-col gap-1 pr-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <span className="text-sky-400 font-semibold">
                      {lang === 'fr' ? activeProof.categoryFr : activeProof.category}
                    </span>
                    <span>·</span>
                    <span>{activeProof.tag}</span>
                    <span>·</span>
                    <span>{activeProof.software}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {lang === 'fr' ? activeProof.titleFr : activeProof.title}
                  </h3>
                  <div className="text-xs text-slate-400">
                    {lang === 'fr' ? 'Projet :' : 'Project:'}{' '}
                    <span className="text-slate-200">
                      {lang === 'fr' ? activeProof.projectFr : activeProof.project}
                    </span>{' '}
                    · {lang === 'fr' ? 'Client :' : 'Client:'}{' '}
                    <span className="text-slate-200">{activeProof.client}</span>
                  </div>
                </div>

                {/* Lightbox Controls */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setZoomLevel((z) => Math.max(0.75, z - 0.25))}
                    className="p-2 text-slate-400 hover:text-white bg-slate-800/80 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer"
                    title="Zoom Out"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <span className="text-xs font-mono text-slate-400 px-1">
                    {Math.round(zoomLevel * 100)}%
                  </span>
                  <button
                    onClick={() => setZoomLevel((z) => Math.min(2.5, z + 0.25))}
                    className="p-2 text-slate-400 hover:text-white bg-slate-800/80 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer"
                    title="Zoom In"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <button
                    onClick={closeLightbox}
                    className="p-2 text-slate-400 hover:text-white bg-slate-800/80 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer ml-2"
                    title="Close (ESC)"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Image Viewport */}
                <div className="lg:col-span-7 bg-slate-950 rounded-xl border border-slate-800 p-2 overflow-auto flex items-center justify-center min-h-[360px] max-h-[520px]">
                  <img
                    src={activeProof.imageSrc}
                    alt={activeProof.title}
                    referrerPolicy="no-referrer"
                    style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
                    className="max-w-full max-h-full object-contain transition-transform duration-200 select-none"
                  />
                </div>

                {/* Specs */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-sky-400 font-mono mb-2">
                      {t.lightbox.engineeringDesc}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {lang === 'fr' ? activeProof.descriptionFr : activeProof.description}
                    </p>
                  </div>

                  {/* Key Parameters */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono mb-2">
                      {t.lightbox.keyParams}
                    </h4>
                    <div className="border border-slate-800 rounded-lg overflow-hidden divide-y divide-slate-800 bg-slate-950/40 text-xs">
                      {activeProof.keyParameters.map((p, idx) => (
                        <div key={idx} className="p-2.5 flex flex-col sm:flex-row sm:justify-between gap-1">
                          <span className="text-slate-400 font-medium">
                            {lang === 'fr' ? p.labelFr : p.label}
                          </span>
                          <span className="text-slate-200 font-mono sm:text-right">{p.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400 font-mono mb-2 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      {t.lightbox.contributions}
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {(lang === 'fr' ? activeProof.engineeringHighlightsFr : activeProof.engineeringHighlights).map((hl, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono">{t.lightbox.footerNote}</span>
                <button
                  onClick={closeLightbox}
                  className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded-lg transition-colors cursor-pointer"
                >
                  {t.lightbox.closeViewer}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
