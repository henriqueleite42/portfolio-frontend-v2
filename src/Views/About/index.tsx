import React from "react";
import { useHistory } from "react-router-dom";

import SkillsColumn from "Components/SkillsColumn";

import { ROUTES_NAME } from "Config/routes";

import ImgImages from "Assets/Images";
import { AllSkills } from "Assets/Languages/Skills";

import {
  Header,
  Img,
  Name,
  Headline,
  Body,
  SeeAllSkillsButton,
  Phrase,
  Description,
} from "./style";

const SKILLS: Array<AllSkills> = [
  "react",
  "nodejs",
  "typescript",
  "dataArchitecture",
  "ux",
  "mongodb",
  "firestore",
];

const About: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <Header>
        <Img src={ImgImages.selfie} alt="Razal" />
        <div>
          <Name>Renato Razal</Name>
          <Headline>Middle Full-Stack Developer</Headline>
          <Phrase>
            If You Have a <b>Impossible</b> Dream,
            <br /> I&#39;m The Guy Who Can Make It <span>Im</span>
            <b>possible</b>
          </Phrase>
        </div>
      </Header>
      <Body>
        <SkillsColumn width="18em" name="Main Skills" skills={SKILLS}>
          <SeeAllSkillsButton onClick={() => history.push(ROUTES_NAME.skills)}>
            See All
          </SeeAllSkillsButton>
        </SkillsColumn>
        <Description>
          Lorem ipsum iaculis quam rhoncus hac sagittis tortor congue nam neque
          habitant, donec dictumst conubia integer egestas platea interdum diam
          sagittis volutpat nam pellentesque lacinia placerat in id eleifend
          dapibus imperdiet viverra vivamus maecenas aenean.
          <br />
          <br /> Pharetra etiam per accumsan et sed nec ullamcorper ultrices
          morbi, arcu dictumst curae aliquet donec per fringilla iaculis
          eleifend, ultricies eleifend amet nulla vehicula quisque fusce class.
          <br />
          <br />
          Phasellus blandit mauris cras sem porta mauris rhoncus proin
          consectetur aliquam habitant, massa taciti class donec placerat ornare
          vivamus pellentesque nullam torquent, in sollicitudin hendrerit ac
          inceptos vestibulum dui turpis tortor potenti.
          <br />
          <br /> Maecenas lacus libero sodales leo nullam luctus diam
          ullamcorper, platea praesent enim metus nibh imperdiet vitae,
          imperdiet pharetra eros aenean proin etiam lobortis.
          <br />
          <br /> Sapien nisl fames suscipit interdum quis commodo nisi, et
          hendrerit malesuada aenean malesuada imperdiet est, integer luctus
          purus imperdiet tristique congue pellentesque quam mi gravida.
        </Description>
      </Body>
    </>
  );
};

export default About;
