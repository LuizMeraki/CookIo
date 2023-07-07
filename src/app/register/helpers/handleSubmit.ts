import { FormEvent } from 'react';

import { ReducerStateType, AuthParamsType, DispatchType } from '~/types/Form';

export function handleSubmit(
  e: FormEvent,
  state: ReducerStateType,
  auth: AuthParamsType,
  dispatch: DispatchType
) {
  e.preventDefault();

  const data = {
    name: state.username!.value,
    email: state.email!.value,
    password: state.password!.value,
  };

  auth('/user', data, dispatch);
}
