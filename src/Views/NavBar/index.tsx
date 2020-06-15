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

const NavBar: React.FC = ({ children }) => {
  const location = useLocation();
  const history = useHistory();

  const checkIfRouteIsActive = useCallback(
    (routes: Array<NonAuthRoutesType>) => {
      let active = false;

      for (const route of routes) {
        if (location.pathname === ROUTES_NAME[route]) {
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
          <NavItem
            data-active={checkIfRouteIsActive(["home"])}
            onClick={() => redirect("home")}
            aria-label="About"
          >
            <div>
              <FontAwesomeIcon icon="user" />
              <span>About</span>
            </div>
          </NavItem>
          <NavItem
            data-active={checkIfRouteIsActive(["projects"])}
            onClick={() => redirect("projects")}
            aria-label="Projects"
          >
            <div>
              <FontAwesomeIcon icon="briefcase" />
              <span>Projects</span>
            </div>
          </NavItem>
          <NavItem
            data-active={checkIfRouteIsActive(["contact"])}
            onClick={() => redirect("contact")}
            aria-label="Contact"
          >
            <div>
              <FontAwesomeIcon
                icon="phone"
                style={{ transform: "rotate(90deg)" }}
              />
              <span>Contact</span>
            </div>
          </NavItem>
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
