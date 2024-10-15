import { RequestStatusType, StatusStateProps } from 'common/types/StatusStateProps.ts'
import { StatusActions } from 'common/types/StatusActionProps.ts'

const initialState: StatusStateProps = {
  status: 'idle' as RequestStatusType,
  error: null
}

export const statusReducer = (state: StatusStateProps = initialState, action: StatusActions): StatusStateProps => {
  switch (action.type) {
    case 'SET_STATUS':
      return {
        ...state,
        status: action.payload.status
      }
      case 'SET_ERROR':
        return {
          ...state,
          error: action.payload.error
        }
    default:
      return state
  }
}

export const setStatusAC = (status: RequestStatusType) => 
  ({ type: 'SET_STATUS', payload: { status: status } }) as const
export const setErrorAC = (error: string | null) =>
  ({ type: 'SET_ERROR', payload: { error: error } }) as const
