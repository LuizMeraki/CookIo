import { useReducer } from 'react';

import { ReducerActionType } from '~/@types/form';

import { validateName } from '~/helpers/validations';

import Input from '.';

type InitialValueType = { username: { value: string, error: string | null } }

const initialValue: InitialValueType = { username: { value: '', error: null } };

function reducer(state: InitialValueType, action: ReducerActionType) {
  const value = action.payload.value;
  const error = action.payload.error;

  switch (action.type) {
    case 'USERNAME':
      return { ...state, username: { value, error } };
    default:
      return state;
  }
}

function InputInstance() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <Input
      label="Nome"
      type="text"
      placeholder="seu nome"
      error={state.username.error}
      state={state.username.value}
      onChange={(e) => validateName(e, dispatch, 'USERNAME', 2, 50)}
    />
  );
}

describe('Input', () => {
  it('Should mount', () => {
    cy.mount(<InputInstance />);
  });
});
