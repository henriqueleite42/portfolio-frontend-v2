import styled from "styled-components";

import Colors from "Assets/Style/Colors";

export const Container = styled.div<{ width?: string }>`
  min-width: ${({ width }) => width || "auto"};
  width: ${({ width }) => width || "auto"};
  max-width: ${({ width }) => width || "auto"};
  display: block;
`;

export const Header = styled.div`
  background-color: ${Colors.primary};
  color: ${Colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
  border-top-left-radius: 0.3em;
  border-top-right-radius: 0.3em;
`;

export const Body = styled.div`
  background-color: ${Colors.primary}10;
  height: calc(100% - 2.5em);

  padding: 1.5rem;

  border-bottom-left-radius: 0.3em;
  border-bottom-right-radius: 0.3em;

  > div {
    margin-bottom: 1.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const Skill = styled.div`
  display: flex;
  align-items: center;

  > img {
    max-width: 2em;
    max-height: 2em;

    margin-right: 1em;
  }
`;
