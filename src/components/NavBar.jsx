import { useContext } from 'react'
import { Link } from 'react-router'
import { FavoriteContext } from '../Context/FavoriteProvider'

export function NavBar () {
  const { favorites, library } = useContext(FavoriteContext)
  return (
    <header className='page'>
      <h1>Busca y guarda tu libro favorito</h1>
      <button><Link to='/'>Lista disponible ({library.length - favorites.length})</Link></button>
      <button>
        <Link to='/favorites'>Favoritos ({favorites.length})</Link>
      </button>

    </header>

  )
}
