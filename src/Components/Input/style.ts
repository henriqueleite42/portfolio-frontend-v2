import styled from "styled-components";

import Colors from "Assets/Style/Colors";
import { fontBold, fontRegular } from "Assets/Style/Fonts";

interface ILabelProps {
  required?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 0.5em;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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
    }
  `}
`;

export const InputContainer = styled.input`
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

export const TextareaContainer = styled.div`
  background-color: ${Colors.secondary};
  width: 85%;

  > textarea {
    padding: 0.5em 0.7em;
    min-height: 3.5em;
    width: 100%;
    font-size: 1em;
    ${fontRegular};
  }
`;

export const ErrorContainer = styled.label`
  color: ${Colors.red};
  font-size: 1.2em;
`;
