import {useEffect} from 'react'

export const useTitle = (title) => {
    useEffect(() =>
    {
        document.title = `${title} | G_headphones`
    }, [title])
  return (
   null
  )
}
