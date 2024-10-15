import { AppRootState } from 'app/store.ts'
import { DeckStateProps } from 'common/types/DeckStateProps.ts'

export const selectDecks = (state: AppRootState): DeckStateProps => state.decksReducer
