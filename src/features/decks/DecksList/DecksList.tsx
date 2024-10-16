import s from './DecksList.module.css'
import { DeckItem } from 'features/decks/DecksList/DeckItem/DeckItem.tsx'
import { useGetDecks } from 'common/hooks/useGetDecks.ts'
import { DeckItemSkeleton } from 'features/decks/DecksList/DeckItem/DeckItemSkeleton.tsx'

export const DecksList = () => {
  const { decks, isLoading } = useGetDecks()

  return (
      <ul className={s.list}>
        {!isLoading && decks.length === 0 && <DeckItemSkeleton count={decks.length} />}
        {decks.map((deck) => (
          <DeckItem key={deck.id} deck={deck} />
        ))}
      </ul>
  )
}
