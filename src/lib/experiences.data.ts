export type Experience = {
  id: number;
  skillsid: number[];
  job: string;
  company: string;
  description: {
    fr: string;
    en: string;
  };
  from: string;
  to: string;
};

export const experiences: Experience[] = [
  {
    id: 1,
    skillsid: [
      1, 2, 3, 4, 5, 6, 10, 11, 13, 14, 15, 17, 19, 20, 27, 31, 32, 33, 36, 38,
      41, 42, 43, 46, 47, 49, 50, 53, 59, 60, 64, 65, 66, 67,
    ],
    job: "Co-Fondateur / Lead Developer",
    company: "JDO-Univers SAS",
    description: {
      fr: "Responsable de l'ensemble des pôles techniques du studio. Développeur sur l'ensemble des projets de l'entreprise.",
      en: "Responsible for all technical areas of the studio. Developer on all company projects.",
    },
    from: "2017-07-01 00:00:00",
    to: "2021-11-11 11:11:11",
  },
  {
    id: 2,
    skillsid: [1, 2, 4, 5, 6, 15, 18, 20, 25, 44, 48, 49, 51, 63, 65],
    job: "Developper-Apprentice",
    company: "Normand-Info SAS",
    description: {
      fr: "Développeur Fullstack sur le projet DXOne Workflow Manager.",
      en: "Fullstack developer on the DXOne Workflow Manager project.",
    },
    from: "2017-10-01 00:00:00",
    to: "2019-07-31 00:00:00",
  },
  {
    id: 3,
    skillsid: [1, 2, 4, 5, 7, 19, 20, 25, 45, 49, 52, 64, 66],
    job: "Développeur Étudiant",
    company: "ClicData",
    description: {
      fr: "Stage en alternance puis CDD.",
      en: "Work-study internship then fixed-term contract.",
    },
    from: "2017-01-02 00:00:00",
    to: "2017-09-29 00:00:00",
  },
  {
    id: 5,
    skillsid: [1, 2, 3, 4, 5, 6, 15, 25, 27, 29, 41, 47, 49, 61],
    job: "Développeur logiciel/web",
    company: "HD Automatisme",
    description: {
      fr: "Stage de fin d'année puis Interim.",
      en: "End of year internship then Interim.",
    },
    from: "2016-04-04 00:00:00",
    to: "2016-08-26 00:00:00",
  },
  {
    id: 6,
    skillsid: [
      1, 2, 4, 5, 6, 7, 15, 20, 21, 25, 26, 28, 29, 35, 37, 49, 50, 64, 65, 66,
    ],
    job: "Consultant Developer .NET",
    company: "Sumit",
    description: {
      fr: "Responsables des projets .NET chez Agapes Restauration (Restaurants du groupe Mulier).",
      en: "Responsible for .NET projects at Agapes Restauration (Restaurants of the Mulier group).",
    },
    from: "2019-12-20 17:38:47",
    to: "2021-11-20 00:00:00",
  },
  {
    id: 7,
    skillsid: [1, 2, 3, 4, 5, 20, 28, 31, 41, 49, 50, 64, 65, 66],
    job: "Technical Leader",
    company: "Produclic",
    description: {
      fr: "Directeur Technique de la plateforme cryptomonnaie",
      en: "Technical Director of the cryptocurrency platform",
    },
    from: "2021-11-15 00:00:00",
    to: "2022-03-15 00:00:00",
  },
  {
    id: 8,
    skillsid: [1, 2, 3, 5, 6, 25, 27, 43, 49, 50, 63, 65, 66, 68, 69, 70],
    job: "Technical Leader",
    company: "ArcelorMittal",
    description: {
      fr: "Responsable de l'équipe SUPRM (Suivi de production)",
      en: "Responsible for the SUPRM team (Production monitoring)",
    },
    from: "2022-07-10 00:00:00",
    to: "2022-11-15 00:00:00",
  },
  {
    id: 9,
    skillsid: [1, 2, 3, 5, 6, 34, 49, 50, 58, 64, 65],
    job: "Développeur Fullstack",
    company: "Eqiom",
    description: {
      fr: "En charge de la refonte de leur plateforme : Digibeton",
      en: "In charge of the overhaul of their platform: Digibeton",
    },
    from: "2023-01-02 00:00:00",
    to: "2023-05-15 00:00:00",
  },
  {
    id: 10,
    skillsid: [1, 2, 3, 5, 6, 34, 46, 58, 64, 65, 71],
    job: "Développeur Fullstack",
    company: "Autopass (Midas, Norauto, C&C)",
    description: {
      fr: "Developpement et amélioration du cadre de travail sur la récupération des API de stock",
      en: "Development and improvement of the stock API recovery framework",
    },
    from: "2023-06-01 00:00:00",
    to: "2024-04-01 00:00:00",
  },
];
