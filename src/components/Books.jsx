import { useContext } from 'react'
import { FavoriteContext } from '../Context/favorite'

export function Books ({ books }) {
  const { addFavorite, favorites, removeFavorite } = useContext(FavoriteContext)

  const checkBookInFavorites = book => {
    return favorites.some(item => item.book.ISBN === book.book.ISBN)
  }

  return (
    <div>
      <ul className='books'>
        {books.map((book) => {
          const isFavorite = checkBookInFavorites(book)
          return (
            <ul style={{ opacity: isFavorite ? '0.1' : null }} key={book.book.ISBN}>
              <div>
                <strong>{book.book.title}</strong> - {book.book.genre}
              </div>
              <img src={book.book.cover} alt={book.book.title} />
              <span>{book.book.pages} paginas</span>
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
