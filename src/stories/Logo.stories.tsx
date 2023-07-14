import { Meta, StoryObj } from '@storybook/react';

import Logo from '~/components/Logo';

type LogoType = typeof Logo;

export default {
  title: 'Components/Logo',
  component: Logo,
} as Meta<LogoType>;

export const Default: StoryObj<LogoType> = {
  render: () => <Logo />,
};
