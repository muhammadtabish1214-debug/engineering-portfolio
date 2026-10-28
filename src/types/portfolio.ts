export type Language = 'en' | 'fr';

export interface EducationItem {
  degree: string;
  degreeFr: string;
  institution: string;
  location: string;
  period: string;
  highlights: string[];
  highlightsFr: string[];
}

export interface LanguageSkill {
  language: string;
  languageFr: string;
  proficiency: string;
  proficiencyFr: string;
  note: string;
  noteFr: string;
}

export interface WorkProof {
  id: string;
  title: string;
  titleFr: string;
  category: 'P&ID' | 'Simulation' | 'Equipment Sizing' | 'Safety & Relief';
  categoryFr: string;
  tag: string;
  imageSrc: string;
  project: string;
  projectFr: string;
  client: string;
  software: string;
  description: string;
  descriptionFr: string;
  keyParameters: { label: string; labelFr: string; value: string }[];
  engineeringHighlights: string[];
  engineeringHighlightsFr: string[];
}

export interface ProjectExperience {
  id: string;
  title: string;
  titleFr: string;
  company: 'SPEC Oil and Gas' | 'Brillante Engineers';
  clientOrOperator: string;
  location: string;
  timeline: string;
  capacity: string;
  overview: string;
  overviewFr: string;
  roleAndContributions: string[];
  roleAndContributionsFr: string[];
  softwareUsed: string[];
  equipmentHandled: string[];
  deliverables: string[];
  deliverablesFr: string[];
  badgeColor?: string;
}

export interface SkillCategory {
  title: string;
  titleFr: string;
  skills: {
    name: string;
    level: string;
    levelFr: string;
    context: string;
    contextFr: string;
  }[];
}

export interface CareerMilestone {
  period: string;
  company: string;
  role: string;
  roleFr: string;
  location: string;
  type: string;
  typeFr: string;
  summary: string;
  summaryFr: string;
  achievements: string[];
  achievementsFr: string[];
  technologies: string[];
}
