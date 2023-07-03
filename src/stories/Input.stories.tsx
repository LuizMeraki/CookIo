import { Meta } from '@storybook/react';

import { InputMock, InputPasswordMock } from '~/mocks/Input';

import Input from '~/components/Form/Input';

export default {
  title: 'Components/Input',
  component: Input,
  args: {
    label: 'Nome da Receita',
    type: 'text',
    placeholder: 'nomeie sua receita',
  },
  argTypes: {
    property: { table: { disable: true } },
    error: { control: false },
    state: { control: false },
  },
} as Meta<typeof Input>;

const Template = { render: (args: any) => <InputMock {...args} /> };

export const RecipeName = {
  ...Template,
  args: {
    property: 'recipeName',
  },
};

export const Username = {
  ...Template,
  args: {
    label: 'Nome',
    placeholder: 'seu nome',
    property: 'username',
  },
};

export const Email = {
  ...Template,
  args: {
    label: 'E-mail',
    type: 'email',
    placeholder: 'exemplo@gmail.com',
    property: 'email',
  },
};

export const Password = {
  ...Template,
  args: {
    label: 'Senha',
    type: 'password',
    placeholder: '########',
    property: 'password',
  },
};

export const ConfirmPassword = {
  render: () => <InputPasswordMock />,
};
