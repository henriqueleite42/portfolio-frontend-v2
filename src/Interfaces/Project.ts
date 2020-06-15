export interface IProject {
  type: "game" | "site" | "backend";
  accessible: boolean;
  responsive: boolean;
  complete: boolean;
  top: boolean;
  yearOfCreation: number;
  name: string;
  description: string;
  repository: string;
}
