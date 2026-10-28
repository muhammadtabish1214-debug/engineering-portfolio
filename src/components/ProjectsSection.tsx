import React, { useState } from 'react';
import { ProjectExperience, Language } from '../types/portfolio.ts';
import { PROJECTS } from '../data/portfolioData.ts';
import { TRANSLATIONS } from '../data/translations.ts';
import { Building2, MapPin, Calendar, Gauge, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface Props {
  lang?: Language;
}

export const ProjectsSection: React.FC<Props> = ({ lang = 'en' }) => {
  const [filterCompany, setFilterCompany] = useState<string>('All');
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>('proj-sujawal-phase2');

  const t = TRANSLATIONS[lang].projects;

  const companies = [
    { id: 'All', label: lang === 'fr' ? 'Tous' : 'All' },
    { id: 'SPEC Oil and Gas', label: 'SPEC Oil & Gas' },
    { id: 'Brillante Engineers', label: 'Brillante Engineers' },
  ];

  const filteredProjects =
    filterCompany === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.company === filterCompany);

  const toggleExpand = (id: string) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  return (
    <section id="projects" className="py-16 border-t border-slate-800 bg-[#0b0f17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
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

          {/* Company Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 rounded-xl border border-slate-800">
            {companies.map((c) => (
              <button
                key={c.id}
                onClick={() => setFilterCompany(c.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  filterCompany === c.id
                    ? 'bg-slate-800 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project List / Cards */}
        <div className="space-y-6">
          {filteredProjects.map((project) => {
            const isExpanded = expandedProjectId === project.id;
            return (
              <div
                key={project.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:border-slate-700 transition-all"
              >
                {/* Collapsed Header Summary */}
                <div
                  onClick={() => toggleExpand(project.id)}
                  className="p-6 cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-4 select-none hover:bg-slate-800/40 transition-colors"
                >
                  <div className="flex-1">
                    {/* Metadata Kicker */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-2">
                      <span className="font-semibold text-sky-400 flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5" />
                        {project.company}
                      </span>
                      <span>·</span>
                      <span>{t.clientPrefix} {project.clientOrOperator}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {project.location}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {project.timeline}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {lang === 'fr' ? project.titleFr : project.title}
                    </h3>

                    <div className="mt-2 text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                      <Gauge className="w-3.5 h-3.5" />
                      <span>{t.capacityPrefix} {project.capacity}</span>
                    </div>

                    <p className="mt-2 text-xs sm:text-sm text-slate-300 line-clamp-2">
                      {lang === 'fr' ? project.overviewFr : project.overview}
                    </p>
                  </div>

                  {/* Right Action / Toggle */}
                  <div className="flex items-center gap-3 shrink-0">
                    <div className="flex flex-wrap gap-1.5 max-w-xs justify-end hidden sm:flex">
                      {project.softwareUsed.slice(0, 3).map((sw, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 text-[11px] font-mono bg-slate-800 text-slate-300 rounded border border-slate-700"
                        >
                          {sw}
                        </span>
                      ))}
                    </div>

                    <button
                      className="p-2 text-slate-400 hover:text-white bg-slate-800 rounded-lg transition-colors cursor-pointer"
                      aria-label={isExpanded ? 'Collapse project details' : 'Expand project details'}
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Detailed Breakdown */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-800 bg-slate-950/40">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4">
                      {/* Left Column: Role & Key Contributions */}
                      <div className="lg:col-span-7 space-y-4">
                        <div>
                          <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono mb-2.5">
                            {t.responsibilities}
                          </h4>
                          <ul className="space-y-2">
                            {(lang === 'fr' ? project.roleAndContributionsFr : project.roleAndContributions).map((role, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                                <CheckCircle className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                                <span>{role}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono mb-2">
                            {t.deliverablesTitle}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {(lang === 'fr' ? project.deliverablesFr : project.deliverables).map((deliv, idx) => (
                              <span
                                key={idx}
                                className="px-2.5 py-1 text-xs font-medium bg-sky-950/60 text-sky-300 border border-sky-800/80 rounded-md"
                              >
                                {deliv}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Column: Equipment & Software */}
                      <div className="lg:col-span-5 space-y-4">
                        <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                          <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono mb-2.5">
                            {t.equipmentTitle}
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {project.equipmentHandled.map((eq, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 text-xs bg-slate-800 text-slate-200 rounded border border-slate-700"
                              >
                                {eq}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                          <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono mb-2.5">
                            {t.softwareTitle}
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {project.softwareUsed.map((sw, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 text-xs font-mono bg-indigo-950/50 text-indigo-300 border border-indigo-800/60 rounded"
                              >
                                {sw}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
