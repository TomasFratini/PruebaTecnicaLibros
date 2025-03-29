import './App.css'
import { library } from './data/libros.json'
import { Books } from './components/Books.jsx'
import { FavoriteProvider } from './Context/FavoriteProvider.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { NavBar } from './components/NavBar.jsx'
import { ListFavorites } from './components/ListFavorites.jsx'

function App () {
  return (
    <FavoriteProvider>
      <BrowserRouter className='page'>
        <NavBar books={library} />
        <Routes>
          <Route path='/' element={<Books books={library} />} />
          <Route path='/favorites' element={<ListFavorites />} />∫
        </Routes>
      </BrowserRouter>
    </FavoriteProvider>
  )
}

export default App
