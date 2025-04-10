export interface ProjectType {
  id: number;
  title: string;
  description: string[];
  tech: string[];
  // link: string;
  link?: string;
  links?: { name: string; url: string }[];
}

export interface ExperienceType {
  id: number;
  title: string;
  company: string;
  location: string;
  date: string;
  description: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export interface SkillItemProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

export interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string[];
    tech: string[];
    link?: string;
    links?: { name: string; url: string }[];
  };
  index: number;
}

export interface ExperienceCardProps {
  experience: ExperienceType;
  index: number;
}
