import React from "react";
import { Helmet } from "react-helmet";

import SkillsColumn from "Components/SkillsColumn";

import getPageTile from "Hooks/usePageTitle";

import { AllSkills } from "Assets/Languages/Skills";

import { Header, ColumnsContainer } from "./style";

interface ISkillsList {
  name: string;
  skills: Array<AllSkills>;
}

const SKILLS: Array<ISkillsList> = [
  {
    name: "Front End",
    skills: ["ux", "react", "jquery", "sass", "styledCompolents", "redux"],
  },
  {
    name: "Back End",
    skills: ["rest", "nodejs", "socketio", "php", "cakePhp", "cloudFunctions"],
  },
  {
    name: "Database",
    skills: [
      "dataArchitecture",
      "mongodb",
      "mongoosejs",
      "mysql",
      "firestore",
      "elasticSearch",
    ],
  },
  {
    name: "Etc",
    skills: ["typescript", "eslint", "mvc", "oop", "fp"],
  },
];

const Skills: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>{getPageTile("skills")}</title>
      </Helmet>
      <Header>
        <span>Skills</span>
      </Header>
      <ColumnsContainer>
        {SKILLS.map(column => (
          <SkillsColumn key={column.name} {...column} />
        ))}
      </ColumnsContainer>
    </>
  );
};

export default Skills;
