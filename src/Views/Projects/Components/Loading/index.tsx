import React from "react";

import {
  Container,
  Body,
  Footer,
  Name,
  Description,
  Skills,
  Button,
  SkillsContainer,
  Attributes,
  Header,
  ProjectsContainer,
  Filters,
  FilterItem,
} from "./style";

const ProjectLoading: React.FC = () => (
  <Container>
    <div>
      <Name>Project Name</Name>
    </div>
    <Body>
      <Description />
      <SkillsContainer>
        <span></span>
        <Skills>
          <span>Tech</span>
          <span>Tech</span>
          <span>Tech</span>
        </Skills>
      </SkillsContainer>
    </Body>
    <Footer>
      <Button>See More</Button>
      <Attributes>
        <div />
        <div />
        <div />
        <div />
      </Attributes>
    </Footer>
  </Container>
);

const Projects: React.FC = () => (
  <>
    <Header>
      <span>Projects</span>
      <div>
        <span>0</span>
      </div>
    </Header>
    <Filters>
      {[0, 1, 2, 3].map(order => (
        <FilterItem key={order}>Filter</FilterItem>
      ))}
    </Filters>
    <ProjectsContainer>
      <ProjectLoading />
      <ProjectLoading />
      <ProjectLoading />
    </ProjectsContainer>
  </>
);

export default Projects;
