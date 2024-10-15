import { AppDispatch } from 'app/store.ts'
import { decksApi } from 'features/decks/decksApi.ts'
import { addDecksAC, setDecksAC } from 'features/decks/reducers/decksReducer.ts'
import { AddDeckParamsProps } from 'common/types/DeckResponseProps.ts'
import { setErrorAC, setStatusAC } from 'features/decks/reducers/appReducer.ts'

export const getDecksTC = () =>
  async (dispatch: AppDispatch) => {
  try {
    const response = await decksApi.getDecks()
    if (response.data.items.length) {
      dispatch(setStatusAC("loading"))
      dispatch(setDecksAC(response.data.items))
      dispatch(setStatusAC("succeeded"))
    }
  } catch (error) {
    dispatch(setStatusAC("failed"))
    dispatch(setErrorAC("some error occurred"))
  }
}
export const AddDeckTC = (params: AddDeckParamsProps) =>
  async (dispatch: AppDispatch) => {
  try {
    const response = await decksApi.addDeck(params)
    if (response.data) {
      dispatch(setStatusAC("loading"))
      dispatch(addDecksAC(response.data))
      dispatch(setStatusAC("succeeded"))
    }
  } catch (error) {
    dispatch(setStatusAC("failed"))
    dispatch(setErrorAC("some error occurred"))
  }
}
