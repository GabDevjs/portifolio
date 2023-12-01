export interface IProject {
  title: string;
  description: string;
  link: string;
  year: Date | string;
  tags: string[];
  mainImage: StaticImageData | string;
  images?: string[];
  otherLinks?: {
    name: string;
    link: string;
  }[];
}