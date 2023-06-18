import { Meta, StoryObj } from '@storybook/react';

import AuthButton from '~/components/Form/AuthButton';

type AuthButtonType = typeof AuthButton;
type StoryType = StoryObj<AuthButtonType>;

export default {
  title: 'Components/AuthButton',
  component: AuthButton,
} as Meta<AuthButtonType>;

const Template: StoryType = {
  render: (args) => <AuthButton {...args} />,
};

export const Google: StoryType = { ...Template };

export const Facebook: StoryType = { ...Template, args: { method: 'Facebook' } };
