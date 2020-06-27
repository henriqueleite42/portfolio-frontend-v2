import AllLangs from "Assets/Languages";

export interface INavBar {
  about: string;
  skills: string;
  projects: string;
  experience: string;
  contact: string;
}

export type NavItems = keyof INavBar;

const EN: INavBar = {
  about: "About",
  skills: "Skills",
  projects: "Projects",
  experience: "Experience",
  contact: "Contact",
};

const BR: INavBar = {
  about: "Sobre Mim",
  skills: "Habilidades",
  projects: "Projetos",
  experience: "Experiência",
  contact: "Contato",
};

const NavBar: { [T in keyof typeof AllLangs]: INavBar } = {
  EN,
  BR,
};

export default NavBar;
