import styled from "styled-components";

import Colors from "Assets/Style/Colors";
import { fontBold } from "Assets/Style/Fonts";

export const NAV_WIDTH = "20vw";

export const Container = styled.div`
  display: flex;

  > div:last-child {
    width: 80vw;
    height: 100vh;
    padding: 2em;
    background-color: ${Colors.background};

    &::-webkit-scrollbar {
      width: 1em;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${Colors.secondary};
      transition: all 0.5s ease-in-out;

      &:hover {
        background-color: ${Colors.primary};
      }
    }
  }
`;

export const Left = styled.div`
  width: ${NAV_WIDTH};
  height: 100vh;
  background-color: ${Colors.primary};
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  height: 15vh;
  color: ${Colors.background};
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
  padding: 0.2em 0;
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
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  &[data-active="true"],
  &:hover,
  &:focus {
    color: ${Colors.primary};

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
  color: ${Colors.background};
`;

export const Right = styled.div``;
