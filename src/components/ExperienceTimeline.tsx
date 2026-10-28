import React from 'react';
import { Language } from '../types/portfolio.ts';
import {
  CAREER_HISTORY,
  SKILL_CATEGORIES,
  EDUCATION_LIST,
  LANGUAGE_SKILLS,
  CERTIFICATIONS,
  ENGINEER_PROFILE,
} from '../data/portfolioData.ts';
import { TRANSLATIONS } from '../data/translations.ts';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle,
  Award,
  GraduationCap,
  Languages,
  FileCheck2,
  ShieldCheck,
} from 'lucide-react';

interface Props {
  lang?: Language;
}

export const ExperienceTimeline: React.FC<Props> = ({ lang = 'en' }) => {
  const t = TRANSLATIONS[lang].experience;

  return (
    <section id="experience" className="py-16 border-t border-slate-800 bg-[#0b0f17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
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

        {/* Top Grid: Education & Visa Status In France */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Education Degrees */}
          <div className="lg:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-sm">
            <h3 className="text-base font-bold text-white flex items-center gap-2 mb-4 pb-3 border-b border-slate-800">
              <GraduationCap className="w-5 h-5 text-sky-400" />
              <span>{t.educationTitle}</span>
            </h3>

            <div className="space-y-6">
              {EDUCATION_LIST.map((edu, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-sm font-bold text-white">
                      {lang === 'fr' ? edu.degreeFr : edu.degree}
                    </h4>
                    <span className="text-xs font-mono text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-800/60">
                      {edu.period}
                    </span>
                  </div>
                  <div className="text-xs font-medium text-slate-300 flex items-center gap-2">
                    <span>{edu.institution}</span>
                    <span>·</span>
                    <span className="text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {edu.location}
                    </span>
                  </div>
                  <ul className="space-y-1 pt-1 text-xs text-slate-300">
                    {(lang === 'fr' ? edu.highlightsFr : edu.highlights).map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Visa Status & Language Proficiency Card */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* France Visa Status */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm font-bold text-white flex items-center gap-2 mb-3">
                <FileCheck2 className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'fr' ? 'Statut Légal & Visa en France' : 'France Work Authorization & Visa'}</span>
              </h3>
              <div className="text-xs space-y-2">
                <div className="p-3 bg-emerald-950/30 border border-emerald-800/50 rounded-xl">
                  <div className="font-bold text-emerald-400">
                    {lang === 'fr' ? ENGINEER_PROFILE.visaStatusFr : ENGINEER_PROFILE.visaStatus}
                  </div>
                  <div className="text-slate-300 text-[11px] mt-1 leading-relaxed">
                    {lang === 'fr' ? ENGINEER_PROFILE.visaDetailFr : ENGINEER_PROFILE.visaDetail}
                  </div>
                </div>
                <div className="text-slate-400 text-[11px] flex items-center gap-1.5 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  <span>{lang === 'fr' ? 'Résidence actuelle : Saint-Étienne, France' : 'Current Residence: Saint-Étienne, France'}</span>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-sm flex-1">
              <h3 className="text-sm font-bold text-white flex items-center gap-2 mb-3">
                <Languages className="w-4 h-4 text-sky-400" />
                <span>{t.languagesTitle}</span>
              </h3>
              <div className="space-y-2.5">
                {LANGUAGE_SKILLS.map((langSkill, idx) => (
                  <div key={idx} className="text-xs border-b border-slate-800/60 pb-2.5 last:border-0 last:pb-0 flex items-center justify-between">
                    <span className="font-semibold text-white">
                      {lang === 'fr' ? langSkill.languageFr : langSkill.language}
                    </span>
                    <span className="font-mono text-sky-400 text-xs px-2.5 py-0.5 bg-sky-950/60 rounded border border-sky-800/50">
                      {lang === 'fr' ? langSkill.proficiencyFr : langSkill.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience Timeline & Skill Matrices */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-sky-500" />
              <span>{t.employmentTitle}</span>
            </h3>

            <div className="relative pl-6 space-y-8 before:absolute before:left-2.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-800">
              {CAREER_HISTORY.map((job, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Node */}
                  <div className="absolute -left-6 top-1.5 w-5 h-5 rounded-full bg-slate-900 border-2 border-sky-500 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-sky-500" />
                  </div>

                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-sm hover:border-sky-500/50 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-sky-500" />
                          {job.period}
                        </span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {job.location}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-sky-400 font-semibold bg-sky-950/60 px-2.5 py-0.5 rounded border border-sky-900/60">
                        {lang === 'fr' ? job.typeFr : job.type}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white">
                      {lang === 'fr' ? job.roleFr : job.role} · <span className="text-sky-400">{job.company}</span>
                    </h4>

                    <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {lang === 'fr' ? job.summaryFr : job.summary}
                    </p>

                    <div className="mt-4">
                      <div className="text-xs font-bold text-white uppercase tracking-wider font-mono mb-2">
                        {t.accomplishments}
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {(lang === 'fr' ? job.achievementsFr : job.achievements).map((ach, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800 flex flex-wrap gap-1.5">
                      {job.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 text-[11px] font-mono bg-slate-800 text-slate-300 rounded border border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skill Matrices & Toolkits */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-indigo-500" />
              <span>{t.skillsTitle}</span>
            </h3>

            {/* Certifications Box */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-sm">
              <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider font-mono mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{t.certificationsTitle}</span>
              </h4>
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="text-xs">
                  <div className="font-bold text-white">
                    {lang === 'fr' ? cert.titleFr : cert.title}
                  </div>
                  <div className="text-slate-400 text-[11px] mt-0.5 font-mono">
                    {cert.issuer} · {cert.period}
                  </div>
                  <p className="text-[11px] text-slate-300 mt-1 leading-snug">
                    {cert.context}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-sm"
                >
                  <h4 className="text-sm font-bold text-white mb-3 pb-2 border-b border-slate-800 flex items-center justify-between">
                    <span>{lang === 'fr' ? cat.titleFr : cat.title}</span>
                    <span className="text-[11px] font-mono text-slate-400 font-normal">
                      {cat.skills.length} items
                    </span>
                  </h4>

                  <div className="space-y-2.5">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="text-xs">
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="font-semibold text-slate-200">
                            {skill.name}
                          </span>
                          <span className="text-[11px] font-mono text-sky-400 font-medium">
                            {lang === 'fr' ? skill.levelFr : skill.level}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400">
                          {lang === 'fr' ? skill.contextFr : skill.context}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
