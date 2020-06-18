import Colors from "Assets/Style/Colors";
import { fontBold } from "Assets/Style/Fonts";

import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: center;
  color: ${Colors.primary};
  margin-bottom: 1em;
  user-select: none;
  ${fontBold};

  > span {
    font-size: 2.5em;
    margin-right: 1rem;
  }
`;
