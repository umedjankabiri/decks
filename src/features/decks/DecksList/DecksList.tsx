import s from './DecksList.module.css'
import { useEffect } from 'react'
import { decksApi } from 'features/decks/decks-api.ts'
import { useAppDispatch, useAppSelector } from 'app/store.ts'
import { selectDecks } from 'features/decks/decks-selectors.ts'
import { DeckItem } from 'features/decks/DecksList/DeckItem/DeckItem.tsx'
import { setDecksAC } from 'features/decks/decks-reducer.ts'

export const DecksList = () => {
  const { decks } = useAppSelector(selectDecks)
  const dispatch = useAppDispatch()

  if (!decks) return null
  useEffect(() => {
    decksApi.getDecks().then((response) => {
      if (!response.data.items) return;
      dispatch(setDecksAC(response.data.items))
    })
  }, [dispatch])

  return (
    <ul className={s.list}>
      {decks.map((deck) => (
        <DeckItem key={deck.id} deck={deck} />
      ))}
    </ul>
  )
}
