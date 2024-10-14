import { DeckProps } from 'features/decks/types/DeckResponseProps.ts'

export type DeckStateProps = {
  decks: DeckProps[],
  searchParams: {
    name: string,
  }
}
