/* eslint-disable @typescript-eslint/no-var-requires */
import { useContext } from "react";

import { GlobalContext } from "Contexts/Global";

import { ITranslations } from "Assets/Languages";

const usePageTitle = (page: keyof ITranslations) => {
  const { language } = useContext(GlobalContext);

  try {
    if (!language) {
      throw new Error("Language Not Found");
    }

    const translation = require(`Assets/Languages/${page}`).default;

    if (!translation) {
      throw new Error("Translation Not Found");
    }

    switch (page) {
      case "PageTitles":
        return translation[language] as ITranslations["PageTitles"];
      default:
        throw new Error("Type Declaration Not Found");
    }
  } catch (e) {
    switch (page) {
      case "PageTitles":
        return {} as Partial<ITranslations["PageTitles"]>;
      default:
        return {};
    }
  }
};

export default usePageTitle;
