import AllLangs from "Assets/Languages";

export interface IGlobal {
  defaultPageTitle: string;
}

const EN: IGlobal = {
  defaultPageTitle: "Razal's Portfolio",
};

const BR: IGlobal = {
  defaultPageTitle: "Portfolio do Razal",
};

const Global: { [T in keyof typeof AllLangs]: IGlobal } = {
  EN,
  BR,
};

export default Global;
