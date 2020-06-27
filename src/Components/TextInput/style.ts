import styled from "styled-components";

import Colors from "Assets/Style/Colors";
import { fontBold } from "Assets/Style/Fonts";

interface ILabelProps {
  required?: boolean;
}

export const Container = styled.div`
  margin-bottom: 0.5em;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const LabelContainer = styled.div`
  background-color: ${Colors.primary};
  width: 15%;
  display: flex;
  align-items: center;
`;

export const Label = styled.label<ILabelProps>`
  display: flex;
  margin: 0.5em;
  color: ${Colors.background};
  ${fontBold};

  ${({ required }) =>
    required &&
    `
    &:before {
      content: " *";
      margin-right: 0.3em;
      color: ${Colors.red};
    }
  `}
`;

export const Input = styled.input`
  padding: 0.5em 0.7em;
  background-color: ${Colors.secondary};
  width: 85%;

  &:focus {
    background-color: ${Colors.primary};
    color: ${Colors.background};
    border-left: 1px solid ${Colors.background};

    &::placeholder {
      color: transparent;
    }
  }
`;

export const ErrorContainer = styled.div`
  width: 100%;
  padding: 0.5em 0.7em;
  background-color: ${Colors.red};
`;
