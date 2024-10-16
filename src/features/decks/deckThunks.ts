import { AppDispatch } from 'app/store.ts'
import { decksApi } from 'features/decks/decksApi.ts'
import { addDecksAC, deleteDeckAC, setDecksAC, updateDeckAC } from 'features/decks/reducers/decksReducer.ts'
import { AddDeckParamsProps, UpdateDeckParamsProps } from 'common/types/DeckResponseProps.ts'
import { setStatusAC } from 'features/decks/reducers/statusReducer.ts'
import { handleError } from 'common/utils/handleError.ts'

export const getDecksTC = () => async (dispatch: AppDispatch) => {
  dispatch(setStatusAC('loading'))
  try {
    const response = await decksApi.getDecks()
    dispatch(setDecksAC(response.data.items))
    dispatch(setStatusAC('succeeded'))
  } catch (error) {
    handleError(error, dispatch)
  }
}
export const AddDeckTC = (params: AddDeckParamsProps) => async (dispatch: AppDispatch) => {
  dispatch(setStatusAC('loading'))
  try {
    const response = await decksApi.addDeck(params)
    dispatch(addDecksAC(response.data))
    dispatch(setStatusAC('succeeded'))
  } catch (error) {
    handleError(error, dispatch)
  }
}
export const deleteDeckTC = (id: string) => async (dispatch: AppDispatch) => {
  dispatch(setStatusAC('loading'))
  try {
    const response = await decksApi.deleteDeck(id)
    dispatch(deleteDeckAC(response.data.id))
    dispatch(setStatusAC('succeeded'))
  } catch (error) {
    handleError(error, dispatch)
  }
}
export const updateDeckTC = (params: UpdateDeckParamsProps) => async (dispatch: AppDispatch) => {
  dispatch(setStatusAC('loading'))
  try {
    const response = await decksApi.updateDeck(params)
    dispatch(updateDeckAC(response.data))
    dispatch(setStatusAC('succeeded'))
  } catch (error) {
    handleError(error, dispatch)
  }
}
