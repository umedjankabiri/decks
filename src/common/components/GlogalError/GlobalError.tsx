import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { useAppDispatch, useAppSelector } from 'app/store.ts'
import { selectError } from 'features/decks/decksSelectors.ts'
import { setErrorAC } from 'features/decks/reducers/statusReducer.ts'

export const GlobalError = () => {
  const errorMessage = useAppSelector(selectError)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage)
      dispatch(setErrorAC(null))
    }
  }, [errorMessage])

  return <ToastContainer theme="dark" autoClose={3000} />
}
