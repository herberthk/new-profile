export * from "./types";

export interface Awards {
  from: string;
  title: string;
  url: string;
  id?: string;
}

export interface BioData {
  name: string;
  dob: string;
  phone: string;
  address: string;
  website: string;
  linkedin: string;
  github: string;
}

export interface Services {
  icon: string;
  tile: string;
  desc: string;
  id?: string;
}

export interface WorkedOn {
  project: string;
  url: string;
}

export interface Exp {
  year: string;
  name: string;
  desc: string;
  projects: WorkedOn[];
  techStack: string[];
}

export interface Projects {
  name: string;
  desc: string;
  url?: string;
  imageUrl: string;
  githubUrl?: string;
}

export interface Skills {
  skill: string;
  percentage: number;
}

export interface TimeLineProps {
  name: string;
  desc: string;
  iconBg: string;
  index: number;
  techStack: string[];
  projects: WorkedOn[];
}

export interface PointerProps {
  text: string;
  otherClasses?: string;
}

export interface YearProps {
  year: string;
  bgColor: string;
  index: number;
}

export interface PercentageProps {
  percentage: number;
  skill: string;
  classes?: string;
  index: number;
}
