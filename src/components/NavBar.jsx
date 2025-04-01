import { useContext } from 'react'
import { Link } from 'react-router'
import { FavoriteContext } from '../Context/favorite'
import { Filters } from './Filters'

export function NavBar () {
  const { favorites, library } = useContext(FavoriteContext)
  return (
    <header className='page'>
      <h1>Busca y guarda tu libro favorito</h1>
      <Link className='button' to='/'>Lista disponible ({library.length - favorites.length})</Link>

      <Link className='button' to='/favorites'>Favoritos ({favorites.length})</Link>

      <Filters />

    </header>

  )
}
