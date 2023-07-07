import { ReducerStateType } from '~/types/Form';

export function handleButtonEnable(state: ReducerStateType, isLoading: boolean) {
  const inputValues = Object.values(state);

  const isThereError = inputValues.some(
    (inputValue) => typeof inputValue.error === 'string'
  );
  const isInputFilled = !inputValues.every((input) => input.value.length > 0);

  return isThereError || isLoading || isInputFilled;
}
