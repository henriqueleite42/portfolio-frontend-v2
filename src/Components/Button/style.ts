import styled from "styled-components";

import Colors from "Assets/Style/Colors";

export const Container = styled.button`
  padding: 0.5rem 1rem;
  transition: all 0.15s ease-in-out;

  &:hover,
  &:focus {
    background-color: ${Colors.primary};
    color: ${Colors.background};
  }
`;
