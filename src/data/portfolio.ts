/**
 * Central portfolio data for Charan Mannava's portfolio.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Charan Mannava',
  displayName: 'Charan Mannava',
  firstName: 'CHARAN',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A CHARAN MANNAVA ORIGINAL',
  role: 'Full-Stack Developer',
  tagline: ['Full-Stack Developer', 'AI / ML', 'Java'],
  intro:
    'A B.Tech student in Electronics and Computer Science, specializing in Artificial Intelligence & Machine Learning (CGPA 8.92), and a full-stack developer building AI-powered platforms, payment systems, and multi-tenant SaaS with Java, Python, React, Node.js, and Docker.',
  location: 'Vijayawada, Andhra Pradesh',
  email: 'sainathmannava@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/charanmannava/',
    github: 'https://github.com/charanmannava',
  },
  resumePdf: '/assets/charanmann_resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Charan Mannava',
  },
  interests: ['System Design', 'Cloud Computing (AWS)', 'Machine Learning'],
};

export function getEmailComposeUrl(subject?: string) {
  const params = new URLSearchParams({ view: 'cm', fs: '1', to: profile.email });
  if (subject) params.set('su', subject);
  return `https://mail.google.com/mail/?${params.toString()}`;
}

export const education = [
  {
    school: 'KL University',
    place: 'Guntur',
    degree: 'B.Tech ECSE',
    period: 'August 2022 – May 2026',
    score: 'CGPA 8.92',
  },
  {
    school: 'Sri Chaitanya Junior College',
    place: 'Kakinada',
    degree: 'BIEAP — MPC',
    period: 'June 2021 – May 2023',
    score: 'Score 925/1000',
  },
];

export const experience = [
  {
    company: 'iNeuBytes',
    role: 'Web Developer Intern',
    place: 'Vijayawada, Andhra Pradesh',
    period: 'July 2024 – December 2024',
    points: [
      'Built and maintained backend REST API endpoints powering cart, checkout, and order management for a live multi-outlet restaurant ordering system.',
      'Implemented and tested online payment integration end-to-end, including transaction requests, payment status updates, and order confirmation logic.',
      'Added input validation and error handling on payment and order endpoints; collaborated with the team to debug production issues and ship fixes.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'policyguard-ai',
    title: 'PolicyGuard AI',
    year: '2026',
    genre: 'AI • NLP • LLM',
    logline: 'An AI-powered policy analysis platform across web, browser extension, mobile and desktop applications.',
    stack: ['Python', 'NLP', 'LLM', 'REST API'],
    build: [
      'Built an AI-powered policy analysis platform across web, browser extension, mobile, and desktop applications, processing 500+ policy documents with 92% accuracy and reducing manual review time by 60% across 8 policy categories.',
      'Engineered LLM-based Q&A, key-information extraction, and REST API integration for 10+ document types, enabling real-time policy insights and reducing decision turnaround time by 45%.',
    ],
    features: [
      'LLM-based Q&A over policy documents',
      'Key-information extraction',
      'REST API integration for 10+ document types',
      'Web, browser extension, mobile & desktop apps',
      'Real-time policy insights',
    ],
    metrics: [
      { value: '500+', label: 'policy documents processed' },
      { value: '92%', label: 'accuracy' },
      { value: '60%', label: 'less manual review time' },
      { value: '45%', label: 'faster decision turnaround' },
      { value: '8', label: 'policy categories' },
    ],
    // The resume links to https://github.com/charanmannava/PolicyGuard-AI, which is not public yet (404).
    // Add `github: 'https://github.com/charanmannava/PolicyGuard-AI',` back once the repo is public.
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'payment-gateway',
    title: 'Payment Gateway System',
    year: '2026',
    genre: 'Full-Stack • Fintech • Microservices',
    logline: 'A full-stack UPI & card payment gateway built around a strict payment state machine.',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'React', 'Docker'],
    build: [
      'Built full-stack UPI & card payment gateway processing 1,000+ transactions at 99.8% uptime with a strict payment state machine (processing → success/failed).',
      'Dockerized microservice architecture cut deployment setup by 70%; backend optimizations reduced API response time by 40% and tripled throughput under load.',
    ],
    features: [
      'UPI & card payments',
      'Strict payment state machine (processing → success / failed)',
      'Dockerized microservice architecture',
      'Backend optimizations for load',
    ],
    metrics: [
      { value: '1,000+', label: 'transactions processed' },
      { value: '99.8%', label: 'uptime' },
      { value: '70%', label: 'less deployment setup' },
      { value: '40%', label: 'faster API response' },
      { value: '3×', label: 'throughput under load' },
    ],
    github: 'https://github.com/charanmannava/Payment-Gateway-System',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'multi-tenant-saas',
    title: 'Multi-Tenant SaaS Platform',
    year: '2026',
    genre: 'SaaS • Security • DevOps',
    logline: 'Shared-database multi-tenancy with strict tenant isolation and 4-level JWT/RBAC.',
    stack: ['Node.js', 'React', 'PostgreSQL', 'Docker Compose'],
    build: [
      'Architected shared-database multi-tenancy for 50+ concurrent tenants with strict tenant_id isolation and 4-level JWT/RBAC, achieving zero unauthorized-access incidents across 200+ users.',
      'Implemented Docker Compose one-command deployment, reducing environment setup time from 45 minutes to under 2 minutes.',
    ],
    features: [
      'Shared-database multi-tenancy',
      'Strict tenant_id isolation',
      '4-level JWT / RBAC',
      'One-command Docker Compose deployment',
    ],
    metrics: [
      { value: '50+', label: 'concurrent tenants' },
      { value: '200+', label: 'users' },
      { value: '0', label: 'unauthorized-access incidents' },
      { value: '45m → <2m', label: 'environment setup time' },
    ],
    github: 'https://github.com/charanmannava/Multi-Tenant-SaaS-Platform-main',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
};

export const achievements: Achievement[] = [
  {
    id: 'nokia-hackathon',
    title: 'Semi-Finalist',
    org: 'Nokia Hackathon 2025',
    detail: 'Selected through competitive national selection — advanced DSA, algorithm optimization, and competitive coding.',
    laurel: 'Semi-Finalist',
  },
  {
    id: 'geeksforgeeks-hackathon',
    title: 'Semi-Finalist',
    org: 'GeeksforGeeks Hackathon 2024',
    detail: 'Selected through building an AI model — advanced DSA and algorithm optimization.',
    laurel: 'Semi-Finalist',
  },
  {
    id: 'redhat-ead',
    title: 'Red Hat EAD Certificate',
    org: 'Certificate Achievement',
    detail: 'Scored 889/1000 — top 2%.',
    laurel: 'Top 2%',
  },
  {
    id: 'competitive-coding',
    title: '250+ Problems Solved',
    org: 'LeetCode • GFG • CodeChef',
    detail: 'Solved 250+ problems across LeetCode, GeeksforGeeks, and CodeChef.',
    laurel: 'Competitive Coding',
  },
  {
    id: 'hackerrank',
    title: '3-Star Badges',
    org: 'HackerRank',
    detail: '3-star badges in C, Python, Java, and SQL.',
    laurel: 'Four Languages',
  },
];

export type Certification = { issuer: string; name: string };

export const certifications: Certification[] = [
  { issuer: 'NPTEL', name: 'Database Management System' },
  { issuer: 'NPTEL', name: 'Fundamentals of Artificial Intelligence' },
  { issuer: 'NPTEL', name: 'Deep Learning' },
  { issuer: 'AWS', name: 'AWS Certified AI Practitioner' },
  { issuer: 'AWS', name: 'AWS Academy Graduate – Cloud Foundations' },
  { issuer: 'MongoDB', name: 'MongoDB Certified Associate Developer' },
  { issuer: 'GitHub', name: 'GitHub Foundations' },
  { issuer: 'Pearson', name: 'IT Specialist – HTML and CSS' },
  { issuer: 'Oracle', name: 'Java Certified Foundations Associate' },
  { issuer: 'Oracle', name: 'Oracle Certified Foundations Associate – Database' },
  { issuer: 'Cisco', name: 'HTML Essentials' },
  { issuer: 'Cisco', name: 'CSS Essentials' },
  { issuer: 'Cisco', name: 'JavaScript Essentials 1' },
  { issuer: 'Cisco', name: 'JavaScript Essentials 2' },
  { issuer: 'Cisco', name: 'Python Essentials 1' },
  { issuer: 'Udemy', name: 'Microsoft Azure Hands-On Training (AZ-900, AZ-104, AZ-305)' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Java is the primary language',
    skills: [
      { name: 'Java', mono: 'Jv', note: 'Primary' },
      { name: 'Python', mono: 'Py' },
      { name: 'C', mono: 'C' },
      { name: 'C++', mono: 'C+' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces & the web platform',
    skills: [
      { name: 'React', mono: 'Re' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'JavaScript', mono: 'Js' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Server-side logic',
    skills: [
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
    ],
  },
  {
    id: 'infra',
    title: 'Infra & Tools',
    subtitle: 'Shipping & architecture',
    skills: [
      { name: 'Docker', mono: 'Dk' },
      { name: 'Docker Compose', mono: 'Dc' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'Microservices', mono: 'Ms' },
      { name: 'JWT Auth', mono: 'Jw' },
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'Postman', mono: 'Pm' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Indexing • Normalization',
    skills: [
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'MySQL', mono: 'My' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'CS Fundamentals',
    subtitle: 'The foundations',
    skills: [
      { name: 'DSA', mono: 'Ds' },
      { name: 'OS', mono: 'Os' },
      { name: 'CN', mono: 'Cn' },
      { name: 'DBMS', mono: 'Db' },
      { name: 'OOPs', mono: 'Oo' },
      { name: 'Collections', mono: 'Co' },
      { name: 'Multithreading', mono: 'Mt' },
    ],
  },
  {
    id: 'interests',
    title: 'Interests',
    subtitle: 'Coming soon to the series',
    skills: [
      { name: 'System Design', mono: 'Sd' },
      { name: 'Cloud Computing (AWS)', mono: 'Aw' },
      { name: 'Machine Learning', mono: 'Ml' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Java: ['Oracle Java Certified Foundations Associate', 'HackerRank 3-star'],
  Python: ['PolicyGuard AI', 'Cisco Python Essentials 1', 'HackerRank 3-star'],
  C: ['HackerRank 3-star'],
  React: ['Payment Gateway System', 'Multi-Tenant SaaS Platform'],
  HTML: ['Pearson IT Specialist – HTML and CSS', 'Cisco HTML Essentials'],
  CSS: ['Pearson IT Specialist – HTML and CSS', 'Cisco CSS Essentials'],
  JavaScript: ['Cisco JavaScript Essentials 1 & 2'],
  'Node.js': ['Payment Gateway System', 'Multi-Tenant SaaS Platform'],
  'Express.js': ['Payment Gateway System'],
  Docker: ['Payment Gateway System'],
  'Docker Compose': ['Multi-Tenant SaaS Platform'],
  'REST APIs': ['PolicyGuard AI'],
  Microservices: ['Payment Gateway System'],
  'JWT Auth': ['Multi-Tenant SaaS Platform'],
  'Git / GitHub': ['GitHub Foundations'],
  PostgreSQL: ['Payment Gateway System', 'Multi-Tenant SaaS Platform'],
  MongoDB: ['MongoDB Certified Associate Developer'],
  DBMS: ['NPTEL Database Management System', 'Oracle Database Foundations'],
  DSA: ['Nokia Hackathon 2025 Semi-Finalist', 'GeeksforGeeks Hackathon 2024 Semi-Finalist', '250+ problems solved'],
  'Cloud Computing (AWS)': ['AWS Certified AI Practitioner', 'AWS Academy Cloud Foundations'],
  'Machine Learning': ['B.Tech AI & ML', 'NPTEL Deep Learning'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: '2021 – 2023',
    synopsis: 'Intermediate years at Sri Chaitanya Junior College, Kakinada — Mathematics, Physics and Chemistry.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Foundation',
        description: 'BIEAP, MPC at Sri Chaitanya Junior College, Kakinada — finishing with a score of 925/1000.',
        tags: ['MPC', 'BIEAP'],
        runtime: 'Jun 2021 – May 2023',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: AI & ML',
    period: '2022 – 2026',
    synopsis: 'B.Tech ECSE at KL University, Guntur.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Engineer',
        description: 'B.Tech ECSE at KL University, Guntur — August 2022 to May 2026. CGPA 8.92.',
        tags: ['B.Tech ECSE', 'CGPA 8.92'],
        runtime: 'Aug 2022 – May 2026',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Red Hat EAD',
        description: 'Earned the Red Hat Enterprise Application Developer certificate with a score of 889/1000, placing in the top 2%.',
        tags: ['Red Hat EAD', '889/1000', 'Top 2%'],
        runtime: 'Certificate achievement',
        palette: crimson,
      },
      {
        code: 'S02 E03',
        title: 'The Problem Solver',
        description: 'Solved 250+ problems across LeetCode, GeeksforGeeks, and CodeChef, and earned HackerRank 3-star badges in C, Python, Java, and SQL.',
        tags: ['DSA', 'LeetCode', 'GFG', 'CodeChef', 'HackerRank'],
        runtime: '250+ problems',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'The Internship',
    period: '2024',
    synopsis: 'Web Developer Intern at iNeuBytes, building backend and payment features for the RR Durbar restaurant ordering platform.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Web Developer Intern',
        description: 'Built and maintained backend REST API endpoints for cart, checkout, and order management on a live multi-outlet restaurant ordering system.',
        tags: ['iNeuBytes', 'REST APIs', 'Backend'],
        runtime: 'Jul 2024 – Dec 2024',
        palette: ocean,
      },
      {
        code: 'S03 E02',
        title: 'The Payment Flow',
        description: 'Implemented and tested end-to-end online payments, transaction requests, payment status updates, and order confirmation.',
        tags: ['Payments', 'Checkout', 'Orders'],
        runtime: 'RR Durbar',
        palette: violet,
      },
      {
        code: 'S03 E03',
        title: 'The Production Fix',
        description: 'Added input validation and error handling to payment and order endpoints, and worked with the team to debug and ship production fixes.',
        tags: ['Validation', 'Error Handling', 'Production'],
        runtime: 'iNeuBytes',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'Building Real Products',
    period: '2026',
    synopsis: 'Three Originals — an AI platform, a payment gateway and a multi-tenant SaaS — plus national-level recognition.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The AI Builder',
        description: 'PolicyGuard AI — LLM-based Q&A and key-information extraction across 500+ policy documents at 92% accuracy.',
        tags: ['Python', 'NLP', 'LLM'],
        runtime: '2026',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'The Architect',
        description: 'Payment Gateway System and Multi-Tenant SaaS Platform — state machines, microservices, tenant isolation and RBAC.',
        tags: ['Node.js', 'PostgreSQL', 'Docker'],
        runtime: '2026',
        palette: amber,
      },
      {
        code: 'S04 E03',
        title: 'The Hackathon Finalists',
        description: 'Semi-finalist at Nokia Hackathon 2025 and GeeksforGeeks Hackathon 2024.',
        tags: ['Nokia Hackathon 2025', 'GeeksforGeeks Hackathon 2024'],
        runtime: 'National stage',
        palette: ocean,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'The interests on the resume point to the next arc of the story.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description: 'Exploring System Design, Cloud Computing (AWS) and Machine Learning.',
        tags: ['System Design', 'AWS', 'Machine Learning'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary language', title: 'Java', detail: 'Listed as primary on the resume • Oracle certified', palette: amber },
  { label: 'The AI Original', title: 'PolicyGuard AI', detail: '500+ documents • 92% accuracy', palette: crimson },
  { label: 'Hackathon', title: 'Nokia 2025', detail: 'Semi-Finalist', palette: ocean },
  { label: 'Hackathon', title: 'GeeksforGeeks 2024', detail: 'Semi-Finalist', palette: violet },
  { label: 'Certificate achievement', title: 'Red Hat EAD', detail: '889/1000 · Top 2%', palette: jade },
  { label: 'Cloud credential', title: 'AWS AI Practitioner', detail: 'AWS Certified', palette: amber },
  { label: 'Problems solved', title: '250+', detail: 'Across LeetCode, GeeksforGeeks & CodeChef', palette: crimson },
  { label: 'The internship', title: 'Web Developer', detail: 'iNeuBytes · Jul–Dec 2024', palette: ocean },
  { label: 'Database credential', title: 'MongoDB', detail: 'Certified Associate Developer', palette: jade },
  { label: 'Current focus', title: 'System Design', detail: 'with Cloud (AWS) & Machine Learning', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · ECSE',
    lines: ['KL University, Guntur', 'August 2022 – May 2026'],
    chips: ['CGPA 8.92'],
  },
  {
    kicker: 'Skills',
    title: 'Java first.',
    lines: ['Python, C, C++ · React, Node.js, Express.js', 'PostgreSQL, MongoDB, MySQL · Docker, REST, JWT'],
    chips: ['Java', 'Python', 'React', 'Node.js', 'Docker', 'PostgreSQL'],
  },
  {
    kicker: 'Training',
    title: 'The Internship',
    lines: ['Web Developer Intern · iNeuBytes', 'Vijayawada, Andhra Pradesh · July–December 2024', 'Backend APIs · Payments · Restaurant ordering platform'],
  },
  {
    kicker: 'Projects',
    title: 'Three Originals',
    lines: ['PolicyGuard AI — 500+ documents, 92% accuracy', 'Payment Gateway — 1,000+ transactions, 99.8% uptime', 'Multi-Tenant SaaS — 50+ tenants, zero unauthorized access'],
  },
  {
    kicker: 'Achievements',
    title: 'Top Moments',
    lines: ['Semi-Finalist — Nokia Hackathon 2025', 'Semi-Finalist — GeeksforGeeks Hackathon 2024', 'Red Hat EAD — 889/1000, top 2%'],
  },
  {
    kicker: 'Certified',
    title: '16 Certifications',
    lines: ['AWS · MongoDB · Oracle · GitHub · Pearson', 'NPTEL · Cisco · Udemy'],
  },
  {
    kicker: 'Current mission',
    title: 'Now exploring',
    lines: ['System Design · Cloud Computing (AWS) · Machine Learning'],
  },
];

export type ProfileId = 'charan' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'charan',
    name: 'Charan Mannava',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
