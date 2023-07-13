import { Meta, StoryObj } from '@storybook/react';

import AuthButton from '~/components/Form/AuthButton';

type AuthButtonType = typeof AuthButton;

export default {
  title: 'Components/AuthButton',
  component: AuthButton,
} as Meta<AuthButtonType>;

export const Default: StoryObj<AuthButtonType> = {
  render: () => <AuthButton />,
};
