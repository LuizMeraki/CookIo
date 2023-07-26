import { Meta, StoryObj } from '@storybook/react';

import UserAvatar from '~/components/Header/UserAvatar';

import { AVATAR_API } from '~/constants/url';

type UserAvatarType = typeof UserAvatar;
type StoryObjType = StoryObj<UserAvatarType>;

export default {
  title: 'Components/UserAvatar',
  component: UserAvatar,
  args: { avatar: undefined },
} as Meta<UserAvatarType>;

const Template: StoryObjType = {
  render: (args) => <UserAvatar {...args} />,
};

export const Default = { ...Template };

export const Avatar: StoryObjType = {
  ...Template,
  args: { avatar: `${AVATAR_API}&name=Jhon+Doe` },
};
