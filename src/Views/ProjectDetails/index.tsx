import React, { useState, useEffect } from "react";
import { useLocation, useHistory, useParams } from "react-router-dom";

import { ROUTES_NAME } from "Config/routes";

import { IProject } from "Interfaces/Project";

import { Header } from "./style";

interface ILocationProps {
  projectInfo: IProject;
}

interface IParamsProps {
  projectID: string;
}

const ProjectDetails: React.FC = () => {
  const [project, setProject] = useState<IProject>();

  const params = useParams<IParamsProps>();
  const location = useLocation<ILocationProps>();
  const history = useHistory();

  useEffect(() => {
    if (location?.state?.projectInfo) {
      setProject(location.state.projectInfo);
    } else if (params?.projectID) {
      // TODO: Busca Informações do Projeto
    } else {
      history.push(ROUTES_NAME.projects);
    }
  }, [history, location?.state?.projectInfo, params?.projectID]);

  console.log(project);

  return (
    <>
      <Header>
        <span>{project?.name}</span>
      </Header>
    </>
  );
};

export default ProjectDetails;
