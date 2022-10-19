import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({
  // @ts-ignore
  label,
  ...args
}) => <Button {...args}>{label}</Button>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  isPrimary: true,
  // @ts-ignore
  label: "This is primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  isPrimary: false,
  // @ts-ignore
  label: "This is secondary",
};
