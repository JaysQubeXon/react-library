import React from "react";
import { Button } from "./Button";
import { ComponentStory } from "@storybook/react";

const story = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    type: "submit",
  },
};

export default story;

const Template: ComponentStory<typeof Button> = (args) => {
  const { children, ...restProps } = args;
  return <Button {...restProps}>{children}</Button>;
};

export const Default = Template.bind({});
Default.args = {
  type: "button",
  children: "Click Me",
};
