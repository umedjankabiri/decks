import s from './DecksList.module.css'
import { DeckItem } from 'features/decks/DecksList/DeckItem/DeckItem.tsx'
import { useGetDecks } from 'common/hooks/useGetDecks.ts'

export const DecksList = () => {
  const {decks} = useGetDecks()

  return (
    <ul className={s.list}>
      {decks.map((deck) => (
        <DeckItem key={deck.id} deck={deck} />
      ))}
    </ul>
  )
}
