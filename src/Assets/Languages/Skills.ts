import AllLangs from "Assets/Languages";

export interface ISkills {
  react: string;
  nodejs: string;
  typescript: string;
  javascript: string;
  ux: string;
  dataArchitecture: string;
  mongodb: string;
  mysql: string;
  firestore: string;
  jquery: string;
  php: string;
  elasticSearch: string;
  sass: string;
  styledCompolents: string;
  socketio: string;
  cakePhp: string;
  eslint: string;
  redux: string;
  mvc: string;
  oop: string;
  fp: string;
  rest: string;
  mongoosejs: string;
  cloudFunctions: string;
}

export type AllSkills = keyof ISkills;

const EN: ISkills = {
  react: "React",
  nodejs: "NodeJS",
  typescript: "TypeScript",
  javascript: "JavaScript",
  ux: "User Experience",
  dataArchitecture: "Data Architecture",
  mongodb: "MongoDB",
  firestore: "Firestore",
  mysql: "MySql",
  jquery: "JQuery",
  php: "PHP",
  elasticSearch: "Elastic Search",
  sass: "Sass",
  styledCompolents: "Styled Components",
  socketio: "Socket.io",
  cakePhp: "CakePHP",
  eslint: "ESLint",
  redux: "Redux",
  mvc: "MVC",
  oop: "OOP",
  fp: "FP",
  rest: "REST",
  mongoosejs: "Mongoose",
  cloudFunctions: "Cloud Functions",
};

const BR: ISkills = {
  ...EN,
  ux: "Experiência do Usuário",
  dataArchitecture: "Arquitetura de Dados",
};

const Skills: { [T in keyof typeof AllLangs]: ISkills } = {
  EN,
  BR,
};

export default Skills;
