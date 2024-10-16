import { AppDispatch } from 'app/store.ts'
import { setErrorAC, setStatusAC } from 'features/decks/reducers/statusReducer.ts'
import { isAxiosError } from 'axios'
import { ServerError } from 'common/types/DeckResponseProps.ts'

export const handleError = (error: unknown, dispatch: AppDispatch)=> {
  let errorMessage: string

  dispatch(setStatusAC('failed'))

  if (isAxiosError<ServerError>(error)) {
    errorMessage = error.response ? error.response.data.errorMessages[0].message : error.message
  } else {
    errorMessage = (error as Error).message
  }
  dispatch(setErrorAC(errorMessage))
}
