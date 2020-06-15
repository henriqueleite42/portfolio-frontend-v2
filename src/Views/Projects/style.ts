import Colors from "Assets/Style/Colors";
import { fontBold } from "Assets/Style/Fonts";

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2em;
`;

export const ProjectsContainer = styled.div`
  > div {
    border-bottom: 2px solid ${Colors.main}50;

    &:last-child {
      border: none;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  color: ${Colors.main};
  margin-bottom: 1em;
  ${fontBold};

  > span {
    font-size: 2.5em;
    margin-right: 1rem;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.main}30;
    border-radius: 50%;
    height: 2em;
    width: 2em;
    font-size: 1.2em;
  }
`;
