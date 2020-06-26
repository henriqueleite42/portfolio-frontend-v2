import styled from "styled-components";

import Colors from "Assets/Style/Colors";
import { fontBold } from "Assets/Style/Fonts";

export const ProjectsContainer = styled.div`
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
    font-size: 2.5em;
    margin-right: 1rem;
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
  }
`;

export const Filters = styled.div`
  display: flex;
  transition: all 0.15s ease-in-out;
  margin-bottom: 1rem;
`;

export const FilterItem = styled.button<{ active: boolean }>`
  background-color: ${({ active }) =>
    active ? Colors.primary : `${Colors.secondary}`};
  color: ${({ active }) => (active ? Colors.background : Colors.primary)};
  padding: 1rem 1.5rem;
  margin-right: 1rem;
  border-radius: 0.3em;
  cursor: pointer;
  transition: all 0.15s ease-in-out;

  &:hover {
    background-color: ${Colors.primary};
    color: ${Colors.background};
  }
`;
