import { ReducerActionType, ReducerStateType } from '~/types/Form';

export function reducer(state: ReducerStateType, action: ReducerActionType) {
  const property = action.property;
  const value = action.payload.value;
  const error = action.payload.error;

  return { ...state, [property]: { value, error } };
}
