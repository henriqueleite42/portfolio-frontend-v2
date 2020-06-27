import styled from "styled-components";

import Colors from "Assets/Style/Colors";
import { fontBold } from "Assets/Style/Fonts";

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
`;

export const Description = styled.p`
  margin-bottom: 2em;
`;

export const ButtonContainer = styled.div`
  margin-top: 2em;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
