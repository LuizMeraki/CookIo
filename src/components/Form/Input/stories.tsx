import { Meta, StoryObj } from '@storybook/react';

import { InputMock } from './mock';

import Input from '.';

import {
  handleLength,
  handleEmail,
  handleName,
  handlePassword,
} from '~/helpers/handleChange';

type StoryType = StoryObj<typeof Input>;

export default {
  title: 'Components/Input',
  component: Input,
  args: {
    label: 'Nome da Receita',
    type: 'text',
    placeholder: 'nomeie sua deliciosa receita',
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
    stateType: 'recipeName',
    actionType: 'RECIPE_NAME',
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
    stateType: 'username',
    actionType: 'USERNAME',
    handleChange: handleName,
    min: 2,
    max: 50,
  },
};

export const Email = {
  ...Template,
  args: {
    label: 'E-mail',
    placeholder: 'exemplo@gmail.com',
    stateType: 'email',
    actionType: 'EMAIL',
    handleChange: handleEmail,
  },
};

export const Password = {
  ...Template,
  args: {
    label: 'Senha',
    placeholder: '########',
    stateType: 'password',
    actionType: 'PASSWORD',
    handleChange: handlePassword,
    min: 8,
    max: 50,
  },
};
