import AllLangs from "Assets/Languages";

export interface IPageTitle {
  default: string;
  skills: string;
  projects: string;
  experience: string;
  contact: string;
}

export type Pages = keyof IPageTitle;

const EN: IPageTitle = {
  default: "Razal's Portfolio",
  skills: "Skills",
  projects: "Projects",
  experience: "Experience",
  contact: "Contact",
};

const BR: IPageTitle = {
  default: "Portfolio do Razal",
  skills: "Habilidades",
  projects: "Projetos",
  experience: "Experiência",
  contact: "Contato",
};

const PageTitle: { [T in keyof typeof AllLangs]: IPageTitle } = {
  EN,
  BR,
};

export default PageTitle;
