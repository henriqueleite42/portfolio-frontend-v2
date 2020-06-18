import Colors from "Assets/Style/Colors";
import { fontBold, fontRegularItalic } from "Assets/Style/Fonts";

import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: center;
  ${fontBold};

  margin-bottom: 2em;

  > div {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
`;

export const Img = styled.img`
  min-width: 18em;
  width: 18em;
  max-width: 18em;

  min-height: 18em;
  height: 18em;
  max-height: 18em;

  margin-right: 2em;

  border-radius: 0.3em;
`;

export const Name = styled.span`
  font-size: 4.5em;
`;

export const Headline = styled.span`
  font-size: 1.7em;
`;

export const Phrase = styled.blockquote`
  margin-top: 2em;
  padding: 0.5em 1em;
  padding-left: 1.3em;
  background-color: ${Colors.primary}10;
  border-radius: 0.3em;
  line-height: 1.3em;
  position: relative;
  overflow: hidden;
  ${fontRegularItalic};

  &::before {
    content: " ";
    width: 0.3em;
    height: 4em;
    margin-left: -1.3em;
    margin-top: -0.5em;
    background-color: ${Colors.primary};
    position: absolute;
    border-top-left-radius: 0.3em;
    border-bottom-left-radius: 0.3em;
  }

  > span {
    text-decoration: line-through;
  }
`;

export const Body = styled.div`
  display: flex;

  > div:first-child {
    margin-right: 2em;
  }
`;

export const SeeAllSkillsButton = styled.button`
  width: 100%;
  text-align: center;

  &:hover {
    text-decoration: underline;
  }
`;

export const Description = styled.div``;
