import {
  CourseItem,
  EducationItem,
  ExperienceItem,
  Profile,
  Project,
  SkillGroup,
} from '../models/portfolio.model';

export const PROFILE: Profile = {
  name: 'Mina Magdy Shoukry',
  title: 'Frontend Developer',
  email: 'minamagdysh2017@gmail.com',
  phone: '+20 127 455 5726',
  location: 'Mourad St, Giza, Egypt',
  linkedin: 'https://www.linkedin.com/in/mina-magdy-551089178/',
  github: 'https://github.com/Mina-Magdy-94',
  taglines: [
    'Angular Specialist',
    'React & Vue Developer',
    'Responsive UI Craftsman',
    'Enterprise Application Builder',
  ],
  summary: [
    'Frontend Developer with a strong passion for building responsive web applications using modern frameworks and libraries.',
    'Currently at Oasis Computer Systems (since January 2025), shipping features for enterprise clients across insurance and leasing verticals.',
    'Previously at Trust Systems (Jan 2024 — Jan 2025), where I contributed to a large-scale bilingual healthcare platform.',
    'I.T.I graduate (Full Stack — MEARN) and former Frontend Intern at Algoriza.',
  ],
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Oasis Computer Systems',
    role: 'Frontend Developer',
    period: 'Jan 2025 — Present',
    highlights: [
      'Deliver front-end features for enterprise insurance and leasing platforms serving clients across the Gulf region.',
      'Integrated multiple payment gateways (Tap — Visa, Mastercard, Mada, Apple Pay, and Sadad) with secure payment flows.',
      'Built reusable UI systems, dynamic dashboards, and role-based access controls across products.',
      'Introduced full internationalization for English and Arabic across the platform.',
    ],
  },
  {
    company: 'Trust Systems',
    role: 'Frontend Developer',
    period: 'Jan 2024 — Jan 2025',
    highlights: [
      'Built responsive Arabic/English UI for Cura Sync — a healthcare platform for patients, doctors, laboratories, and admins.',
      'Implemented authentication, RBAC and protected flows using Angular Guards.',
      'Delivered reusable services and directives to improve maintainability across the codebase.',
      'Supported AI-assisted diagnosis and report-generation workflows.',
    ],
  },
  {
    company: 'Algoriza',
    role: 'Frontend Developer Intern',
    period: 'Oct 2023 — Dec 2023',
    highlights: [
      'Contributed to production front-end tasks alongside a senior engineering team.',
      'Practiced modern UI patterns, code review, and Git-based collaboration.',
    ],
  },
  {
    company: 'Freelance',
    role: 'Frontend Developer',
    period: 'Jan 2023 — Oct 2023',
    highlights: [
      'Delivered responsive marketing sites and interactive dashboards for individual clients.',
      'Owned the full lifecycle: requirements, design translation, implementation, and delivery.',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    slug: 'lease-platform',
    title: 'Lease Platform',
    company: 'Oasis Computer Systems',
    period: '2025',
    tagline: 'Enterprise leasing platform for a leading Saudi Arabian client.',
    description:
      'A tailored leasing platform built for a large enterprise client in Saudi Arabia. The application streamlines complex leasing workflows with a responsive, user-friendly interface, and was engineered for cross-browser compatibility and long-term maintainability.',
    role: 'As a Frontend Developer, I contributed to the front-end architecture and delivered responsive UI screens that model the leasing lifecycle. I worked closely with stakeholders to define UI requirements and ship continuous improvements based on user feedback.',
    highlights: [
      'Contributed to the front-end architecture of a leasing platform tailored for an enterprise client in Saudi Arabia.',
      'Created responsive UI screens covering the full leasing workflow with a focus on cross-browser compatibility.',
      'Collaborated directly with stakeholders to translate requirements into UI and iterate on feedback.',
      'Focused on a seamless user experience across device sizes.',
    ],
    stack: ['Angular', 'TypeScript', 'SCSS', 'Reactive Forms', 'PrimeNG'],
    category: 'Enterprise',
    accent: 'linear-gradient(135deg, #0ea5e9, #6366f1)',
    icon: 'bi-buildings',
  },
  {
    slug: 'ammant-aggregator',
    title: 'Ammant Aggregator',
    company: 'Oasis Computer Systems',
    period: '2025',
    tagline: 'Insurance aggregation platform with multi-gateway payments.',
    description:
      'An insurance aggregation platform that lets users compare offers across multiple providers and complete secure purchases end-to-end. The frontend focuses on complex form flows, robust validation, and a highly optimized rendering pipeline.',
    role: 'I played a key role in developing front-end features — designing complex forms and API integrations for quotation and submission, and building a scalable UI architecture. I integrated Tap Payment (Visa, Mastercard, Mada, Apple Pay) and Sadad to give users flexible, secure payment options.',
    highlights: [
      'Built complex reactive forms and validations for quotation and submission processes.',
      'Integrated multiple payment gateways via Tap (Visa, Mastercard, Mada, Apple Pay).',
      'Successfully integrated the Sadad payment system for additional payment flexibility.',
      'Architected a scalable UI and optimized rendering to boost overall platform performance.',
    ],
    stack: ['Angular', 'Signals', 'NgRx', 'Reactive Forms', 'Tap Payment', 'Sadad', 'PrimeNG'],
    category: 'Insurance',
    accent: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
    icon: 'bi-shield-check',
  },
  {
    slug: 'ammant-admin-panel',
    title: 'Ammant Admin Panel',
    company: 'Oasis Computer Systems',
    period: '2025',
    tagline: 'Bilingual internal admin dashboard with dynamic analytics.',
    description:
      'An intuitive internal admin dashboard used to manage insurance products, user access, and system configurations. The panel provides real-time analytics and role-based tooling used by internal operators.',
    role: 'I developed the admin dashboard end-to-end on the frontend — building reusable UI components, implementing role-based UI access controls, and designing dynamic charts that visualize regions, policy types, insurance companies, and policy volume over time. I also delivered a flexible role management feature and full English/Arabic i18n.',
    highlights: [
      'Built reusable UI components to keep the platform visually consistent and reduce overhead.',
      'Implemented role-based UI access controls for internal operators.',
      'Designed dynamic charts for regions, policy types (Comprehensive/TPL), companies, and volume.',
      'Delivered flexible role management: create, edit, and delete roles with customizable permissions.',
      'Added full internationalization support for English and Arabic (RTL).',
    ],
    stack: ['Angular', 'PrimeNG', 'Charts', 'i18n / RTL', 'Reactive Forms', 'SCSS'],
    category: 'Admin',
    accent: 'linear-gradient(135deg, #10b981, #0ea5e9)',
    icon: 'bi-speedometer2',
  },
  {
    slug: 'cura-sync',
    title: 'Cura Sync',
    company: 'Trust Systems',
    period: 'Jan 2024 — Jan 2025',
    tagline: 'Bilingual healthcare platform for patients, doctors and labs.',
    description:
      'A responsive healthcare platform serving patients, doctors, laboratories, and administrators. Cura Sync centralizes medical history, streamlines secure record sharing, and supports AI-assisted diagnosis and report generation.',
    role: 'As a Frontend Developer I built responsive Arabic and English UI screens across all user roles, implemented authentication and authorization with role-based access, and protected application flows using Angular Guards. I created reusable services and directives to improve maintainability, and supported patient scan uploads, doctor workflows, and lab report generation.',
    highlights: [
      'Built responsive Arabic/English UI for a multi-role healthcare platform.',
      'Implemented authentication, authorization, and role-based access control.',
      'Protected routes and flows using Angular Guards.',
      'Created reusable services and directives for maintainability and consistency.',
      'Enabled patients to upload scans and maintain a centralized digital medical history.',
      'Supported doctor workflows for viewing history and AI-assisted diagnosis.',
      'Supported laboratory workflows for uploading results and AI-assisted report generation.',
    ],
    stack: ['Angular', 'Reactive Forms', 'Guards', 'RxJS', 'i18n / RTL', 'SCSS'],
    category: 'Healthcare',
    accent: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    icon: 'bi-heart-pulse',
  },
];

