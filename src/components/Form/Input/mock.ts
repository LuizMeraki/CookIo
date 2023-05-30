import { InitialValueType, ReducerActionType } from '~/@types/form';

export function reducerMock(state: InitialValueType, action: ReducerActionType) {
  const value = action.payload.value;
  const error = action.payload.error;

  switch (action.type) {
    case 'RECIPE_NAME':
      return { ...state, recipeName: { value, error } };
    case 'USERNAME':
      return { ...state, username: { value, error } };
    case 'EMAIL':
      return { ...state, email: { value, error } };
    case 'PASSWORD':
      return { ...state, password: { value, error } };
    default:
      return state;
  }
}

export const initialValueMock: InitialValueType = {
  recipeName: { value: '', error: null },
  username: { value: '', error: null },
  email: { value: '', error: null },
  password: { value: '', error: null },
};
