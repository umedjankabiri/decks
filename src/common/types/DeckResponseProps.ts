export type DeckResponseProps = {
  items: DeckProps[],
  pagination: PaginationProps
}
type AuthorProps = {
  id: string;
  name: string;
}
type PaginationProps = {
  currentPage: number;
  itemsPerPage: number;
  totalPages: number;
  totalItems: number;
}
export type DeckProps = {
  id: string;
  userId: string;
  isFavorite: boolean;
  author: AuthorProps,
  name: string;
  isPrivate: boolean;
  cover: string;
  created: string;
  updated: string;
  cardsCount: number;
}

export type AddDeckParamsProps = {
  name: string
}
export type UpdateDeckParamsProps = {
  id: string;
  name: string;
}
