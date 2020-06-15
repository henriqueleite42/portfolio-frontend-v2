import { useState, useCallback } from "react";

import { State, Theme, Language } from "Interfaces/GlobalConfig";

const INITIAL: State = {
  theme: "light",
  language: "EN",
};

export const useGlobalConfig = () => {
  const [theme, setTheme] = useState<Theme>(INITIAL.theme);
  const [language, setLanguage] = useState<Language>(INITIAL.language);

  const onTheme = useCallback((theme: Theme) => setTheme(theme), []);
  const onLanguage = useCallback(
    (language: Language) => setLanguage(language),
    [],
  );

  return { theme, language, onTheme, onLanguage };
};
