import React, { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<any> {}

export const Button: React.FC<ButtonProps> = (props) => {
  const { type, children } = props;
  return <button type={type}>{children}</button>;
};
