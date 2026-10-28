import {
  WorkProof,
  ProjectExperience,
  SkillCategory,
  CareerMilestone,
  EducationItem,
  LanguageSkill,
} from '../types/portfolio.ts';

export const ENGINEER_PROFILE = {
  name: 'Muhammad Tabish Bukhari',
  title: 'Process Design & Simulation Engineer',
  titleFr: 'Ingénieur Conception & Simulation de Procédés',
  specialization: 'Upstream / Midstream Oil & Gas · Gas Processing · EPCC Turnkey Refining · Process AI',
  specializationFr: 'Amont / Aval Pétrolier & Gazier · Traitement du Gaz · Raffinage EPCC · IA Appliquée',
  email: 'muhammadtabish1214@gmail.com',
  phone: '+33 745 380 465',
  linkedin: 'https://linkedin.com/in/syed-tabish-bukhari-b99576197',
  location: 'Saint-Étienne, France',
  locationFr: 'Saint-Étienne, France',
  visaStatus: 'Job Search Visa (APS / Recherche d’Emploi)',
  visaStatusFr: 'Visa Recherche d’Emploi (APS) - Autorisation de travail en France',
  visaDetail: 'Eligible and authorized to work full-time across France and European Union with no sponsorship hurdles for job search holders.',
  visaDetailFr: 'Autorisé à travailler à plein temps en France et dans l’Union Européenne sans blocage de visa.',
  totalExperience: '2-3 Years',
  totalExperienceFr: '2-3 Ans',
  summary:
    'Process Engineer with 2-3 years of proven experience in process modelling, material and energy balance development, equipment sizing, and P&ID/PFD drafting across energy, oil & gas, and industrial process facilities. Currently completing an M2 in Process Engineering and Artificial Intelligence at École des Mines de Saint-Étienne, France. Fluent in English (B2) and actively developing professional French proficiency. International client experience includes ADNOC, TotalEnergies, MARI ENERGIES, ThermoDesign (TDE), and SPEC Oil & Gas.',
  summaryFr:
    'Ingénieur Procédés avec 2 à 3 ans d’expérience confirmée en modélisation de procédés, bilans matière et énergie, dimensionnement d’équipements et élaboration de P&ID/PFD pour le secteur de l’énergie, du pétrole & gaz et des procédés industriels. Actuellement en Master 2 Génie des Procédés & Intelligence Artificielle à l’École des Mines de Saint-Étienne. Anglais courant (B2) et perfectionnement actif du français professionnel. Expérience avec des clients d’envergure internationale : ADNOC, TotalEnergies, MARI ENERGIES, ThermoDesign (TDE) et SPEC Oil & Gas.',
  stats: [
    { label: 'Total Industry Experience', labelFr: 'Expérience Industrielle', value: '2-3 Years' },
    { label: 'Turnkey & Facility Projects', labelFr: 'Projets Clés en Main', value: '7+' },
    { label: 'Total Gas Capacity Modeled', labelFr: 'Capacité Gaz Modélisée', value: '100+ MMSCFD' },
    { label: 'Liquid Refining Throughput', labelFr: 'Capacité Raffinage Liquide', value: '18,500+ BPSD' },
  ],
  defaultAvatar: '/assets/aistudio/My_pic_0240b365.png',
  aiAvatar: '/src/assets/images/profile_engineer_portrait_1793142982199.jpg',
  userPic: '/assets/aistudio/My_pic_0240b365.png',
};

export const EDUCATION_LIST: EducationItem[] = [
  {
    degree: 'M2 - Process Engineering & Artificial Intelligence',
    degreeFr: 'Master 2 - Génie des Procédés & Intelligence Artificielle',
    institution: 'École des Mines de Saint-Étienne',
    location: 'Saint-Étienne, France',
    period: 'Sep 2025 – Sep 2026',
    highlights: [
      'Advanced coursework: Process systems engineering, functional architecture of energy systems, process modelling.',
      'Optimization methods, numerical simulation, and AI-driven design tools for chemical and energy systems.',
      'Research and integration of machine learning into industrial unit operations and predictive control.',
    ],
    highlightsFr: [
      'Cours avancés : Génie des systèmes de procédés, architecture fonctionnelle des systèmes énergétiques, modélisation de procédés.',
      'Méthodes d’optimisation, simulation numérique et outils de conception pilotés par l’IA.',
      'Intégration de l’apprentissage automatique aux opérations unitaires industrielles et contrôle prédictif.',
    ],
  },
  {
    degree: 'B.Sc - Chemical Engineering',
    degreeFr: 'Licence / B.Sc - Génie Chimique',
    institution: 'NFC Institute of Engineering and Technology (NFC-IET)',
    location: 'Multan, Pakistan',
    period: 'Oct 2017 – Sep 2021',
    highlights: [
      'Final-Year Design Project: Up-gradation of 18,000 BPSD Vacuum Residue via Vis-breaking Unit.',
      'Thermal process modelling, material & energy balance, and equipment sizing for a non-catalytic thermal cracking unit.',
      'Rigorous foundation in thermodynamics, transport phenomena, separation processes, and process safety.',
    ],
    highlightsFr: [
      'Projet de fin d’études : Valorisation de 18 000 BPSD de résidus sous vide par unité de viscoréduction (Vis-breaking).',
      'Modélisation thermique du procédé, bilans matière & énergie et dimensionnement des équipements de craquage thermique.',
      'Solides bases en thermodynamique, phénomènes de transfert, procédés de séparation et sécurité des procédés.',
    ],
  },
];

export const LANGUAGE_SKILLS: LanguageSkill[] = [
  {
    language: 'English',
    languageFr: 'Anglais',
    proficiency: 'Fluent',
    proficiencyFr: 'Courant',
    note: '',
    noteFr: '',
  },
  {
    language: 'French',
    languageFr: 'Français',
    proficiency: 'Beginner',
    proficiencyFr: 'Débutant',
    note: '',
    noteFr: '',
  },
  {
    language: 'Urdu',
    languageFr: 'Ourdou',
    proficiency: 'Native',
    proficiencyFr: 'Langue Maternelle',
    note: '',
    noteFr: '',
  },
];

export const CERTIFICATIONS = [
  {
    title: 'IOSH Managing Safely',
    titleFr: 'IOSH Managing Safely (Gestion de la Sécurité au Travail)',
    issuer: 'Institution of Occupational Safety and Health (UK)',
    period: 'Mar 2022 – Present',
    status: 'Certified / Certifié',
    context: 'UK accredited qualification covering process hazard identification, risk assessment, HSE compliance, and accident investigation.',
  },
];

export const CLIENT_LOGOS = [
  { name: 'ADNOC', role: 'Abu Dhabi National Oil Company' },
  { name: 'TotalEnergies', role: 'Global Multi-Energy Operator' },
  { name: 'MARI ENERGIES', role: 'Upstream Gas Processing Operator' },
  { name: 'ThermoDesign (TDE)', role: 'Canadian Gas Processing EPC' },
  { name: 'SPEC Oil & Gas', role: 'Turnkey EPCC Solutions' },
  { name: 'École des Mines', role: 'Mines Saint-Étienne France' },
];

