import { Meta, StoryObj } from '@storybook/react';

import { InputMock, InputPasswordMock } from '~/mocks/InputMock';

import Input from '~/components/Form/Input';

import {
  handleLength,
  handleEmail,
  handleName,
  handlePassword,
} from '~/utils/handleChange';

type StoryType = StoryObj<typeof Input>;

export default {
  title: 'Components/Input',
  component: Input,
  args: {
    label: 'Nome da Receita',
    type: 'text',
    placeholder: 'nomeie sua receita',
  },
  argTypes: {
    error: { control: false },
    state: { control: false },
    min: { table: { disable: true } },
    max: { table: { disable: true } },
    property: { table: { disable: true } },
    handleChange: { table: { disable: true } },
  },
} as Meta<typeof Input>;

const Template: StoryType = {
  render: (args: any) => {
    return <InputMock {...args} />;
  },
};

export const RecipeName = {
  ...Template,
  args: {
    property: 'recipeName',
    handleChange: handleLength,
    min: 2,
    max: 100,
  },
};

export const Username = {
  ...Template,
  args: {
    label: 'Nome',
    placeholder: 'seu nome',
    property: 'username',
    handleChange: handleName,
    min: 2,
    max: 50,
  },
};

export const Email = {
  ...Template,
  args: {
    label: 'E-mail',
    type: 'email',
    placeholder: 'exemplo@gmail.com',
    property: 'email',
    handleChange: handleEmail,
  },
};

export const Password = {
  ...Template,
  args: {
    label: 'Senha',
    type: 'password',
    placeholder: '########',
    property: 'password',
    handleChange: handlePassword,
    min: 8,
    max: 50,
  },
};

export const ConfirmPassword = {
  render: () => <InputPasswordMock />,
};
