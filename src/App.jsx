import { useEffect } from 'react'
import './App.css'
import { Books } from './components/Books'
import { useBooks } from './hooks/useBooks'

function App() {

  const { books, loading, ShowBooks } = useBooks()

  useEffect(() => {
    ShowBooks()
  }, [])
  

  return (
    <div className='page'>
      <header>
        <h1>Buscador de libros</h1>
        <h2>Libros disponibles</h2>
        <select name="123" id="123">dasd</select>
      </header>
        <div >
          {loading ? <p>Cargando...</p> : <Books books={books}/>}
          
        </div>
    </div>
  )
}

export default App