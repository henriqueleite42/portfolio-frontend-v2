import React from "react";

import SkillsColumn from "Components/SkillsColumn";

import { AllSkills } from "Assets/Languages/Skills";

import { Header, ColumnsContainer } from "./style";

interface ISkillsList {
  name: string;
  skills: Array<AllSkills>;
}

const SKILLS: Array<ISkillsList> = [
  {
    name: "Front End",
    skills: ["react", "jquery", "sass", "styledCompolents", "redux"],
  },
  {
    name: "Back End",
    skills: ["nodejs", "socketio", "php", "cakePhp", "rest", "cloudFunctions"],
  },
  {
    name: "Database",
    skills: ["mongodb", "mongoosejs", "mysql", "firestore", "elasticSearch"],
  },
  {
    name: "Etc",
    skills: ["typescript", "dataArchitecture", "ux", "oop", "eslint", "mvc"],
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
