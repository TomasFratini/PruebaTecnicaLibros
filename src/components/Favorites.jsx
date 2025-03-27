import { useContext } from 'react'
import { FavoriteContext } from '../Context/FavoriteProvider'

export function Favorites () {
  const { favorites, removeFavorite } = useContext(FavoriteContext)

  return (
    <div>
      <h2>Favorites</h2>
      <ul className='books'>
        {favorites.map((book) => {
          return (
            <ul key={book.book.ISBN}>
              <div>
                <strong>{book.book.title}</strong> - {book.book.genre}
              </div>
              <div>
                <p>{book.book.pages} Pages</p>
              </div>
              <img src={book.book.cover} alt={book.book.title} />
              <button onClick={() => removeFavorite(book)}> Remover de favorito </button>
            </ul>
          )
        })}
      </ul>
    </div>
  )
}
