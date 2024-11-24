import { Experience, experiences } from "@/lib/experiences.data";
import { Project } from "@/lib/project.type";
import { projects } from "@/lib/projects.data";
import { School, schools } from "@/lib/schools.data";
import { Skill, skills } from "@/lib/skills.data";

export type Profile = {
  AnalyticsKey: string;
  Name: string;
  Birthdate: string;
  Phone: string;
  Email: string;
  Website: string;
  Job: string;
  Localisation: string;
  "Study Level": string;
  Networks: {
    Linkedin: string;
    Codingame: string;
  };
  Skills: Skill[];
  Schools: School[];
  Experiences: Experience[];
  Projects: Project[];
};

export const profile = {
  AnalyticsKey: "G-W9BQ4GFDLT",
  Name: "Alexis Breuvart",
  Birthdate: "1994/12/10",
  Phone: "+33 6 45 55 00 45",
  Email: "breuvart.alexis@outlook.fr",
  Website: "https://alexis-breuvart.fr/",
  Job: "Lead Developper Full-stack Agile",
  Localisation: "Lille, FR",
  "Study Level":
    "<https://www.francecompetences.fr/recherche/rncp/14506/>BAC +4 (RIL)",
  Networks: {
    Linkedin: "https://www.linkedin.com/in/alexis-breuvart-2ab39657",
    Codingame:
      "https://www.codingame.com/profile/c35db98007b0996a3727b7fc23eab0085625194",
  },
  Skills: skills,
  Schools: schools,
  Experiences: experiences,
  Projects: projects,
};
