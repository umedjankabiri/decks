import { DeckProps } from 'common/types/DeckResponseProps.ts'

export type DeckStateProps = {
  decks: DeckProps[],
  searchParams: {
    name: string,
  }
}
