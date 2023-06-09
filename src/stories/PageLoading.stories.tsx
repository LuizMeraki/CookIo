import { Meta, StoryObj } from '@storybook/react';

import PageLoading from '~/components/PageLoading';

type PageLoadingType = typeof PageLoading;

export default {
  title: 'Components/PageLoading',
  component: PageLoading,
} as Meta<PageLoadingType>;

export const Default: StoryObj<PageLoadingType> = {
  render: () => <PageLoading />,
};
