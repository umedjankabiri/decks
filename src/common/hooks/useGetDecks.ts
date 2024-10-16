import { useAppDispatch, useAppSelector } from 'app/store.ts'
import { selectDecks } from 'features/decks/decksSelectors.ts'
import { useLayoutEffect, useState } from 'react'
import { getDecksTC } from 'features/decks/deckThunks.ts'

export const useGetDecks = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const { decks } = useAppSelector(selectDecks)
  const dispatch = useAppDispatch()

  useLayoutEffect(() => {
    setIsLoading(true)
    dispatch(getDecksTC()).finally(() => {
      setIsLoading(false)
    })
  }, [dispatch])

  return { decks, isLoading }
}
