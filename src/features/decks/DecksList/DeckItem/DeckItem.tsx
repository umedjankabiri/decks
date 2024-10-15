import s from './DeckItem.module.css'
import { DeckProps } from 'common/types/DeckResponseProps.ts'
import { useAppDispatch } from 'app/store.ts'
import { deleteDeckTC, updateDeckTC } from 'features/decks/deckThunks.ts'
import { useState } from 'react'

const TEST_ACC_NAME = 'Nik-Kik-Shpink'

export const DeckItem = ({ deck }: { deck: DeckProps }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const isTestingDeck = deck.author.name === TEST_ACC_NAME
  const dispatch = useAppDispatch()

  const onClickDeleteHandler = () => {
    setIsLoading(true)
    dispatch(deleteDeckTC(deck.id)).finally(()=> {
      setIsLoading(false)
    })
  }
  const onClickUpdateHandler = () => {
    setIsLoading(true)
    dispatch(updateDeckTC({id: deck.id, name: `Updated name`})).finally(()=> {
      setIsLoading(false)
    })
  }

  return (
    <li className={s.item}>
      <h3 className={s.title}>
        {deck.name}
        {isTestingDeck && '✨'}
      </h3>
      <p className={s.characteristic}>
        <b>Author:</b> {deck.author.name}
      </p>
      <p className={s.characteristic}>
        <b>Created:</b> {new Date(deck.created).toLocaleString('ru-Ru')}
      </p>
      <p className={s.characteristic}>
        <b>Updated:</b> {new Date(deck.updated).toLocaleString('ru-Ru')}
      </p>

      {isTestingDeck && (
        <div className={s.buttonBox}>
          <button disabled={isLoading} onClick={onClickUpdateHandler}>update</button>
          <button disabled={isLoading} onClick={onClickDeleteHandler}>delete</button>
        </div>
      )}
    </li>
  )
}
