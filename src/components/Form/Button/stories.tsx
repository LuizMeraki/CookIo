import { Meta, StoryObj } from '@storybook/react';

import Button from '.';

type ButtonType = typeof Button;
type StoryType = StoryObj<ButtonType>;

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    type: 'button',
    children: 'Inner text',
  },
} as Meta<ButtonType>;

const Template: StoryType = {
  render: (args) => <Button {...args} />,
};

export const Default: StoryType = { ...Template };

export const ButtonDisabled: StoryType = {
  ...Template,
  args: {
    disabled: true,
  },
};
