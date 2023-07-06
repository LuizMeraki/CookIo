import { ReducerStateType } from '~/types/Form';

export function handleButtonEnable(state: ReducerStateType, isLoading: boolean) {
  const inputValues = Object.values(state);
  const isThereError = inputValues.some(
    (inputValue) => typeof inputValue.error === 'string'
  );

  return isThereError || isLoading;
}
