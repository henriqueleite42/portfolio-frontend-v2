import styled from "styled-components";

import Colors from "Assets/Style/Colors";
import { fontBold, fontRegular } from "Assets/Style/Fonts";

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
  overflow: hidden;

  > textarea {
    background-color: ${Colors.secondary};
    width: 85%;
    padding: 0.5em 0.7em;
    min-height: 7em;
    ${fontRegular};

    &:focus {
      background-color: ${Colors.primary};
      color: ${Colors.background};
      border-left: 1px solid ${Colors.background};

      &::placeholder {
        color: transparent;
      }
    }
  }
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

export const Limit = styled.span<{ remaining: number }>`
  color: ${({ remaining }) => (remaining >= 0 ? "#817575" : Colors.red)};
  position: absolute;
  right: 1rem;
  bottom: 0.5rem;
`;
