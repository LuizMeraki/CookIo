import { Dispatch } from 'react';

export type ActionType = 'RECIPE_NAME' | 'USERNAME' | 'EMAIL' | 'PASSWORD'

export type ReducerActionType = {
  type: ActionType
  payload: { value: string, error: string | null }
}

export type DispatchType = Dispatch<ReducerActionType>
