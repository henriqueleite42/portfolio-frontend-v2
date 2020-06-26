import styled from "styled-components";

import Colors from "Assets/Style/Colors";
import { fontBold } from "Assets/Style/Fonts";

import { NAV_WIDTH } from "../NavBar/style";

export const Container = styled.div`
  display: flex;
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

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2em;
  padding: 0.2em 0;
  padding-right: 0;
  width: 100%;
  color: ${Colors.background};

  > div {
    display: flex;
    padding: 0.5em 0.7em;
    padding-left: 0.8em;

    > div {
      height: 1.5em;
      background-color: ${Colors.background};

      &:first-child {
        min-width: 1.5em;
        width: 1.5em;
        border-radius: 50%;
        margin-right: 1rem;
      }
      &:last-child {
        width: 10em;
      }
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

export const Right = styled.div`
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
`;
