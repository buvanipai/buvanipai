export type SkillCategory = 'Languages' | 'Frameworks & Libraries' | 'Tools & Platforms' | 'AI & Core Concepts';

export interface TechItem {
  name: string;
  category: SkillCategory;
}

export interface Project {
  id: string;
  title: string;
  date: string;
  shortDescription: string;
  // Structured Case Study
  overview: string;
  challenge: string;
  approach: string[];
  results: string[];
  learnings: string[]; // Distinct section
  techStack: TechItem[];
  images?: string[]; // Optional images
  role?: string; // Optional: For work experience projects
  companyLogo?: string; // Optional: URL for company logo
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  date: string;
  summary: string; 
  relatedProjectId?: string;
  logo?: string; // Company logo
}

export interface Education {
  school: string;
  degree: string;
  date: string;
  gpa: string;
  logo?: string;
}

export interface Award {
  title: string;
  issuer: string;
  date: string;
  description?: string;
  logo?: string; // Issuer logo
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  snippet: string;
  content: string; 
  references?: string[];
  tags?: string[];
}

export interface BucketItem {
  id: string;
  text: string;
  image: string;
  completed: boolean;
  size?: 'small' | 'wide' | 'tall' | 'large';
}

export interface OfflineGalleryItem {
  id: string;
  image: string;
  rotation: string; // Tailwind class like 'rotate-1'
  position: string; // Tailwind absolute position classes (e.g., 'top-10 left-4')
  size: string;     // Tailwind width class (e.g., 'w-48')
}