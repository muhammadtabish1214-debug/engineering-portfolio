import React, { useState, useEffect } from 'react';
import { Language } from './types/portfolio.ts';
import { ENGINEER_PROFILE } from './data/portfolioData.ts';
import { TRANSLATIONS } from './data/translations.ts';
import { TemplateHero } from './components/TemplateHero.tsx';
import { ThreeDProcessFacility } from './components/ThreeDProcessFacility.tsx';
import { WorkProofGallery } from './components/WorkProofGallery.tsx';
import { ProjectsSection } from './components/ProjectsSection.tsx';
import { ExperienceTimeline } from './components/ExperienceTimeline.tsx';
import { InteractiveCalculatorModal } from './components/InteractiveCalculatorModal.tsx';
import { RecruiterContactModal } from './components/RecruiterContactModal.tsx';
import { ProfilePhotoModal } from './components/ProfilePhotoModal.tsx';
import {
  Calculator,
  Mail,
  Globe,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    return (localStorage.getItem('preferred_language') as Language) || 'en';
  });

  const [photoUrl, setPhotoUrl] = useState<string>(() => {
    return localStorage.getItem('engineer_profile_photo') || ENGINEER_PROFILE.defaultAvatar;
  });

  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);
  const [isCalcModalOpen, setIsCalcModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const t = TRANSLATIONS[lang];

  const handleToggleLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('preferred_language', newLang);
    document.title =
      newLang === 'fr'
        ? 'Muhammad Tabish Bukhari | Ingénieur Procédés'
        : 'Muhammad Tabish Bukhari | Process Engineer Portfolio';
  };

  const handleUpdatePhoto = (newUrl: string) => {
    setPhotoUrl(newUrl);
    localStorage.setItem('engineer_profile_photo', newUrl);
  };

  const handleResetPhoto = () => {
    setPhotoUrl(ENGINEER_PROFILE.defaultAvatar);
    localStorage.removeItem('engineer_profile_photo');
  };

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 flex flex-col font-sans selection:bg-blue-600/30 selection:text-sky-200">
      {/* 1. TOP BAR CONTRACT (3-zone: Brand wordmark — 4-5 nav links — Language & Primary Action) */}
      <header className="sticky top-0 z-40 bg-[#0b0f17]/90 border-b border-slate-800/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-base sm:text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span className="text-blue-500 font-mono font-extrabold">&lt;/&gt;</span>
            <span>{ENGINEER_PROFILE.name}</span>
          </a>

          {/* Zone 2: 4-5 concise single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-slate-400">
            <a href="#" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              {t.nav.overview}
            </a>
            <a
              href="#facility3d"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              {t.nav.facility3d}
            </a>
            <a
              href="#deliverables"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              {t.nav.deliverables}
            </a>
            <a
              href="#projects"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              {t.nav.projects}
            </a>
            <a
              href="#experience"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              {t.nav.experience}
            </a>
          </nav>

          {/* Zone 3: Language Toggle & 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Switcher Button (EN / FR) */}
            <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5 text-xs font-mono">
              <button
                onClick={() => handleToggleLang('en')}
                className={`px-2.5 py-1 rounded transition-colors cursor-pointer font-bold ${
                  lang === 'en'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => handleToggleLang('fr')}
                className={`px-2.5 py-1 rounded transition-colors cursor-pointer font-bold ${
                  lang === 'fr'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Passer en Français"
              >
                FR
              </button>
            </div>

            <button
              onClick={() => setIsCalcModalOpen(true)}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg hover:border-slate-700 transition-colors cursor-pointer"
            >
              <Calculator className="w-3.5 h-3.5 text-sky-400" />
              <span>{t.nav.sizingEngine}</span>
            </button>

            <button
              onClick={() => setIsContactModalOpen(true)}
              className="px-3.5 sm:px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {t.nav.recruiterInquiries}
            </button>
          </div>
        </div>
      </header>

      {/* 2. MODERN MOVING ANIMATED HERO (Template Design Layout matching template_design_4f12b4b7.PNG) */}
      <TemplateHero
        lang={lang}
        onOpenPhotoModal={() => setIsPhotoModalOpen(true)}
        onOpenContactModal={() => setIsContactModalOpen(true)}
        currentPhoto={photoUrl}
      />

      {/* 3. INTERACTIVE 3D PROCESS FACILITY VIEWPORT */}
      <section id="facility3d" className="py-14 border-t border-slate-800 bg-[#090d14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <div className="text-xs font-semibold text-sky-400 uppercase tracking-wider font-mono mb-2">
                {t.facility.badge}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {t.facility.heading}
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-400 max-w-2xl">
                {t.facility.subheading}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsCalcModalOpen(true)}
                className="flex items-center gap-1.5 px-3.5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer shadow-md"
              >
                <Calculator className="w-3.5 h-3.5" />
                <span>{t.facility.verifySizing}</span>
              </button>
            </div>
          </div>

          {/* Three.js Canvas Element with Bilingual Support */}
          <ThreeDProcessFacility lang={lang} />
        </div>
      </section>

      {/* 4. WORK PROOFS & P&ID DRAWINGS GALLERY */}
      <WorkProofGallery lang={lang} />

      {/* 5. TURNKEY PROJECTS & CASE STUDIES */}
      <ProjectsSection lang={lang} />

      {/* 6. CAREER TIMELINE, EDUCATION & SKILL MATRICES */}
      <ExperienceTimeline lang={lang} />

      {/* 7. FOOTER */}
      <footer className="mt-auto border-t border-slate-800 bg-[#070a10] py-10 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span className="font-semibold text-slate-300">{ENGINEER_PROFILE.name}</span>
            <span className="hidden sm:inline">·</span>
            <span>{lang === 'fr' ? 'Saint-Étienne, France' : 'Saint-Étienne, France'}</span>
            <span className="hidden sm:inline">·</span>
            <span className="font-mono text-sky-400">{ENGINEER_PROFILE.email}</span>
          </div>

          <div className="flex items-center gap-4">
            {/* Language Switcher in Footer */}
            <div className="flex items-center gap-1 text-[11px] font-mono">
              <button
                onClick={() => handleToggleLang('en')}
                className={`hover:text-white transition-colors cursor-pointer ${
                  lang === 'en' ? 'text-blue-400 font-bold' : 'text-slate-500'
                }`}
              >
                English
              </button>
              <span>/</span>
              <button
                onClick={() => handleToggleLang('fr')}
                className={`hover:text-white transition-colors cursor-pointer ${
                  lang === 'fr' ? 'text-blue-400 font-bold' : 'text-slate-500'
                }`}
              >
                Français
              </button>
            </div>

            <button
              onClick={() => setIsContactModalOpen(true)}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              {t.nav.recruiterInquiries}
            </button>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              {lang === 'fr' ? 'Haut de page ↑' : 'Back to Top ↑'}
            </button>
          </div>
        </div>
      </footer>

      {/* MODALS */}
      <InteractiveCalculatorModal
        isOpen={isCalcModalOpen}
        onClose={() => setIsCalcModalOpen(false)}
        lang={lang}
      />

      <RecruiterContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        lang={lang}
      />

      <ProfilePhotoModal
        isOpen={isPhotoModalOpen}
        onClose={() => setIsPhotoModalOpen(false)}
        currentPhoto={photoUrl}
        onUpdatePhoto={handleUpdatePhoto}
        onResetPhoto={handleResetPhoto}
        lang={lang}
      />
    </div>
  );
}
