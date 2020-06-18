import React from "react";

import { GlobalProvider } from "Contexts/Global";

const Providers: React.FC = ({ children }) => {
  return <GlobalProvider>{children}</GlobalProvider>;
};

export default Providers;
