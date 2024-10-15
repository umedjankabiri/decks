import { AppDispatch } from 'app/store.ts'
import { decksApi } from 'features/decks/decks-api.ts'
import { addDecksAC, setDecksAC } from 'features/decks/reducers/decks-reducer.ts'
import { AddDeckParamsProps } from 'common/types/DeckResponseProps.ts'

export const getDecksTC = () => (dispatch: AppDispatch) => {
  decksApi.getDecks().then(response => {
    dispatch(setDecksAC(response.data.items))
  })
}
export const AddDeckTC = (params: AddDeckParamsProps) =>
  async (dispatch: AppDispatch) => {
  decksApi.addDeck(params).then(response => {
    dispatch(addDecksAC(response.data))
  })
}
