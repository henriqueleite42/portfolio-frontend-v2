import Colors from "Assets/Style/Colors";
import { fontBold } from "Assets/Style/Fonts";

import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem 1rem;
  cursor: default;
`;

export const Name = styled.span`
  font-size: 1.5em;
  background-color: ${Colors.primary};
  color: ${Colors.background};
  padding: 0 1rem;
  ${fontBold};
`;

export const Body = styled.div`
  display: flex;
  margin: 1.5rem 0;
`;

export const SkillsContainer = styled.div`
  width: 40%;

  > span {
    font-weight: bold;
  }
`;

export const Skills = styled.div`
  height: 5em;
  width: 100%;
  margin-top: 1rem;
  background-color: ${Colors.secondary};
  border-radius: 0.3em;
  padding: 1rem;

  > span {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const Skill = styled.span<{ color: string }>`
  color: ${Colors.background};
  font-size: 0.8em;
  background: ${({ color }) => color};
  padding: 0.3rem 0.5rem;
  border-radius: 0.3em;
  display: inline-flex;
  align-items: center;
`;

export const Attributes = styled.div`
  display: flex;
  align-items: center;
  color: ${Colors.primary};

  * {
    cursor: help;
    margin-right: 1rem;

    &:last-child {
      margin-right: 0;
    }
  }

  img {
    width: 1.2em;
    height: 1.2em;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Description = styled.div`
  width: 60%;
`;
