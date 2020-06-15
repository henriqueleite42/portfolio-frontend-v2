import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { IProject } from "Interfaces/Project";

import Images from "Assets/Images";

import { Container, Header, Body, Footer, Name, Description } from "./style";

const Project: React.FC<IProject> = ({
  name,
  description,
  repository,
  complete,
  responsive,
  type,
  accessible,
  top,
}) => {
  return (
    <Container>
      <Header>
        <Name>{name}</Name>
      </Header>
      <Body>
        <Description>{description}</Description>
      </Body>
      <Footer>
        {top && (
          <FontAwesomeIcon
            icon="star"
            style={{ color: "gold" }}
            aria-label="Top Project"
            title="Top Project"
          />
        )}
        {type === "game" && (
          <FontAwesomeIcon icon="gamepad" aria-label="Game" title="Game" />
        )}
        {type === "site" && (
          <FontAwesomeIcon icon="desktop" aria-label="Site" title="Site" />
        )}
        {type === "backend" && (
          <FontAwesomeIcon icon="server" aria-label="Backend" title="Backend" />
        )}
        {accessible && (
          <FontAwesomeIcon
            icon="low-vision"
            aria-label="Accessible"
            title="Accessible"
          />
        )}
        {responsive && (
          <FontAwesomeIcon
            icon="mobile-alt"
            aria-label="Responsive"
            title="Responsive"
          />
        )}
        {complete && (
          <FontAwesomeIcon
            icon="check"
            aria-label="Completed"
            title="Completed"
          />
        )}
        {repository && (
          <img
            src={Images.github}
            alt="GitHub Repository"
            title="GitHub Repository"
          />
        )}
      </Footer>
    </Container>
  );
};

export default Project;
