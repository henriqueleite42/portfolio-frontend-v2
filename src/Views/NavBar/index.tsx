import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React, { useCallback } from "react";
import { useLocation, useHistory } from "react-router-dom";

import { capitalizeFirst } from "Utils/String";

import { ROUTES_NAME, NonAuthRoutesType } from "Config/routes";

import {
  Container,
  Left,
  Logo,
  NavBarContainer,
  Footer,
  NavItem,
} from "./style";

export interface INavItem {
  isActiveInThisRoutes: Array<{
    route: NonAuthRoutesType;
    typeToCheck?: "start" | "equal";
  }>;
  redirectTo: NonAuthRoutesType;
  icon: IconProp;
  name?: string;
}

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

export const NAV_ITEMS: Array<INavItem> = [
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
      },
    ],
    redirectTo: "skills",
    icon: "tools",
  },
  {
    isActiveInThisRoutes: [
      {
        route: "projects",
        typeToCheck: "equal",
      },
      {
        route: "projectDetail",
      },
    ],
    redirectTo: "projects",
    icon: "folder-open",
  },
  {
    isActiveInThisRoutes: [
      {
        route: "experience",
      },
    ],
    redirectTo: "experience",
    icon: "briefcase",
  },
  {
    isActiveInThisRoutes: [
      {
        route: "contact",
      },
    ],
    redirectTo: "contact",
    icon: "comment",
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
              key={item.name || item.redirectTo}
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
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        {children}
      </motion.div>
    </Container>
  );
};

export default NavBar;
