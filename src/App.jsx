import './App.css'
import { library } from './data/libros.json'
import { Books } from './components/Books.jsx'
import { Favorites } from './components/Favorites.jsx'
import { FavoriteProvider } from './Context/FavoriteProvider.jsx'

function App () {
  return (
    <div className='page'>
      <header>
        <h1>Buscador de libros</h1>
      </header>
      <FavoriteProvider>
        <Books books={library} />
        <Favorites books={library} />

      </FavoriteProvider>

    </div>
  )
}

export default App
