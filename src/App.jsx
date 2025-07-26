import { Routes, Route, Link } from 'react-router';
import Pokedex from './pages/Pokedex';
import Pokemon from './pages/Pokemon';


function App() {
  return (
    <>
      <header>
        <h1>Pokedex</h1>
      </header>
      <main>
        <Routes>
          <Route path='/' element={(<Pokedex />)} />
          <Route path="/pokelist/:pokemonId" element={(<Pokemon/>)} />
        </Routes>
      </main>
      <footer>
        Copy 2025
      </footer>
    </>
  )
}

export default App
