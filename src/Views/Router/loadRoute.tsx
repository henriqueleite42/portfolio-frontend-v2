import React from "react";

import { IRoute } from "Config/routes";

const loadRoute = (route: IRoute): React.FC => {
  const Element = React.lazy(() => import(`../${route.component}`));

  if (route.navBar) {
    const NavBar = React.lazy(() => import("Views/NavBar"));

    const ElementWithNavBar: React.FC = () => (
      <NavBar>
        <Element />
      </NavBar>
    );

    return ElementWithNavBar;
  } else {
    return Element;
  }
};

export default loadRoute;
