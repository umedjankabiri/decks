import axios from 'axios'
import { DeckResponseProps } from 'features/decks/types/DeckResponseProps.ts'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksApi = {
  getDecks (){
    return instance.get<DeckResponseProps>('/v2/decks')
  }
}
