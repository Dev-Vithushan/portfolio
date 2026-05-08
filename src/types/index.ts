export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  availability: string;
  social: {
    github: string;
    linkedin: string;
    youtube: string;
    email: string;
  };
}

export type TechCategory =
  | 'Cloud Platforms'
  | 'Containers & Orchestration'
  | 'CI/CD & IaC'
  | 'Observability'
  | 'Platform Engineering'
  | 'Scripting & OS'
  | 'AI Tooling';

export interface TechTool {
  name: string;
  iconifyId: string;
  category: TechCategory;
}

export interface Experience {
  company: string;
  companyLogo?: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
  tech: string[];
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  role: string;
  period: string;
  company: string;
  tech: string[];
  highlights: string[];
  metrics: Record<string, string>;
  links: { demo?: string; github?: string; writeup?: string };
  thumbnail: string;
  status: 'In Production' | 'Completed' | 'In Progress';
  featured: boolean;
}
