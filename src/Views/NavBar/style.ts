import Colors from "Assets/Style/Colors";
import { fontBold } from "Assets/Style/Fonts";

import styled from "styled-components";

const NAV_WIDTH = "20vw";

export const Container = styled.div`
  display: flex;
`;

export const Left = styled.div`
  width: ${NAV_WIDTH};
  height: 100vh;
  background-color: ${Colors.main};
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  height: 15vh;
  ${fontBold};
`;

export const NavBarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 75vh;
  width: ${NAV_WIDTH};
`;

export const NavItem = styled.button<{ "data-active": "true" | "false" }>`
  display: flex;
  align-items: center;
  font-size: 1.2em;
  padding: 0.2em 0.8em;
  padding-right: 0;
  width: 100%;
  color: ${Colors.background};

  svg {
    margin-right: 2rem;
    font-size: 1.3em;
  }

  div {
    padding: 0.5em 0.7em;
    padding-left: 0.8em;
    width: 100%;
    border-top-left-radius: 2em;
    border-bottom-left-radius: 2em;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  &[data-active="true"],
  &:hover {
    color: ${Colors.main};

    > div {
      background-color: ${Colors.background};
    }
  }
`;

export const Footer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  width: ${NAV_WIDTH};
`;

export const Right = styled.div`
  width: 80vw;
  height: 100vh;
  background-color: ${Colors.background};
`;
