import { FormEvent } from 'react';

import { AuthParamsType, DispatchType, ReducerStateType } from '~/types/Form';

export function handleSubmit(
  e: FormEvent,
  state: ReducerStateType,
  auth: AuthParamsType,
  dispatch: DispatchType
) {
  e.preventDefault();

  const data = {
    email: state.email!.value,
    password: state.password!.value,
  };

  auth('/auth', data, dispatch);
}
