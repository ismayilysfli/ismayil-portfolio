export type LinkItem = {
  label: string;
  href: string;
};

export type Experience = {
  organization: string;
  role: string;
  dates: string;
  location?: string;
  context?: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  featured?: boolean;
};

export type Project = {
  title: string;
  subtitle?: string;
  description: string;
  highlights: string[];
  technologies: string[];
  metrics?: { value: string; label: string }[];
  architecture?: string;
  links?: LinkItem[];
  featured?: boolean;
};
