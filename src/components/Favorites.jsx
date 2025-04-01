import { useContext } from 'react'
import { FavoriteContext } from '../Context/favorite'
import { useFilters } from '../hooks/useFilters'

export function Favorites () {
  const { favorites, removeFavorite } = useContext(FavoriteContext)

  const { filterBooks } = useFilters()

  const favoritosFilters = filterBooks(favorites)

  return (
    <div>
      <ul className='books'>
        {favoritosFilters.map((book) => {
          return (
            <ul key={book.book.ISBN}>
              <div>
                <strong>{book.book.title}</strong> - {book.book.genre}
              </div>
              <img className='img' src={book.book.cover} alt={book.book.title} />
              <div>

                <button onClick={() => removeFavorite(book)}> Remover de favoritos </button>
              </div>
            </ul>
          )
        })}
      </ul>

    </div>
  )
}
