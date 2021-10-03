import React from "react";
import { Button, ButtonProps } from "./Button";
import { ComponentStory } from "@storybook/react";

const story = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: "primary",
  },
};

export default story;

const Template: ComponentStory<React.FC<ButtonProps>> = (args) => {
  const { children, ...restProps } = args;
  return <Button {...restProps}>{children}</Button>;
};

export const Default = Template.bind({});
Default.args = {
  autoFocus: false,
  disabled: false,
  name: "default-button",
  type: "button",
  value: "something",
  variant: 'primary',
  style: {
      fontSize: 20,
      fontWeight: 'initial',
      borderRadius: 7,
      padding: '0.5rem 1rem'
  },
  children: "Click Me",
};
