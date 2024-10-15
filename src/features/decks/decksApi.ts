import axios from 'axios'
import {
  AddDeckParamsProps,
  DeckProps,
  DeckResponseProps,
  UpdateDeckParamsProps,
} from 'common/types/DeckResponseProps.ts'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksApi = {
  getDecks (){
    return instance.get<DeckResponseProps>(`/v2/decks`)
  },
  addDeck (params: AddDeckParamsProps) {
    return instance.post<DeckProps>(`/v1/decks`, params)
  },
  deleteDeck (id: string) {
    return instance.delete<DeckProps>(`/v1/decks/${id}`)
  },
  updateDeck ({id, name}: UpdateDeckParamsProps) {
    return instance.patch<DeckProps>(`/v1/decks/${id}`, { name })
  }
}
