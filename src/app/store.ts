import { combineReducers, legacy_createStore } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { decksReducer } from '../features/decks/decks-reducer.ts'
import { DecksActions } from 'features/decks/types/DecksActionProps.ts'

const rootReducer = combineReducers({
  decksReducer,
})

export const store = legacy_createStore(rootReducer)

export type AppRootState = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<AppRootState, unknown, AppActions>
export type AppActions = DecksActions

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector.withTypes<AppRootState>()
