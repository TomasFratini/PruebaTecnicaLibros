import { useContext } from 'react'
import { Link } from 'react-router'
import { FavoriteContext } from '../Context/FavoriteProvider'

export function NavBar ({ books }) {
  const { favorites } = useContext(FavoriteContext)
  return (
    <header className='page'>
      <h1>Busca y guarda tu libro favorito</h1>
      <button><Link to='/'>Lista disponible ({books.length - favorites.length})</Link></button>
      <button>
        <Link to='/favorites'>Favoritos ({favorites.length})</Link>
      </button>

    </header>

  )
}
