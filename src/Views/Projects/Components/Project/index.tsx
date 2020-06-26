import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import Button from "Components/Button";

import { GlobalContext } from "Contexts/Global";

import { ROUTES_NAME } from "Config/routes";

import { IProject } from "Interfaces/Project";

import ImgImages from "Assets/Images";
import LngSkills from "Assets/Languages/Skills";

import {
  Container,
  Body,
  Footer,
  Name,
  Description,
  Skills,
  Skill,
  SkillsContainer,
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
    skills,
  } = props;

  const { language } = useContext(GlobalContext);
  const history = useHistory();

  return (
    <Container>
      <div>
        <Name>{name}</Name>
      </div>
      <Body>
        <Description>{description}</Description>
        <SkillsContainer>
          <span>Skills</span>
          <Skills>
            {skills.map(skill => (
              <Skill key={skill.skill} color={skill.color}>
                {LngSkills[language][skill.skill]}
              </Skill>
            ))}
          </Skills>
        </SkillsContainer>
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
