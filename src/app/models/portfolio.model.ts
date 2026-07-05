export interface Profile {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  summary: string[];
  taglines: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
}

export interface Project {
  slug: string;
  title: string;
  company: string;
  period: string;
  tagline: string;
  description: string;
  role: string;
  highlights: string[];
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  category: 'Insurance' | 'Healthcare' | 'Enterprise' | 'Admin';
  accent: string;
  icon: string;
}

export interface SkillGroup {
  name: string;
  icon: string;
  items: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  year: string;
}

export interface CourseItem {
  title: string;
  provider: string;
}
