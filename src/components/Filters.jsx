import { useId } from 'react'
import { useFilters } from '../hooks/useFilters'

export function Filters () {
  const { filters, setFilters } = useFilters()

  const minPageFilterId = useId()
  const categoryFilterId = useId()

  const handleChangemMinPage = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPage: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      genre: event.target.value
    }))
  }

  return (

    <section className='filters'>
      <div className='filters'>
        <label htmlFor={minPageFilterId}> Cantida de paginas: </label>
        <input
          type='range'
          id={minPageFilterId}
          min='0'
          max='1200'
          onChange={handleChangemMinPage}
          value={filters.minPage}
        />
        <span>{filters.minPage}</span>
      </div>

      <div className='filters'>
        <label htmlFor={categoryFilterId}>Categorías: </label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>Todas</option>
          <option value='Fantasía'>Fantasía</option>
          <option value='Ciencia ficción'>Ciencia ficción</option>
          <option value='Zombies'>Zombies</option>
          <option value='Terror'>Terror</option>

        </select>
      </div>
    </section>
  )
}
