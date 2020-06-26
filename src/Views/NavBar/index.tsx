import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback } from "react";
import { useLocation, useHistory } from "react-router-dom";

import { capitalizeFirst } from "Utils/String";

import { NAV_ITEMS, INavItem } from "Config/navbar";
import { ROUTES_NAME, NonAuthRoutesType } from "Config/routes";

import {
  Container,
  Left,
  Logo,
  Right,
  NavBarContainer,
  Footer,
  NavItem,
} from "./style";

const NavBar: React.FC = ({ children }) => {
  const location = useLocation();
  const history = useHistory();

  const checkIfRouteIsActive = useCallback(
    (routes: INavItem["isActiveInThisRoutes"]) => {
      let active = false;

      for (const routeObj of routes) {
        const { route, typeToCheck } = routeObj;

        if (
          (!typeToCheck || typeToCheck === "start") &&
          location.pathname.startsWith(ROUTES_NAME[route])
        ) {
          active = true;
          break;
        } else if (location.pathname === ROUTES_NAME[route]) {
          active = true;
          break;
        }
      }

      return active.toString() as "true" | "false";
    },
    [location.pathname],
  );

  const redirect = useCallback(
    (route: NonAuthRoutesType) => {
      if (location.pathname !== ROUTES_NAME[route]) {
        history.push(ROUTES_NAME[route]);
      }
    },
    [history, location.pathname],
  );

  return (
    <Container>
      <Left>
        <Logo>
          <span>Razal</span>
        </Logo>
        <NavBarContainer>
          {NAV_ITEMS.map(item => (
            <NavItem
              key={item.name}
              data-active={checkIfRouteIsActive(item.isActiveInThisRoutes)}
              onClick={() => redirect(item.redirectTo)}
              aria-label={item.name}
            >
              <div>
                <FontAwesomeIcon icon={item.icon} />
                <span>{item.name || capitalizeFirst(item.redirectTo)}</span>
              </div>
            </NavItem>
          ))}
        </NavBarContainer>
        <Footer>
          <span>Razal&#39;s Portfolio</span>
        </Footer>
      </Left>
      <Right>{children}</Right>
    </Container>
  );
};

export default NavBar;
