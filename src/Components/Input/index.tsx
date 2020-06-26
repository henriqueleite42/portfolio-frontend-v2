import React from "react";
import TextareaAutosize from "react-textarea-autosize";

import {
  Container,
  LabelContainer,
  Label,
  InputContainer,
  ErrorContainer,
  Wrapper,
  TextareaContainer,
} from "./style";

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Para acessibilidade, todo input precisa de uma legenda, caso não queria
   * que ela seja visível, utilize a prop isLabelVisible={false}
   */
  name: string;
  label: string;
  textarea?: boolean;
  isRequired?: boolean;
  errorMessage?: string;
  innerRef?: any;
  containerStyle?: React.CSSProperties;
}

const Input: React.FC<IProps> = props => {
  const {
    label,
    innerRef,
    textarea,
    errorMessage,
    containerStyle,
    isRequired,
    placeholder,
    id,
  } = props;

  return (
    <Container style={containerStyle}>
      <LabelContainer>
        <Label htmlFor={id} required={isRequired}>
          {label}
        </Label>
      </LabelContainer>
      {!textarea && <InputContainer {...props} type="text" ref={innerRef} />}
      {textarea && (
        <TextareaContainer>
          <TextareaAutosize placeholder={placeholder || ""} ref={innerRef} />
        </TextareaContainer>
      )}
      {/* <Wrapper>
        <ErrorContainer>{errorMessage}</ErrorContainer>
      </Wrapper> */}
    </Container>
  );
};

export default Input;
