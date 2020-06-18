import Colors from "Assets/Style/Colors";
import { fontBold } from "Assets/Style/Fonts";

import styled from "styled-components";

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

export const ColumnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: calc(100% - 6.1em);

  > div {
    width: 24%;
  }
`;
