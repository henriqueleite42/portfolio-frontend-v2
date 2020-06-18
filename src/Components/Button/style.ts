import Colors from "Assets/Style/Colors";

import styled from "styled-components";

export const Container = styled.button`
  padding: 0.5rem 1rem;
  transition: all 0.15s ease-in-out;

  &:hover {
    background-color: ${Colors.primary};
    color: ${Colors.background};
  }
`;
