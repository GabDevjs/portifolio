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