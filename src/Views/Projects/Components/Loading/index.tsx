import React from "react";

import {
  Container,
  Body,
  Footer,
  Name,
  Description,
  Technologies,
  Button,
  TechnologiesContainer,
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
      <TechnologiesContainer>
        <span></span>
        <Technologies>
          <span>Tech</span>
          <span>Tech</span>
          <span>Tech</span>
        </Technologies>
      </TechnologiesContainer>
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
