import React, { useContext } from "react";

import { GlobalContext } from "Contexts/Global";

import ImgSkills from "Assets/Images/Skills";
import LngSkills, { ISkills } from "Assets/Languages/Skills";

import { Container, Header, Body, Skill } from "./style";

interface IProps {
  width?: string;
  name: string;
  skills: Array<keyof ISkills>;
}

const SkillsColumn: React.FC<IProps> = ({ width, name, skills, children }) => {
  const { language } = useContext(GlobalContext);

  return (
    <Container width={width}>
      <Header>
        <span>{name}</span>
      </Header>
      <Body>
        {skills.map(skill => (
          <Skill key={skill}>
            <img src={ImgSkills[skill]} alt={skill} />
            <span>{LngSkills[language][skill]}</span>
          </Skill>
        ))}
        {children}
      </Body>
    </Container>
  );
};

export default SkillsColumn;
