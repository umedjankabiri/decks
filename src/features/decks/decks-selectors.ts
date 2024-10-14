import { AppRootState } from 'app/store.ts'
import { DeckStateProps } from 'features/decks/types/deckStateProps.ts'

export const selectDecks = (state: AppRootState): DeckStateProps => state.decksReducer