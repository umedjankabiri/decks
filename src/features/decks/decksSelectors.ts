import { AppRootState } from 'app/store.ts'
import { DeckStateProps } from 'common/types/DeckStateProps.ts'
import { StatusStateProps } from 'common/types/StatusStateProps.ts'

export const selectDecks = (state: AppRootState): DeckStateProps => state.decksReducer
export const selectStatus = (state: AppRootState): StatusStateProps => state.statusReducer
