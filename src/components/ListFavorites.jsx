import { useContext } from 'react'
import { Favorites } from './Favorites'
import { FavoriteContext } from '../Context/FavoriteProvider'

export const ListFavorites = () => {
  const { favorites } = useContext(FavoriteContext)
  return (
    <div className='page'>
      {
        favorites.length <= 0
          ? <h2>No hay libros guardados</h2>
          : <Favorites />
      }
    </div>
  )
}
