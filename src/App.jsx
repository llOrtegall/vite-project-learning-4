import './App.css'
import { Movies } from './components/Movies.jsx';
import { useMovies } from "./hooks/useMovies";
import { useEffect, useState } from 'react';

function useSearch() {
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null)

  useEffect(() => {
    if (search === '') {
      setError('No se puede buscar una pelicula vacía')
      return
    }
    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con solo números')
      return
    }
    if (search.length < 3) {
      setError('No se puede buscar una pelicula menor a 3 caracteres')
      return
    }
    setError(null)
  }, [search])
  return { search, setSearch, error }
}

function App() {
  const { movies } = useMovies()
  const { search, setSearch, error } = useSearch()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ search })
  }
  const handleChange = (event) => {
    setSearch(event.target.value)
  }


  return (
    <div className='page'>
      <header>
        <h1>Bucador De Peliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input style={{
            border: '1px solid transparent',
            borderColor: error ? 'red' : 'transparent'
          }} onChange={handleChange} value={search} name='query' placeholder="Avengers, Matrix, Nemo..." />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div >
  )
}

export default App