export const WORK_PROOFS: WorkProof[] = [
  {
    id: 'proof-separator-sizing',
    title: 'HSep-Calc+ 3-Phase Horizontal Separator Sizing Sheet (V-0001)',
    titleFr: 'Feuille de Calcul Séparateur Triphasique Horizontal HSep-Calc+ (V-0001)',
    category: 'Equipment Sizing',
    categoryFr: 'Dimensionnement Équipements',
    tag: 'V-0001 Inlet Separator',
    imageSrc: '/assets/aistudio/Seperator_Calculation_4b762a1f.PNG',
    project: 'Sujawal Gas Processing Facility (SGPF) Adequacy Study',
    projectFr: 'Étude d’Adéquation du Site Gazier de Sujawal (SGPF)',
    client: 'Mari Energies Limited',
    software: 'HSep-Calc+ / Proprietary Process Design Engine',
    description:
      'Rigorous 3-phase horizontal inlet separator rating and sizing verification across High Pressure (HP) and Low Pressure (LP) operational envelopes. Confirms liquid hold-up time, droplet separation diameter, allowable gas superficial velocity (K-factor), and nozzle hydraulics.',
    descriptionFr:
      'Vérification rigoureuse du dimensionnement d’un séparateur horizontal triphasique d’entrée sous régimes Haute Pression (HP) et Basse Pression (LP). Validation du temps de rétention liquide, diamètre de gouttelettes, vitesse admissible du gaz (facteur K) et hydraulique des tubulures.',
    keyParameters: [
      { label: 'Vessel Dimensions', labelFr: 'Dimensions du Ballon', value: 'ID: 2,400 mm | T/T: 7,200 mm (L:D = 3.00)' },
      { label: 'Vessel Capacity', labelFr: 'Capacité du Ballon', value: 'Vol: 36.19 m³ | Area: 4.52 m² (2:1 Elliptical Heads)' },
      { label: 'HP Mode Operating Point', labelFr: 'Point Opératoire Mode HP', value: '85.75 barg @ 12.3°C (Gas: 98,790 kg/h, 100.3 MMSCFD)' },
      { label: 'LP Mode Operating Point', labelFr: 'Point Opératoire Mode LP', value: '40.59 barg @ 109.2°C (Gas: 105,800 kg/h, 105.1 MMSCFD)' },
      { label: 'Liquid Retention Time', labelFr: 'Temps de Rétention Liquide', value: '34.88 min (Oil) | 58.18 min (Water) at NLL' },
      { label: 'Internals Configuration', labelFr: 'Configuration Internes', value: 'Multi-Vane Inlet, Wire Mesh Demister, Overflow Weir' },
    ],
    engineeringHighlights: [
      'Verified droplet separation threshold down to 38 microns in HP Mode and 20 microns in LP Mode.',
      'Sized Feed Inlet and Gas Outlet nozzles at 355 mm (14" NB) ensuring ρv² < 3,581 Pa to prevent excessive vibration.',
      'Designed overflow weir zone separating oil from aqueous phase with zero liquid carryover risk.',
    ],
    engineeringHighlightsFr: [
      'Vérification du seuil de séparation des gouttelettes à 38 microns en mode HP et 20 microns en mode LP.',
      'Dimensionnement des tubulures d’entrée et sortie gaz à 355 mm (14" NB) garantissant ρv² < 3 581 Pa pour éliminer les vibrations.',
      'Conception du déversoir de trop-plein pour la séparation nette des phases huile et eau sans entraînement liquide.',
    ],
  },
  {
    id: 'proof-hysys-simulation',
    title: 'Aspen HYSYS Process Simulation Flowsheet (SGPF Train & Treating)',
    titleFr: 'Schéma de Simulation de Procédés Aspen HYSYS (Train SGPF & Traitement)',
    category: 'Simulation',
    categoryFr: 'Simulation de Procédés',
    tag: 'Aspen HYSYS v14.0 PFD',
    imageSrc: '/assets/aistudio/Process_Simulation_c1ea4f6f.PNG',
    project: 'Sujawal Gas Processing Facility Phase-2 30 MMSCFD Expansion',
    projectFr: 'Extension Phase-2 du Complexe Gazier de Sujawal (30 MMSCFD)',
    client: 'Mari Energies / Jereh Oil & Gas',
    software: 'Aspen HYSYS V14.0',
    description:
      'Comprehensive steady-state flowsheet simulating HP/LP inlet separation, front-end booster compression, acid gas treating (ASU), triethylene glycol dehydration (TEG GDU), hydrocarbon dew point control (HCDU) with mechanical refrigeration (MRU), and produced water degassing & disposal.',
    descriptionFr:
      'Schéma complet en régime permanent simulant la séparation HP/LP, la compression d’appoint, le traitement des gaz acides (ASU), la déshydratation au TEG (GDU), le contrôle du point de rosée hydrocarbures (HCDU/MRU) et le dégazage de l’eau produite.',
    keyParameters: [
      { label: 'Inlet Raw Gas Feed', labelFr: 'Charge Gaz Brut d’Entrée', value: '24.95 MMSCFD @ 250 psig & 115.2°F (V-101 Separator)' },
      { label: 'Treated Sales Gas', labelFr: 'Gaz Commercial Traité', value: '29.94 MMSCFD @ 1,200 psig, 140°F (Acid Gas: 5.36% CO2, 7.8 ppm H2S)' },
      { label: 'Stabilized Condensate', labelFr: 'Condensat Stabilisé', value: '561.2 bbl/day @ 145 psig & 117.8°F (RVP < 10 psig)' },
      { label: 'Produced Water Flow', labelFr: 'Débit Eau de Production', value: '1,750 bbl/day routed to V-XXX PW Degasser & Treatment' },
      { label: 'NGL Recovery Rate', labelFr: 'Récupération NGL', value: '93.8 bbl/day @ 125 psig & 48.1°F from HCDU' },
    ],
    engineeringHighlights: [
      'Integrated recycle loop convergence using ADJ-001 through ADJ-004 blocks for tight mass/energy balance.',
      'Modeled Amine Sweetening Unit (ASU) targeting pipeline specification H2S < 4 ppm and CO2 < 2.0 mole%.',
      'Engineered multi-stage HP/LP letdown with flare routing (115-To LP Flare and 120-To LP Flare headers).',
    ],
    engineeringHighlightsFr: [
      'Convergence des boucles de recyclage via les blocs d’ajustement ADJ-001 à ADJ-004 pour un bilan matière/énergie parfait.',
      'Modélisation de l’unité de désacidification aux amines visant H2S < 4 ppm et CO2 < 2,0 mole%.',
      'Conception de la détente étagée HP/LP avec évacuation sécurisée vers la torche basse pression.',
    ],
  },
  {
    id: 'proof-pid-water-tanks',
    title: 'P&ID: Produced Water Settling Tanks & High-Pressure Injection Station',
    titleFr: 'P&ID : Bacs de Décantation Eau de Production & Station d’Injection HP',
    category: 'P&ID',
    categoryFr: 'Schémas Tuyauterie & Instrumentation (P&ID)',
    tag: '02-T-3005 / 3006 / 3007 & 02-P-3006/3007',
    imageSrc: '/assets/aistudio/P_IDs_2_7aebfcf9.PNG',
    project: 'Field Surface Facilities & Water Handling',
    projectFr: 'Installations de Surface & Traitement de l’Eau',
    client: 'SPEC Oil and Gas / Operator',
    software: 'AutoCAD Plant & Engineering Deliverable Suite',
    description:
      'Detailed Piping & Instrumentation Diagram covering three 600 BBL Produced Water Settling Tanks (02-T-3005, 02-T-3006, 02-T-3007), N2 blanket gas regulator loops, hydrocarbon skimming drain headers, booster centrifugal pumps, and positive-displacement high-pressure water injection pumps with pulsation dampeners.',
    descriptionFr:
      'Schéma P&ID détaillé couvrant trois réservoirs de décantation de 600 BBL, régulation d’inertage à l’azote N2, collecteurs d’écrémage d’huile, pompes de gavage et pompes volumétriques d’injection HP équipées d’amortisseurs de pulsation.',
    keyParameters: [
      { label: 'Storage Vessels', labelFr: 'Capacités de Stockage', value: '3x 600 BBL Settling Tanks (12′-0" H x 9′-0" W x 28′-0" L)' },
      { label: 'Booster Pumps', labelFr: 'Pompes de Gavage', value: '02-P-3006 A/B Produced Water Booster Pumps (4,000 BPD @ 128 FT TDH)' },
      { label: 'Injection Pumps', labelFr: 'Pompes d’Injection HP', value: '02-P-3007 A/B Reciprocating Triplex Pumps (2,000 BPD @ 1,028 FT TDH)' },
      { label: 'Blanket Gas System', labelFr: 'Inertage Azote', value: 'N2 supply header with PCV and emergency relief back to skim oil' },
      { label: 'Pumping Shed Safeguarding', labelFr: 'Sécurité Salle Pompes', value: 'Pulsation dampeners, suction strainers, PSVs & drain to evaporation pit' },
    ],
    engineeringHighlights: [
      'Designed complete cascading siphon and skim oil recovery piping returning free oil to skim oil tank.',
      'Specified level transmitters (LT), level alarms (LAHH/LALL), and motor shutdown interlocks to prevent cavitation.',
      'Equipped positive displacement injection pumps with suction and discharge pulsation dampeners to suppress water hammer.',
    ],
    engineeringHighlightsFr: [
      'Conception du système de siphon en cascade et de récupération de l’huile libre vers le bac d’écrémage.',
      'Spécification des transmetteurs de niveau, alarmes LAHH/LALL et asservissements de déclenchement contre la cavitation.',
      'Installation d’amortisseurs de pulsation à l’aspiration et au refoulement des pompes triplex pour éliminer les coups de bélier.',
    ],
  },
  {
    id: 'proof-pid-skim-oil',
    title: 'P&ID: Sump Pit & Skim Oil Tank Package (T-7714 & P-4613)',
    titleFr: 'P&ID : Fosse de Rétention & Bac d’Écrémage (T-7714 & P-4613)',
    category: 'P&ID',
    categoryFr: 'Schémas Tuyauterie & Instrumentation (P&ID)',
    tag: 'T-7714 Skim Oil & P-4613 Skim Pump',
    imageSrc: '/assets/aistudio/P_IDs_7733e3de.PNG',
    project: 'Refining & Turnkey Utilities Facility',
    projectFr: 'Utilités de Raffinage & Complexe Clé en Main',
    client: 'Fox Oil Company / SPEC Oil and Gas',
    software: 'AutoCAD P&ID Deliverable Suite',
    description:
      'Piping & Instrumentation Diagram for Sump Pit S-84032 (10′-0" x 10′-0" x 4′-0") and Skim Oil Tank T-7714 (1,700 BBL capacity, 12′-0" W x 9′-0" H x 36′-0" L). Features continuous oil skimming weir, level instruments, and 525 GPM skim pump transfer station.',
    descriptionFr:
      'Schéma P&ID pour fosse S-84032 et bac d’écrémage T-7714 (1 700 BBL). Comprend un déversoir d’écrémage continu, une instrumentation complète et une station de pompage de 525 GPM.',
    keyParameters: [
      { label: 'Skim Oil Tank T-7714', labelFr: 'Bac d’Écrémage T-7714', value: '1,700 BBLS capacity (12′-0" W x 9′-0" H x 36′-0" L)' },
      { label: 'Skim Pump P-4613', labelFr: 'Pompe d’Écrémage P-4613', value: '525 GPM @ 100 FT TDH, 20 HP Motor' },
      { label: 'Sump Pit S-84032', labelFr: 'Fosse S-84032', value: '10′-0" x 10′-0" x 4′-0" Concrete reinforced catchment' },
      { label: 'Instrumentation', labelFr: 'Instrumentation', value: 'Multi-level switches (LSHH/LSLL), sight glass, flame arrestor vents' },
    ],
    engineeringHighlights: [
      'Incorporated dual compartment design (Oil section and Water section) separated by adjustable height weir plate.',
      'Designed pump auto-start on high liquid level and trip on low level to prevent dry running of Skim Pump P-4613.',
      'Included drain manifold routed back to sump pit for maintenance cleanout without environmental release.',
    ],
    engineeringHighlightsFr: [
      'Compartimentage double (section huile et section eau) séparé par une lame déversante réglable.',
      'Démarrage automatique sur niveau haut et arrêt sur niveau bas protégeant la pompe P-4613 contre la marche à sec.',
      'Collecteur de purge vers la fosse évitant tout rejet liquide dans l’environnement.',
    ],
  },
  {
    id: 'proof-blowdown-hysys',
    title: 'Aspen HYSYS Blowdown & Depressuring Orifice Dynamic Model',
    titleFr: 'Modèle Dynamique de Dépressurisation & Orifice de Torche Aspen HYSYS',
    category: 'Safety & Relief',
    categoryFr: 'Sécurité des Procédés & Torches',
    tag: 'Dynamic Depressuring Utility',
    imageSrc: '/assets/aistudio/Blowdown_Calculation_a3624867.PNG',
    project: 'SGPF & Turnkey Facility Safeguarding',
    projectFr: 'Sécurisation des Installations SGPF & Clés en Main',
    client: 'Mari Energies / Confidential Operator',
    software: 'Aspen HYSYS Dynamics / Blowdown Utility',
    description:
      'Dynamic depressuring simulation of process vessels under fire emergency and operational blowdown scenarios per API 521. Evaluates pressure transient, orifice sizing, peak flare flowrate, and minimum vessel wall temperature (MDMT) during rapid Joule-Thomson refrigeration.',
    descriptionFr:
      'Simulation dynamique de dépressurisation d’urgence (feu et blowdown opérationnel) selon l’API 521. Calcul des transitoires de pression, dimensionnement d’orifice calibré, débit de pointe à la torche et température minimale de paroi (MDMT).',
    keyParameters: [
      { label: 'Blowdown Subsystem', labelFr: 'Sous-système de Décharge', value: 'Inlet-1 -> Main Vessel -> Vapor & Liquid Outlet Boundaries' },
      { label: 'Depressuring Mechanism', labelFr: 'Organe de Détente', value: 'Calibrated restriction orifice (RO) sizing to flare header' },
      { label: 'API 521 Criterion', labelFr: 'Critère API 521', value: 'Depressuring to 50% design pressure or 100 psig in 15 minutes' },
      { label: 'Thermodynamics', labelFr: 'Thermodynamique', value: 'Peng-Robinson / Non-equilibrium flash calculating low-temp chilling' },
    ],
    engineeringHighlights: [
      'Determined minimum metal design temperature (MDMT) to protect against low-temperature embrittlement and catastrophic brittle fracture.',
      'Optimized restricted orifice bore diameter to balance emergency relief time against peak hydraulic load on the flare tip.',
      'Simulated concurrent liquid drain and vapor venting.',
    ],
    engineeringHighlightsFr: [
      'Détermination de la température minimale de conception métal (MDMT) pour prévenir la rupture fragile par cryogénie Joule-Thomson.',
      'Optimisation du diamètre de l’orifice pour concilier vitesse de décharge et capacité maximale du nez de torche.',
      'Modélisation simultanée des sorties vapeur et liquide sous régime transitoire.',
    ],
  },
  {
    id: 'proof-line-sizing',
    title: 'Aspen Line Sizing Manager (Multiphase & High Pressure Lines)',
    titleFr: 'Gestionnaire de Dimensionnement des Lignes Aspen (Polyphasique & HP)',
    category: 'Equipment Sizing',
    categoryFr: 'Dimensionnement Équipements',
    tag: 'Line Sizing Manager-1 Table',
    imageSrc: '/assets/aistudio/Line_Sizing_a7a56d18.PNG',
    project: 'Process Facility Hydraulics & Debottlenecking',
    projectFr: 'Hydraulique des Procédés & Déboulonnage',
    client: 'Mari Energies / SPEC Oil & Gas',
    software: 'Aspen HYSYS Line Sizing Manager V14.0',
    description:
      'Hydraulic rating and pipe sizing verification across carbon steel lines (Line-22, Line-123, Line-124, Line-125, Line-126, Line-127, Line-129). Evaluates flow regime (Stratified vs Vapour Only), velocity gradient, pressure gradient, and API RP 14E kinetic energy (ρv²) limits.',
    descriptionFr:
      'Vérification hydraulique et dimensionnement de tuyauteries en acier carbone (Line-22 8" Sch 60, Line-123, 124, 125, etc.). Analyse du régime d’écoulement (stratifié vs gaz seul), gradient de vitesse, pertes de charge et critères de vitesse d’érosion API RP 14E.',
    keyParameters: [
      { label: 'Line-22 (Stream 101)', labelFr: 'Ligne-22 (Courant 101)', value: '8" Sch 60 Carbon Steel (ID 7.813") | Multiphase Erosion Criterion | ρv² = 2399 lb/ft-s²' },
      { label: 'Line-123 (Stream 103)', labelFr: 'Ligne-123 (Courant 103)', value: '8" Sch 60 Carbon Steel (ID 7.813") | Gas Sizing | Velocity 52.4 ft/s' },
      { label: 'Line-124 (Stream 106)', labelFr: 'Ligne-124 (Courant 106)', value: '6" STD Carbon Steel (ID 6.065") | HP Gas | Velocity 17.7 ft/s | ρv² = 1361' },
      { label: 'Line-125 (Stream 107)', labelFr: 'Ligne-125 (Courant 107)', value: '6" STD Carbon Steel (ID 6.065") | Multiphase Erosion Criterion | Velocity 21.3 ft/s' },
      { label: 'Line-126/127', labelFr: 'Lignes-126/127', value: '3" Sch 40 & STD Carbon Steel (ID 3.068") | Rating & Design verified' },
      { label: 'Line-129 (Stream 112)', labelFr: 'Ligne-129 (Courant 112)', value: '2" STD Carbon Steel (ID 2.067") | Liquid drain rating verified' },
    ],
    engineeringHighlights: [
      'Every assessed line satisfies API RP 14E allowable erosion velocity and pressure drop guidelines ("Criteria Met?: Met").',
      'Assessed multiphase stratified regime to ensure no slugging or liquid accumulation in overhead transfer lines.',
      'Maintained momentum parameter ρv² well below industry vibration limits (3,000 to 5,000 lb/ft-s²).',
    ],
    engineeringHighlightsFr: [
      'Toutes les lignes vérifiées respectent les limites d’érosion et de perte de charge selon l’API RP 14E (« Criteria Met?: Met »).',
      'Contrôle du régime polyphasique stratifié pour exclure tout bouchon ou accumulation liquide en tête de colonne.',
      'Maintien du paramètre d’énergie cinétique ρv² bien en dessous des limites vibratoires (3 000 à 5 000 lb/ft-s²).',
    ],
  },
];

