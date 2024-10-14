import { DeckProps } from 'features/decks/types/DeckResponseProps.ts'
import { DecksActions } from 'features/decks/types/DecksActionProps.ts'
import { DeckStateProps } from 'features/decks/types/DeckStateProps.ts'

const initialState: DeckStateProps = {
  decks: [] as DeckProps[], // todo: add type
  searchParams: {
    name: '',
  },
}

export const decksReducer = (state: DeckStateProps = initialState, action: DecksActions): DeckStateProps => {
  switch (action.type) {
    case 'SET_DECKS':
      return {
        ...state,
        decks: action.payload.decks
      }
    default:
      return state
  }
}

export const setDecksAC = (decks: DeckProps[]) => ({ type: 'SET_DECKS', payload: { decks: decks } } as const)
