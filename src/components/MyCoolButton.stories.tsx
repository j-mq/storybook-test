import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { MyCoolButton, MyCoolButtonProps } from "./MyCoolButton";

export default {
  title: "MyCoolButton",
  component: MyCoolButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<MyCoolButtonProps> = (args) => <MyCoolButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "MyCoolButton",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "MyCoolButton",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "MyCoolButton",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "MyCoolButton",
};
