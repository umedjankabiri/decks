import { addDecksAC, setDecksAC } from 'features/decks/reducers/decksReducer.ts'

type SetDecksACProps = ReturnType<typeof setDecksAC>
type AddDecksACProps = ReturnType<typeof addDecksAC>
export type DecksActions = SetDecksACProps | AddDecksACProps
