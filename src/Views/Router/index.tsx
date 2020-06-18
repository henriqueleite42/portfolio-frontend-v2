import React, { Suspense, useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import loadRoute from "./loadRoute";

import LoadingScreen from "Views/LoadingScreen";

import Providers from "Contexts";
import { GlobalContext } from "Contexts/Global";

import { NON_AUTH_ROUTES } from "Config/routes";

const Router: React.FC = () => {
  const { theme } = useContext(GlobalContext);

  return (
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
  );
};

export default Router;
