import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback } from "react";
import { useLocation, useHistory } from "react-router-dom";

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

interface INavItem {
  isActiveInThisRoutes: Array<{
    route: NonAuthRoutesType;
    typeToCheck: "start" | "equal";
  }>;
  redirectTo: NonAuthRoutesType;
  icon: IconProp;
  name: string;
}

const NAV_ITEMS: Array<INavItem> = [
  {
    isActiveInThisRoutes: [
      {
        route: "home",
        typeToCheck: "equal",
      },
    ],
    redirectTo: "home",
    icon: "user",
    name: "About",
  },
  {
    isActiveInThisRoutes: [
      {
        route: "skills",
        typeToCheck: "start",
      },
    ],
    redirectTo: "skills",
    icon: "tools",
    name: "Skills",
  },
  {
    isActiveInThisRoutes: [
      {
        route: "projects",
        typeToCheck: "equal",
      },
      {
        route: "projectDetail",
        typeToCheck: "start",
      },
    ],
    redirectTo: "projects",
    icon: "briefcase",
    name: "Projects",
  },
  {
    isActiveInThisRoutes: [
      {
        route: "contact",
        typeToCheck: "equal",
      },
    ],
    redirectTo: "contact",
    icon: "comment",
    name: "Contact",
  },
];

const NavBar: React.FC = ({ children }) => {
  const location = useLocation();
  const history = useHistory();

  const checkIfRouteIsActive = useCallback(
    (routes: INavItem["isActiveInThisRoutes"]) => {
      let active = false;

      for (const routeObj of routes) {
        const { route, typeToCheck } = routeObj;

        if (
          typeToCheck === "equal" &&
          location.pathname === ROUTES_NAME[route]
        ) {
          active = true;
          break;
        } else if (
          typeToCheck === "start" &&
          location.pathname.startsWith(ROUTES_NAME[route])
        ) {
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
                <span>{item.name}</span>
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
