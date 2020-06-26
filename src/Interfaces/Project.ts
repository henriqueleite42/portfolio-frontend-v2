import { AllSkills } from "Assets/Languages/Skills";

interface ISkill {
  skill: AllSkills;
  color: string;
}

export interface IProject {
  id: string;
  type: "game" | "site" | "backend";
  accessible: boolean;
  responsive: boolean;
  complete: boolean;
  top: boolean;
  yearOfCreation: number;
  name: string;
  description: string;
  repository: string;
  skills: Array<ISkill>;
}