export const PROJECTS: ProjectExperience[] = [
  {
    id: 'proj-fox-oil-6500',
    title: '6,500 BPSD Naphtha Reforming Gasoline Complex',
    titleFr: 'Complexe de Reformat d’Essence & Hydrotraitement 6 500 BPSD',
    company: 'SPEC Oil and Gas',
    clientOrOperator: 'Fox Oil Company',
    location: 'Sulaymaniyah, Kurdistan Region, Iraq',
    timeline: 'Nov 2022 - Nov 2023',
    capacity: '6,500 BPSD High-Octane Gasoline',
    overview:
      'Major turnkey EPCC project awarded by Fox Oil Company for engineering, procurement, construction, and commissioning of a 6,500 BPD grassroots gasoline production complex in Sulaymaniyah, Iraq. Encompassed utilities, tank farm, truck loading racks, and Naphtha HDT unit.',
    overviewFr:
      'Grand projet clé en main EPCC attribué par Fox Oil Company pour l’ingénierie, l’approvisionnement, la construction et la mise en service d’un complexe de production d’essence de 6 500 BPD à Sulaymaniyah, Irak, comprenant utilités, stockage et unité Naphtha HDT.',
    roleAndContributions: [
      'Performed steady-state process simulation on Aspen HYSYS and ProMax for the Naphtha Hydrotreating (HDT) section.',
      'Conducted thermal and hydraulic design of shell-and-tube heat exchangers using Aspen Exchanger Design and Rating (EDR).',
      'Developed and marked up P&IDs and Process Flow Diagrams (PFDs) through detailed HAZOP review stages.',
      'Prepared plant Operating Manuals, Line Lists, Valve Schedules, and Instrument Process Data Sheets.',
    ],
    roleAndContributionsFr: [
      'Simulation en régime permanent sur Aspen HYSYS et ProMax pour la section d’hydrotraitement du naphta (HDT).',
      'Dimensionnement thermique et hydraulique des échangeurs à faisceau tubulaire sur Aspen EDR.',
      'Élaboration et révision des P&ID et PFD lors des revues d’analyse de risques HAZOP.',
      'Rédaction des manuels d’exploitation, listes de tuyauteries, nomenclatures de vannes et fiches techniques d’instruments.',
    ],
    softwareUsed: ['Aspen HYSYS', 'ProMax (Bryan Research)', 'Aspen EDR', 'AutoCAD P&ID', 'MS Excel'],
    equipmentHandled: ['Naphtha HDT Reactor', 'Stripper Column', 'TEMA Shell & Tube Exchangers', 'Storage Tanks', 'Truck Loading Arms', 'Centrifugal Pumps'],
    deliverables: ['P&IDs & PFDs', 'Heat & Material Balances (H&MB)', 'Aspen EDR Thermal Datasheets', 'Operating & Commissioning Manual', 'Line & Valve Schedules'],
    deliverablesFr: ['Plans P&ID & PFD', 'Bilans Matière & Énergie (H&MB)', 'Fiches Thermiques Aspen EDR', 'Manuel d’Exploitation & Démarrage', 'Listes de Lignes & Vannes'],
    badgeColor: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
  },
  {
    id: 'proj-spec-12000-gasoline',
    title: '12,000 BPSD Modular Gasoline Production Complex',
    titleFr: 'Complexe Modulaire de Production d’Essence 12 000 BPSD',
    company: 'SPEC Oil and Gas',
    clientOrOperator: 'Confidential Refining Operator',
    location: 'EPCC Turnkey / Modular Skid Fabrication',
    timeline: 'Nov 2022 - Nov 2023',
    capacity: '12,000 BPSD Gasoline Facility',
    overview:
      'Full-scope EPCC turnkey project delivering design engineering, project management, modular skid procurement, fabrication, construction, and commissioning for a 12,000 BPSD gasoline production complex. Main process units included Naphtha HDT, Splitter, C5/C6 Isomerization, and Semi-Regen Reformer.',
    overviewFr:
      'Projet clé en main EPCC complet : ingénierie de conception, fabrication modulaire de skids, approvisionnement et commissioning d’une raffinerie modulaire de 12 000 BPSD (unités HDT, Splitter, Isomérisation C5/C6 et Reformeur semi-régénératif).',
    roleAndContributions: [
      'Assisted in process simulation and stream property validation for Naphtha Splitter and C5/C6 Isomerization trains.',
      'Calculated utility balances (cooling water, low/medium pressure steam, instrument air, nitrogen purging).',
      'Reviewed vendor equipment packages including chemical injection skids, modular compressor packages, and heat exchangers.',
      'Generated line sizing tables, pump hydraulic calculations (NPSHa vs NPSHr), and control valve data sheets.',
    ],
    roleAndContributionsFr: [
      'Participation à la simulation des procédés et validation des propriétés de fluides pour le splitter et l’isomérisation C5/C6.',
      'Calcul des bilans d’utilités (eau de refroidissement, vapeur BP/MP, air instrument, azote, gaz combustible).',
      'Revue technique des packages fournisseurs (skids d’injection chimique, compresseurs modulaires, échangeurs).',
      'Établissement des notes de calcul hydraulique des pompes (NPSHd vs NPSHr) et fiches de vannes de régulation.',
    ],
    softwareUsed: ['Aspen HYSYS', 'Aspen EDR', 'ProMax', 'AutoCAD P&ID', 'Excel Hydraulics'],
    equipmentHandled: ['Semi-Regen Reformer', 'Splitter Column', 'Isomerization Reactors', 'Reboiler Furnaces', 'Modular Pump Skids', 'Recycle Gas Compressors'],
    deliverables: ['Utility Consumption Schedules', 'P&IDs Rev C/D', 'Pump & Control Valve Sizing Sheets', 'Tie-In Schedules', 'Pre-Commissioning Checklists'],
    deliverablesFr: ['Bilans de Consommation d’Utilités', 'P&ID Rév C/D', 'Fiches Pompes & Vannes de Régulation', 'Calendriers de Raccordement', 'Check-lists Pré-mise en service'],
    badgeColor: 'border-orange-500/30 text-orange-400 bg-orange-500/10',
  },
  {
    id: 'proj-beda-libya',
    title: 'Beda Oil Field - 5 Gathering & Production Stations',
    titleFr: 'Champ Pétrolifère de Beda - 5 Stations de Collecte & Séparation',
    company: 'Brillante Engineers',
    clientOrOperator: 'Beda Oil Field Operations (Libya)',
    location: 'Sirte Basin, Libya',
    timeline: 'Nov 2023 - 2024',
    capacity: 'Field Gathering & Separation Network',
    overview:
      'Field modernization and process safeguarding review for all five strategic gathering and separation stations across the Beda Oil Field (DOR, GS-01, GS-02, GS-03, and KOTLA). Project focused on process safety, ESD architecture, and operational integrity.',
    overviewFr:
      'Modernisation et sécurisation des procédés pour les 5 stations centrales de collecte et séparation du champ de Beda en Libye (DOR, GS-01, GS-02, GS-03, KOTLA). Axé sur la sécurité des procédés, l’architecture d’arrêt d’urgence ESD et l’intégrité.',
    roleAndContributions: [
      'Authored the complete Control and Shutdown Philosophy documents for all five central gathering stations (DOR, GS-01, GS-02, GS-03, KOTLA).',
      'Structured Cause & Effect (C&E) logic matrices linking field transmitters, HIPPS loops, ESD valves, and blowdown depressuring valves.',
      'Defined unit shutdown levels (Unit Shutdown, Station Shutdown, Emergency Depressuring / Total Field Shutdown).',
      'Assessed relief and flare routing to ensure safe, contained vent disposal during emergency scenarios.',
    ],
    roleAndContributionsFr: [
      'Rédaction intégrale des Philosophies de Contrôle et d’Arrêt d’Urgence pour les 5 stations de collecte (DOR, GS-01, GS-02, GS-03, KOTLA).',
      'Structuration des matrices de Cause à Effet (C&E) reliant transmetteurs, boucles HIPPS, vannes ESD et vannes de dépressurisation BDV.',
      'Définition des niveaux d’arrêt (arrêt d’unité, arrêt de station, dépressurisation d’urgence et arrêt général du champ).',
      'Vérification des lignes de décharge vers les torches pour garantir un rejet confiné et sûr.',
    ],
    softwareUsed: ['MS Word Engineering Authoring', 'MS Excel Cause & Effect Matrices', 'AutoCAD P&ID'],
    equipmentHandled: ['Production Separators', 'Test Separators', 'ESD Valves', 'Blowdown Valves (BDVs)', 'Flare Headers', 'Field Gathering Manifolds'],
    deliverables: ['Control & Shutdown Philosophy Document', 'Cause & Effect Logic Diagrams', 'ESD Architecture Matrix', 'Process Safety Hazard Reviews'],
    deliverablesFr: ['Document de Philosophie de Contrôle & Arrêt', 'Diagrammes Logiques Cause & Effet', 'Matrice d’Architecture ESD', 'Revues de Sécurité des Procédés'],
    badgeColor: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
  },
  {
    id: 'proj-tatweer-bapco',
    title: 'Tatweer Petroleum / BAPCO Upstream - Recovery & Field Simulation',
    titleFr: 'Tatweer Petroleum / BAPCO Upstream - Récupération & Simulation Gisement',
    company: 'Brillante Engineers',
    clientOrOperator: 'Tatweer Petroleum – BAPCO Upstream',
    location: 'Kingdom of Bahrain',
    timeline: '2024',
    capacity: 'Kingdom-Wide Upstream Oil & Natural Gas Field',
    overview:
      'Tatweer Petroleum, the upstream exploration and production arm of BAPCO, leads Bahrain’s energy security through enhanced oil recovery (EOR) and gas optimization across mature reservoirs. Project delivered rigorous seasonal simulation cases.',
    overviewFr:
      'Branche amont de BAPCO assurant l’exploration et la production à Bahreïn. Modélisation rigoureuse sur Aspen HYSYS des cas saisonniers extrêmes pour maximiser la récupération d’huile sur gisements matures.',
    roleAndContributions: [
      'Assisted Senior Process Engineer in conducting extensive Aspen HYSYS process simulations across full operational cases: Low Pressure (LP) and High Pressure (HP) modes.',
      'Modeled seasonal climate extremes (Summer high ambient up to 48°C vs Winter low ambient conditions) to predict condenser duties and compressor suction temperatures.',
      'Analyzed gas-oil ratio (GOR) variations from mature field wells to evaluate separator performance and capacity constraints.',
    ],
    roleAndContributionsFr: [
      'Assistance au Senior Process Engineer pour la simulation approfondie sur Aspen HYSYS en modes Haute Pression (HP) et Basse Pression (LP).',
      'Modélisation des extrêmes climatiques (été à 48°C vs hiver) pour anticiper les charges des aéroréfrigérants et risques d’hydrates.',
      'Analyse des variations de ratio GOR sur puits matures pour évaluer la capacité des séparateurs.',
    ],
    softwareUsed: ['Aspen HYSYS V14.0', 'Aspen EDR', 'Proprietary Upstream Sizing Sheets'],
    equipmentHandled: ['Inlet Separation Skids', 'Gas Compression Trains', 'Air Coolers / Fin-Fans', 'Gas Lift Manifolds', 'Dehydration Towers'],
    deliverables: ['HYSYS Simulation Workbooks (HP/LP/Summer/Winter)', 'Seasonal Process Design Basis Memo', 'Hydrate Inhibition Calculations', 'Debottlenecking Summary'],
    deliverablesFr: ['Modèles HYSYS (HP/LP/Été/Hiver)', 'Note de Base de Conception Saisonnière', 'Calculs d’Inhibition d’Hydrates', 'Synthèse de Déboulonnage'],
    badgeColor: 'border-blue-500/30 text-blue-400 bg-blue-500/10',
  },
  {
    id: 'proj-sujawal-debottlenecking',
    title: 'SGPF 25 & 30 MMSCFD Debottlenecking & Adequacy Assessment',
    titleFr: 'SGPF - Étude d’Adéquation & Déboulonnage 25 & 30 MMSCFD',
    company: 'Brillante Engineers',
    clientOrOperator: 'Mari Energies (Formerly Mari Petroleum)',
    location: 'Sujawal, Sindh, Pakistan',
    timeline: '2024',
    capacity: '25 to 30 MMSCFD (Debottlenecking for Shah Bandar 40 MMSCFD addition)',
    overview:
      'With the addition of Shah Bandar gas volume (40 MMSCFD), Mari Energies conducted an extensive process adequacy assessment of the installed facility/processing equipment at Sujawal Gas Processing Facility (SGPF) for 25 and 30 MMSCFD, followed by remedial debottlenecking measures.',
    overviewFr:
      'Évaluation d’adéquation des équipements installés à l’usine de Sujawal (SGPF) pour passer de 25 à 30 MMSCFD suite à l’apport du gisement de Shah Bandar, avec préconisations de déboulonnage.',
    roleAndContributions: [
      'Conducted adequacy assessment and rating calculations for existing Oil and Gas Separators, ensuring velocities satisfy Souders-Brown and API 12J standards.',
      'Modeled and rated existing Heat Exchangers (gas-gas heat exchangers, reboilers, coolers) using Aspen Exchanger Design and Rating (EDR V14.0).',
      'Assessed Amine and Glycol Absorber column adequacy for flooding, weeping, and pressure drop under expanded throughput.',
      'Evaluated piping hydraulics and line sizing using Aspen Line Sizing Manager to prevent exceeding API RP 14E erosion limits.',
      'Executed PSV relief rate calculations and Flare System Adequacy study using Aspen Flare System Analyzer V14.0.',
    ],
    roleAndContributionsFr: [
      'Évaluation d’adéquation des séparateurs huile-gaz selon Souders-Brown et API 12J.',
      'Modélisation et vérification des échangeurs de chaleur sur Aspen EDR V14.0.',
      'Vérification des colonnes d’absorption d’amines et glycol (engorgement, entraînement, perte de charge).',
      'Dimensionnement des tuyauteries sur Aspen Line Sizing Manager selon l’API RP 14E.',
      'Calcul des débits de décharge des soupapes PSV et étude de capacité de la torche sur Aspen Flare System Analyzer V14.0.',
    ],
    softwareUsed: ['Aspen HYSYS V14.0', 'Aspen Flare System Analyzer V14.0', 'Aspen EDR V14.0', 'Proprietary Excel Sizing Sheets', 'AutoCAD P&ID'],
    equipmentHandled: ['3-Phase Inlet Separator (V-0001)', 'Amine Contactor Column', 'TEG Contactor', 'Shell & Tube Exchangers', 'PSVs & Rupture Disks', 'Flare Knock-Out Drum & Flare Tip'],
    deliverables: ['Equipment Adequacy Study Report', 'Flare Network Hydraulic Summary', 'Aspen EDR Exchanger Rating Sheets', 'Line Sizing Verification Dossier', 'PSV Sizing Calculation Sheets'],
    deliverablesFr: ['Rapport d’Adéquation des Équipements', 'Note Hydraulique du Réseau Torche', 'Feuilles d’Échangeurs Aspen EDR', 'Dossier de Dimensionnement Tuyauteries', 'Notes de Calcul PSV'],
    badgeColor: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10',
  },
  {
    id: 'proj-sujawal-phase2',
    title: 'SGPF Phase-2 30 MMSCFD Expansion Processing Train',
    titleFr: 'Extension Phase-2 Train 30 MMSCFD Complexe Gazier SGPF',
    company: 'Brillante Engineers',
    clientOrOperator: 'Mari Energies Limited / Jereh Oil & Gas',
    location: 'Sujawal, Sindh, Pakistan',
    timeline: '2024 - Aug 2025',
    capacity: '30 MMSCFD Greenfield Train Expansion',
    overview:
      'Turnkey greenfield facility layout and process engineering for Phase-2 expansion at SGPF. Processes regional feed gas from Jhim East X-1, Pateji X-1 via a 40 km pipeline, incorporating feed filtration, amine sweetening, glycol dehydration, and hydrocarbon dew point control.',
    overviewFr:
      'Ingénierie de procédé pour la nouvelle tranche Phase-2 de 30 MMSCFD à SGPF, traitant le gaz des gisements régionaux avec unités de filtration, désacidification aux amines, déshydratation au TEG et contrôle du point de rosée.',
    roleAndContributions: [
      'Developed detailed steady-state simulation models for Glycol Dehydration Unit (TEG GDU) to achieve water dew point < -15°C.',
      'Simulated Amine Sweetening Unit (ASU) using activated MDEA/DEA for selective acid gas removal to pipeline specifications.',
      'Carried out process sizing of Feed Gas Filter Separator, TEG Contactor, Amine Flash Drum, and Hydrocarbon Dew Point Control Unit (HCDU).',
      'Drafted and approved comprehensive P&IDs, PFDs, and Utility Distribution Diagrams with engineering contractor Jereh Oil & Gas.',
    ],
    roleAndContributionsFr: [
      'Modélisation en simulation de l’unité de déshydratation au glycol (TEG GDU) pour atteindre un point de rosée eau < -15°C.',
      'Simulation de l’unité d’amines (ASU) pour élimination sélective de H2S et CO2 aux spécifications gazoduc.',
      'Dimensionnement du séparateur-filtre d’entrée, de la colonne TEG, du ballon flash d’amines et de l’unité HCDU.',
      'Élaboration et validation des P&ID, PFD et schémas d’utilités avec Jereh Oil & Gas.',
    ],
    softwareUsed: ['Aspen HYSYS V14.0', 'ProMax', 'Aspen EDR V14.0', 'AutoCAD P&ID', 'MS Excel'],
    equipmentHandled: ['Feed Gas Filter Separator', 'Amine Contactor & Regenerator', 'TEG Contactor & Reboiler', 'Chiller / MRU Evaporator', 'Condensate Stabilizer Column'],
    deliverables: ['Phase-2 Simulation Model (HYSYS)', 'Complete P&IDs & PFDs', 'Equipment Process Datasheets', 'Chemical Injection & Solvent Consumption Summary'],
    deliverablesFr: ['Modèle de Simulation Phase-2 (HYSYS)', 'Ensemble Complet P&ID & PFD', 'Fiches Techniques Procédé', 'Bilan Consommations Solvants & Produits Chimiques'],
    badgeColor: 'border-violet-500/30 text-violet-400 bg-violet-500/10',
  },
  {
    id: 'proj-adnoc-total-ruwais',
    title: 'ADNOC & TotalEnergies - Ruwais LNG & Ruwais Diyab VRU',
    titleFr: 'ADNOC & TotalEnergies - GNL Ruwais & Unité VRU Ruwais Diyab',
    company: 'Brillante Engineers',
    clientOrOperator: 'ADNOC & TotalEnergies Joint Venture',
    location: 'Al Ruwais, Abu Dhabi, UAE',
    timeline: '2024 - Aug 2025',
    capacity: 'World-Scale LNG Export & Unconventional Gas Concession',
    overview:
      'Strategic partnership between Abu Dhabi National Oil Company (ADNOC) and TotalEnergies in Al Ruwais covering two flagship projects: Ruwais LNG Project and Ruwais Diyab Unconventional Gas Concession. Scope focused on Gas Treatment and Vapor Recovery Units (VRU).',
    overviewFr:
      'Partenariat stratégique entre ADNOC et TotalEnergies à Al Ruwais pour le méga-projet Ruwais LNG et la concession de gaz non conventionnel de Diyab. Portait sur le traitement du gaz et les unités de récupération des vapeurs (VRU).',
    roleAndContributions: [
      'Executed process simulation of Gas Treatment systems and Vapor Recovery Units (VRU) utilizing Aspen HYSYS and ProMax in collaboration with ThermoDesign Canada.',
      'Modeled low-temperature flash drums, vent gas recompression compressors, and multi-stage condensable hydrocarbon recovery.',
      'Developed P&IDs and PFDs adhering to stringent ADNOC and TotalEnergies engineering standards (DEP / ADNOC Specs).',
      'Designed flare gas minimization strategies by recovering tank boil-off and flash gases back to fuel gas or export headers.',
    ],
    roleAndContributionsFr: [
      'Simulation des procédés de traitement du gaz et unités de récupération des vapeurs (VRU) sur Aspen HYSYS et ProMax avec ThermoDesign Canada.',
      'Modélisation des ballons flash basse température et compresseurs de réinjection des évents.',
      'Élaboration des P&ID et PFD conformes aux standards stricts d’ADNOC et de TotalEnergies (DEP / ADNOC Specs).',
      'Réduction des rejets à la torche par recyclage des vapeurs d’évaporation (BOG) vers le réseau fuel gas.',
    ],
    softwareUsed: ['Aspen HYSYS', 'ProMax', 'ThermoDesign Canada Suite', 'AutoCAD P&ID'],
    equipmentHandled: ['Vapor Recovery Compressors', 'Low-Temperature Separators', 'Acid Gas Removal Packages', 'Fuel Gas Conditioning Skids', 'Flare KOD'],
    deliverables: ['VRU Process Simulation Package', 'PFD & P&ID Drawings', 'Emission Minimization Report', 'Equipment Sizing Summary'],
    deliverablesFr: ['Dossier de Simulation VRU', 'Plans PFD & P&ID', 'Rapport de Minimisation des Émissions', 'Notes de Dimensionnement Équipements'],
    badgeColor: 'border-rose-500/30 text-rose-400 bg-rose-500/10',
  },
];

