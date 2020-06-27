import { useContext } from "react";

import { GlobalContext } from "Contexts/Global";

import LngGlobal from "Assets/Languages/Global";
import LngNavBar, { NavItems } from "Assets/Languages/NavBar";

const usePageTitle = (page?: NavItems) => {
  const { language } = useContext(GlobalContext);

  if (!language) return "";

  const defaultTitle = LngGlobal[language].defaultPageTitle;

  if (page) {
    const pageName = LngNavBar[language][page];

    return `${defaultTitle} - ${pageName} `;
  }

  return defaultTitle;
};

export default usePageTitle;
