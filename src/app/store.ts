import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import { thunk, ThunkDispatch } from 'redux-thunk'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { decksReducer } from 'features/decks/reducers/decksReducer.ts'
import { DecksActions } from 'common/types/DecksActionProps.ts'
import { statusReducer } from 'features/decks/reducers/statusReducer.ts'
import { StatusActions } from 'common/types/StatusActionProps.ts'

const rootReducer = combineReducers({
  decksReducer,
  statusReducer
})

// @ts-ignore
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export type AppRootState = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<AppRootState, unknown, AppActions>
export type AppActions = DecksActions | StatusActions

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector
