import { useContext } from 'react'
import { FavoriteContext } from '../Context/FavoriteProvider'

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
            <ul key={book.book.ISBN}>
              <div>
                <strong>{book.book.title}</strong> - {book.book.genre}
              </div>
              <div>
                <p>{book.book.pages} Pages</p>
              </div>
              <img src={book.book.cover} alt={book.book.title} />
              <div>
                <button onClick={() => {
                  isFavorite
                    ? removeFavorite(book)
                    : addFavorite(book)
                }}
                >
                  {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                </button>
              </div>
            </ul>

          )
        })}
      </ul>
    </div>
  )
}
