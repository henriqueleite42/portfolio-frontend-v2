import React from "react";

import { Container } from "./style";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  "aria-label": string;
}

const Button: React.FC<IProps> = props => {
  return <Container {...props}>{props.children}</Container>;
};

export default Button;
