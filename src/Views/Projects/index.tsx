import React, { useState, useEffect } from "react";

import Project from "./Components/Project";

import { IProject } from "Interfaces/Project";

import { Container, Header, ProjectsContainer } from "./style";

const TEMP_PROJECTS: Array<IProject> = [
  {
    type: "site",
    accessible: true,
    responsive: true,
    complete: true,
    top: true,
    yearOfCreation: 2020,
    name: "Project Name",
    description: `Project Description Project Description Project Description Project
    Description Project Description Project Description Project
    Description Project Description`,
    repository: "aa",
  },
  {
    type: "game",
    accessible: true,
    responsive: true,
    complete: true,
    top: true,
    yearOfCreation: 2020,
    name: "Project Name",
    description: `Project Description Project Description Project Description Project
    Description Project Description Project Description Project
    Description Project Description`,
    repository: "aa",
  },
  {
    type: "backend",
    accessible: true,
    responsive: true,
    complete: true,
    top: true,
    yearOfCreation: 2020,
    name: "Project Name",
    description: `Project Description Project Description Project Description Project
    Description Project Description Project Description Project
    Description Project Description`,
    repository: "aa",
  },
];

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Array<IProject>>([]);

  useEffect(() => {
    setProjects(TEMP_PROJECTS);
  }, []);

  return (
    <Container>
      <Header>
        <span>Projects</span>
        <div>
          <span>{projects.length}</span>
        </div>
      </Header>
      <ProjectsContainer>
        {projects.map(project => (
          <Project key={project.name} {...project} />
        ))}
      </ProjectsContainer>
    </Container>
  );
};

export default Projects;
