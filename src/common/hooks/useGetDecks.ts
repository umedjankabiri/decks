import { useAppDispatch, useAppSelector } from 'app/store.ts'
import { selectDecks } from 'features/decks/decksSelectors.ts'
import { useEffect } from 'react'
import { getDecksTC } from 'features/decks/deckThunks.ts'

export const useGetDecks = () => {
  const { decks } = useAppSelector(selectDecks)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getDecksTC())
  }, [dispatch])

  return { decks }
}
