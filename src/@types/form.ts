import { Dispatch } from 'react'

export type ActionType = {
  actionType: string
  propKey: string;
  payload: string | null
}

export type ReducerType = Dispatch<ActionType>
