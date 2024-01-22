import { IconType } from "react-icons/lib";

export type ProjectsImgsType = {
  src: StaticImageData | string;
  alt: string;
};

export interface IProject {
  title: string;
  description: string;
  link: string;
  year: Date | string;
  tags: string[];
  mainImage: StaticImageData | string;
  images?: ProjectsImgsType[];
  otherLinks?: {
    name: string;
    link: string;
  }[];
}

export interface IServices {
  title: string;
  description: string;
}

export interface SkillsType {
  tec: string;
  icon: IconType;
}

export interface IExperiencia {
  title: string;
  description: string;
  subtitle: string;
  linkedin: string;
  dateInit: string;
  dateEnd: string;
  totalTime: string;
  atual: boolean;
  logo: StaticImageData | string;
}