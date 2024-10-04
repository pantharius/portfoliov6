export type School = {
  id: number;
  skillsid: number[];
  school: string;
  location: string;
  description: {
    fr: string;
    en: string;
  };
  from: string;
  to: string;
};
export const schools: School[] = [
  {
    id: 1,
    skillsid: [
      1, 2, 3, 4, 5, 6, 8, 14, 15, 19, 20, 21, 28, 31, 32, 47, 49, 53, 65, 66,
    ],
    school: "CESI Alternance",
    location: "Arras, FR",
    description: {
      fr: "Bac+4, Responsable en Ingénierie des Logiciels",
      en: "Bac+4, Software Engineering Manager",
    },
    from: "2017-10-10 00:00:00",
    to: "2019-07-31 00:00:00",
  },
  {
    id: 3,
    skillsid: [],
    school: "Université d'Artois",
    location: "Lens, FR",
    description: {
      fr: "Diplôme Universitaire de Technologie Informatique (BAC+2)",
      en: "University Diploma in Computer Technology (BAC+2)",
    },
    from: "2015-09-07 00:00:00",
    to: "2016-07-08 00:00:00",
  },
  {
    id: 4,
    skillsid: [],
    school: "Université du Hainaut-Cambresis",
    location: "de Maubeuge, FR",
    description: {
      fr: "Diplôme Universitaire de Technologie Informatique (BAC+2 - 1ère année)",
      en: "University Diploma in Computer Technology (BAC+2 - 1st year)",
    },
    from: "2014-09-08 00:00:00",
    to: "2015-07-03 00:00:00",
  },
  {
    id: 5,
    skillsid: [],
    school: "Lycée Albert Châtelet",
    location: "St-pol s/ ternoise",
    description: {
      fr: "Baccalauréat Scientifique Option ISN",
      en: "Scientific Baccalaureate Option ISN",
    },
    from: "2011-09-05 00:00:00",
    to: "2014-07-11 00:00:00",
  },
];
