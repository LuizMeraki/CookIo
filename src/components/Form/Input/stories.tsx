import { Meta, StoryObj } from '@storybook/react';
import { useReducer } from 'react';
import { validateLength } from '~/helpers/validations';
import { ActionType } from '~/@types/form';
import Input from '.';

export default {
  title: 'Form/Input',
  component: Input,
  args: {
    type: 'text',
    placeholder: 'seu nome',
  } as Meta<typeof Input>,
};

const initialValue = {
  email: { value: '', error: null },
  password: { value: '', error: null },
};

function reducer(state: any, action: ActionType) {
  switch (action.actionType) {
    case 'email':
      return { ...state, email: { ...state.email, [action.propKey]: action.payload } };
    case 'password':
      return {
        ...state,
        password: { ...state.password, [action.propKey]: action.payload },
      };
    default:
      return state;
  }
}

function InputWithHooks(args: any) {
  const [ state, dispatch ] = useReducer(reducer, initialValue);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div>
        <Input
          {...args}
          label="E-mail"
          actionType="email"
          state={state.email.value}
          dispatch={dispatch}
          error={state.email.error}
          onKeyUp={() => validateLength(dispatch, 'email', state.email.value, 2, 10)}
        />
      </div>

      <div>
        <Input
          {...args}
          label="Senha"
          actionType="password"
          state={state.password.value}
          dispatch={dispatch}
          error={state.password.error}
          onKeyUp={() =>
            validateLength(dispatch, 'password', state.password.value, 8, 30)
          }
        />
      </div>
    </div>
  );
}

export const Default: StoryObj<typeof Input> = {
  render: (args) => <InputWithHooks {...args} />,
};
