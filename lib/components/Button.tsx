import React, { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<any> {
  variant: "primary" | "secondary" | "warning" | "error";
}

const defaultStyles: React.CSSProperties = {
  cursor: "pointer",
};

const disabledStyles: React.CSSProperties = {
  cursor: "not-allowed",
};

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, variant, style: styleProp, ...restProps } = props;
  const styles = {
    primary: {
      backgroundColor: "lightblue",
      border: "1px solid black",
      color: "white",
    },
    secondary: {
      backgroundColor: "transparent",
      border: "1px solid black",
      color: "black",
    },
    warning: {
      backgroundColor: "yellow",
      border: "1px solid black",
      color: "black",
    },
    error: {
      backgroundColor: "red",
      border: "1px solid black",
      color: "white",
    },
  }[variant];
  const style = styles ?? {};
  return (
    <button
      {...restProps}
      style={{ ...defaultStyles, ...style, ...styleProp, ...(props.disabled ? disabledStyles : {}) }}
    >
      {children}
    </button>
  );
};
