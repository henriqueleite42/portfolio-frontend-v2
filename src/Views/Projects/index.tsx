import React, { useState, useCallback } from "react";
import { Helmet } from "react-helmet";

import Loading from "./Components/Loading";
import Project from "./Components/Project";

import getPageTile from "Hooks/usePageTitle";
import useProjects from "Hooks/useProjects";

import { Header, ProjectsContainer, Filters, FilterItem } from "./style";

interface IFilters {
  github: boolean;
  completed: boolean;
  game: boolean;
  site: boolean;
  backend: boolean;
  acessible: boolean;
  responsive: boolean;
}

interface IFilter {
  name: string;
  filter: keyof IFilters;
}

const FILTERS: Array<IFilter> = [
  {
    name: "GitHub Repository",
    filter: "github",
  },
  {
    name: "Completed",
    filter: "completed",
  },
  {
    name: "Game",
    filter: "game",
  },
  {
    name: "Site",
    filter: "site",
  },
  {
    name: "Back End",
    filter: "backend",
  },
  {
    name: "Acessible",
    filter: "acessible",
  },
  {
    name: "Responsive",
    filter: "responsive",
  },
];

const Projects: React.FC = () => {
  const { projects, status } = useProjects();

  const [filters, setFilters] = useState<IFilters>({
    github: false,
    completed: false,
    game: false,
    site: false,
    backend: false,
    acessible: false,
    responsive: false,
  });

  const getProjects = useCallback(() => {
    const filtredProjects = projects.filter(project => {
      if (filters.site && project.type !== "site") return false;
      if (filters.game && project.type !== "game") return false;
      if (filters.backend && project.type !== "backend") return false;
      if (filters.github && !project.repository) return false;
      if (filters.acessible && !project.accessible) return false;
      if (filters.responsive && !project.responsive) return false;
      if (filters.completed && !project.complete) return false;

      return true;
    });

    return filtredProjects.map(project => (
      <Project key={project.name} {...project} />
    ));
  }, [filters, projects]);

  const handleSetFilters = useCallback(
    (filter: keyof IFilters) => {
      const newFilters = JSON.parse(JSON.stringify(filters)) as IFilters;

      const unique = ["game", "site", "backend"] as Array<keyof IFilters>;

      if (unique.includes(filter)) {
        unique.forEach(field => {
          if (field !== filter) {
            newFilters[field] = false;
          }
        });
      }

      newFilters[filter] = !newFilters[filter];

      setFilters(newFilters);
    },
    [filters],
  );

  if (status === "loading") return <Loading />;

  return (
    <>
      <Helmet>
        <title>{getPageTile("projects")}</title>
      </Helmet>
      <Header>
        <span>Projects</span>
        <div>
          <span>{projects.length}</span>
        </div>
      </Header>
      <Filters>
        {FILTERS.map(({ filter, name }) => (
          <FilterItem
            key={filter}
            active={filters[filter]}
            onClick={() => handleSetFilters(filter)}
          >
            {name}
          </FilterItem>
        ))}
      </Filters>
      <ProjectsContainer>{getProjects()}</ProjectsContainer>
    </>
  );
};

export default Projects;
