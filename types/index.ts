export interface TechnicalHighlight {
  label: string;
  description: string;
  codeSnippet?: {
    filename: string;
    language: string;
    code: string;
  };
}

export interface CaseStudySection {
  id: string;
  title: string;
  content: string[];
  codeSnippet?: {
    filename: string;
    language: string;
    code: string;
  };
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  summary: string;
  primaryStack: string[];
  fullStack: string[];
  role: string;
  company: string;
  period: string;
  featured: boolean;
  technicalHighlight: TechnicalHighlight;
  overview: string;
  challenges: string[];
  technicalApproach: string[];
  outcome: string[];
  sections: CaseStudySection[];
  links?: {
    duracellAppStore?: string;
    duracellPlayStore?: string;
    puredriveAppStore?: string;
    puredrivePlayStore?: string;
    appStore?: string;
    playStore?: string;
    github?: string;
    demo?: string;
    [key: string]: string | undefined;
  };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  scope: string;
  subLabel?: string;
  responsibilities: string[];
  type: string;
}

export interface SkillCategory {
  category: string;
  technologies: string[];
  productionDepth: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  relationshipTag?: string;
}

export interface Profile {
  name: string;
  title: string;
  role: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  upwork?: string;
  resumeUrl: string;
  statusText: string;
  coreStack: string[];
  overviewParagraphs: string[];
  technicalFocus: {
    title: string;
    description: string;
  }[];
}
