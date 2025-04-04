export type Skill = {
  name: string;
  level: number; // 0-100
  category: string[];
};

export type Project = {
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  image?: string;
  links?: {
    github?: string;
    live?: string;
    kaggle?: string;
  };
};

export type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
};

export type Education = {
  university: string;
  degree: string;
  graduationDate: string;
  gpa: string;
  awards: string[];
};

export type Activity = {
  title: string;
  items: string[];
  icon?: string;
};

export type ContactInfo = {
  email: string;
  location: string;
  phone?: string;
  github: string;
  linkedin: string;
  website?: string;
};
