import { useContext } from 'react'
import { FilterContext } from '../Context/filters'

export function useFilters () {
  const { filters, setFilters } = useContext(FilterContext)

  const filterBooks = (books) => {
    return books.filter(book => {
      return (
        book.book.pages >= filters.minPage &&
        (
          filters.genre === 'all' ||
          book.book.genre === filters.genre
        )
      )
    })
  }

  return { filters, setFilters, filterBooks }
}
