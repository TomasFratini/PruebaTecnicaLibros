import { useContext } from 'react'
import { FavoriteContext } from '../Context/favorite'

export function Favorites () {
  const { favorites, removeFavorite } = useContext(FavoriteContext)

  return (
    <div>
      <ul className='books'>
        {favorites.map((book) => {
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
