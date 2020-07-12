import { AnimatePresence } from "framer-motion";
import React, { Suspense, useContext } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import * as serviceWorker from "./serviceWorker";

import LoadingScreen from "Views/LoadingScreen";

import Providers from "Contexts";
import { GlobalContext } from "Contexts/Global";

import { IRoute } from "Config/routes";
import { NON_AUTH_ROUTES } from "Config/routes";

import "Config/fontawesome";

import "Assets/Style/global.css";

const loadRoute = (route: IRoute): React.FC => {
  const Element = React.lazy(() => import(`Views/${route.component}`));

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

const Router: React.FC = () => {
  const { theme } = useContext(GlobalContext);

  return (
    <AnimatePresence>
      <Suspense fallback={<LoadingScreen />}>
        <Providers>
          <div data-theme={theme}>
            <BrowserRouter>
              <Switch>
                {NON_AUTH_ROUTES.map(route => (
                  <Route
                    exact={route.exact ?? true}
                    key={route.name}
                    path={route.fullRoute || route.route}
                    component={loadRoute(route)}
                  />
                ))}
              </Switch>
            </BrowserRouter>
          </div>
        </Providers>
      </Suspense>
    </AnimatePresence>
  );
};

ReactDOM.render(<Router />, document.getElementById("root"));

serviceWorker.register();
