import { library } from './data/libros.json'
import './App.css'
import { Books } from './components/Books.jsx'
import { FavoriteProvider } from './Context/favorite.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { NavBar } from './components/NavBar.jsx'
import { ListFavorites } from './components/ListFavorites.jsx'
import { useFilters } from './hooks/useFilters.js'

function App () {
  const { filterBooks } = useFilters()

  const filteredBooks = filterBooks(library)
  return (
    <FavoriteProvider>
      <BrowserRouter className='page'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Books books={filteredBooks} />} />
          <Route path='/favorites' element={<ListFavorites />} />∫
        </Routes>
      </BrowserRouter>
    </FavoriteProvider>
  )
}

export default App
