import Colors from "Assets/Style/Colors";
import { fontBold } from "Assets/Style/Fonts";

import styled from "styled-components";

export const ProjectsContainer = styled.div`
  user-select: none !important;

  > div {
    border-bottom: 2px solid ${Colors.primary}50;

    &:last-child {
      border: none;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  color: ${Colors.primary};
  margin-bottom: 3em;
  user-select: none;
  ${fontBold};

  > span {
    font-size: 2em;
    margin-right: 1rem;
    background-color: ${Colors.primary};
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.secondary};
    border-radius: 50%;
    height: 2em;
    width: 2em;
    font-size: 1.2em;
    color: transparent;
  }
`;

export const Filters = styled.div`
  display: flex;
  transition: all 0.15s ease-in-out;
  margin-bottom: 1rem;
  user-select: none !important;
`;

export const FilterItem = styled.div`
  background-color: ${Colors.secondary};
  color: transparent;
  padding: 1rem 1.5rem;
  margin-right: 1rem;
  border-radius: 0.3em;
  transition: all 0.15s ease-in-out;
`;

export const Container = styled.div`
  padding: 2rem 1rem;
  cursor: default;
  user-select: none !important;
`;

export const Name = styled.span`
  font-size: 1.5em;
  background-color: ${Colors.primary};
  color: transparent;
  padding: 0 1rem;
  ${fontBold};
`;

export const Body = styled.div`
  display: flex;
  margin: 1.5rem 0;
`;

export const SkillsContainer = styled.div`
  width: 40%;
`;

export const Skills = styled.div`
  height: 5em;
  width: 100%;
  margin-top: 1rem;
  background-color: ${Colors.secondary};
  border-radius: 0.3em;
  padding: 1rem;

  > span {
    background-color: ${Colors.primary};
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 0.3em;
  }
`;

export const Attributes = styled.div`
  display: flex;
  align-items: center;

  > div {
    width: 1em;
    height: 1em;
    background-color: ${Colors.primary};
    margin-left: 1rem;
    border-radius: 50%;
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

export const Button = styled.span`
  background-color: ${Colors.secondary};
  color: transparent;
`;
