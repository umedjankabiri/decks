import './App.css'
import { Decks } from '../features/decks/Decks.tsx'
import { LinearLoader } from 'common/components/Loader/LinearLoader.tsx'
import { useAppSelector } from 'app/store.ts'
import { selectStatus } from 'features/decks/decksSelectors.ts'
import { GlobalError } from 'common/components/GlogalError/GlobalError.tsx'

export const App = () => {
  const { status } = useAppSelector(selectStatus)

  return (
    <div>
      {status == 'loading' && <LinearLoader />}
      <Decks />
      <GlobalError />
    </div>
  )
}