export const SKILLS: SkillGroup[] = [
  {
    name: 'Languages & Markup',
    icon: 'bi-code-slash',
    items: ['HTML5', 'CSS3', 'SCSS', 'JavaScript (ES6+)', 'TypeScript'],
  },
  {
    name: 'Styling',
    icon: 'bi-palette',
    items: ['Bootstrap', 'Tailwind CSS', 'Responsive Design', 'Figma'],
  },
  {
    name: 'Angular',
    icon: 'bi-hexagon-fill',
    items: ['Angular', 'Reactive Forms', 'Routing', 'Signals', 'NgRx', 'PrimeNG', 'Angular Material'],
  },
  {
    name: 'React',
    icon: 'bi-lightning-charge',
    items: ['React', 'Redux', 'Redux Toolkit', 'React Router Dom', 'Axios', 'React Bootstrap'],
  },
  {
    name: 'Vue',
    icon: 'bi-triangle',
    items: ['Vue.js', 'Pinia', 'Vuex'],
  },
  {
    name: 'Tooling',
    icon: 'bi-tools',
    items: ['Git', 'GitHub', 'SQL'],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    institution: 'Cairo University',
    degree: "Bachelor's Degree",
    year: 'May 2017',
  },
];

export const COURSES: CourseItem[] = [
  { title: 'MEARN Diploma', provider: 'Information Technology Institute (I.T.I)' },
  { title: 'Angular — The Complete Guide', provider: 'Udemy — Maximilian Schwarzmüller' },
  { title: 'React — The Complete Guide', provider: 'Udemy — Maximilian Schwarzmüller' },
  { title: 'Vue.js — The Complete Guide', provider: 'Udemy — Maximilian Schwarzmüller' },
  { title: 'Front-End Web Development', provider: 'Udacity — EGFWD initiative' },
];
