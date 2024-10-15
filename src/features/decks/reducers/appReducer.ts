import { RequestStatusType, StatusStateProps } from 'common/types/StatusStateProps.ts'

const initialState: StatusStateProps = {
  status: 'idle' as RequestStatusType,
  error: null
}

export const appReducer = (state: StatusStateProps = initialState, action: ActionsType): StatusStateProps => {
  switch (action.type) {
    default:
      return state
  }
}

export const setStatusAC = (status: RequestStatusType) =>
  ({type: "SET_STATUS", payload: status} as const)
export const setErrorAC = (error: string | null) =>
  ({type: "SET_ERROR", payload: error} as const)

type ActionsType = any
