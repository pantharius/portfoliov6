export type ProjectCategory = "web" | "videogame" | "software" | "mobile";

export type Project = {
  id: number;
  name: string;
  content: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  time: string;
  skills?: string[];
  skillsid?: number[];
  live?: string;
  category: ProjectCategory;
  image: string;
  images?: string[];
};
