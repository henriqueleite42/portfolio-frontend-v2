import useLanguage from "Hooks/useLanguage";

import { Pages } from "Assets/Languages/PageTitles";

const usePageTitle = (page?: Pages): string => {
  const language = useLanguage("PageTitles");

  if (!language) return "";

  const defaultTitle = language.default || "";

  if (page) {
    const pageName = language[page];

    if (pageName) {
      return `${defaultTitle} - ${pageName}`;
    }

    return `${defaultTitle} - ${page}`;
  }

  return defaultTitle;
};

export default usePageTitle;
