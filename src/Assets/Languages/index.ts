import { IPageTitle } from "Assets/Languages/PageTitles";
import { ISkills } from "Assets/Languages/Skills";

export const AllLangs = {
  EN: "English",
  BR: "Porguês (Brasil)",
};

export type AllLangsOptions = keyof typeof AllLangs;

export interface ITranslations {
  PageTitles: IPageTitle;
  Skills: ISkills;
}

export default AllLangs;
