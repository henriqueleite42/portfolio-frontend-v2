import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHistory } from "react-router-dom";

import Button from "Components/Button";

import { ROUTES_NAME } from "Config/routes";

import { IProject } from "Interfaces/Project";

import ImgImages from "Assets/Images";

import {
  Container,
  Body,
  Footer,
  Name,
  Description,
  Technologies,
  Technology,
  TechnologiesContainer,
  Attributes,
} from "./style";

const Project: React.FC<IProject> = props => {
  const {
    id,
    name,
    description,
    repository,
    complete,
    responsive,
    type,
    accessible,
    top,
    technologies,
  } = props;

  const history = useHistory();

  return (
    <Container>
      <div>
        <Name>{name}</Name>
      </div>
      <Body>
        <Description>{description}</Description>
        <TechnologiesContainer>
          <span>Technologies</span>
          <Technologies>
            {technologies.map(technology => (
              <Technology key={technology.technology} color={technology.color}>
                {technology.technology}
              </Technology>
            ))}
          </Technologies>
        </TechnologiesContainer>
      </Body>
      <Footer>
        <Button
          aria-label="See More"
          onClick={() =>
            history.push(`${ROUTES_NAME.projectDetail}/${id}`, {
              projectInfo: props,
            })
          }
        >
          See More
        </Button>
        <Attributes>
          {top && (
            <FontAwesomeIcon
              icon="star"
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
            <FontAwesomeIcon
              icon="server"
              aria-label="Backend"
              title="Backend"
            />
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
              src={ImgImages.github}
              alt="GitHub Repository"
              title="GitHub Repository"
            />
          )}
        </Attributes>
      </Footer>
    </Container>
  );
};

export default Project;
