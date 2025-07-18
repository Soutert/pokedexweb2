import { Routes, Route, Link } from 'react-router';
import Home from './pages/Home';
import PokeList from "./components/pokelist/PokeList"

function App() {
  return (
    <>
      <header>
        <h1>Pokedex</h1>
        <nav>
          <ul>
            <li><Link to="/">Carusel</Link></li>
            <li><Link to="/pokelist">Pokedex</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/' element={(<Home />)} />
          <Route path="/pokelist" element={(<PokeList />)} />
        </Routes>
      </main>
      <footer>
        Copy 2025
      </footer>
    </>
  )
}

export default App