export const CAREER_HISTORY: CareerMilestone[] = [
  {
    period: 'Dec 2023 - Aug 2025',
    company: 'Brillante Engineers',
    role: 'Process Engineer',
    roleFr: 'Ingénieur Procédés',
    location: 'Consultancy & EPC Engineering Services',
    type: 'Full-Time Professional Experience',
    typeFr: 'Poste en CDI / Expérience Temps Plein',
    summary:
      'Led process engineering packages, hydraulic studies, simulation debottlenecking, and safety philosophy documentation for upstream and midstream clients across the Middle East, North Africa, and South Asia (Mari Energies, Tatweer Petroleum/BAPCO, ADNOC/TotalEnergies, Beda Oil Field Libya).',
    summaryFr:
      'Responsable de lots d’ingénierie procédés, études hydrauliques, déboulonnage sur simulation et philosophies de sécurité pour des clients amont et aval (Mari Energies, Tatweer Petroleum/BAPCO, ADNOC/TotalEnergies, Beda Oil Field Libye).',
    achievements: [
      'Executed full process adequacy & debottlenecking studies for SGPF facility expanding gas processing from 25 to 30 MMSCFD.',
      'Authored complete Control & Shutdown Philosophies for 5 oil gathering stations in Libya (Beda Oil Field).',
      'Developed Aspen HYSYS and ProMax simulation packages for TEG dehydration, amine sweetening, VRU, and seasonal HP/LP regimes.',
      'Rated 15+ shell-and-tube exchangers in Aspen EDR and sized relief systems in Aspen Flare System Analyzer.',
    ],
    achievementsFr: [
      'Réalisation des études complètes d’adéquation et déboulonnage du complexe SGPF pour extension de 25 à 30 MMSCFD.',
      'Rédaction des Philosophies de Contrôle & Arrêt d’Urgence pour 5 stations de collecte de pétrole en Libye.',
      'Modélisation sur Aspen HYSYS et ProMax pour la déshydratation TEG, le traitement aux amines et les régimes saisonniers.',
      'Vérification thermique de plus de 15 échangeurs sur Aspen EDR et dimensionnement de torches sur Flare System Analyzer.',
    ],
    technologies: ['Aspen HYSYS v14.0', 'ProMax', 'Aspen EDR', 'Aspen Flare System Analyzer', 'AutoCAD P&ID', 'API 521 / 14E / 12J'],
  },
  {
    period: 'Nov 2022 - Nov 2023',
    company: 'SPEC Oil and Gas',
    role: 'Trainee Process Design Engineer',
    roleFr: 'Ingénieur d’Études Procédés Stagiaire / Trainee',
    location: 'EPCC Turnkey Projects (Lahore / Dubai)',
    type: 'Full-Time Engineering EPCC Training & Execution',
    typeFr: 'Contrat Ingénieur Clé en Main EPCC',
    summary:
      'Directly contributed to world-class EPCC turnkey projects including the 6,500 BPSD Naphtha Reforming Complex (Fox Oil, Sulaymaniyah, Iraq) and 12,000 BPSD Modular Gasoline Complex. Gained deep mastery across simulation, P&ID creation, equipment datasheets, and operating manuals.',
    summaryFr:
      'Contribution directe aux projets clés en main EPCC : complexe de reformat de naphta 6 500 BPSD (Fox Oil, Irak) et raffinerie modulaire 12 000 BPSD. Maîtrise complète de la simulation, création de P&ID, fiches techniques et manuels opératoires.',
    achievements: [
      'Performed steady-state HYSYS and ProMax simulation of Naphtha Hydrotreating (HDT), Splitter, and Reformer units.',
      'Conducted thermal and hydraulic design of TEMA heat exchangers using Aspen EDR.',
      'Created and reviewed P&IDs, PFDs, Line Lists, Valve Schedules, and Operating Manuals through formal design reviews.',
      'Coordinated multi-disciplinary skid integration for modular gasoline production packages.',
    ],
    achievementsFr: [
      'Simulation en régime permanent sur Aspen HYSYS et ProMax des unités HDT, Splitter et Reformeur.',
      'Calcul thermique et hydraulique d’échangeurs TEMA sur Aspen EDR.',
      'Élaboration des P&ID, PFD, listes de lignes, nomenclatures de vannes et manuels d’opération.',
      'Coordination multidisciplinaire pour l’intégration des skids modulaires de production d’essence.',
    ],
    technologies: ['Aspen HYSYS', 'ProMax', 'Aspen EDR', 'AutoCAD P&ID', 'EPCC Turnkey Standards', 'TEMA / ASME Sec VIII'],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Process Simulation & Design Software',
    titleFr: 'Logiciels de Simulation & Conception de Procédés',
    skills: [
      { name: 'Aspen HYSYS (v14.0)', level: 'Advanced / Expert', levelFr: 'Avancé / Expert', context: 'Steady-state & dynamic models, depressuring/blowdown, GDU, ASU, compression trains', contextFr: 'Modèles permanent & dynamique, dépressurisation/blowdown, GDU, ASU, compression' },
      { name: 'ProMax (Bryan Research)', level: 'Advanced', levelFr: 'Avancé', context: 'Amine sweetening, glycol dehydration, kinetic modeling, hydrocarbon recovery', contextFr: 'Traitement amines, déshydratation glycol, modélisation cinétique' },
      { name: 'Aspen EDR (Exchanger Rating)', level: 'Advanced', levelFr: 'Avancé', context: 'TEMA shell & tube thermal/hydraulic rating, vibration analysis, fin-fans', contextFr: 'Dimensionnement thermique/hydraulique TEMA, analyse vibratoire' },
      { name: 'Aspen Flare System Analyzer (v14.0)', level: 'Proficient', levelFr: 'Maîtrisé', context: 'Relief network hydraulics, backpressure calculation, flare KOD and tip sizing', contextFr: 'Hydraulique réseau torche, contre-pressions, ballon KOD' },
      { name: 'ChemCAD & DWSim', level: 'Proficient', levelFr: 'Maîtrisé', context: 'Alternative thermodynamic simulators and physical properties validation', contextFr: 'Simulateurs thermodynamiques alternatifs et validation de bilans' },
      { name: 'AutoCAD Plant / AutoCAD 2D', level: 'Advanced', levelFr: 'Avancé', context: 'PFD, P&ID, UFD, BFD drafting, utility distribution diagrams, tie-in schedules', contextFr: 'Dessin PFD, P&ID, UFD, BFD, plans d’utilités et raccordements' },
      { name: 'HSep-Calc+ & Excel Engineering Tools', level: 'Expert', levelFr: 'Expert', context: '2/3-phase separator sizing, line sizing, orifice calculations, hydraulic balances', contextFr: 'Dimensionnement séparateurs 2/3 phases, tuyauteries, orifices' },
    ],
  },
  {
    title: 'Equipment Sizing & Process Hydraulics',
    titleFr: 'Dimensionnement d’Équipements & Hydraulique',
    skills: [
      { name: '2-Phase & 3-Phase Separators', level: 'Expert', levelFr: 'Expert', context: 'Horizontal & vertical vessels, demister pads, inlet vane diffusers, weirs, liquid retention', contextFr: 'Ballons horizontaux & verticaux, dévésiculeurs, aubes d’entrée, déversoirs' },
      { name: 'Line Sizing & Fluid Hydraulics', level: 'Expert', levelFr: 'Expert', context: 'API RP 14E erosion velocity limits, single-phase & multiphase pressure gradients, ρv² limits', contextFr: 'Vitesse d’érosion API RP 14E, gradients diphasiques, limites ρv²' },
      { name: 'Heat Transfer Equipment', level: 'Advanced', levelFr: 'Avancé', context: 'Shell & tube exchangers (TEMA), reboilers, gas coolers, aerial coolers (fin-fan)', contextFr: 'Échangeurs faisceau tubulaire (TEMA), rebouilleurs, aéroréfrigérants' },
      { name: 'Absorption & Distillation Columns', level: 'Advanced', levelFr: 'Avancé', context: 'Amine contactors, TEG dehydration towers, naphtha splitters, stabilizer columns', contextFr: 'Colonnes à garnissage/plateaux, contacteurs amines & TEG' },
      { name: 'Pumps & Compressors', level: 'Advanced', levelFr: 'Avancé', context: 'Centrifugal booster pumps, triplex injection pumps, reciprocating compressors, NPSHa', contextFr: 'Pompes centrifuges, pompes triplex volumétriques, compresseurs' },
      { name: 'Relief & Flare Systems', level: 'Advanced', levelFr: 'Avancé', context: 'API 520 / 521 PSV sizing, fire/blocked discharge cases, dynamic depressuring orifices', contextFr: 'Dimensionnement soupapes API 520/521, cas feu, dépressurisation' },
    ],
  },
  {
    title: 'Engineering Deliverables & Documentation',
    titleFr: 'Livrables d’Ingénierie & Documentation',
    skills: [
      { name: 'P&IDs, PFDs, UFDs, BFDs', level: 'Expert', levelFr: 'Expert', context: 'Complete symbol conventions, line numbering, control loops, safety interlocks, spec breaks', contextFr: 'Conventions de symboles, numérotation de lignes, boucles de régulation' },
      { name: 'Heat & Material Balances (H&MB)', level: 'Expert', levelFr: 'Expert', context: 'Rigorous stream compositions, physical properties, enthalpy and phase fractions', contextFr: 'Compositions rigoureuses des flux, propriétés physiques, fractions de phase' },
      { name: 'Control & Shutdown Philosophy', level: 'Advanced', levelFr: 'Avancé', context: 'Cause & Effect logic diagrams, ESD levels (0, 1, 2), interlocks, HIPPS', contextFr: 'Matrices Cause & Effet, niveaux d’arrêt d’urgence ESD (0, 1, 2)' },
      { name: 'Equipment Process Datasheets', level: 'Advanced', levelFr: 'Avancé', context: 'Vessels, pumps, heat exchangers, instruments, relief valves', contextFr: 'Fiches techniques d’équipements, instruments et soupapes' },
      { name: 'Operating & Commissioning Manuals', level: 'Proficient', levelFr: 'Maîtrisé', context: 'Normal operations, start-up/shutdown sequences, emergency procedures, troubleshooting', contextFr: 'Manuels de conduite, démarrages, arrêts et procédures d’urgence' },
    ],
  },
  {
    title: 'Industry Codes & Regulatory Standards',
    titleFr: 'Codes & Normes Industrielles Internationales',
    skills: [
      { name: 'API 520 / 521', level: 'Working Knowledge', levelFr: 'Maîtrisé', context: 'Sizing, selection, installation of pressure-relieving devices & disposal systems', contextFr: 'Dimensionnement soupapes de sûreté & réseaux de torche' },
      { name: 'API 14E', level: 'Working Knowledge', levelFr: 'Maîtrisé', context: 'Design & installation of offshore / onshore production platform piping systems', contextFr: 'Conception tuyauteries de plateformes & vitesse d’érosion' },
      { name: 'API 12J / GPSA Section 7', level: 'Working Knowledge', levelFr: 'Maîtrisé', context: 'Separation equipment sizing and gas processing engineering standards', contextFr: 'Dimensionnement des séparateurs gaz-huile-eau' },
      { name: 'ASME Section VIII Div 1 & B31.3', level: 'Working Knowledge', levelFr: 'Maîtrisé', context: 'Pressure vessel construction rules & process piping design codes', contextFr: 'Appareils sous pression & tuyauteries industrielles' },
      { name: 'TEMA Standards', level: 'Working Knowledge', levelFr: 'Maîtrisé', context: 'Tubular Exchanger Manufacturers Association design classes R, C, and B', contextFr: 'Standards des fabricants d’échangeurs tubulaires' },
    ],
  },
];
