interface ITechnology {
  technology: string;
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
  technologies: Array<ITechnology>;
}
