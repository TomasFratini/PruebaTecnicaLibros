import { useContext } from 'react'
import { FavoriteContext } from '../Context/FavoriteProvider'

export function Books () {
  const { addFavorite, favorites, removeFavorite, library } = useContext(FavoriteContext)

  const checkBookInFavorites = book => {
    return favorites.some(item => item.book.ISBN === book.book.ISBN)
  }

  return (
    <div>
      <ul className='books'>
        {library.map((book) => {
          const isFavorite = checkBookInFavorites(book)
          return (
            <ul style={{ opacity: isFavorite ? '0.1' : null }} key={book.book.ISBN}>
              <div>
                <strong>{book.book.title}</strong> - {book.book.genre}
              </div>
              <img src={book.book.cover} alt={book.book.title} />
              <div>
                <button onClick={() => {
                  isFavorite
                    ? removeFavorite(book)
                    : addFavorite(book)
                }}
                >
                  {isFavorite ? 'Borrar de favoritos' : 'Agregar a favoritos'}
                </button>
              </div>
            </ul>

          )
        })}
      </ul>
    </div>
  )
}
