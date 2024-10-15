import { setErrorAC, setStatusAC } from 'features/decks/reducers/appReducer.ts'

type SetStatusACProps = ReturnType<typeof setStatusAC>
type SetSetErrorACProps = ReturnType<typeof setErrorAC>
export type StatusActions = SetStatusACProps | SetSetErrorACProps
