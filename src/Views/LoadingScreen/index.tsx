import React from "react";

import {
  Container,
  Left,
  Logo,
  Right,
  NavBarContainer,
  Footer,
  NavItem,
} from "./style";

const LoadingScreen: React.FC = () => (
  <Container>
    <Left>
      <Logo>
        <span>Razal</span>
      </Logo>
      <NavBarContainer>
        <NavItem>
          <div>
            <div />
            <div />
          </div>
        </NavItem>
        <NavItem>
          <div>
            <div />
            <div />
          </div>
        </NavItem>
        <NavItem>
          <div>
            <div />
            <div />
          </div>
        </NavItem>
      </NavBarContainer>
      <Footer>
        <span>Razal&#39;s Portfolio</span>
      </Footer>
    </Left>
    <Right />
  </Container>
);

export default LoadingScreen;
