export interface TimelineItem {
  id: number;
  title: string;
  institution?: string;
  date: string;
  description: string;
  skills?: string[];
  icon?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
  details: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}