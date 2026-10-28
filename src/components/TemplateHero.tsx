import React from 'react';
import { motion } from 'motion/react';
import { Language } from '../types/portfolio.ts';
import { TRANSLATIONS } from '../data/translations.ts';
import { ENGINEER_PROFILE, CLIENT_LOGOS } from '../data/portfolioData.ts';
import {
  ArrowDown,
  ArrowRight,
  MapPin,
  FileCheck2,
  GraduationCap,
  Languages,
  Linkedin,
  Mail,
  Phone,
  Camera,
  Briefcase,
  Sparkles,
} from 'lucide-react';

interface Props {
  lang: Language;
  onOpenPhotoModal: () => void;
  onOpenContactModal: () => void;
  currentPhoto: string;
}

export const TemplateHero: React.FC<Props> = ({
  lang,
  onOpenPhotoModal,
  onOpenContactModal,
  currentPhoto,
}) => {
  const t = TRANSLATIONS[lang].hero;

  const scrollToFacility = () => {
    const el = document.getElementById('facility3d');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] bg-[#0b0f17] text-white overflow-hidden flex flex-col justify-between pt-8 pb-12">
      {/* Moving Background Ambient Glows & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:28px_28px] opacity-20 pointer-events-none" />
      
      {/* Smooth animated ambient radial drifts */}
      <motion.div
        animate={{
          x: [0, 25, 0],
          y: [0, -20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 25, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/3 right-1/4 w-[28rem] h-[28rem] rounded-full bg-sky-500/10 blur-3xl pointer-events-none"
      />

      {/* Main 3-Column Template Grid (Left Text — Center Cutout Portrait — Right Details) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex-1 flex flex-col justify-center my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* LEFT COLUMN: Headline & Quick Summary (Template Layout) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-4 flex flex-col justify-center order-2 lg:order-1 pt-4 lg:pt-0"
          >
            {/* White horizontal bar accent matching template */}
            <div className="w-12 h-1 bg-white mb-6 rounded-full" />

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.12]">
              {t.headlinePrefix}{' '}
              <span className="text-white">
                {t.name}
              </span>
              <br />
              <span className="text-slate-200 font-bold">{t.headlineSuffix}</span>
            </h1>

            {/* Total Experience Highlight */}
            <div className="mt-4 flex items-center gap-2 text-xs font-mono text-sky-400 font-semibold uppercase tracking-wider">
              <Briefcase className="w-3.5 h-3.5" />
              <span>{t.stats.experience} · {t.role}</span>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              {t.experienceSummary}
            </p>

            {/* Location & France Visa Status Callout Box */}
            <div className="mt-6 p-3.5 bg-slate-900/80 border border-slate-800 rounded-xl space-y-2 max-w-sm">
              <div className="flex items-center gap-2 text-xs">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="text-slate-400 font-medium">{t.locationLabel}:</span>
                <span className="font-semibold text-white">{t.locationValue}</span>
              </div>
              <div className="flex items-start gap-2 text-xs">
                <FileCheck2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-400 font-medium">{t.visaLabel}: </span>
                  <span className="font-bold text-emerald-400">{t.visaValue}</span>
                  <div className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                    {t.visaDetail}
                  </div>
                </div>
              </div>
            </div>

            {/* Iconic Floating Blue Circular Down Button (matching template) */}
            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={scrollToFacility}
                aria-label="Scroll to portfolio content"
                className="w-13 h-13 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-xl shadow-blue-600/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <ArrowDown className="w-5 h-5 animate-bounce" />
              </button>

              <div className="flex flex-col">
                <a
                  href="#facility3d"
                  className="text-xs font-mono font-bold tracking-wider text-slate-300 hover:text-white uppercase flex items-center gap-1.5"
                >
                  <span>{t.inspect3D}</span>
                  <ArrowRight className="w-3 h-3 text-sky-400" />
                </a>
                <span className="text-[11px] text-slate-400">3-Phase Separator · Aspen HYSYS · P&IDs</span>
              </div>
            </div>
          </motion.div>

          {/* CENTER COLUMN: Hero Portrait Cutout (Template Layout) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
            className="lg:col-span-4 flex flex-col items-center justify-center order-1 lg:order-2 relative"
          >
            <div className="relative w-full max-w-sm sm:max-w-md h-[380px] sm:h-[460px] lg:h-[500px] flex items-end justify-center">
              {/* Soft background radial aura */}
              <div className="absolute inset-0 m-auto w-72 h-72 rounded-full bg-gradient-to-tr from-sky-600/20 via-blue-600/25 to-indigo-600/20 blur-2xl pointer-events-none" />

              {/* The Engineer Photo matching template cutout */}
              <div className="relative z-10 w-full h-full flex items-end justify-center overflow-hidden">
                <img
                  src={currentPhoto}
                  alt={ENGINEER_PROFILE.name}
                  referrerPolicy="no-referrer"
                  className="max-h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)] select-none"
                />

                {/* Edit / Change Photo Quick Floating Trigger */}
                <button
                  onClick={onOpenPhotoModal}
                  className="absolute top-4 right-4 z-20 p-2 bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white rounded-xl border border-slate-700/80 shadow-lg text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Upload or Change Portfolio Photo"
                >
                  <Camera className="w-3.5 h-3.5 text-sky-400" />
                  <span className="hidden sm:inline font-mono">Photo</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: About Me, Education & Visa, Languages, Follow Me (Template Layout) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-4 flex flex-col justify-center space-y-6 order-3 pt-4 lg:pt-0 lg:pl-6"
          >
            {/* ABOUT ME SECTION */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono mb-2">
                {t.aboutMe}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t.aboutMeText}
              </p>
              <a
                href="#experience"
                className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-white hover:text-sky-400 uppercase mt-2 font-mono transition-colors"
              >
                <span>{t.learnMore}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* EDUCATION & DEGREES */}
            <div className="pt-2 border-t border-slate-800/80">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-300 font-mono mb-2">
                <GraduationCap className="w-4 h-4 text-sky-400" />
                <span>{t.educationTitle}</span>
              </div>
              <div className="space-y-2 text-xs">
                <div>
                  <div className="font-semibold text-white">{t.m2Title}</div>
                  <div className="text-sky-400 font-mono text-[11px]">{t.m2School}</div>
                </div>
                <div>
                  <div className="font-semibold text-slate-200">{t.bscTitle}</div>
                  <div className="text-slate-400 font-mono text-[11px]">{t.bscSchool}</div>
                </div>
              </div>
            </div>

            {/* LANGUAGE SKILLS */}
            <div className="pt-2 border-t border-slate-800/80">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-300 font-mono mb-2">
                <Languages className="w-4 h-4 text-emerald-400" />
                <span>{t.languagesTitle}</span>
              </div>
              <div className="space-y-1.5 text-xs">
                <div className="font-semibold text-white">{t.englishLevel}</div>
                <div className="font-semibold text-white">{t.frenchLevel}</div>
                <div className="font-medium text-slate-400">{t.urduLevel}</div>
              </div>
              <a
                href="#deliverables"
                className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-white hover:text-sky-400 uppercase mt-3 font-mono transition-colors"
              >
                <span>{t.browsePortfolio}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* FOLLOW ME / CONNECT LINKS */}
            <div className="pt-2 border-t border-slate-800/80">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-3">
                {t.followMe}
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href={ENGINEER_PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg border border-slate-800 transition-colors"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 text-sky-400" />
                </a>
                <button
                  onClick={onOpenContactModal}
                  className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg border border-slate-800 transition-colors cursor-pointer"
                  title="Send Direct Email"
                >
                  <Mail className="w-4 h-4 text-emerald-400" />
                </button>
                <a
                  href={`tel:${ENGINEER_PROFILE.phone}`}
                  className="p-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg border border-slate-800 transition-colors"
                  title="Phone / WhatsApp (+33 745 380 465)"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                </a>
                <span className="text-xs font-mono text-slate-400 ml-1">
                  {ENGINEER_PROFILE.phone}
                </span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>

      {/* BOTTOM MARQUEE TICKER: OPERATORS & INSTITUTIONS SERVED */}
      <div className="mt-8 border-t border-b border-slate-800/80 bg-slate-950/60 py-3 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-xs font-mono text-slate-400 overflow-x-auto gap-8">
          <span className="font-bold text-sky-400 shrink-0 uppercase tracking-wider">
            {t.clientsServed}:
          </span>
          {CLIENT_LOGOS.map((client, idx) => (
            <div key={idx} className="flex items-center gap-2 shrink-0">
              <span className="font-bold text-slate-200">{client.name}</span>
              <span className="text-[10px] text-slate-500 hidden sm:inline">({client.role})</span>
              {idx < CLIENT_LOGOS.length - 1 && <span className="text-slate-700 ml-6">/</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
