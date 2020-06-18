import { useQuery } from "react-query";

import { IProject } from "Interfaces/Project";

const TEMP_PROJECTS: Array<IProject> = [
  {
    id: "1",
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
    technologies: [
      {
        technology: "React",
        color: "#03d2f9",
      },
      {
        technology: "Typescript",
        color: "#0074c1",
      },
      {
        technology: "Context",
        color: "#764abc",
      },
      {
        technology: "NodeJs",
        color: "#8cbf3e",
      },
      {
        technology: "ElasticSearch",
        color: "linear-gradient(to bottom right, #24bbb1, #93c83e, #fed10a)",
      },
    ],
  },
  {
    id: "2",
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
    technologies: [
      {
        technology: "React",
        color: "#03d2f9",
      },
    ],
  },
  {
    id: "3",
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
    technologies: [
      {
        technology: "React",
        color: "#03d2f9",
      },
    ],
  },
  {
    id: "4",
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
    technologies: [
      {
        technology: "React",
        color: "#03d2f9",
      },
    ],
  },
  {
    id: "5",
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
    technologies: [
      {
        technology: "React",
        color: "#03d2f9",
      },
    ],
  },
  {
    id: "6",
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
    technologies: [
      {
        technology: "React",
        color: "#03d2f9",
      },
    ],
  },
];

const useProjects = () => {
  const projectsQuery = useQuery("projects", fetchStates, {
    refetchInterval: false,
    refetchOnWindowFocus: false,
    retry: false,
    refetchOnMount: false,
    staleTime: 30000,
    retryDelay: () => 300000,
  });

  async function fetchStates(): Promise<Array<IProject>> {
    return TEMP_PROJECTS;
  }

  const { data: projects, status } = projectsQuery;

  return {
    projects: (projects || []) as Array<IProject>,
    status,
  };
};

export default useProjects;
