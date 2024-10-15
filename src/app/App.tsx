import './App.css'
import { Decks } from '../features/decks/Decks.tsx'
import { LinearLoader } from 'common/components/Loader/LinearLoader.tsx'
import { useEffect } from 'react'
import { decksApi } from 'features/decks/decksApi.ts'
import { useAppDispatch, useAppSelector } from 'app/store.ts'
import { selectStatus } from 'features/decks/decksSelectors.ts'

export const App = () => {
  const { status } = useAppSelector(selectStatus)

  return (
    <div>
      {status == "loading" && <LinearLoader />}
      <Decks />
    </div>
  )
}
