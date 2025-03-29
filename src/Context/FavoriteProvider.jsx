import { createContext, useState } from 'react'
import { library } from '../data/libros.json'

export const FavoriteContext = createContext()

export function updateLocalStorage (item) {
  window.localStorage.setItem('favorites', JSON.stringify(item))
}

export function FavoriteProvider ({ children }) {
  const FavInitialState = JSON.parse(window.localStorage.getItem('favorites')) || []

  const [favorites, setFavorites] = useState(FavInitialState)

  const addFavorite = book => {
    const bookInFavorites = favorites.findIndex(b => b.book.ISBN === book.book.ISBN)

    if (bookInFavorites >= 0) {
      const newList = structuredClone(favorites)
      newList[bookInFavorites].quantity += 1
      updateLocalStorage(newList)
      setFavorites(newList)
    } else {
      const newList = [
        ...favorites,
        { ...book, quantity: 1 }
      ]
      updateLocalStorage(newList)
      setFavorites(newList)
    }
  }

  const removeFavorite = book => {
    const newList = favorites.filter(b => b.book.ISBN !== book.book.ISBN)
    updateLocalStorage(newList)
    setFavorites(newList)
  }
  return (
    <FavoriteContext.Provider value={{
      favorites,
      addFavorite,
      removeFavorite,
      library

    }}
    >
      {children}
    </FavoriteContext.Provider>

  )
}
