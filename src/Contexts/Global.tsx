import React, { useState, useCallback, createContext } from "react";

import { IState, ITheme, ILanguage } from "Interfaces/GlobalConfig";

interface IGlobalState extends IState {
  onThemeChange: (theme: ITheme) => void;
  onLanguageChange: (language: ILanguage) => void;
}

const getInitial = () =>
  ({
    theme: "light",
    language: "EN",
  } as IState);

export const GlobalContext = createContext<IGlobalState>({} as IGlobalState);

export const GlobalProvider: React.FC = ({ children }) => {
  const [globalState, setGlobalState] = useState<IState>(getInitial());

  const onThemeChange = useCallback((theme: ITheme) => {
    setGlobalState(prevState => ({
      ...prevState,
      theme,
    }));
  }, []);

  const onLanguageChange = useCallback((language: ILanguage) => {
    setGlobalState(prevState => ({
      ...prevState,
      language,
    }));
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        ...globalState,
        onThemeChange,
        onLanguageChange,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
