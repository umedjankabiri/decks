import { DeckProps } from 'common/types/DeckResponseProps.ts'
import { DecksActions } from 'common/types/DecksActionProps.ts'
import { DeckStateProps } from 'common/types/DeckStateProps.ts'

const initialState: DeckStateProps = {
  decks: [],
  searchParams: {
    name: '',
  },
}

export const decksReducer = (state: DeckStateProps = initialState, action: DecksActions): DeckStateProps => {
  switch (action.type) {
    case 'SET_DECKS':
      return {
        ...state,
        decks: action.payload.decks,
      }
    case 'ADD_DECKS':
      return {
        ...state,
        decks: [action.payload.decks, ...state.decks],
      }
    case 'DELETE_DECK':
      return {
        ...state,
        decks: state.decks.filter((deck) => deck.id !== action.payload.id),
      }
    case 'UPDATE_DECK':
      return {
        ...state,
        decks: state.decks.map((deck) =>
          (deck.id === action.payload.deck.id ? {...deck, name: action.payload.deck.name} : deck)),
      }
    default:
      return state
  }
}

export const setDecksAC = (decks: DeckProps[]) => ({ type: 'SET_DECKS', payload: { decks: decks } }) as const
export const addDecksAC = (decks: DeckProps) => ({ type: 'ADD_DECKS', payload: { decks: decks } }) as const
export const deleteDeckAC = (id: string) => ({ type: 'DELETE_DECK', payload: { id: id } }) as const
export const updateDeckAC = (deck: DeckProps) => ({ type: 'UPDATE_DECK', payload: { deck: deck } }) as const
