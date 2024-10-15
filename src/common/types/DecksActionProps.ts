import { addDecksAC, deleteDeckAC, setDecksAC, updateDeckAC } from 'features/decks/reducers/decksReducer.ts'

type SetDecksACProps = ReturnType<typeof setDecksAC>
type AddDecksACProps = ReturnType<typeof addDecksAC>
type DeleteDeckACProps = ReturnType<typeof deleteDeckAC>
type UpdateDeckACProps = ReturnType<typeof updateDeckAC>
export type DecksActions = SetDecksACProps | AddDecksACProps | DeleteDeckACProps | UpdateDeckACProps
