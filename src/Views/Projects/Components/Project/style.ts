import Colors from "Assets/Style/Colors";
import { fontBold } from "Assets/Style/Fonts";

import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem 1rem;
  cursor: pointer;
`;

export const Name = styled.span`
  font-size: 1.5em;
  background-color: ${Colors.main};
  padding: 0 1rem;
  ${fontBold};
`;

export const Header = styled.div``;

export const Body = styled.div`
  margin: 1rem 0;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${Colors.main};

  * {
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

export const Description = styled.div`
  color: ${Colors.main};
`;
