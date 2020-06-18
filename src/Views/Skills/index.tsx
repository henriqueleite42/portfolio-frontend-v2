import React from "react";

import SkillsColumn from "Components/SkillsColumn";

import { ISkills } from "Assets/Languages/Skills";

import { Header, ColumnsContainer } from "./style";

interface ISkillsList {
  name: string;
  skills: Array<keyof ISkills>;
}

const SKILLS: Array<ISkillsList> = [
  {
    name: "Front End",
    skills: ["react", "jquery", "sass", "styledCompolents", "redux"],
  },
  {
    name: "Back End",
    skills: [
      "nodejs",
      "elasticSearch",
      "socketio",
      "php",
      "cakePhp",
      "mvc",
      "rest",
      "cloudFunctions",
    ],
  },
  {
    name: "Database",
    skills: ["mongodb", "mongoosejs", "mysql", "firestore"],
  },
  {
    name: "Etc",
    skills: [
      "typescript",
      "javascript",
      "dataArchitecture",
      "ux",
      "eslint",
      "oop",
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <>
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
