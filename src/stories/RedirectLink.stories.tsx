import { Meta, StoryObj } from '@storybook/react';

import RedirectLink from '~/components/Form/RedirectLink';

type RedirectLinkType = typeof RedirectLink;
type StoryType = StoryObj<RedirectLinkType>;

export default {
  title: 'Components/RedirectLink',
  component: RedirectLink,
  args: {
    href: 'https://github.com/LuizMeraki',
    children: 'inner text',
    target: '_blank',
  },
  argTypes: {
    as: { table: { disable: true } },
    replace: { table: { disable: true } },
    scroll: { table: { disable: true } },
    shallow: { table: { disable: true } },
    passHref: { table: { disable: true } },
    prefetch: { table: { disable: true } },
    locale: { table: { disable: true } },
    legacyBehavior: { table: { disable: true } },
    onMouseEnter: { table: { disable: true } },
    onTouchStart: { table: { disable: true } },
    onClick: { table: { disable: true } },
  },
} as Meta<RedirectLinkType>;

const Template: StoryType = {
  render: (args) => <RedirectLink {...args} />,
};

export const Default: StoryType = { ...Template };

export const Secondary: StoryType = { ...Template, args: { variant: 'secondary' } };
