import { createContext, useState } from 'react'

export const FavoriteContext = createContext()

export function FavoriteProvider ({ children }) {
  const [favorites, setFavorites] = useState([])

  const addFavorite = book => {
    const bookInFavorites = favorites.findIndex(b => b.book.ISBN === book.book.ISBN)

    if (bookInFavorites >= 0) {
      const newList = structuredClone(favorites)
      newList[bookInFavorites].quantity += 1
      return setFavorites(newList)
    }

    setFavorites(prevState => ([
      ...prevState,
      { ...book, quantity: 1 }
    ]))
  }

  const removeFavorite = book => {
    setFavorites(prevState => prevState.filter(b => b.book.ISBN !== book.book.ISBN))
  }
  return (
    <FavoriteContext.Provider value={{
      favorites,
      addFavorite,
      removeFavorite

    }}
    >
      {children}
    </FavoriteContext.Provider>

  )
}
